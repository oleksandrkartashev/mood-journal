import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { AuthState, User } from "@/types";
import api from "@/services/api";

export const useAuthStore = defineStore("auth", () => {
  const state = ref<AuthState>({
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!(localStorage.getItem("token") || null),
  });

  // Actions
  const actionLogin = async (creds: User) => {
    try {
      const response = await api.post("/auth/login", creds);
      const token = response?.data?.access_token;
      localStorage.setItem("token", token);
      state.value.token = token;
      state.value.isAuthenticated = true;
    } catch (error: any) {
      state.value.token = null;
      state.value.isAuthenticated = false;
      throw error;
    }
  };
  const actionLogout = () => {
    localStorage.removeItem("token");
    state.value.isAuthenticated = false;
  };

  //Getters
  const getUserAuthStatus = computed(() => state.value.isAuthenticated);

  return {
    state,
    actionLogin,
    actionLogout,
    getUserAuthStatus,
  };
});
