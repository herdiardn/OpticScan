<template>
  <div>
    <MainHeader :isActive="'about'" />
    <HeroAboutUs />
    <WhoAreWe />
    <OurVision />
    <OurMission />
    <OurUsers />
    <FooterSite />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import HeroAboutUs from "@/components/HeroAboutUs.vue";
import WhoAreWe from "@/components/WhoAreWe.vue";
import OurVision from "@/components/OurVision.vue";
import OurMission from "@/components/OurMission.vue";
import OurUsers from "@/components/OurUsers.vue";
import FooterSite from "@/components/FooterSite.vue";

export default {
  name: "AboutUsPage",
  components: {
    MainHeader,
    HeroAboutUs,
    WhoAreWe,
    OurVision,
    OurMission,
    OurUsers,
    FooterSite,
  },
};
</script>
