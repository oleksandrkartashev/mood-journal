<template>
  <div class="user-avatar">
    <button type="button" class="user-avatar-btn">
      <img class="user-avatar-img" :src="user?.avatar" :alt="user?.name" />
    </button>
  </div>
</template>
<script lang="ts" setup>
import { useFetchUserData } from "@/composables/useFetchUserData";
const { user } = useFetchUserData(1);
</script>
<style scoped>
.user-avatar {
  @apply flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse;
}
.user-avatar-btn {
  @apply flex text-sm bg-[darkblue] rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600;
}
.user-avatar-img {
  @apply w-8 h-8 rounded-full;
}
</style>
