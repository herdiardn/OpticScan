<template>
  <section id="ArticlesDashboard" class="ArticlesDashboard-section">
    <div class="container">
      <div class="find">
        <h2>Find your article and get more insight</h2>
      </div>

      <div class="search">
        <input v-model="search" placeholder="Search..." />
        <button><i class="fas fa-search"></i></button>
      </div>

      <div class="card-wrapper">
        <div class="cards-container">
          <!-- Loop through cards -->
          <div v-for="(article, index) in 9" :key="index" class="card">
            <img
              src="@/assets/article.png"
              alt="Article Image"
              class="card-img"
            />
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <router-link to="/detailarticle"
              ><button class="btn-signin">
                Read full article
              </button></router-link
            >
          </div>
        </div>
      </div>

      <div class="pagination">
        <button @click="prevPage">Previous</button>
        <span>1</span>
        <button @click="nextPage">Next</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ArticlesDashboard",
};
</script>

<style scoped>
.ArticlesDashboard-section {
  display: flex;
  align-items: center;
  justify-content: center; /* Center content */
  height: auto;
  background-color: white;
  color: black;
  text-align: center;
}

.container {
  padding-left: 75px;
  width: 60%;
}
h2 {
  width: 35%;
  padding: 30px 0px;
  margin: 0 auto;
  text-align: center;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
  text-align: left;
}

.card {
  background-color: white;
  border-radius: 10px;
  flex-basis: calc(33.333% - 20px);
  transition: transform 0.3s;
  color: black;
}

.card-wrapper {
  background-color: white;
  border-radius: 10px;
  padding: 30px 40px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  color: black;
}

.card-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card h4,
.card p {
  padding: 10px;
}
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

h4 {
  margin: 0px 0px -20px 0px;
}

p {
  font-size: 0.7rem;
  color: rgba(0, 0, 0, 0.6);
}

.search {
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  padding-bottom: 30px;
}
input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #2450ff;
  border-radius: 20px 0px 0px 20px;
}

.search button {
  padding: 10px 15px;
  border: none;
  background-color: #2450ff;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
  border-radius: 0px 20px 20px 0px;
}

.card-wrapper button {
  padding: 10px 15px;
  border: none;
  background-color: #2450ff;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
  margin: 0px 0px 20px 10px;
  font-size: 10px;
}

button:hover {
  background-color: #1a3cb3; /* Darken button on hover */
}

.pagination {
  display: flex;
  align-items: center;
  margin: 30px 0px;
  justify-content: center;
}

.pagination button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  margin: 0px 10px;
}

.pagination span {
  color: #007bff;
  text-decoration: underline;
  padding: 0px 10px;
}
</style>
