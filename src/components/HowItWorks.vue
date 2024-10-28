<template>
  <section id="HowItWorks" class="howitworks-section">
    <h2>How <span>It Works</span></h2>
    <div class="container">
      <div class="content">
        <img src="@/assets/1.png" alt="" />
        <p>The patient's eyes are examined by a doctor</p>
      </div>
      <div class="content-mid">
        <img src="@/assets/2.png" alt="" />
        <p>
          The doctor inputs the patient's eye examination data into OpticScan
        </p>
      </div>
      <div class="content">
        <img src="@/assets/3.png" alt="" />
        <p>
          Using AI, OpticScan generates a diagnosis based on the inputted data
        </p>
      </div>
      <div class="content">
        <img src="@/assets/4.png" alt="" />
        <p>The result of the AI diagnosis are uploaded to the patient's data</p>
      </div>
      <div class="content-five">
        <img src="@/assets/5.png" alt="" />
        <p>The patient received the diagnosis results</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HowItWorks",
};
</script>

<style scoped>
.howitworks-section {
  background-color: white;
  min-height: 100vh; /* Pastikan section selalu memenuhi tinggi viewport */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 45px;
  overflow: hidden; /* Menghindari konten keluar dari section */
}

.howitworks-section h2 {
  padding-bottom: 20px;
  text-align: center;
}

.howitworks-section h2 span {
  color: #1d40cc;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  margin: 0 auto;
  justify-items: center;
  align-items: start;
  gap: 20px;
}

.container .content:nth-child(4) {
  margin-top: -50px;
  grid-column: 1 / span 2;
  grid-row: 2;
  justify-self: center;
}

.container .content-five:nth-child(5) {
  margin-top: -70px;
  grid-column: 2 / span 3;
  grid-row: 2;
  justify-self: center;
  padding-left: 90px;
  padding-top: 30px;
}
.content-mid {
  padding: 0px 140px 0px 140px;
}
p {
  text-align: center;
  width: 200px;
}

.content-five img {
  width: 100px;
  height: auto;
}
img {
  width: 150px;
  height: auto;
}

@media screen and (max-width: 1024px) {
  .howitworks-section {
    height: 200vh;
  }

  .container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 40px;
  }
  .howitworks-section h2 {
    padding-bottom: 20px;
    text-align: center;
    margin-top: 50px;
  }
  .content {
    padding: 10px 10px 10px 10px;
  }

  .content img {
    width: 200px;
  }

  .content-five img {
    width: 180px;
    height: auto;
  }

  p {
    width: 120px;
    font-size: 12px;
    margin: 5px 0 0 40px;
  }

  .container .content:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
    padding-bottom: 70px;
    padding-right: 30px;
  }

  .container .content:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
    padding-bottom: 70px;
  }
  .content-mid {
    padding: 0px;
  }

  .content-mid img {
    width: 200px;
  }
  .container .content:nth-child(3) {
    grid-column: 1;
    grid-row: 2;
  }

  .container .content:nth-child(4) {
    grid-column: 2;
    grid-row: 2;
    margin-top: 0px;
  }

  .container .content-five:nth-child(5) {
    grid-column: 1 / span 2;
    grid-row: 3;
    margin-top: 0px;
    margin-left: -30px;
  }
}

@media (max-width: 768px) {
  .howitworks-section {
    height: 90vh;
  }

  .container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 20px;
  }
  .howitworks-section h2 {
    padding-bottom: 40px;
    text-align: center;
    margin-top: -50px;
  }
  .content {
    padding: 10px 10px 10px 10px;
  }

  .content img {
    width: 60px;
  }

  p {
    width: 120px;
    font-size: 12px;
    margin: 5px 0 0 -15px;
  }

  .container .content:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
    padding-bottom: 70px;
  }

  .container .content:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
    padding-bottom: 70px;
  }
  .content-mid {
    padding: 0px;
  }

  .content-mid img {
    width: 80px;
  }

  .content-five img {
    width: 60px;
  }

  .container .content:nth-child(3) {
    grid-column: 1;
    grid-row: 2;
  }

  .container .content:nth-child(4) {
    grid-column: 2;
    grid-row: 2;
    margin-top: 0px;
  }

  .container .content-five:nth-child(5) {
    grid-column: 1 / span 2;
    grid-row: 3;
    margin-top: 0px;
    margin-left: -30px;
  }
}
</style>
