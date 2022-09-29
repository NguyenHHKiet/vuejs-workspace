<script setup>
import axios from "axios";
import { ref } from "vue";

let quote = ref();
const createPost = () => {
  axios
    .post(
      "https://jsonplaceholder.typicode.com/posts",
      JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      })
    )
    .then((response) => {
      console.log(response);
    });
};
</script>

<template>
  <div>
    <i>"{{ quote }}"</i>
    <p>- Kanye West</p>
    <p>
      <button @click="createPost">Create Post</button>
    </p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
