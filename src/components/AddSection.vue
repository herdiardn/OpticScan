<template>
  <section id="addSec" class="add-section">
    <div class="container">
      <h2>
        Harvesting Intelligence from Alorithms Pioneering the Future of AI
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "AddSection",
};
</script>

<style scoped>
.add-section {
  background-image: url("@/assets/bg-addSec.png");
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  color: white;
  margin: 0 auto;
  text-align: center;
  width: 500px;
  font-size: 15px;
  line-height: 1.5;
}

@media screen and (max-width: 768px) {
  .add-section {
    height: 40vh;
  }

  h2 {
    text-align: center;
    width: 60%;
    margin: auto;
    font-size: 23px;
  }
}
</style>
