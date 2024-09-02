import { ref, onMounted } from "vue";
import { UserData } from "@/types";
import api from "@/services/api";

export function useFetchUserData(userId: number | string) {
  const user = ref<UserData | null>(null);
  const error = ref<string | null>(null);
  const loading = ref<boolean>(true);

  const fetchData = async () => {
    loading.value = true;
    try {
      const response = await api.get(`users/${userId}`);
      user.value = response.data;
    } catch (error: any) {
      error.value = error.statusText || "Error";
      throw error;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchData);

  return {
    user,
    error,
    loading,
    fetchData,
  };
}
