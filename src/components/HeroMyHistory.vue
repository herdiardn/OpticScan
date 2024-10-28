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

@media screen and (max-width: 768px) {
  .HeroMyHistory-section {
    height: 25vh;
    background-position: center;
    padding: 0px 0px 0px 25px;
    font-size: 40px;
  }
}
</style>
