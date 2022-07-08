export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Patient {
  id: string;
  name: string;
  birth: string;
  age: number;
  phone: string;
  address: string;
  chr_no: string;
  sex: number;
}

export interface Colunms {
  name: string;
  required?: boolean;
  label: string;
  align?: string;
  sortable?: boolean;
  field: string | ((row: any) => any);
  sort?: ((a: any, b: any, rowA: any, rowB: any) => number);
  format?: ((val: string | number) => any);
  style?: string;
  headerStyle?: string; 
}