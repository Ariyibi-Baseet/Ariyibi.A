<template>
  <ion-header>
    <ion-toolbar>
      <ion-title class="ion-text-center">{{ headerTitle }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle } from "@ionic/vue";
export default {
  components: { IonHeader, IonToolbar, IonTitle },
  props: {
    headerTitle: String,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
* {
  font-family: var(--ff-monserrat);
}
ion-title {
  --color: #fff;
}
ion-toolbar {
  --background: #333 !important;
}
</style>
