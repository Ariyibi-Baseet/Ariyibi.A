<template>
  <ion-page>
    <!-- Header section -->
    <HeaderSection header-title="My Portfolio"></HeaderSection>

    <!-- Content Area -->
    <section id="main-area">
      <div class="details-container">
        <img :src="ariyibiBaseetLogo" alt="Ariyibi Baseet Logo" />
        <h2 class="text-white">Ariyibi Baseet .A</h2>
        <p class="text-white">A solution-driven frontend web engineer.</p>
        <router-link to="/project-page" class="link fs-6 project-link"
          >Explore Projects Have worked on</router-link
        >
        <ButtonNavs />
        <SocialLinks />
      </div>
    </section>
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
import HeaderSection from "../components/HeaderSection.vue";
import SocialLinks from "../components/SocialLinks.vue";
import ButtonNavs from "../components/ButtonNavs.vue";
export default {
  components: {
    IonPage,
    HeaderSection,
    SocialLinks,
    ButtonNavs,
  },
  setup() {
    const ariyibiBaseetLogo = "./assets/image/Ariyibi_Baseet.png";
    return {
      ariyibiBaseetLogo,
    };
  },
};
</script>

<style scoped>
ion-page {
  --background: yellow !important;
}
#main-area {
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  background-color: #333;
}
.project-link {
  color: var(--txt-blue);
}
.details-container {
  margin-top: 100px;
}
img {
  border-radius: 100%;
  width: 150px;
  height: 150px;
  display: block;
  margin: auto;
}
h2,
p,
.link {
  display: block;
  text-align: center;
}
</style>
