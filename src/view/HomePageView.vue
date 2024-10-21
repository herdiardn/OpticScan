<template>
  <div>
    <MainHeader />
    <HeroSection />
    <AboutUs />
    <MyService />
    <HowItWorks />
    <WhyUs />
    <FooterSite />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutUs from "@/components/AboutUs.vue";
import MyService from "@/components/MyService.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import WhyUs from "@/components/WhyUs.vue";
import FooterSite from "@/components/FooterSite.vue";

export default {
  name: "HomePageView",
  components: {
    MainHeader,
    HeroSection,
    AboutUs,
    MyService,
    HowItWorks,
    WhyUs,
    FooterSite,
  },
};
</script>
