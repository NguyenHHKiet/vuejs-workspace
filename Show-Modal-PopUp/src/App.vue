<script>
import Modal from "./components/Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<template>
  <div>
    <button id="show-modal" @click="showModal = true">Show Modal</button>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <Modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
      </Modal>
    </Teleport>
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
