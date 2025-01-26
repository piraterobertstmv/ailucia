export interface Assistant {
  id: string;
  user_id: string;
  name: string;
  greeting?: string;
  voice?: string;
  company_url?: string;
  created_at: string;
  updated_at?: string;
}