<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title class="ion-text-left">{{ headerTitle }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";
export default {
  components: { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton },
  props: {
    headerTitle: String,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
ion-title {
  --color: #fff;
  float: left;
}
</style>
