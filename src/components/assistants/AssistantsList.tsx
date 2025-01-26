import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Assistant } from "@/types/assistant";
import { EditAssistantDialog } from "./EditAssistantDialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Trash, Edit } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const AssistantsList = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: assistants, isLoading } = useQuery({
    queryKey: ['assistants'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('assistants')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Assistant[];
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('assistants')
        .delete()
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assistants'] });
      toast({
        title: "Success",
        description: "Assistant deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete assistant",
        variant: "destructive",
      });
      console.error('Error deleting assistant:', error);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Voice</TableHead>
            <TableHead>Company URL</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assistants?.map((assistant) => (
            <TableRow key={assistant.id}>
              <TableCell>{assistant.name}</TableCell>
              <TableCell>{assistant.voice || 'Not set'}</TableCell>
              <TableCell>{assistant.company_url || 'Not set'}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <EditAssistantDialog assistant={assistant} />
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteMutation.mutate(assistant.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};