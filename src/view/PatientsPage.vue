<template>
  <div>
    <HeaderDashboardDoctor />
    <HeroPatiens />
    <PatientsDashboard />
    <FooterUser :isDoctor="true" />
  </div>
</template>

<script>
import HeaderDashboardDoctor from "@/components/HeaderDashboardDoctor.vue";
import HeroPatiens from "@/components/HeroPatients.vue";
import PatientsDashboard from "@/components/PatientsDashboard.vue";
import FooterUser from "@/components/FooterUser.vue";

export default {
  name: "MyHistoryPage",
  components: {
    HeaderDashboardDoctor,
    HeroPatiens,
    PatientsDashboard,
    FooterUser,
  },
};
</script>
