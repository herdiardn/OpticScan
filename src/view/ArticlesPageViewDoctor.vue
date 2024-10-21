<template>
  <div>
    <HeaderDashboardDoctor />
    <HeroArticles />
    <ArticlesDashboardDoctor />
    <FooterSite />
  </div>
</template>

<script>
import HeaderDashboardDoctor from "@/components/HeaderDashboardDoctor.vue";
import HeroArticles from "@/components/HeroArticles.vue";
import ArticlesDashboardDoctor from "@/components/ArticlesDashboardDoctor.vue";
import FooterSite from "@/components/FooterSite.vue";

export default {
  name: "ArticlePageView",
  components: {
    HeaderDashboardDoctor,
    HeroArticles,
    ArticlesDashboardDoctor,
    FooterSite,
  },
};
</script>
