<template>
  <div class="view view-dashboard" v-if="isAuthenticated">
    <div class="container">
      <Welcome />
      <CurrentDate />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from "@/composables/useAuth";
import Welcome from "@/components/Dashboard/Welcome.vue";
import CurrentDate from "@/components/Dashboard/CurrentDate.vue";

const { isAuthenticated } = useAuth();
</script>

<style scoped></style>
