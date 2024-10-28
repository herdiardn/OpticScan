<template>
  <section id="HeroAboutUs" class="HeroAboutUs-section">
    <p>About Us</p>
  </section>
</template>

<script>
export default {
  name: "HeroAboutUs",
};
</script>

<style scoped>
.HeroAboutUs-section {
  height: 50vh;
  background-image: url("@/assets/bg-aboutus.png");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: left;
  display: flex;
  align-items: flex-end;
  padding: 0px 0px 0px 75px;
  font-size: 50px;
  font-weight: normal;
}

@media (max-width: 768px) {
  .HeroAboutUs-section {
    padding: 0px 0px 0px 55px;
    height: 25vh;
  }

  p {
    font-size: 35px;
  }
}
</style>
