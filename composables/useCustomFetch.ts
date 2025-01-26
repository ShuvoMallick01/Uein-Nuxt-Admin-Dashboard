import { ref, computed } from "vue";

export function useCustomFetch<T>(key: string, url: string, config?: any) {
  const { data, status, error, refresh } = useAsyncData<T>(key, () =>
    $fetch(url)
  );

  const isLoading = computed(() => status.value === "pending");
  const errorMessage = computed(() =>
    error.value ? "Something went wrong" : ""
  );

  return {
    data,
    error: errorMessage,
    isLoading,
    refresh,
  };
}
