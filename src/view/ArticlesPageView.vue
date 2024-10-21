<template>
  <div>
    <HeaderDashboard />
    <HeroArticles />
    <ArticlesDashboard />
    <FooterUser />
  </div>
</template>

<script>
import HeaderDashboard from "@/components/HeaderDashboard.vue";
import HeroArticles from "@/components/HeroArticles.vue";
import ArticlesDashboard from "@/components/ArticlesDashboard.vue";
import FooterUser from "@/components/FooterUser.vue";

export default {
  name: "ArticlePageView",
  components: {
    HeaderDashboard,
    HeroArticles,
    ArticlesDashboard,
    FooterUser,
  },
};
</script>
