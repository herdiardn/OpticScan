<template>
  <div>
    <HeaderDashboard :isActive="'myhistory'" />
    <HeroProfile />
    <ProfileContent />
    <FooterSite />
  </div>
</template>

<script>
import HeaderDashboard from "@/components/HeaderDashboard.vue";
import HeroProfile from "@/components/HeroProfile.vue";
import ProfileContent from "@/components/ProfileContent.vue";
import FooterSite from "@/components/FooterSite.vue";

export default {
  name: "ArticlePageView",
  components: {
    HeaderDashboard,
    HeroProfile,
    ProfileContent,
    FooterSite,
  },
};
</script>
