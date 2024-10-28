<template>
  <div>
    <HeaderDashboard />
    <HeroMyHistory />
    <MyHistoryDashboard />
    <FooterUser />
  </div>
</template>

<script>
import HeaderDashboard from "@/components/HeaderDashboard.vue";
import HeroMyHistory from "@/components/HeroMyHistory.vue";
import MyHistoryDashboard from "@/components/MyHistoryDashboard.vue";
import FooterUser from "@/components/FooterUser.vue";

export default {
  name: "MyHistoryPage",
  components: {
    HeaderDashboard,
    HeroMyHistory,
    MyHistoryDashboard,
    FooterUser,
  },
};
</script>
