<template>
  <section id="HeroArticles" class="HeroArticles-section">
    <p>Article</p>
  </section>
</template>

<script>
export default {
  name: "HeroArticles",
};
</script>

<style scoped>
.HeroArticles-section {
  height: 50vh;
  background-image: url("@/assets/bg-articles.png");
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
