<template>
  <section id="HeroPatients" class="HeroPatients-section">
    <p>Patients</p>
  </section>
</template>

<script>
export default {
  name: "HeroPatients",
};
</script>

<style scoped>
.HeroPatients-section {
  height: 50vh;
  background-image: url("@/assets/bg-patients.png");
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
