<template>
  <section id="OurMission" class="OurMission-section">
    <div class="container">
      <div class="image-content">
        <img src="@/assets/OurMission.png" alt="" />
      </div>
      <div class="text-content">
        <h1>Our Mission</h1>
        <p>
          Develop IoT-based systems and artificial intelligence algorithms to
          monitor and analyze factors related to eye diseases, and provide
          affordable and accessible solutions to the general public and
          healthcare facilities.
        </p>
      </div>
      <div class="image-absolute">
        <img src="@/assets/WhoAreWe-2.png" alt="WhoAreWe Image 2" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurMission",
};
</script>

<style scoped>
.OurMission-section {
  background-color: white;
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
  justify-content: space-between;
}

.text-content {
  position: relative;
  text-align: center;
  padding-left: 600px;
  margin-top: -30px;
  color: black;
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
  left: 0;
  z-index: 1;
  object-fit: cover;
}
.image-content img {
  width: 700px;
  height: 280px;
  object-fit: cover;
}
.image-absolute {
  width: 125px;
  position: absolute;
  top: 0;
  margin-top: -80px;
  right: 50px;
  z-index: 3;
}

@media (max-width: 1024px) {
  .OurMission-section {
    height: 50vh;
  }
  .image-content img {
    width: 500px;
    height: 180px;
    object-fit: cover;
  }
  .image-absolute img {
    width: 65px;
    position: absolute;
    top: 100px;
    margin-top: -80px;
    right: -45px;
    z-index: 3;
  }
  .text-content {
    padding-left: 400px;
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

@media (max-width: 768px) {
  .OurMission-section {
    height: 25vh;
  }
  .image-content {
    top: 33%;
    transform: translateY(-50%);
  }
  .image-content img {
    width: 250px;
    height: 100px;
    object-fit: cover;
  }
  .image-absolute img {
    width: 65px;
    position: absolute;
    top: 10px;
    margin-top: 20px;
    right: -45px;
    z-index: 3;
  }
  .text-content {
    padding-left: 30px;
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
