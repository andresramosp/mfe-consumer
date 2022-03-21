<template>
  <div>
    <div style="border: solid 1px blue; padding: 20px; background-color: white">
      <MfeOne />
    </div>
     <div style="border: solid 1px blue; padding: 20px; background-color: white">
      <MfeTwo @some-event="callback" />
    </div>
  </div>
</template>

<script>
import MfeOne from "../microfes/MfeOne.vue";
import MfeTwo from "../microfes/MfeTwo.vue";

export default {
  name: "App",
  components: {
    MfeOne,
    MfeTwo,
  },
  setup() {
    let callback = () => {
      alert('Evento recibido en Consumer')
    }
    return { callback }
  }
};
</script>

<style>
</style>
