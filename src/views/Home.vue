<template>
  <div>
    <div class="mfe-container">
      <MfeOne />
    </div>
    <div class="mfe-container" style="margin-top: 20px">
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
      alert("Evento recibido en Shell");
    };
    return { callback };
  },
};
</script>

<style>
</style>
