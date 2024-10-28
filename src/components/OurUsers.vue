<template>
  <section id="OurUsers" class="OurUsers-section">
    <h2>Our Users</h2>
    <div class="container">
      <!-- Card 1 -->
      <div class="card">
        <h3>Patients</h3>
        <h1>52</h1>
        <p>users</p>
      </div>

      <!-- Card 2 -->
      <div class="card">
        <h3>Doctors</h3>
        <h1>20</h1>
        <p>users</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurUsers",
};
</script>

<style scoped>
.OurUsers-section {
  padding-bottom: 60px;
  background-image: url("@/assets/bg-OurUsers.png");
  background-size: cover;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 20px;
}

.OurUsers-section h2 {
  padding-bottom: 50px;
  margin: 0;
}

.container {
  display: grid;
  display: flex;
  gap: 50px;
  justify-items: center;
}

.card {
  background-image: url("@/assets/OurUsers.png");
  background-size: cover;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  width: 350px;
  height: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  color: white;
  overflow: hidden;
  position: relative;
}

.card:hover {
  transform: translateY(-10px);
}

.card-icon {
  height: 45px;
  margin-bottom: 15px;
}

h3 {
  font-size: 1.2rem;
  margin: 0;
}

h1 {
  font-size: 5rem;
  margin: 0;
  padding-top: 5px;
}

p {
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .card {
    width: 300px;
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .OurUsers-section h2 {
    padding-top: 25px;
    padding-bottom: 20px;
  }
  .card {
    width: 300px;
    height: 100px;
  }
  h3 {
    font-size: 1rem;
  }
  h1 {
    font-size: 3rem;
  }
}
</style>
