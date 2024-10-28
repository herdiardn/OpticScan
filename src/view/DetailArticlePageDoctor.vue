<template>
  <HeaderDashboard />
  <section id="DetailArticlePage" class="DetailArticlePage-section">
    <div class="head-image">
      <img
        src="@/assets/bg-detailarticle.png"
        alt="Article Main Image"
        class="main-image"
      />

      <div class="card">
        <p>Article</p>
        <h2>This is The Title of Article</h2>
        <p class="article-meta">
          by <strong>Author Name</strong> on October 1, 2024
        </p>
        <p class="reading-time">7 minutes read</p>
      </div>
    </div>
    <div class="btn-back">
      <router-link to="/morearticledoctor"
        ><i class="fa-solid fa-chevron-left"></i
      ></router-link>
    </div>

    <div class="container">
      <div class="article-body">
        <img
          src="@/assets/articles.png"
          alt="Secondary Image"
          class="first-image"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim,
          erat et consectetur laoreet, nunc massa sollicitudin justo, et
          fringilla lectus lacus quis nunc. Nullam tincidunt arcu non orci
          elementum, a posuere magna lacinia. Vivamus sit amet consequat ipsum,
          non efficitur felis. Proin tempor eros eget dolor rhoncus, vel
          scelerisque enim iaculis. Sed vitae ante eu magna ullamcorper
          venenatis. Ut in dignissim libero. Aliquam scelerisque ligula vitae
          ligula sodales, sit amet accumsan erat vulputate. Nam in porttitor
          justo. Integer dapibus felis vitae nisl ullamcorper, vel gravida sem
          cursus. Suspendisse potenti. Donec tristique tortor vel semper
          aliquet. Phasellus ultricies urna quis nisi interdum, sit amet
          efficitur nulla vehicula. Aliquam sed convallis purus, in fermentum
          turpis. Cras ut odio felis. Integer pulvinar est nec turpis
          consectetur, nec eleifend mi pharetra. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Ut
          non erat ut metus vehicula cursus. Vestibulum pharetra metus sed massa
          gravida, non aliquet felis posuere.
        </p>
        <img
          src="@/assets/article.png"
          alt="Secondary Image"
          class="secondary-image"
        />
        <p class="lastparagraf">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim,
          erat et consectetur laoreet, nunc massa sollicitudin justo, et
          fringilla lectus lacus quis nunc. Nullam tincidunt arcu non orci
          elementum, a posuere magna lacinia. Vivamus sit amet consequat ipsum,
          non efficitur felis. Proin tempor eros eget dolor rhoncus, vel
          scelerisque enim iaculis. Sed vitae ante eu magna ullamcorper
          venenatis. Ut in dignissim libero. Aliquam scelerisque ligula vitae
          ligula sodales, sit amet accumsan erat vulputate. Nam in porttitor
          justo. Integer dapibus felis vitae nisl ullamcorper, vel gravida sem
          cursus. Suspendisse potenti. Donec tristique tortor vel semper
          aliquet. Phasellus ultricies urna quis nisi interdum, sit amet
          efficitur nulla vehicula. Aliquam sed convallis purus, in fermentum
          turpis. Cras ut odio felis. Integer pulvinar est nec turpis
          consectetur, nec eleifend mi pharetra. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Ut
          non erat ut metus vehicula cursus.
        </p>
        <img src="@/assets/table.png" class="table" />
        <p>
          Suspendisse potenti. Donec tristique tortor vel semper aliquet.
          Phasellus ultricies urna quis nisi interdum, sit amet efficitur nulla
          vehicula. Aliquam sed convallis purus, in fermentum turpis. Cras ut
          odio felis. Integer pulvinar est nec turpis consectetur, nec eleifend
          mi pharetra. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Ut non erat ut metus vehicula
          cursus. Vestibulum pharetra metus sed massa gravida, non aliquet felis
          posuere.
        </p>
      </div>
      <img src="@/assets/line.png" class="line" />
      <div class="btn">
        <router-link to="/morearticle"
          ><button class="back-button">Back</button></router-link
        >
        <router-link to="/AddArticle"
          ><button class="edit-button">Edit</button></router-link
        >
      </div>
    </div>
  </section>
  <FooterSite />
