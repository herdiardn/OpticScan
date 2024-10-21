<template>
  <div class="signup-container">
    <div class="card">
      <SectionSignUp />
      <SectionOne :isSignIn="false" />
    </div>
  </div>
</template>

<script>
import SectionSignUp from "@/components/SectionSignUp.vue";
import SectionOne from "@/components/SectionOne.vue";

export default {
  name: "SignUp",
  components: {
    SectionOne,
    SectionSignUp,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
.signup-container {
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

@media (max-width: 768px) {
  .signup-container {
    background-image: url("@/assets/login.png");
    height: 100vh;
  }

  .card {
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;
    overflow-y: auto;
  }

  .signup-section {
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: rgb(255, 255, 255, 0.8);
  }
}
</style>
