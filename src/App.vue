<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
export default {
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    return {};
  },
};
</script>

<style>
:root {
  --txt-blue: #6699cc;
  --btn-bg: #6699cc;
}
</style>
