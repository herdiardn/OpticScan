<template>
  <div class="signin-container">
    <div class="card">
      <SectionOne :isSignIn="true" />
      <SectionSignIn />
    </div>
  </div>
</template>

<script>
import SectionOne from "@/components/SectionOne.vue";
import SectionSignIn from "@/components/SectionSignIn.vue";
export default {
  name: "SignIn",
  components: {
    SectionOne,
    SectionSignIn,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
.signin-container {
  background-image: url("@/assets/bg-login.png");
  background-size: cover;
  background-position: center;
  display: flex;
  height: 100vh;
}
.card {
  display: flex;
  margin: 50px auto;
  width: 75%;
  border-radius: 10px;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .signin-container {
    background-image: url("@/assets/login.png");
    height: 100vh;
  }

  .card {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;
    overflow-y: auto;
  }
  .signin-section {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: rgb(255, 255, 255, 0.8);
  }
}

@media (max-width: 768px) {
  .signin-container {
    background-image: url("@/assets/login.png");
    height: 100vh;
  }

  .card {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;
    overflow-y: auto;
  }
  .signin-section {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: rgb(255, 255, 255, 0.8);
  }
}
</style>
