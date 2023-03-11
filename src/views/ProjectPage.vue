<template>
  <ion-page>
    <HeaderSection header-title="Projects Have Worked On"></HeaderSection>
    <section id="portfolio-area">
      <ion-list inset="true" lines="inset">
        <a href="https://greon.netlify.app/">
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
        <a href="https://ariyibi-baseet-online-portfolio.netlify.app/">
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
        <a href="https://github-repository-list.netlify.app/">
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

      <router-link to="/contact-page" class="text-center d-block to-contact"
        ><i class="bi bi-arrow-right-circle-fill"></i>&nbsp; Click Here to drop
        me message</router-link
      >
      <ButtonNavs />
    </section>
  </ion-page>
</template>

<script>
import { IonPage, IonList, IonItem, IonLabel, IonThumbnail } from "@ionic/vue";
import HeaderSection from "../components/HeaderSection.vue";
import ButtonNavs from "../components/ButtonNavs.vue";
export default {
  components: {
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonThumbnail,
    HeaderSection,
    ButtonNavs,
  },
  setup() {
    const greonImg = "./assets/image/greon.png";
    const portfolioImg = "./assets/image/portfolio.png";
    const githubImg = "./assets/image/interface.png";
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
  background-color: #333;
}
ion-thumbnail {
  --size: 140px;
  --border-radius: 9px;
}
ion-label {
  font-size: 20px !important;
}
ion-list {
  padding: 10px !important;
}
ion-list a:not(a:first-child) {
  margin-top: 10px;
  display: block;
}
ion-item {
  background-color: #333;
}
.to-contact {
  color: var(--txt-blue);
}
</style>
