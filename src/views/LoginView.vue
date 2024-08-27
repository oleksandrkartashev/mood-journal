<template>
  <div class="view view-login">
    <div class="container">
      <div class="login-wrap">
        <h1 class="title">Login</h1>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from "@/components/LoginForm.vue";
</script>

<style scoped>
.view-login {
  @apply h-[100vh] flex flex-col justify-center bg-[#f9fafb];
}
.title {
  @apply mb-[15px] md:mb-[20px] text-2xl md:text-3xl lg:text-5xl;
}
.login-wrap {
  @apply md:max-w-[28rem] md:mx-auto p-8 bg-white shadow-md;
}
</style>
