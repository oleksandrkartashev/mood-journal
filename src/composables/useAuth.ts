import { computed } from "vue";
import { useAuthStore } from "@/store/auth";

export function useAuth() {
  const userStore = useAuthStore();
  const isAuthenticated = computed(() => userStore.getUserAuthStatus);

  return {
    isAuthenticated,
  };
}
