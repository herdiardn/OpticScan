<template>
  <section id="hero" class="hero-section">
    <div class="container">
      <div class="user">
        <h3 v-if="isDoctor">Hi, Dr. Herdi Ardana!</h3>
        <h3 v-else>Hi, Herdi Ardana!</h3>
        <p>Welcome and start your journey</p>
      </div>

      <h2>Your Journey to a Better Vision Starts Now</h2>
      <p>
        Welcome to OpticScan. With advanced technology and personalized care. We
        offer precise eye exams and customized solutions. Find clarity and
        confidence with OpticScan today
      </p>
      <div class="back-button">
        <router-link :to="isDoctor ? '/patients' : '/myhistory'">
          <button class="btn-start">
            {{ isDoctor ? "Patients" : "My History" }}
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroDashboard",
  props: {
    isDoctor: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  height: 100vh;
  background-image: url("@/assets/bg-dashboard.png");
  background-size: cover;
  color: white;
  text-align: left;
}
.container {
  padding-left: 75px;
  width: 60%;
  box-sizing: border-box;
}
h3 {
  font-weight: normal;
}
h2 {
  font-size: 2em;
}

p {
  width: 600px;
}
.btn-start {
  margin-top: 20px;
  padding: 15px 40px;
  background-color: #2450ff;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  justify-content: left;
  align-items: left;
}

.back-button {
  display: flex;
  justify-content: left;
}

.btn-start:hover {
  box-shadow: 0 1px 15px rgba(255, 255, 255, 0.3);
}

@media (max-width: 1024px) {
  p {
    width: 450px;
  }
}

@media screen and (max-width: 768px) {
  .hero-section {
    overflow: auto;
    background-position: center;
  }
  .user {
    margin: -150px 0px 70px -30px;
  }

  .user p {
    margin-top: -15px;
    font-size: 12px;
    text-align: left;
    margin-left: 0px;
  }
  h2 {
    text-align: center;
    margin-left: -20px;
    width: 250px;
  }
  p {
    width: 170%;
    text-align: center;
    font-size: 12px;
    margin-left: -20px;
  }

  .back-button {
    width: 170%;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-left: -20px;
  }
}
</style>
