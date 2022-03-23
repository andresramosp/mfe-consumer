<template>
  <div id="root-mfeone" />
</template>

<script>

import { mount } from "MfeOne/MfeOne";
import { onMounted } from 'vue'
export default {
   components: {
  },
  props: {},

setup() {
    onMounted(() => {
      let root = document.getElementById("root-mfeone");
      mount(root);
    });
  },

  // async mounted() {
  //   const { mount } = await import('MfeOne/MfeOne');
  //   let root = document.getElementById('root-mfeone');
  //   mount(root)
  // },
};
</script>

<style>
</style>
