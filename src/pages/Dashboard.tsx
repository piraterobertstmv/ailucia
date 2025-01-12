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

const Dashboard = () => {
  const session = useSession();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [businessProfile, setBusinessProfile] = useState<any>(null);
  const [callStats, setCallStats] = useState<any[]>([]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const updates = {
      id: session?.user.id,
      business_name: formData.get("business_name"),
      business_description: formData.get("business_description"),
      industry: formData.get("industry"),
      website: formData.get("website"),
      phone: formData.get("phone"),
      address: formData.get("address"),
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="business_name" className="text-sm font-medium">
                  Business Name
                </label>
                <Input
                  id="business_name"
                  name="business_name"
                  defaultValue={businessProfile?.business_name || ""}
                />
              </div>
              <div>
                <label htmlFor="business_description" className="text-sm font-medium">
                  Business Description
                </label>
                <Input
                  id="business_description"
                  name="business_description"
                  defaultValue={businessProfile?.business_description || ""}
                />
              </div>
              <div>
                <label htmlFor="industry" className="text-sm font-medium">
                  Industry
                </label>
                <Input
                  id="industry"
                  name="industry"
                  defaultValue={businessProfile?.industry || ""}
                />
              </div>
              <div>
                <label htmlFor="website" className="text-sm font-medium">
                  Website
                </label>
                <Input
                  id="website"
                  name="website"
                  defaultValue={businessProfile?.website || ""}
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  defaultValue={businessProfile?.phone || ""}
                />
              </div>
              <div>
                <label htmlFor="address" className="text-sm font-medium">
                  Address
                </label>
                <Input
                  id="address"
                  name="address"
                  defaultValue={businessProfile?.address || ""}
                />
              </div>
              <Button type="submit" className="w-full">
                Save Changes
              </Button>
            </form>
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