<template>
  <header class="navbar">
    <div class="container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" class="logo-img" />
      </div>
      <nav :class="{ 'menu-open': menuOpen }">
        <div class="menu">
          <ul>
            <li>
              <a
                href="#hero"
                @click.prevent="scrollTo('hero')"
                :class="{ active: isActive === 'hero' }"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#about"
                @click.prevent="scrollTo('about')"
                :class="{ active: isActive === 'about' }"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="#service"
                @click.prevent="scrollTo('service')"
                :class="{ active: isActive === 'service' }"
                >Service</a
              >
            </li>
            <li>
              <a
                href="#HowItWorks"
                @click.prevent="scrollTo('HowItWorks')"
                :class="{ active: isActive === 'HowItWorks' }"
                >How It Works</a
              >
            </li>
            <li>
              <a
                href="#WhyUs"
                @click.prevent="scrollTo('WhyUs')"
                :class="{ active: isActive === 'WhyUs' }"
                >Why Us?</a
              >
            </li>
          </ul>
        </div>

        <div class="auth-buttons">
          <router-link to="/SignIn">
            <button class="btn-signin" type="button">Sign In</button>
          </router-link>
          <router-link to="/SignUp">
            <button class="btn-signup" type="button">Sign Up</button>
          </router-link>
        </div>
      </nav>
    </div>
    <!-- Hamburger menu icon -->
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",

  data() {
    return {
      isActive: "hero",
      menuOpen: false,
    };
  },

  methods: {
    scrollTo(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        this.isActive = sectionId;
        this.menuOpen = false;
      }
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu(event) {
      const menu = this.$el.querySelector("nav");
      if (
        menu &&
        !menu.contains(event.target) &&
        !event.target.closest(".hamburger") &&
        this.menuOpen
      ) {
        this.menuOpen = false;
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.closeMenu);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.closeMenu);
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 10), rgba(0, 0, 0, 0));
  padding: 20px 25px;
  z-index: 100;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  position: absolute;
  left: 15px;
  top: 15px;
}

.logo-img {
  width: 100px;
}

nav {
  display: flex;
  align-items: center;
  margin: auto;
  flex-grow: 1;
}
.menu {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}
nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 130px;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  text-decoration: none;
  color: white;
  position: relative;
}

nav ul li a.active::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: white;
  position: absolute;
  bottom: -5px;
}

.auth-buttons {
  display: flex;
  align-items: center;
  padding-right: 45px;
}

.btn-signin,
.btn-signup {
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}

.btn-signin {
  background-color: transparent;
  border: 1px solid white;
  color: white;
}

.btn-signin:hover {
  box-shadow: 0 1px 15px rgba(255, 255, 255, 0.3);
}

.btn-signup {
  background-color: #2450ff;
  color: #fff;
}

.btn-signup:hover {
  box-shadow: 0 1px 15px rgba(255, 255, 255, 0.3);
}

.hamburger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  margin-left: auto;
  padding-right: 50px;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: white;
}

@media screen and (max-width: 1024px) {
  nav {
    position: absolute;
    top: 0;
    right: 0;
    background-image: url("@/assets/sidebar.png");
    padding: 10px;
    height: 100vh;
    width: 70%;
    display: none;
    flex-direction: column;
    align-items: flex-start;
  }

  nav.menu-open {
    display: flex;
  }

  nav ul {
    padding-top: 30px;
    flex-direction: column;
    gap: 20px;
    margin-left: -20px;
  }

  nav ul li {
    width: 360%;
  }

  nav ul li a {
    color: black;
    border-radius: 10px;
    padding: 10px 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: block;
  }

  nav ul li a:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  .hamburger {
    display: flex;
  }

  .auth-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
    width: 100%;
    padding-bottom: 30px;
  }

  .btn-signin,
  .btn-signup {
    width: 88%;
    border-radius: 5px;
  }

  .btn-signin {
    background-color: transparent;
    border: 1px solid #2450ff;
    color: #2450ff;
  }
}

@media screen and (max-width: 768px) {
  nav {
    position: absolute;
    top: 0;
    right: 0;
    background-image: url("@/assets/sidebar.png");
    padding: 10px;
    height: 100vh;
    width: 70%;
    display: none;
    flex-direction: column;
    align-items: flex-start;
  }

  nav.menu-open {
    display: flex;
  }

  nav ul {
    padding-top: 30px;
    flex-direction: column;
    gap: 20px;
    margin-left: -20px;
  }

  nav ul li {
    width: 150%;
  }

  nav ul li a {
    color: black;
    border-radius: 10px;
    padding: 10px 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: block;
  }

  nav ul li a:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  .hamburger {
    display: flex;
  }

  .auth-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
    width: 100%;
    padding-bottom: 90px;
  }

  .btn-signin,
  .btn-signup {
    width: 78%;
    border-radius: 5px;
  }

  .btn-signin {
    background-color: transparent;
    border: 1px solid #2450ff;
    color: #2450ff;
  }
}
</style>
