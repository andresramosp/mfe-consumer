<template>
  <div id="root-mfethree" />
</template>

<script>
// import { defineAsyncComponent } from "vue";
import { mount } from "MfeThree/MfeThree";
export default {
   components: {
    //MfeTwoContainer: defineAsyncComponent(() => import("MfeTwo/MfeTwo")),
  },
  props: {},

  setup() {
  },

  mounted() {
    let root = document.getElementById('root-mfethree');
    mount(root)
  },
};
</script>

<style>
</style>
