export type Package = {
  name: string;
  price: number;
  invoiceDate: string;
  status: string;
};

export type Category = {
  id?: number;
  name?: string;
  createdAt?: number;
  visibility?: boolean
 
};

export type Type = {
  id?: number;
  name?: string;
  createdAt?: number;
  visibility?: boolean
 
};

