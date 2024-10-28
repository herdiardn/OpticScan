<template>
  <section id="articles" class="article-section">
    <h2>Articles</h2>
    <div class="container">
      <div v-for="index in 4" :key="index" class="card">
        <img src="@/assets/article.png" alt="Article Image" class="card-img" />
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <router-link :to="isDoctor ? '/detailarticledoctor' : '/detailarticle'">
          <button class="btn-signin">Read full article</button>
        </router-link>
      </div>
    </div>
    <div class="btn-more">
      <router-link :to="isDoctor ? '/morearticledoctor' : '/morearticle'">
        <button><strong>more</strong></button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "ArticlePage",
  props: {
    isDoctor: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.article-section {
  padding-bottom: 60px;
  background-image: url("@/assets/bg-article.png");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}

.article-section h2 {
  color: #003adb;
  padding: 0 0 15px 0;
  margin-top: 10px;
}

.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  justify-items: center;
  box-sizing: border-box;
}
h3 {
  margin-top: 0px;
}

p {
  margin-top: -25px;
  font-size: 12px;
}

.card {
  background-color: white;
  border-radius: 10px;
  padding-bottom: 25px;
  text-align: center;
  width: 240px;
  height: 320px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;
  color: black;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card h3,
.card p {
  padding: 10px;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.container button {
  padding: 10px 15px;
  border: none;
  background-color: #2450ff;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
  margin: 0px 0px 20px 10px;
  font-size: 10px;
}

.container button:hover {
  background-color: #1a3cb3;
}

.btn-more button {
  width: 100%;
  padding: 10px 30px;
  margin-top: 20px;
  background-color: #2450ff;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 35px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.btn-more button:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

@media (max-width: 1024px) {
  .article-section {
    height: 160vh;
    padding-top: 40px;
    background-position: center;
  }

  .container {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  h2 {
    margin-bottom: 20px;
  }
  .card {
    width: 250px;
    height: 330px;
    margin: 5px;
  }

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 13px;
  }
  .btn-more button {
    margin-top: 40px;
  }
}

@media screen and (max-width: 768px) {
  .article-section {
    height: 90vh;
    padding-top: 40px;
    background-position: center;
  }

  .container {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  h2 {
    margin-bottom: 5px;
  }
  .card {
    width: 140px;
    height: 270px;
    margin: 5px;
  }

  h3 {
    font-size: 13px;
    margin-top: -10px;
  }

  p {
    margin-top: -30px;
    font-size: 8.5px;
  }
  .btn-more button {
    margin-top: 20px;
  }
}
</style>
