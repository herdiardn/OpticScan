<template>
  <section id="ArticlesDashboard" class="ArticlesDashboard-section">
    <div class="container">
      <div class="btn-back">
        <router-link to="/dashboard"
          ><i class="fa-solid fa-chevron-left" style="color: #2450ff"></i
        ></router-link>
      </div>
      <div class="find">
        <h2>Find your article and get more insight</h2>
      </div>

      <div class="search-container">
        <input type="text" class="search-input" placeholder="Search..." />
        <i class="fa-solid fa-search search-icon"></i>
      </div>

      <div class="cards-container">
        <div v-for="(article, index) in 9" :key="index" class="card">
          <div class="image-content">
            <img
              src="@/assets/article.png"
              alt="Article Image"
              class="card-img"
            />
          </div>
          <div class="card-content">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <router-link to="/detailarticle">
              <button class="btn-signin">Read full article</button>
            </router-link>
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
  justify-content: center;
  height: auto;
  background-color: white;
  color: black;
  text-align: center;
}

.container {
  padding-left: 75px;
  width: 60%;
}

.btn-back {
  display: none;
}

h2 {
  width: 35%;
  padding: 30px 0px;
  margin: 0 auto;
  text-align: center;
}

.search-container {
  width: 30%;
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.search-input {
  width: 87%;
  flex: 1;
  padding: 10px 20px;
  border: 1px solid #007bff;
  border-radius: 20px;
}

.search-input::placeholder {
  color: #007bff;
  font-style: italic;
}

.search-icon {
  position: absolute;
  transform: translateY(-50%);
  right: 0px;
  top: 50%;
  padding: 5px 13px;
  background-color: #007bff;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 30px 40px;
}

.card {
  background-color: white;
  border-radius: 10px;
  flex-basis: calc(33.333% - 20px);
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

input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #2450ff;
  border-radius: 20px 0px 0px 20px;
}

.card-content button {
  padding: 10px 15px;
  border: none;
  background-color: #2450ff;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
  margin: 0px 0px 20px 10px;
  font-size: 10px;
}

.card-content button:hover {
  background-color: #1a3cb3;
}

.pagination {
  display: flex;
  align-items: center;
  margin: 30px 0px;
  justify-content: center;
}

.pagination button {
  background-color: transparent;
  color: #007bff;
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

@media (max-width: 1024px) {
  .container {
    padding-left: 0px;
    width: 90%;
  }
  .btn-back {
    display: flex;
    font-size: 1.5em;
    padding-top: 20px;
  }

  h2 {
    width: 35%;
  }

  .cards-container {
    padding: 20px;
  }
  .card-content button {
    margin: -10px 0px 20px 10px;
    width: 90%;
  }
}

/* Media Query for Mobile Responsiveness */
@media screen and (max-width: 768px) {
  .container {
    padding: 20px;
    width: 100%;
  }

  .btn-back {
    display: flex;
    font-size: 1.5em;
    padding-top: 0px;
  }

  h2 {
    width: 70%;
    padding: 30px 0px;
    margin: auto;
    text-align: center;
  }

  .search-container {
    width: 50%;
  }

  .search-input {
    width: 87%;
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #007bff;
    border-radius: 20px;
  }

  .search-icon {
    padding: 5px 13px;
  }

  .cards-container {
    flex-direction: column;
    gap: 0px;
    padding: 20px;
  }

  .card {
    display: flex;
    padding: 10px;
  }

  .card-img {
    width: 150px;
    border-radius: 10px;
    height: 100px;
  }

  .card-content {
    text-align: left;
    margin-top: -10px;
  }

  p {
    font-size: 0.55rem;
  }

  .card-content button {
    margin: -10px 0px 20px 10px;
    width: 100%;
  }
}
</style>
