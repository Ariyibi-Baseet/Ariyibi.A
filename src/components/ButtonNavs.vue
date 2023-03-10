<template>
  <div class="col-12 mx-auto mt-3 d-flex justify-content-center">
    <router-link to="/">
      <button class="btn btn-block btn-md text-white rounded">Home</button>
    </router-link>
    <router-link to="/project-page" class="ms-3">
      <button class="btn btn-block btn-md text-white rounded">Portfolio</button>
    </router-link>
    <router-link to="/contact-page" class="ms-3">
      <button class="btn btn-block btn-md text-white rounded">Contact</button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* FOr buttons */
.btn-block {
  background-color: var(--btn-bg);
}
</style>
