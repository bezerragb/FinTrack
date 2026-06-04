import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { User } from '../types/users';

const USERS_KEY = 'fintrack:users';
const SESSION_KEY = 'fintrack:session';

interface AuthState {
  user: User | null;

  register: (
    name: string,
    email: string,
    password: string
  ) => Promise<{
    success: boolean;
    message: string;
  }>;

  login: (
    email: string,
    password: string
  ) => Promise<{
    success: boolean;
    message: string;
  }>;

  logout: () => Promise<void>;

  loadSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>(
  (set) => ({

    user: null,

    register: async (
      name,
      email,
      password
    ) => {

      const data =
        await AsyncStorage.getItem(
          USERS_KEY
        );

      const users: User[] =
        data ? JSON.parse(data) : [];

      const emailExists = users.find(
        (user) =>
          user.email.toLowerCase() ===
          email.toLowerCase()
      );

      if (emailExists) {
        return {
          success: false,
          message:
            'Já existe um usuário cadastrado com este e-mail.',
        };
      }

      const newUser: User = {
        id: String(Date.now()),
        name,
        email,
        password,
      };

      const updatedUsers = [
        ...users,
        newUser,
      ];

      await AsyncStorage.setItem(
        USERS_KEY,
        JSON.stringify(updatedUsers)
      );

      return {
        success: true,
        message:
          'Usuário cadastrado com sucesso.',
      };
    },

    login: async (
      email,
      password
    ) => {

      const data =
        await AsyncStorage.getItem(
          USERS_KEY
        );

      const users: User[] =
        data ? JSON.parse(data) : [];

      const foundUser = users.find(
        (user) =>
          user.email.toLowerCase() ===
            email.toLowerCase() &&
          user.password === password
      );

      if (!foundUser) {
        return {
          success: false,
          message:
            'E-mail ou senha inválidos.',
        };
      }

      await AsyncStorage.setItem(
        SESSION_KEY,
        JSON.stringify(foundUser)
      );

      set({
        user: foundUser,
      });

      return {
        success: true,
        message: 'Login realizado.',
      };
    },

    logout: async () => {

      await AsyncStorage.removeItem(
        SESSION_KEY
      );

      set({
        user: null,
      });
    },

    loadSession: async () => {

      const session =
        await AsyncStorage.getItem(
          SESSION_KEY
        );

      if (session) {

        set({
          user: JSON.parse(session),
        });

      } else {

        set({
          user: null,
        });

      }
    },

  })
);