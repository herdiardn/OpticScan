<template>
  <section id="WhoAreWe" class="WhoAreWe-section">
    <div class="container">
      <div class="image-content">
        <img src="@/assets/WhoAreWe.png" alt="WhoAreWe Image 1" />
      </div>
      <div class="text-content">
        <h1>Who Are We?</h1>
        <p>
          OpticScan is an innovative solution that uses
          <strong>Internet of Things (IoT)</strong> and
          <strong>Artificial Intelligence (AI)</strong> technology for early
          detection of eye diseases. With a vision of creating a healthier world
          where critical eye conditions can be identified early, ensuring timely
          treatment and prevention of more serious complications, OpticScan
          provides affordable and accessible solutions for the community and
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
  name: "WhoAreWe",
};
</script>

<style scoped>
.WhoAreWe-section {
  padding: 60px 0;
  background-color: white;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  position: relative;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 auto;
  position: relative;
}

.text-content {
  margin-left: -200px;
}

.image-content {
  margin-left: -120px;
  width: 700px;
}

.image-absolute {
  width: 125px;
  position: absolute;
  top: 0;
  right: 0;
  margin: -40px -180px 0px 0px;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
}

p {
  font-size: 1.1em;
  line-height: 1.6;
  text-align: center;
  margin: 0 auto;
  max-width: 500px;
}

img {
  width: 100%;
  height: auto;
  max-width: 400px;
}

@media (max-width: 768px) {
  .WhoAreWe-section {
    height: auto;
  }

  .container {
    flex-direction: column;
    align-items: center;
  }

  .text-content {
    margin-left: 0;
    text-align: center;
    padding: 0 20px;
  }

  .image-content {
    margin-left: 0;
    width: 100%;
  }

  .image-absolute {
    width: 80px;
    margin: -55px 5px 0px 0px;
  }

  h1 {
    font-size: 1.5em;
  }

  p {
    font-size: 0.8em;
    max-width: 400px;
  }
}
</style>
