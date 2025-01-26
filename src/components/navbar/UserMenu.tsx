import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export const UserMenu = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <>
      <Link to="/pricing">
        <Button variant="ghost" className="group relative">
          Pricing
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
        </Button>
      </Link>
      <Link to="/dashboard">
        <Button variant="ghost" className="group relative">
          Dashboard
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
        </Button>
      </Link>
      <Button 
        onClick={handleSignOut}
        className="bg-white hover:bg-[#9b87f5] text-[#9b87f5] hover:text-white border border-[#9b87f5] transition-colors"
      >
        Log out
      </Button>
    </>
  );
};