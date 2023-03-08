<template>
  <ion-page>
    <HeaderSection header-title="Contact Me"></HeaderSection>

    <!-- Contact Me Section -->
    <section id="contact-area">
      <div class="iframe col-12 mt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63269179693!2d3.143872045474019!3d6.548035697956087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1678260274890!5m2!1sen!2sng"
          width="400"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
import HeaderSection from "../components/HeaderSection.vue";
export default {
  components: { HeaderSection, IonPage },
  setup() {
    return {};
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box !important;
}
#contact-area {
  min-height: 100vh;
  width: 100%;
  padding: 10px;
}
</style>
