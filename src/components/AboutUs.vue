<template>
  <section id="about" class="about-section">
    <h2>About <span>Us</span></h2>
    <div class="container">
      <div class="text-content">
        <h1>Early Detection for Eye Disease (<span>OpticScan</span>)</h1>
        <p>
          OpticScan is a forward-thinking company committed to revolutionizing
          eye healthcare through the use of cutting-edge technology. By
          combining AI and IoT, they offer innovative solutions for early
          detection and diagnosis of eye diseases, making eye care more
          accessible, accurate, and efficient. With a clear vision of improving
          global health, OpticScan empowers both patients and healthcare
          providers with the tools to manage eye health proactively, ensuring
          better outcomes and enhancing the overall quality of care.
        </p>
        <router-link to="/AboutUsPage" class="btn-image">
          <button class="btn-about">About Us</button>
        </router-link>
      </div>
      <div class="image-content">
        <img src="@/assets/about.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.about-section {
  padding-bottom: 60px;
  background-color: #f8f9fa;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
}

.about-section h2 {
  padding: 0 0 20px 80px;
  margin: 0;
}
.about-section h2 span {
  color: #1d40cc;
}
.container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.text-content {
  flex: 2;
  padding-right: 100px;
  text-align: left;
  padding-left: 0px;
}

h1 {
  font-size: 2.5em;
  margin: 0 0 20px 0;
  width: 500px;
}
h1 span {
  color: #1d40cc;
}
p {
  font-size: 16px;
  line-height: 1.6;
  padding: 5px 0 5px 0;
  width: 500px;
}

.btn-about {
  padding: 15px 40px;
  background-color: #2450ff;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 5px;
}

.btn-about:hover {
  box-shadow: 0 0px 16px rgba(0, 0, 0, 0.3);
}

img {
  width: 500px;
  height: auto;
  border-radius: 0px 0px 0px 1000px;
}

@media screen and (max-width: 1024px) {
  .about-section {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 125vh;
  }

  .about-section h2 {
    padding: 0;
    margin-top: -10px;
  }

  .container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 25px;
    box-sizing: border-box;
    margin-top: 20px;
  }

  img {
    width: 250px;
    height: auto;
    border-radius: 0px;
  }

  .text-content {
    padding: 0;
    margin-top: 20px;
    width: 100%;
    order: 2;
    text-align: center;
  }

  h1 {
    font-size: 2em;
    width: 50%;
    margin: auto;
  }

  p {
    margin: auto;
    width: 80%;
    font-size: 15px;
    line-height: 1.4;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .btn-about {
    margin-bottom: 10px;
    padding: 8px 20px;
  }
}

@media (max-width: 768px) {
  .about-section {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 95vh;
  }

  .about-section h2 {
    padding: 0;
    margin-top: -40px;
    margin-bottom: 20px;
  }

  .container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 25px;
    box-sizing: border-box;
  }

  img {
    width: 170px;
    height: auto;
    margin-bottom: 10px;
    border-radius: 0px;
  }

  .text-content {
    padding: 0;
    margin-top: 20px;
    width: 100%;
    order: 2;
    text-align: center;
  }

  h1 {
    font-size: 1em;
    width: 100%;
    margin-bottom: 15px;
  }

  p {
    margin: auto;
    width: 80%;
    font-size: 12px;
    line-height: 1.4;
    margin-bottom: 20px;
  }

  .btn-about {
    margin-bottom: 10px;
    padding: 8px 20px;
  }
}
</style>
