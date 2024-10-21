<template>
  <section id="HeroMyHistory" class="HeroMyHistory-section">
    <p>My History</p>
  </section>
</template>

<script>
export default {
  name: "HeroMyHistory",
};
</script>

<style scoped>
.HeroMyHistory-section {
  height: 50vh;
  background-image: url("@/assets/bg-myhistory.png");
  background-size: cover;
  color: white;
  text-align: left;
  display: flex;
  align-items: flex-end;
  padding: 0px 0px 0px 75px;
  font-size: 50px;
  font-weight: normal;
}
</style>
