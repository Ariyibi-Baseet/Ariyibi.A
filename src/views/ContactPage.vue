<template>
  <ion-page>
    <HeaderSection header-title="Contact Me"></HeaderSection>

    <!-- Contact Me Section -->
    <section id="contact-area">
      <ion-scroll scrollY="true">
        <div class="iframe col-12 mt-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63269179693!2d3.143872045474019!3d6.548035697956087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1678260274890!5m2!1sen!2sng"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="row mt-3">
          <div class="col-12 col-md-6 mb-3">
            <ion-input placeholder="Name"></ion-input>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <ion-input placeholder="Subject"></ion-input>
          </div>
          <div class="col-12 mb-3">
            <textarea
              class="form-control shadow-none"
              placeholder="Message Here..."
              rows="3"
            ></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-block mb-3 w-25 text-white">
              Submit
            </button>
          </div>
        </div>

        <ButtonNavs />
        <SocialLinks />
      </ion-scroll>
    </section>
  </ion-page>
</template>

<script>
import { IonPage, IonInput, IonScroll } from "@ionic/vue";
import HeaderSection from "../components/HeaderSection.vue";
import ButtonNavs from "../components/ButtonNavs.vue";
import SocialLinks from "../components/SocialLinks.vue";
export default {
  components: {
    HeaderSection,
    IonPage,
    IonInput,
    IonScroll,
    ButtonNavs,
    SocialLinks,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box !important;
  font-family: var(--ff-monserrat);
}
ion-page {
  width: 100%;
}
#contact-area {
  height: 100vh;
  width: 100%;
  padding: 10px;
  background-color: #333;
  overflow-y: auto !important;
  overflow-x: hidden;
}
iframe {
  width: 100%;
  height: 300px;
}
ion-input {
  --color: #000;
  --background: #fff;
  border-radius: 8px !important;
}
::placeholder {
  color: gray !important;
}
textarea {
  border: none;
}
.btn-block {
  background-color: var(--btn-bg);
}
</style>
