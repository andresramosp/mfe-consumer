<template>
  <div :id="`root-${moduleName}`" />
</template>

<script>

// import { mount } from "MfeOne/MfeOne";
import { onMounted } from "vue";
export default {
  components: {},
  props: {
    moduleName: { type: String },
  },

  setup(props) {
    onMounted(async () => {
      // Import en Runtime para evitar que falle toda la app si no encuentra un módulo federado
      console.log(props.moduleName)
      const { mount } = await import(props.moduleName);
      let root = document.getElementById(`root-${props.moduleName}`);
      mount(root);
    });
  },

};
</script>

<style>
</style>
