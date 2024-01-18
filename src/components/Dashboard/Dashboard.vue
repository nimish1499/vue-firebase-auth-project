<template>
  <div class="dashboard-container">
    <h2 class="form-title">Dashboard</h2>
    <div v-if="user" class="user-details">
      <p>User ID: {{ user.uid }}</p>
      <p>User Email: {{ user.email }}</p>
      <!-- More user details here if needed -->
    </div>
    <button @click="logout" class="btn-logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../store/auth.ts';

const router = useRouter();
const authStore = useAuthStore();
const user = authStore.user;

onMounted(() => {
  if (!user) {
    router.replace('/login');
  }
});

const logout = async () => {
  await authStore.logout();
  router.replace('/login');
};
</script>

<style scoped src="./Dashboard.css"></style>
