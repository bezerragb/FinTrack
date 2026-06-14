export type EntryType = 'income' | 'expense';

export interface Entry {
  id: string;
  userId: string;
  title: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: string;
}