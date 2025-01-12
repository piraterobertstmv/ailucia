import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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
  const [businessProfile, setBusinessProfile] = useState<any>(null);
  const [callStats, setCallStats] = useState<any[]>([]);
  const form = useForm<BusinessProfileFormValues>();

  useEffect(() => {
    if (!session) {
      navigate("/");
      return;
    }
    fetchBusinessProfile();
    fetchCallStats();
  }, [session]);

  const fetchBusinessProfile = async () => {
    const { data, error } = await supabase
      .from("business_profiles")
      .select("*")
      .eq("id", session?.user.id)
      .single();

    if (!error && data) {
      setBusinessProfile(data);
      form.reset(data);
    }
  };

  const fetchCallStats = async () => {
    const { data, error } = await supabase
      .from("call_statistics")
      .select("*")
      .eq("user_id", session?.user.id)
      .order("call_date", { ascending: true });

    if (!error && data) {
      setCallStats(data);
    }
  };

  const onSubmit = async (values: BusinessProfileFormValues) => {
    const updates = {
      id: session?.user.id,
      ...values
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

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid gap-8 md:grid-cols-2">
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

        <Card>
          <CardHeader>
            <CardTitle>Call Statistics</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={callStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="call_date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="calls_count" fill="#805AD5" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;