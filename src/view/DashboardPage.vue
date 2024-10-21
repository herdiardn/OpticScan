<template>
  <div>
    <HeaderDashboard />
    <HeroDashboard :isDoctor="false" />
    <ArticlesPage :isDoctor="false" />
    <AddSection />
    <FooterUser />
  </div>
</template>

<script>
import HeaderDashboard from "@/components/HeaderDashboard.vue";
import HeroDashboard from "@/components/HeroDashboard.vue";
import ArticlesPage from "@/components/ArticlesPage.vue";
import AddSection from "@/components/AddSection.vue";
import FooterUser from "@/components/FooterUser.vue";

export default {
  name: "HomePageView",
  components: {
    HeaderDashboard,
    HeroDashboard,
    ArticlesPage,
    AddSection,
    FooterUser,
  },
};
</script>
