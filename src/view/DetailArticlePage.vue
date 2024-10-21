<template>
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
      <div class="back-button">
        <router-link to="/morearticle"><button>Back</button></router-link>
      </div>
    </div>
  </section>
  <FooterSite />
</template>

<script>
import FooterSite from "@/components/FooterSite.vue";
export default {
  name: "DetailArticlePage",
  components: {
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
  bottom: -100px;
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

.container {
  position: relative; /* Untuk memastikan layout tetap baik */
  width: 100%; /* Lebar penuh untuk container */
  max-width: 1200px;
  background-color: white;
  margin-bottom: 50px;
}

.article-body {
  text-align: left;
  padding-top: 100px; /* Menambahkan padding untuk menghindari overlap */
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

.back-button {
  margin-top: 30px;
  padding-left: 150px;
  text-align: left;
}

.back-button button {
  background-color: #2450ff;
  color: white;
  padding: 10px 40px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.back-button button:hover {
  background-color: #1a3cb3;
}
</style>
