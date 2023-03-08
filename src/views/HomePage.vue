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
        <router-link to="/project-page" class="link"
          >Explore Project Have worked on</router-link
        >
        <div class="col-4 mx-auto mt-3">
          <div class="row">
            <div class="col-3">
              <a href="#"><i class="bi bi-facebook text-white"></i></a>
            </div>
            <div class="col-3">
              <a href="#"> <i class="bi bi-twitter text-white"></i></a>
            </div>
            <div class="col-3">
              <a href="#">
                <i class="bi bi-linkedin text-white"></i>
              </a>
            </div>
            <div class="col-3">
              <a href="#">
                <i class="bi bi-github text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
import HeaderSection from "../components/HeaderSection.vue";
export default {
  components: {
    IonPage,
    HeaderSection,
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
#main-area {
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
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
