<template>
  <div>
    <h1>Login to Your Account</h1>
    <p><input type="text" placeholder="Email" v-model="emailCustom" /></p>
    <p>
      <input type="password" placeholder="Password" v-model="passwordCustom" />
    </p>
    <p><button @click="signIn()">Submit</button></p>
    <div>
      <div>
        <button
          style="padding: 10px 50px; margin: 10px 50px"
          @click="handleGoogleAuth()"
        >
          Google
        </button>
      </div>
      <div>
        <button
          style="padding: 10px 50px; margin: 10px 50px"
          @click="handleFacebookAuth()"
        >
          Facebook
        </button>
      </div>
      <div>
        <button style="padding: 10px 50px; margin: 10px 50px">Apple</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import firebase from "firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  getRedirectResult,
} from "firebase/auth";
import { useRouter } from "vue-router"; // import router
const emailCustom = ref("");
const passwordCustom = ref("");
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
const handleGoogleAuth = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("Successfully logged in!");
      router.push("/feed");
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("error" + error);
      // ...
    });
};
const handleFacebookAuth = () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // ...
      console.log("Successfully logged in!");
      router.push("/feed");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log("error" + error);
      // ...
    });
};
</script>
