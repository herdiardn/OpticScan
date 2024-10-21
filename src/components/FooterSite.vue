<template>
  <footer class="FooterSite">
    <div class="container">
      <div class="FooterSite-section logo-section">
        <img
          src="@/assets/logo.png"
          alt="OpticScan Logo"
          class="FooterSite-logo"
        />
        <p class="FooterSite-description">
          An innovative solution using IoT and AI technology for early detection
          of eye diseases.
        </p>
      </div>

      <div class="FooterSite-section contact-info">
        <h3>Contact Info</h3>
        <p>
          Address: Gedung F (Gedung Kultubai Selatan), Universitas Telkom, Jl.
          Telekomunikasi no. 1, Terusan Buahbatu - Bojongsoang, Sukapura, Kec.
          Dayeuhkolot, Kabupaten Bandung, Jawa Barat
        </p>
        <p>Phone: +62 812 XXXX XXXX</p>
        <p>Email: humic@telkomuniversity.ac.id</p>
      </div>

      <div class="FooterSite-section important-links">
        <h3>Important Links</h3>
        <ul>
          <li><a href="#hero ">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#HowItWorks">How It Works</a></li>
          <li><a href="#WhyUs">Articles</a></li>
        </ul>
      </div>

      <div class="FooterSite-bottom">
        <p>&copy; 2024 OpticScan. All rights reserved.</p>
        <div class="social-icons">
          <a href="#"><i class="icon-instagram"></i></a>
          <a href="#"><i class="icon-twitter"></i></a>
          <a href="#"><i class="icon-youtube"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSite",
};
</script>

<style scoped>
.FooterSite {
  background-color: #000;
  color: #fff;
  padding: 2rem 0;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 75px;
}

.FooterSite-section {
  flex: 1;
  margin: 0 1rem;
}

.logo-section {
  max-width: 250px;
  padding-right: 150px;
}

.FooterSite-logo {
  padding-top: 20px;
  width: 100px;
}

.FooterSite-description {
  margin-top: 1rem;
}
.contact-info {
  padding-right: 150px;
}
.contact-info h3,
.important-links h3 {
  margin-bottom: 1rem;
}

.important-links ul {
  list-style: none;
  padding: 0;
}

.important-links li {
  margin-bottom: 0.5rem;
}

.important-links a {
  color: #fff;
  text-decoration: none;
}

.FooterSite-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  border-top: 1px solid #444;
  padding-top: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons i {
  font-size: 1.5rem;
  color: #fff;
}

p {
  font-family: "Poppins";
  font-size: 13px;
}
</style>
