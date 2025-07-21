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

// src/env.d.ts
interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
