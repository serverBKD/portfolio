export interface DataTech {
  id: number;
  lang: string;
  img: string;
}

export type Title = string | null;

export interface Tasks {
  id: number;
  concept: string;
  notes: string | null;
  amount: number;
  img: string;
  completed: boolean;
  debit: boolean;
  initAt: string;
  source: string;
  createdAt: string;
  updatedAt: string;
}

export type ContactFormData = {
  fullname: string;
  email: string;
  message: string;
  source?: string;
};
