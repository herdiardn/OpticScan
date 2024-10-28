<template>
  <div>
    <HeaderDashboardDoctor />
    <HeroProfile />
    <ProfileContentDoctor />
    <FooterSite />
  </div>
</template>

<script>
import HeaderDashboardDoctor from "@/components/HeaderDashboardDoctor.vue";
import HeroProfile from "@/components/HeroProfile.vue";
import ProfileContentDoctor from "@/components/ProfileContentDoctor.vue";
import FooterSite from "@/components/FooterSite.vue";

export default {
  name: "ArticlePageView",
  components: {
    HeaderDashboardDoctor,
    HeroProfile,
    ProfileContentDoctor,
    FooterSite,
  },
};
</script>
