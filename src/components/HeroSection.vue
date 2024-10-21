<template>
  <section id="hero" class="hero-section">
    <div class="container">
      <h1>Smart Diagnosis for Eyes Problems</h1>
      <p>
        OpticScan: Artificial Intelligence (AI) Based Eye Disease Diagnostic
        System
      </p>
      <router-link to="/SignIn">
        <button class="btn-start">Start</button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  height: 100vh;
  background-image: url("@/assets/hero.png");
  background-size: cover;
  color: white;
}
.container {
  margin: 0;
  padding-left: 75px;
  width: 500px;
}
h1 {
  font-size: 3em;
}

p {
  width: 450px;
}
.btn-start {
  margin-top: 20px;
  padding: 10px 30px;
  background-color: #2450ff;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.btn-start:hover {
  box-shadow: 0 1px 15px rgba(255, 255, 255, 0.3);
}

/* Media Query for Mobile Responsiveness */
@media screen and (max-width: 768px) {
  .hero-section {
    justify-content: center;
    text-align: center;
  }

  .container {
    padding-left: 0;
    padding-right: 0;
  }

  h1 {
    font-size: 30px;
  }

  p {
    width: 50%;
    padding-left: 125px;
  }
}
</style>
