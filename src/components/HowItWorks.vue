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
      <div class="content">
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
  max-width: 1200px;
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

.container .content:nth-child(5) {
  margin-top: -70px;
  grid-column: 2 / span 3;
  grid-row: 2;
  justify-self: center;
  padding-left: 90px;
}
.content-mid {
  padding: 0px 140px 0px 140px;
}
p {
  text-align: center;
  width: 200px;
}
img {
  width: 150px;
  height: auto;
}
@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr); /* 2 konten per baris */
    grid-template-rows: auto; /* Otomatis mengikuti konten */
    gap: 20px; /* Jarak antar item */
  }
  .howitworks-section h2 {
    padding-bottom: 20px;
    text-align: center;
    margin-top: -10px;
  }
  .content {
    padding: 10px 30px 10px 50px; /* Padding untuk konten di ponsel */
  }

  .content img {
    width: 80px; /* Ukuran gambar lebih kecil di ponsel */
  }

  p {
    width: 120px; /* Lebar teks di ponsel */
    font-size: 12px; /* Ukuran font lebih kecil */
    margin: 5px 0 0 -10px; /* Margin untuk memberi jarak dari gambar */
  }

  /* Atur ulang posisi konten */
  .container .content:nth-child(1) {
    grid-column: 1; /* Kolom 1 */
    grid-row: 1; /* Baris 1 */
  }

  .container .content:nth-child(2) {
    grid-column: 2; /* Kolom 2 */
    grid-row: 1; /* Baris 1 */
  }
  .content-mid {
    padding: 0px;
  }

  .content-mid img {
    width: 100px;
  }
  .container .content:nth-child(3) {
    grid-column: 1; /* Kolom 1 */
    grid-row: 2; /* Baris 2 */
  }

  .container .content:nth-child(4) {
    grid-column: 2; /* Kolom 2 */
    grid-row: 2; /* Baris 2 */
    margin-top: 0px;
  }

  .container .content:nth-child(5) {
    grid-column: 1 / span 2; /* Konten terakhir memenuhi lebar 2 kolom */
    grid-row: 3; /* Baris 3 */
    margin-top: -50px;
  }
}
</style>
