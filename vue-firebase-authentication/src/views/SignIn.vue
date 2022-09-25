<template>
  <div>
    <h1>Login to Your Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signIn">Submit</button></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import firebase from "firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router"; // import router
const email = ref("");
const password = ref("");
const auth = getAuth();
const errMsg = ref(); // ERROR MESSAGE
const router = useRouter(); // get a reference to our vue router
const signIn = () => {
  // we also renamed this method
  // firebase
  //   .auth()
  signInWithEmailAndPassword(auth, email.value, password.value) // THIS LINE CHANGED
    .then((data) => {
      const user = data.user;
      console.log(user);
      console.log("Successfully logged in!");
      router.push("/feed"); // redirect to the feed
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
</script>
