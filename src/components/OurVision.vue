<template>
  <section id="OurVision" class="OurVision-section">
    <div class="container">
      <div class="text-content">
        <h1>Our Vision</h1>
        <p>
          To be the leading solution in early detection of eye diseases through
          innovative monitoring technology, creating a healthier and safer
          world.
        </p>
      </div>
      <div class="image-content">
        <img src="@/assets/OurVision.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurVision",
};
</script>

<style scoped>
.OurVision-section {
  background-color: #1d40cc;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.container {
  display: flex;
  position: relative;
}

.text-content {
  position: relative;
  text-align: center;
  padding-left: 200px;
  margin-top: -50px;
  color: white;
  z-index: 2;
}

h1 {
  font-size: 2.5em;
}

p {
  font-size: 16px;
  line-height: 1.6;
  width: 450px;
}
.image-content {
  position: absolute;
  top: 53%;
  transform: translateY(-50%);
  right: 0;
  z-index: 1;
}
img {
  width: 700px;
  height: 280px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .OurVision-section {
    height: 50vh;
  }
  img {
    width: 250px;
    height: 180px;
    object-fit: cover;
  }

  .text-content {
    padding-left: 100px;
  }

  h1 {
    font-size: 2em;
  }

  p {
    font-size: 12px;
    line-height: 1.6;
    width: 300px;
  }
}
</style>
