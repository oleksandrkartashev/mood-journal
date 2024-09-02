<template>
  <div class="current-date">
    <p class="current-date-text">{{ formattedDate }}</p>
  </div>
</template>
<script lang="ts" setup>
import { useCurrentDate } from "../../composables/useCurrentDate";
const { formattedDate } = useCurrentDate();
</script>
<style scoped>
.current-date-text {
  @apply text-xs text-gray-300;
}
</style>
