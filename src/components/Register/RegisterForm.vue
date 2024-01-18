<template>
  <div class="register-container">
    <h2 class="form-title">Register / Signup</h2>
    <form @submit.prevent="register" class="form">
      
      <div class="input-wrapper">
        <input v-model="email" type="email" placeholder="Email" class="input-field" required />
        <div v-if="emailError" class="alert">{{ emailError }}</div>
      </div>
      
      
      <div class="input-wrapper">
        <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Password" class="input-field" required />
      </div>
      
      
      <div class="input-wrapper">
        <input v-model="confirmPassword" :type="showPassword ? 'text' : 'password'" placeholder="Confirm Password" class="input-field" required />
      </div>
      
      
      <span class="password-toggle" @click="togglePasswordVisibility">{{ showPassword ? 'Hide Password' : 'Show Password' }}</span>
      
      
      <transition name="fade">
        <div class="snackbar" v-if="showSnackbar">{{ errorMessage }}</div>
      </transition>
      
      
      <button type="submit" class="btn-register">Register</button>
      <div class="signup-redirect">
  Already a user? <router-link to="/login">Login</router-link>
</div>
      
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../store/auth';

export default defineComponent({
  setup() {
    const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const showPassword = ref(false);
const errorMessage = ref('');
const showSnackbar = ref(false);
const emailError = ref('');
const router = useRouter();
const authStore = useAuthStore();

    const isFormInvalid = computed(() => {
return !!emailError.value || password.value !== confirmPassword.value || email.value === '' || password.value === '';
});

const validateEmail = () => {
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailError.value = pattern.test(email.value) ? '' : 'Invalid email format';
};

const register = async () => {
if (isFormInvalid.value) {
errorMessage.value = 'Please fill in all fields correctly.';
showSnackbar.value = true;
setTimeout(() => showSnackbar.value = false, 3000);
return;
}

try {
await authStore.register(email.value, password.value);
router.push('/login');
} catch (error: unknown) {
if (error instanceof Error) {
errorMessage.value = error.message;
} else {
errorMessage.value = 'An unexpected error occurred.';
}
showSnackbar.value = true;
setTimeout(() => showSnackbar.value = false, 3000);
}
};

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

return { email, password, confirmPassword, showPassword, emailError, errorMessage, showSnackbar, validateEmail, register, togglePasswordVisibility, isFormInvalid };
  },
});
</script>



<style scoped src="./RegisterForm.css"></style>


