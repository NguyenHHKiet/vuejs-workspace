<template>
  <div>
    <otp :digit-count="4" @update:otp="otpValue = $event"></otp>

    <p>The current OTP value is: {{ otpValue }}</p>
  </div>
</template>

<script setup>
import otp from "./components/OTP.vue";
import { ref, onUpdated } from "vue";

const otpValue = ref("");
const value = ref();

onUpdated(() => {
  value.value = otpValue.value;
  console.log(value.value);
});
</script>

<style></style>
