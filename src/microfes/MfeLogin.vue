<template>
  <div id="root-mfelogin" />
</template>

<script>

import { mount } from "MfeLogin/MfeLogin";
export default {
   components: {
  },
  props: {},

  setup() {
  },

  mounted() {
    let root = document.getElementById('root-mfelogin');
    mount(root)
  },
};
</script>

<style>
</style>
