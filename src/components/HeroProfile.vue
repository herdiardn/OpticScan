<template>
  <section id="HeroProfile" class="HeroProfile-section">
    <p>Profile</p>
  </section>
</template>

<script>
export default {
  name: "HeroProfile",
};
</script>

<style scoped>
.HeroProfile-section {
  height: 50vh;
  background-image: url("@/assets/bg-profile.png");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: left;
  display: flex;
  align-items: flex-end;
  padding: 0px 0px 30px 160px;
  font-size: 50px;
  font-weight: normal;
}

@media (max-width: 768px) {
  .HeroProfile-section {
    height: 30vh;
    padding: 0px 0px 50px 60px;
  }

  p {
    font-size: 35px;
  }
}
</style>
