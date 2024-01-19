<template>
  <div class="login-container">
    <h2 class="form-title">Login</h2>
    <form @submit.prevent="login" class="form">
      <div class="input-wrapper">
        <input v-model="email" type="email" placeholder="Email" class="input-field" required />
      </div>
      <div class="input-wrapper">
        <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Password" class="input-field" required />
        <span class="password-toggle" @click="togglePasswordVisibility">{{ showPassword ? 'Hide Password' : 'Show Password' }}</span>
      </div>
      <button type="submit" class="btn-login">Login</button>
      <div class="signup-redirect">
  Don't have an account? <router-link to="/register">Signup</router-link>
</div>
      <transition name="fade">
        <div class="snackbar" v-if="showSnackbar">{{ errorMessage }}</div>
      </transition>
    </form>
  </div>
</template>




<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../store/auth.ts';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const showPassword = ref(false);
    const errorMessage = ref('');
    const showSnackbar = ref(false);
    const router = useRouter();
    const authStore = useAuthStore();

    const login = async () => {
      try {
        await authStore.login(email.value, password.value);
        router.push('/dashboard');
      } catch (error: unknown) {  
    if (error instanceof Error) {
      errorMessage.value = error.message;
    } else {
      errorMessage.value = 'An unexpected error occurred.';
    }
    showSnackbar.value = true;
    setTimeout(() => showSnackbar.value = false, 3000); // Hide the snackbar after 3 seconds
  }
    };

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    return { email, password, showPassword, errorMessage, showSnackbar, login, togglePasswordVisibility };
  },
});
</script>

<style scoped src="./LoginForm.css"></style>
