<template>
  <div>
    <div style="border: solid 1px blue; padding: 20px; background-color: white; height: 550px">
      <MfeOne />
    </div>
    <div style="border: solid 1px blue; padding: 20px; background-color: white">
      <MfeTwo @some-event="callback" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
// import MfeOne from "../microfes/MfeOne.vue";
// import MfeTwo from "../microfes/MfeTwo.vue";
// import MicroFE from '../microfes/MicroFE.vue'
import LoadingComponent from "../microfes/fallbacks/LoadingComponent.vue";
import ErrorComponent from "../microfes/fallbacks/ErrorComponent.vue";

export default {
  name: "App",
  components: {
    MfeOne: defineAsyncComponent({
      loader: () => import("../microfes/MfeOne.vue"),
      loadingComponent: LoadingComponent,
      errorComponent: ErrorComponent,
    }),
    MfeTwo: defineAsyncComponent({
      loader: () => import("../microfes/MfeTwo.vue"),
      loadingComponent: LoadingComponent,
      errorComponent: ErrorComponent,
    }),
  },
  setup() {
    let callback = () => {
      alert("Evento recibido en Consumer");
    };
    return { callback };
  },
};
</script>

<style>
</style>
