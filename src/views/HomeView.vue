<script setup lang="ts">
import HomePage from '../components/HomePage.vue';
import HomePage1 from '../components/HomePage1.vue';
import HomePage2 from '../components/HomePage2.vue';
import HomePage3 from '../components/HomePage3.vue';
import HomePage4 from '../components/HomePage4.vue';
import HomePage5 from '../components/HomePage5.vue';
import HomePage6 from '../components/HomePage6.vue';
import HomePage7 from '../components/HomePage7.vue';
import HomePage8 from '../components/HomePage8.vue';
import HomePage9 from '../components/HomePage9.vue';
</script>
<template>
  <div class="mainHomeView">
    <HomePage/>
    <HomePage1/>
    <HomePage2/>
    <HomePage3/>
    <HomePage4/>
    <HomePage5/>
    <HomePage6/>
    <HomePage7/>
    <HomePage8/>
    <HomePage9/>
  </div>
</template>
<style>
header {
  z-index: 10;
  position: absolute;
  width: 100%;
}

.mainHomeView {
  width: 100vw;
  overflow: hidden;
}
</style>