</template>

<script>
import FooterSite from "@/components/FooterSite.vue";
import HeaderDashboard from "@/components/HeaderDashboard.vue";

export default {
  name: "DetailArticlePage",
  components: {
    HeaderDashboard,
    FooterSite,
  },
};
</script>

<style scoped>
#DetailArticlePage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  background-color: white;
  color: black;
  text-align: center;
}

.head-image {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0;
  padding: 0;
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
  box-shadow: none;
}

.card {
  position: absolute;
  bottom: -140px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: black;
  z-index: 10;
}

.card h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 10px 0;
}

.card h2::after {
  content: "";
  display: block;
  width: 10%;
  height: 6px;
  background-color: #2450ff;
  margin: 20px auto 0;
}

.article-meta {
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.reading-time {
  font-size: 0.8rem;
  color: gray;
}

.btn-back {
  position: absolute;
  left: 50px;
  top: 480px;
  font-size: 35px;
  z-index: 1000;
}

.btn-back a {
  color: #2450ff;
}

.container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  background-color: white;
  margin-bottom: 50px;
  padding-top: 30px;
}

.article-body {
  text-align: left;
  padding-top: 100px;
}

.first-image {
  width: 900px;
  border-radius: 10px;
  margin: 0 auto;
  display: block;
  padding-top: 50px;
}

.secondary-image {
  width: 30%;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.article-body p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  padding: 0px 150px;
}

.table {
  width: 500px;
  display: block;
  margin: 0 auto;
}

.line {
  width: 200px;
  display: block;
  padding: 20px 0px 20px 150px;
}

.btn {
  margin-top: 30px;
  padding-left: 150px;
  text-align: left;
}

.back-button {
  background-color: #2450ff;
  color: white;
  padding: 10px 40px;
  margin-right: 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #1a3cb3;
}

.edit-button {
  background-color: white;
  color: #2450ff;
  padding: 10px 40px;
  border: 1px solid #2450ff;
  border-radius: 20px;
  cursor: pointer;
}

.edit-button:hover {
  background-color: #2450ff;
  color: white;
}

@media (max-width: 1024px) {
  .btn-back {
    position: absolute;
    left: 20px;
    top: 40px;
    font-size: 25px;
    z-index: 1000;
  }

  .btn-back a {
    color: white;
  }

  .first-image {
    width: 600px;
  }

  .secondary-image {
    width: 40%;
    padding-left: 20px;
  }

  .article-body p {
    padding: 0px 100px;
  }

  .line {
    padding: 20px 0px 20px 100px;
  }

  .btn {
    padding-left: 100px;
  }
}

@media screen and (max-width: 768px) {
  .main-image {
    height: 170px;
  }

  .btn-back {
    position: absolute;
    left: 20px;
    top: 60px;
    font-size: 25px;
    z-index: 1000;
  }
  .btn-back a {
    color: white;
  }

  .card {
    width: 70%;
    bottom: -100px;
    height: 125px;
  }

  .card p {
    margin-top: -5px;
  }

  .card h2 {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  .card h2::after {
    background-color: #2450ff;
    margin: 10px auto 0;
    height: 4px;
  }

  .container {
    padding-top: 0px;
  }

  .first-image {
    width: 300px;
  }

  .secondary-image {
    width: 40%;
    padding-left: 20px;
  }

  .article-body p {
    padding: 0px 50px;
  }

  .table {
    width: 250px;
  }

  .line {
    width: 150px;
    padding: 20px 0px 20px 50px;
  }

  .btn {
    padding-left: 50px;
  }
}
</style>
