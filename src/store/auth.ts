import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { auth } from '../firebaseConfig'; 
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    async register(email: string, password: string) {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      this.user = response.user;
    },
    async login(email: string, password: string) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      this.user = response.user;
    },
    async logout() {
      await signOut(auth);
      this.user = null;

    },
  },
});
