<script setup>
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "../store/users";
//declare store variables
const store = useUserStore();
const msg = ref("Welcome to the Vue environment");

// getters
const getUsers = computed(() => {
  console.log(store.getUsers);
  return store.getUsers;
});
console.log(getUsers);
// states
const users = computed(() => {
  console.log(store.users);
  return store.users;
});
console.log(users);
onMounted(() => {
  store.fetchUsers();
});
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="card">
      <h1>getters</h1>
      <div v-for="(gettersUser, index) in getUsers" :key="index">
        {{ gettersUser.id }} {{ gettersUser.name }}
      </div>
      <h1>Made By Actions</h1>
      <div v-for="user in users" :key="user.id">
        {{ user.id }} {{ user.name }} {{ user.address.street }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
