<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/map">Map</router-link>
    </nav>
    <MfeLogin />
    <HelloWorld msg="Shell APP (Vue 3 + Typescript + Module Federation)" />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import MfeLogin from "./microfes/MfeLogin.vue";

// import { PetApiFactory } from "Shell/clientApi";

export default {
  name: "App",
  components: {
    HelloWorld,
    MfeLogin,
  },
  setup() {
    // console.log(PetApiFactory);

    // const getPets = async () => {
    //   const config = new Configuration({
    //     basePath: window.location.origin, // 1
    //   });
    //   const apiFactory = PetApiFactory(config);
    //   let result = await apiFactory.findPetsByStatus(["available"]);
    //   console.log(result);
    // };

    // getPets();
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
