<template>
  <swiper>
    <swiper-slide v-slot="{ isActive }">
      <div>Current slide is {{ isActive ? "active" : "not active" }}</div>
    </swiper-slide>
  </swiper>
</template>
