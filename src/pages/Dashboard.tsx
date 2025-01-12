import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CallStatistics } from "@/components/dashboard/CallStatistics";

type BusinessProfileFormValues = {
  business_name: string;
  business_description: string;
  industry: string;
  website: string;
  phone: string;
  address: string;
};

const Dashboard = () => {
  const session = useSession();
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<BusinessProfileFormValues>();

  useEffect(() => {
    if (!session) {
      navigate("/");
      return;
    }
    fetchBusinessProfile();
  }, [session]);

  const fetchBusinessProfile = async () => {
    try {
      const { data, error } = await supabase
        .from("business_profiles")
        .select("*")
        .eq("id", session?.user.id)
        .maybeSingle();

      if (error) {
        console.error("Error fetching business profile:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch business profile",
        });
        return;
      }

      if (!data) {
        const { error: insertError } = await supabase
          .from("business_profiles")
          .insert([{ id: session?.user.id }]);

        if (insertError) {
          console.error("Error creating business profile:", insertError);
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to create business profile",
          });
          return;
        }

        form.reset({
          business_name: "",
          business_description: "",
          industry: "",
          website: "",
          phone: "",
          address: "",
        });
      } else {
        form.reset(data);
      }
    } catch (error) {
      console.error("Error in fetchBusinessProfile:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred",
      });
    }
  };

  const onSubmit = async (values: BusinessProfileFormValues) => {
    const updates = {
      id: session?.user.id,
      ...values,
    };

    const { error } = await supabase
      .from("business_profiles")
      .upsert(updates)
      .eq("id", session?.user.id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update business profile",
      });
    } else {
      toast({
        title: "Success",
        description: "Business profile updated successfully",
      });
      fetchBusinessProfile();
    }
  };

  if (!session) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-8">
        <CallStatistics />
        
        <Card>
          <CardHeader>
            <CardTitle>Business Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="business_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="business_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Description</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Save Changes
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;