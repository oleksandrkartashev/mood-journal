import { ref } from "vue";

export function useCurrentDate() {
  const today = ref<Date>(new Date());

  const formattedDate = ref<string>(formatDate(today.value));

  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
  }

  return {
    today,
    formattedDate,
  };
}
