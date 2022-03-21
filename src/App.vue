<template>
  <div>
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/map">Map</router-link>
    </nav>
    <MfeLogin />
    <HelloWorld msg="Vue 3 + Module Federation" />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MfeLogin from "./microfes/MfeLogin.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    MfeLogin
  },
  setup() {
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
