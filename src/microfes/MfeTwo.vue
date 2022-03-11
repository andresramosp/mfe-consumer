<template>
  <MfeTwoContainer />
</template>

<script>
import { defineAsyncComponent } from "vue";
// import { mount } from "MfeTwo/MfeTwo";
export default {
   components: {
    MfeTwoContainer: defineAsyncComponent(() => import("MfeTwo/MfeTwo")),
  },
  props: {},

  setup() {
  },

  mounted() {
    // let root = document.getElementById('root2');
    // mount(root)
  },
};
</script>

<style>
</style>
