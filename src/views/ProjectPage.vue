<template>
  <ion-page>
    <HeaderSection header-title="Projects Have Worked On"></HeaderSection>
    <section id="portfolio-area">
      <ion-list :inset="true">
        <a href="#">
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="" :src="greonImg" />
            </ion-thumbnail>
            <ion-label
              >Greon Website &nbsp;
              <i class="bi bi-box-arrow-up-right text-white"></i
            ></ion-label>
          </ion-item>
        </a>
        <a href="#">
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="" :src="portfolioImg" />
            </ion-thumbnail>
            <ion-label
              >Portfolio Website &nbsp;
              <i class="bi bi-box-arrow-up-right text-white"></i
            ></ion-label>
          </ion-item>
        </a>
        <a href="#">
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="" :src="githubImg" />
            </ion-thumbnail>
            <ion-label
              >Git Repositories Website &nbsp;
              <i class="bi bi-box-arrow-up-right text-white"></i
            ></ion-label>
          </ion-item>
        </a>
      </ion-list>

      <router-link to="/contact-page" class="text-center d-block text-white"
        ><i class="bi bi-arrow-right-circle-fill text-white"></i>&nbsp; Click
        Here to drop me message</router-link
      >
    </section>
  </ion-page>
</template>

<script>
import { IonPage, IonList, IonItem, IonLabel, IonThumbnail } from "@ionic/vue";
import HeaderSection from "../components/HeaderSection.vue";
export default {
  components: {
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonThumbnail,
    HeaderSection,
  },
  setup() {
    const greonImg = "/assets/image/greon.png";
    const portfolioImg = "/assets/image/portfolio.png";
    const githubImg = "/assets/image/interface.png";
    return { greonImg, portfolioImg, githubImg };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box !important;
  text-decoration: none;
}
#portfolio-area {
  min-height: 100vh;
}
ion-thumbnail {
  --size: 140px;
  --border-radius: 9px;
}
ion-label {
  font-size: 20px !important;
}
</style>
