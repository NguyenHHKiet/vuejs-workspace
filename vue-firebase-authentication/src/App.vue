<script setup>
import { ref, watchEffect } from "vue"; // used for conditional rendering
// import firebase from "firebase";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
const auth = getAuth();
const router = useRouter();
const isLoggedIn = ref(true);
// runs after firebase is initialized
// firebase.auth().
onAuthStateChanged(auth, function (user) {
  if (user) {
    isLoggedIn.value = true; // if we have a user
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid + user.email);
  } else {
    // User is signed out
    isLoggedIn.value = false; // if we do not
  }
});
const signOutButton = () => {
  // firebase.auth()
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out successful");
    })
    .catch((error) => {
      // An error happened.
    });
  router.push("/");
};
</script>

<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link> |
      <span v-if="isLoggedIn">
        <router-link to="/feed"> Feed of True </router-link> |
      </span>
      <router-link to="/feed"> Feed </router-link> |
      <span v-if="isLoggedIn"
        >>
        <button @click="signOutButton">Logout</button>
      </span>
      <span v-else>
        <router-link to="/register"> Register </router-link> |
        <router-link to="/sign-in"> Login </router-link>
      </span>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
