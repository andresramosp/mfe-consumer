<template>
  <div id="root-mfeone" />
</template>

<script>
// import { defineAsyncComponent } from "vue";
import { mount } from "MfeOne/MfeOne";
export default {
   components: {
    //MfeTwoContainer: defineAsyncComponent(() => import("MfeTwo/MfeTwo")),
  },
  props: {},

  setup() {
  },

  mounted() {
    let root = document.getElementById('root-mfeone');
    mount(root)
  },
};
</script>

<style>
</style>
