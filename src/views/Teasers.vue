<template>

  <main class="container-fluid p-0 m-0">
    <div class="p-5">
      <h3 class="title3" style="margin-top: 100px;">تیزر های کوپا</h3>
      <h4>نام تیزر</h4>
    </div>


    <teaser-slider />
  </main>
</template>

<script>
import TeaserSlider from "@/components/TeaserSlider";
export default {
  name: "Teasers",
  components: {TeaserSlider}
}
</script>

<style scoped>

</style>