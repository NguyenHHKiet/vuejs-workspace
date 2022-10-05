<script setup>
// import MyComponent from "./components/MyComponent.vue";
import { ref } from "vue";
import TabCard from "./components/TabCard.vue";
import Demo from "./Demo.vue";

const initialTab = ref("james");
const tabs = ref(["james", "lily", "snape"]);
</script>

<template>
  <div>
    <Demo />
    <TabCard :tabs="tabs" :initialTab="initialTab">
      <div slot="tab-head-james">James</div>
      <div slot="tab-panel-james">
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
      </div>
      <div slot="tab-head-lily">Lily</div>
      <div slot="tab-panel-lily">
        <h2 class="title">Lily Potter</h2>
        <p class="description">
          Lily J. Potter was a Muggle-born witch, the younger daughter of Mr and
          Mrs Evans, and the younger sister of Petunia Evans.
        </p>
        <p class="description">
          She sacrificed herself to save Harry and caused Voldemort to loose the
          <strong>First Wizarding War</strong>.
        </p>
      </div>
      <div slot="tab-head-snape">Snape</div>
      <div slot="tab-panel-snape">
        <h3 class="title">no description needed</h3>
        <img
          class="image"
          src="https://media1.tenor.com/images/b58f4b6f5cc71fb1d9663c66d0b42cb7/tenor.gif"
          alt=""
        />
      </div>
    </TabCard>
  </div>
</template>
<!-- <script setup>
import Tabs from "./components/Tabs.vue";
import Tab from "./components/Tab.vue";
</script>

<div>
  <Tabs>
    <Tab active="true" title="First Tab">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida
      purus vitae vulputate commodo.
    </Tab>
    <Tab title="Second Tab">
      Cras scelerisque, dolor vitae suscipit efficitur, risus orci sagittis
      velit, ac molestie nulla tortor id augue.
    </Tab>
    <Tab title="Third Tab">
      Morbi posuere, mauris eu vehicula tempor, nibh orci consectetur tortor, id
      eleifend dolor sapien ut augue.
    </Tab>
    <Tab title="Fourth Tab">
      Aenean varius dui eget ante finibus, sit amet finibus nisi facilisis. Nunc
      pellentesque, risus et pretium hendrerit.
    </Tab>
  </Tabs>
</div> -->

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
