<template>
  <div class="welcome">
    <h1 class="welcome-title">Hey, {{ user?.name }}</h1>
  </div>
</template>
<script lang="ts" setup>
import { useFetchUserData } from "../../composables/useFetchUserData";
const { user } = useFetchUserData(1);
</script>
<style scoped>
.welcome {
  @apply py-[15px] md:py-[20px];
}
.welcome-title {
  @apply text-2xl md:text-3xl lg:text-5xl;
}
</style>
