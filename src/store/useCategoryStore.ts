import { create } from 'zustand';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Category } from '../types/category';

const STORAGE_KEY = 'fintrack:categories';

interface CategoryState {
  categories: Category[];

  loadCategories: () => Promise<void>;

  addCategory: (
    category: Category
  ) => Promise<void>;

  deleteCategory: (
    id: string
  ) => Promise<void>;

  updateCategory: (
    id: string,
    name: string,
    color: string
  ) => Promise<void>;
}

export const useCategoryStore =
  create<CategoryState>((set, get) => ({
    categories: [],

    loadCategories: async () => {
      const data =
        await AsyncStorage.getItem(
          STORAGE_KEY
        );

      if (data) {
        set({
          categories: JSON.parse(data),
        });
      }
    },

    addCategory: async (category) => {
      const updated = [
        ...get().categories,
        category,
      ];

      set({ categories: updated });

      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );
    },

    deleteCategory: async (id) => {
      const updated = get().categories.filter(
        (item) => item.id !== id
      );

      set({ categories: updated });

      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );
    },

    updateCategory: async (
      id,
      name,
      color
    ) => {
      const updated = get().categories.map(
        (item) =>
          item.id === id
            ? {
                ...item,
                name,
                color,
              }
            : item
      );

      set({ categories: updated });

      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );
    },
  }));