import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entry } from '../types/finance';

const STORAGE_KEY = 'fintrack:entries';

interface FinanceState {
  entries: Entry[];
  loadEntries: () => Promise<void>;
  addEntry: (entry: Entry) => Promise<void>;
  getBalance: () => number;
  getIncome: () => number;
  getExpense: () => number;
}

export const useFinanceStore = create<FinanceState>((set, get) => ({
  entries: [],

  loadEntries: async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data) {
      set({ entries: JSON.parse(data) });
    }
  },

  addEntry: async (entry) => {
    const current = get().entries;
    const updated = [...current, entry];

    set({ entries: updated });

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );
  },

  getBalance: () => {
    const { entries } = get();

    return entries.reduce((total, item) => {
      return item.type === 'income'
        ? total + item.amount
        : total - item.amount;
    }, 0);
  },

  getIncome: () => {
  return get()
    .entries
    .filter((item) => item.type === 'income')
    .reduce((total, item) => total + item.amount, 0);
},

  getExpense: () => {
    return get()
      .entries
      .filter((item) => item.type === 'expense')
      .reduce((total, item) => total + item.amount, 0);
  },
}));  