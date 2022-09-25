<template>
  <div>
    <h1>Create an Account</h1>
    <p><input type="email" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import firebase from "firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router"; // import router
const email = ref("");
const password = ref("");
const auth = getAuth();
const router = useRouter(); // get a reference to our vue router
const register = () => {
  // firebase
  // .auth; // get the auth api
  createUserWithEmailAndPassword(auth, email.value, password.value) // need .value because ref()
    .then((data) => {
      const user = data.user;
      console.log(user);
      console.log("Successfully registered!");
      router.push("/feed"); // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

<style></style>
