<template>
  <div>
    <div style="border: solid 1px red">
      <MfeOne />
    </div>
     <div style="border: solid 1px red">
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
      alert('adios')
    }
    return { callback }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
