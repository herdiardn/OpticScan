<template>
  <section id="service" class="service-section">
    <h2>Our Services</h2>
    <div class="container">
      <div class="image-content">
        <img src="@/assets/service.png" alt="" />
      </div>
      <div class="text-content">
        <h1>Early Detection for Eye Disease (OpticScan)</h1>
        <p>
          OpticScan offers an advanced service that utilizes artificial
          intelligence (AI) and Internet of Things (IoT) technology to
          facilitate early detection and diagnosis of eye diseases. By
          integrating real-time data from patient examinations, OpticScan’s AI
          analyzes key indicators of eye health, providing accurate and fast
          diagnostic results. The platform enables healthcare providers to input
          examination data, which is processed by AI to generate detailed
          assessments, helping detect conditions such as glaucoma, cataracts,
          and diabetic retinopathy. Patients can easily access their diagnosis
          and medical history through an intuitive dashboard, empowering
          proactive eye care management.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyServices",
};
</script>

<style scoped>
.service-section {
  padding-bottom: 60px;
  background-image: url("@/assets/bg-service.png");
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding-top: 30px;
}

.service-section h2 {
  padding: 0 0 30px 75px;
  margin: 0;
}

.container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.text-content {
  flex: 1;
  padding-right: 100px;
}

.image-content {
  flex: 1;
  padding-left: 45px;
}

h1 {
  font-size: 2.5em;
  margin: 5px 0 20px 0;
}

p {
  font-size: 13px;
  line-height: 1.6;
  padding: 30px 30px 30px 0;
}

img {
  width: 400px;
  height: auto;
}

@media (max-width: 768px) {
  .service-section {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto; /* Pastikan tinggi otomatis agar mengikuti konten */
  }

  .service-section h2 {
    padding: 0;
    margin-bottom: 20px;
  }

  .container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    padding: 0 25px;
    box-sizing: border-box;
  }

  img {
    width: 170px;
    height: auto;
    margin-bottom: 10px;
  }

  .text-content {
    padding: 0;
    margin-top: 20px;
    width: 100%;
    order: 2;
    text-align: center;
  }

  h1 {
    font-size: 1.5em;
    width: 100%;
    margin-bottom: -15px;
  }

  p {
    width: 100%;
    font-size: 12px;
    line-height: 1.4;
  }

  .btn-about {
    margin-bottom: 10px;
  }
}
</style>
