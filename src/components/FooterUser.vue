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
          <li><a href="dashboard">Home</a></li>
          <li>
            <a :href="isDoctor ? 'patients' : 'myhistory'">
              {{ isDoctor ? "Patients" : "History" }}
            </a>
          </li>
          <li><a href="morearticle">Articles</a></li>
        </ul>
      </div>

      <div class="FooterSite-bottom">
        <p>&copy; 2024 OpticScan. All rights reserved.</p>
        <div class="social-icons">
          <a href="https://www.instagram.com/humicengineering/"
            ><i class="fa-brands fa-instagram" style="color: #ffffff"></i
          ></a>
          <a href="https://humic.telkomuniversity.ac.id/"
            ><i class="fa-solid fa-globe" style="color: #ffffff"></i
          ></a>
          <a href="https://www.youtube.com/@humicengineeringresearchce1841"
            ><i class="fa-brands fa-youtube" style="color: #ffffff"></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSite",
  props: {
    isDoctor: {
      type: Boolean,
      default: false,
    },
  },
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
  font-size: 13px;
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
}

.social-icons a {
  background-color: #2450ff;
  padding: 10px 12px;
  border-radius: 20px;
}

p {
  font-family: "Poppins";
  font-size: 13px;
}

@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    padding: 0 20px;
  }

  .FooterSite-section {
    margin: 1rem 0;
    padding-right: 0;
    max-width: 100%;
  }

  .FooterSite-logo {
    width: 80px;
  }

  .social-icons a {
    padding: 5px 8px;
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 0 20px;
  }

  .FooterSite-section {
    margin: 1rem 0;
    padding-right: 0;
    max-width: 100%;
  }

  .FooterSite-logo {
    width: 80px;
  }

  .social-icons a {
    padding: 5px 8px;
  }
}
</style>
