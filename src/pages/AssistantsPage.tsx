import { useSession } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { AssistantsList } from "@/components/assistants/AssistantsList";
import { CreateAssistantDialog } from "@/components/dashboard/CreateAssistantDialog";

const AssistantsPage = () => {
  const session = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate('/');
    }
  }, [session, navigate]);

  if (!session) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Assistants</h1>
          <CreateAssistantDialog />
        </div>
        <AssistantsList />
      </main>
    </div>
  );
};

export default AssistantsPage;