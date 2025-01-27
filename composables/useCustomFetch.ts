import { ref, computed, watch } from "vue";

export function useCustomFetch<T>(key: string, url: string, config?: any) {
  const isLoading = ref(true);
  const { data, status, error, refresh } = useAsyncData<T>(key, () =>
    $fetch(url)
  );

  isLoading.value = status.value === "success" ? false : true;

  return {
    data,
    error,
    isLoading,
    refresh,
  };
}
