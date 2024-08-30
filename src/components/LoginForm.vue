<template>
  <Form class="form" @submit="onSubmit" :validation-schema="schema">
    <div class="form-group">
      <label for="email" class="form-label">Your email</label>
      <Field
        type="email"
        name="email"
        class="form-input"
        placeholder="test@test.com"
      />
      <ErrorMessage name="email" class="form-message" />
    </div>
    <div class="form-group">
      <label for="password" class="form-label">Password</label>
      <Field
        type="password"
        name="password"
        placeholder="••••••••"
        class="form-input"
      />
      <ErrorMessage name="password" class="form-message" />
    </div>
    <div class="form-group">
      <button type="submit" class="form-btn">Login</button>
    </div>
    <div class="form-group">
      <div v-if="responseMessage" class="form-response">
        {{ responseMessage }}
      </div>
    </div>
  </Form>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "@/store/user";
import { User } from "@/types";
import { useRouter } from "vue-router";

const userStore = useAuthStore();
const router = useRouter();

const responseMessage = ref<string | null>(null);

const schema = yup.object({
  email: yup.string().required("Please enter a valid email.").email(),
  password: yup
    .string()
    .required("Password is too short - should be 8 chars minimum.")
    .min(8),
});

const isAuthenticated = computed<boolean>(() => userStore.getUserAuthStatus);

const handleLogin = async (userCreds: User) => {
  try {
    await userStore.actionLogin(userCreds);
    router.push("/");
  } catch (error: any) {
    const message = `${error.code} ${error.message}`;
    responseMessage.value = message;
  }
};

const onSubmit = (values) => {
  schema
    .validate(values)
    .then(() => handleLogin(values))
    .catch((error) => {
      console.error("Validation errors:", error);
    });
};

onMounted(() => {
  if (isAuthenticated.value) {
    router.push("/");
  }
});
</script>

<style scoped>
.form {
  @apply flex flex-col space-y-4;
}
.form-input {
  @apply border border-gray-300 rounded-md p-2 w-full;
}
.form-btn {
  @apply text-white inline-block w-[100%] text-center lg:w-auto bg-[darkblue] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800;
}
.form-label {
  @apply block text-sm leading-[1.43] mb-[8px] font-medium;
}
.form-message,
.form-response {
  @apply text-sm leading-none text-[#ff3232] font-medium;
}
</style>
