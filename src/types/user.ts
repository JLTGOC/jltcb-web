export interface User {
  id: number;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  full_name: string | null;
  email: string;
  role: string;
  address: string;
  contact_number: string;
  image_path?: string | null;
}
