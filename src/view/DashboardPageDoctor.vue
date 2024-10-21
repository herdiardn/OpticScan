<template>
  <div>
    <HeaderDashboardDoctor />
    <HeroDashboard :isDoctor="true" />
    <ArticlesPage :isDoctor="true" />
    <AddSection />
    <FooterUser />
  </div>
</template>

<script>
import HeaderDashboardDoctor from "@/components/HeaderDashboardDoctor.vue";
import HeroDashboard from "@/components/HeroDashboard.vue";
import ArticlesPage from "@/components/ArticlesPage.vue";
import AddSection from "@/components/AddSection.vue";
import FooterUser from "@/components/FooterUser.vue";

export default {
  name: "HomePageView",
  components: {
    HeaderDashboardDoctor,
    HeroDashboard,
    ArticlesPage,
    AddSection,
    FooterUser,
  },
};
</script>
