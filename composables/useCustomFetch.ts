import axios, { type AxiosRequestConfig } from "axios";
import { onMounted, ref } from "vue";

export function useCustomFetch<T>(
  url: string,
  config?: AxiosRequestConfig<any>
) {
  const error = ref("");
  const data = ref<T | null>(null);
  const isLoading = ref(false);

  const getFetchData = async () => {
    try {
      isLoading.value = true;
      const response = await axios.get<T>(url, config);
      data.value = response.data;
    } catch (err) {
      console.error(err);
      error.value = "Something went wrong";
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(getFetchData);

  return { error, isLoading, data };
}
