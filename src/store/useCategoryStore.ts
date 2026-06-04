import { create } from 'zustand';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Category } from '../types/category';

import { useAuthStore } from './useAuthStore';

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

      const userId =
        useAuthStore.getState().user?.id;

      if (!userId) return;

      const data =
        await AsyncStorage.getItem(
          STORAGE_KEY
        );

      if (!data) {

        set({
          categories: [],
        });

        return;
      }

      const allCategories: Category[] =
        JSON.parse(data);

      const userCategories =
        allCategories.filter(
          (item) =>
            item.userId === userId
        );

      set({
        categories: userCategories,
      });
    },

    addCategory: async (category) => {

      const data =
        await AsyncStorage.getItem(
          STORAGE_KEY
        );

      const allCategories =
        data
          ? JSON.parse(data)
          : [];

      const updated = [
        ...allCategories,
        category,
      ];

      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );

      const userId =
        useAuthStore.getState().user?.id;

      set({
        categories: updated.filter(
          (item: Category) =>
            item.userId === userId
        ),
      });
    },

    deleteCategory: async (id) => {

      const data =
        await AsyncStorage.getItem(
          STORAGE_KEY
        );

      const allCategories =
        data
          ? JSON.parse(data)
          : [];

      const updated =
        allCategories.filter(
          (item: Category) =>
            item.id !== id
        );

      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );

      const userId =
        useAuthStore.getState().user?.id;

      set({
        categories: updated.filter(
          (item: Category) =>
            item.userId === userId
        ),
      });
    },

    updateCategory: async (
      id,
      name,
      color
    ) => {

      const data =
        await AsyncStorage.getItem(
          STORAGE_KEY
        );

      const allCategories =
        data
          ? JSON.parse(data)
          : [];

      const updated =
        allCategories.map(
          (item: Category) =>
            item.id === id
              ? {
                  ...item,
                  name,
                  color,
                }
              : item
        );

      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );

      const userId =
        useAuthStore.getState().user?.id;

      set({
        categories: updated.filter(
          (item: Category) =>
            item.userId === userId
        ),
      });
    },

  }));