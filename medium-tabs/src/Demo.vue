<template>
  <div>
    <TabCard1 :tabs="tabs" :initialTab="initialTab">
      <template slot="tab-head-james"> James </template>
      <template slot="tab-panel-james">
        <h2 class="title">James Potter</h2>
        <p class="description">
          James Potter is a young wizard who fought against Voldemort in the
          1970s, only to be killed along with his wife Lily while trying to
          protect their 15-month-old son Harry.
        </p>
        <p class="description">
          He was a descendant of Ignotus Peverell and the only child of wealthy,
          elderly parents.
        </p>
      </template>
      <template slot="tab-head-lily"> Lily </template>
      <template slot="tab-panel-lily">
        <h2 class="title">Lily Potter</h2>
        <p class="description">
          Lily J. Potter was a Muggle-born witch, the younger daughter of Mr and
          Mrs Evans, and the younger sister of Petunia Evans.
        </p>
        <p class="description">
          She sacrificed herself to save Harry and caused Voldemort to loose the
          <strong>First Wizarding War</strong>.
        </p>
      </template>
      <template slot="tab-head-snape"> Snape </template>
      <template slot="tab-panel-snape">
        <h3 class="title">no description needed</h3>
        <img
          class="image"
          src="https://media1.tenor.com/images/b58f4b6f5cc71fb1d9663c66d0b42cb7/tenor.gif"
          alt=""
        />
      </template>
    </TabCard1>
  </div>
</template>

<script>
import TabCard1 from "./components/TabCard1.vue";

export default {
  name: "App",
  components: {
    TabCard1,
  },
  data() {
    return {
      initialTab: "james",
      tabs: ["james", "lily", "snape"],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #eee;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: "Roboto", sans-serif;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
  margin-top: 10px;
  margin-bottom: 20px;
}

.description {
  margin-top: 5px;
  max-width: 85%;
  line-height: 22px;
  margin-bottom: 10px;
}

.image {
  height: 160px;
  width: auto;
}
</style>
