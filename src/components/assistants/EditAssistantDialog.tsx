import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Assistant } from "@/types/assistant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Edit } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  voice: z.string().optional(),
  greeting: z.string().optional(),
  company_url: z.string().url().optional().or(z.literal("")),
});

type FormData = z.infer<typeof formSchema>;

interface EditAssistantDialogProps {
  assistant: Assistant;
}

export const EditAssistantDialog = ({ assistant }: EditAssistantDialogProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: assistant.name,
      voice: assistant.voice || "",
      greeting: assistant.greeting || "",
      company_url: assistant.company_url || "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: FormData) => {
      const { error } = await supabase
        .from('assistants')
        .update(values)
        .eq('id', assistant.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assistants'] });
      toast({
        title: "Success",
        description: "Assistant updated successfully",
      });
      setOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update assistant",
        variant: "destructive",
      });
      console.error('Error updating assistant:', error);
    },
  });

  const onSubmit = (values: FormData) => {
    mutation.mutate(values);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Assistant</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="voice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Voice</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="greeting"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Greeting</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company URL</FormLabel>
                  <FormControl>
                    <Input {...field} type="url" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};