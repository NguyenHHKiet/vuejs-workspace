<script setup>
import { useReCaptcha } from "vue-recaptcha-v3";

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const recaptcha = async () => {
  await recaptchaLoaded();

  const token = await executeRecaptcha("login");
  console.log({ token });
};
</script>

<template>
  <div>
    <div>Hello World!</div>
    <button @click="recaptcha">recaptcha</button>
  </div>
</template>

<style>
.grecaptcha-badge {
  display: none !important;
}
</style>
