<template>
  <section id="WhyUs" class="WhyUs-section">
    <h2>Why Us?</h2>
    <div class="container">
      <!-- Card 1 -->
      <div class="card">
        <img
          src="@/assets/why-icon.png"
          alt="AI Innovation Icon"
          class="card-icon"
        />
        <h3>AI Innovation</h3>
        <p>Artificial Intelligence (AI) technology for eye health monitoring</p>
      </div>

      <!-- Card 2 -->
      <div class="card">
        <img
          src="@/assets/why-icon.png"
          alt="Healthcare Innovation Icon"
          class="card-icon"
        />
        <h3>AI Innovation</h3>
        <p>Artificial Intelligence (AI) technology for eye health monitoring</p>
      </div>

      <!-- Card 3 -->
      <div class="card">
        <img
          src="@/assets/why-icon.png"
          alt="Technology Leadership Icon"
          class="card-icon"
        />
        <h3>AI Innovation</h3>
        <p>Artificial Intelligence (AI) technology for eye health monitoring</p>
      </div>

      <!-- Card 4 -->
      <div class="card">
        <img
          src="@/assets/why-icon.png"
          alt="Research & Development Icon"
          class="card-icon"
        />
        <h3>AI Innovation</h3>
        <p>Artificial Intelligence (AI) technology for eye health monitoring</p>
      </div>

      <!-- Card 5 -->
      <div class="card">
        <img
          src="@/assets/why-icon.png"
          alt="Patient-Centered Care Icon"
          class="card-icon"
        />
        <h3>AI Innovation</h3>
        <p>Artificial Intelligence (AI) technology for eye health monitoring</p>
      </div>

      <!-- Card 6 -->
      <div class="card">
        <img
          src="@/assets/why-icon.png"
          alt="Global Reach Icon"
          class="card-icon"
        />
        <h3>AI Innovation</h3>
        <p>Artificial Intelligence (AI) technology for eye health monitoring</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyUs",
};
</script>

<style scoped>
.WhyUs-section {
  padding-bottom: 60px;
  background-color: #0033cc; /* Changed to a solid color */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 20px;
}

.WhyUs-section h2 {
  padding: 0 0 30px;
  margin: 0;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 75px;
  justify-items: center;
}

.card {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  width: 250px;
  height: 110px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  color: black;
}

.card:hover {
  transform: translateY(-10px);
}

.card-icon {
  height: 35px;
}

h3 {
  margin-top: 5px;
  font-size: 1.2rem;
}

p {
  margin-top: -10px;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
}

@media (max-width: 1024px) {
  .WhyUs-section {
    height: 150vh;
  }
  .WhyUs-section h2 {
    padding: 0 0 30px;
    margin: 0;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    justify-items: center;
  }

  .card {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    text-align: left;
    width: 300px;
    height: 150px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    color: black;
  }

  .card:hover {
    transform: translateY(-10px);
  }

  .card-icon {
    height: 45px;
    margin-bottom: 15px;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.2rem;
    padding-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.6);
  }
}

@media (max-width: 768px) {
  .WhyUs-section {
    height: 90vh;
  }

  .WhyUs-section h2 {
    padding-bottom: 30px;
    margin-top: -30px;
  }

  .container {
    grid-template-columns: repeat(2, 1fr); /* 3 cards per row */
  }

  .card {
    width: 100px;
    height: 120px;
  }
  .card-icon {
    height: 40px;
    margin-bottom: -3px;
  }

  h3 {
    font-size: 0.7rem;
    padding-bottom: 10px;
  }

  p {
    font-size: 0.6rem;
  }
}
</style>
