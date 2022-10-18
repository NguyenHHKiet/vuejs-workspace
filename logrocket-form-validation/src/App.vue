<template>
  <div id="visa">
    <h1>Create a New Vue Account</h1>
    <form @submit.prevent="handleSubmission">
      <label for="full name">Full Name:</label>
      <input type="text" v-model="name" required />
      <br />
      <label for="email">Email Address:</label>
      <input type="text" v-model="email" required /> <br />
      <span v-if="msg.email">{{ msg.email }}</span>
      <label for="password">Password:</label>
      <input
        type="text"
        v-model="password"
        required
        onkeypress="validateNumber(event)"
      /><br />
      <span v-if="msg.password">{{ msg.password }}</span>
      <br />
      <label for="twitter">Twitter Handle:</label>
      <input type="text" v-model="twitter" required />
      <input type="submit" :disabled="!disabled.every((i) => i === false)" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      name: "",
      password: "",
      email: "",
      msg: [],
      twitter: "",
      disabled: [true, true],
    };
  },
  watch: {
    email(value) {
      // binding this to the data value in the email input
      // this.email = value;
      this.validateEmail(value);
    },
    password(value) {
      // this.password = value;
      this.validatePassword(value);
    },
  },
  methods: {
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
        this.disabled = [false, this.disabled[1]];
      } else {
        this.msg["email"] = "Invalid Email Address";
        this.disabled = [true, this.disabled[1]];
      }
    },
    validatePassword(value) {
      let difference = 8 - value.length;
      if (value.length < 8) {
        this.msg["password"] =
          "Must be 8 characters! " + difference + " characters left";
        this.disabled = [this.disabled[1], true];
      } else {
        this.msg["password"] = "";
        this.disabled = [this.disabled[1], false];
      }
    },
    handleSubmission() {
      alert(`Email: ${this.email} Password: ${this.password}`);
    },
    validateNumber(e) {
      const pattern = /^[0-9]$/;

      return pattern.test(e.key);
    },
  },
};
</script>
<style scoped>
/* Chrome, Safari, Edge, Opera */
/* input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
} */

/* Firefox */
/* input[type="number"] {
  -moz-appearance: textfield;
} */
</style>
