<template>
  <header class="navbar">
    <div class="container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </div>
      <nav :class="{ 'menu-open': menuOpen }">
        <div class="menu">
          <div class="profileNav">
            <div class="imgNav">
              <img src="@/assets/profileNav.png" />
            </div>
            <div class="text">
              <p><strong>Herdi Ardana</strong></p>
              <p>Doctor</p>
            </div>
          </div>
          <ul>
            <li>
              <router-link
                to="/dashboardDoctor"
                active-class="active"
                exact-active-class="active"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                to="/patients"
                active-class="active"
                exact-active-class="active"
                >Patients</router-link
              >
            </li>
            <li>
              <router-link
                to="/morearticledoctor"
                active-class="active"
                exact-active-class="active"
                >Articles</router-link
              >
            </li>
          </ul>
        </div>

        <div class="profile" @click="toggleDropdown">
          <img src="@/assets/profile.png" alt="" />
          <i class="fa-solid fa-caret-down" style="color: white"></i>
          <div v-if="dropdownVisible" class="dropdown">
            <ul>
              <li>
                <i class="fa-regular fa-user" style="color: #ffffff"></i>
                <router-link class="dropdown-content" to="/profiledoctor">
                  <span>Profile</span>
                </router-link>
              </li>
              <li>
                <i
                  class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"
                  style="color: #ffffff"
                ></i>
                <router-link class="dropdown-content" to="/">
                  <span>Sign Out</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div v-if="menuOpen" class="hamburger-menu">
      <ul>
        <li class="profil">
          <i class="fa-regular fa-user" style="color: #1d40cc"></i>
          <router-link class="dropdown-content" to="/profiledoctor">
            <span>Profile</span>
          </router-link>
        </li>
        <li class="signout">
          <i
            class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"
            style="color: #ffffff"
          ></i>
          <router-link class="dropdown-content" to="/">
            <span style="color: white">Sign Out</span>
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderDashboardDoctor",
  data() {
    return {
      dropdownVisible: false,
      menuOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
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
.profileNav {
  display: none;
}
.logo {
  position: absolute;
  left: 10px;
  top: 10px;
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

.profile {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding-right: 55px;
}

.profile img {
  width: 35px;
  border-radius: 50%;
  padding-right: 5px;
}

.dropdown {
  position: absolute;
  top: 100%;
  right: 50px;
  background-color: rgba(36, 80, 255);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 200;
  width: 200px;
  display: flex;
  flex-direction: column;
}

.dropdown ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  align-items: flex-start;
}

.dropdown li {
  padding: 10px 15px;
  display: flex;
  align-items: center;
  position: relative;
  width: 70%;
  color: white;
}

.dropdown ul li .dropdown-content {
  padding-left: 10px;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.dropdown li::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
}

.dropdown li:last-child::after {
  display: none;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  margin-left: auto;
  padding-right: 45px;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: white;
  right: 0;
}

.hamburger-menu {
  display: none;
  position: absolute;
  top: 575px;
  left: 100px;
  z-index: 200;
}
.hamburger-menu li {
  padding: 10px;
  border: none;
  border-radius: 10px;
  width: 210px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
.hamburger-menu li:hover {
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}

.hamburger-menu li span {
  margin-left: 15px;
}

.hamburger-menu .profil {
  background-color: white;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
}

.hamburger-menu .signout {
  background-color: #1d40cc;
}
.hamburger-menu ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 0;
}

.hamburger-menu li {
  padding: 10px 15px;
}

.hamburger-menu li a {
  color: rgb(0, 0, 0);
  text-decoration: none;
}

@media screen and (max-width: 1024px) {
  .profileNav {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    margin-top: -340px;
  }
  .profileNav img {
    margin-left: 250px;
    width: 80px;
  }
  .profileNav .imgNav {
    margin-right: 0px;
    margin-top: -120px;
    width: 80px;
  }

  .profileNav .text {
    margin-left: 175px;
    margin-top: 20px;
    margin-right: 0px;
    font-size: 12px;
  }

  nav {
    position: absolute;
    top: 0px;
    right: 0;
    background-image: url("@/assets/sidebar-2.png");
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
    padding-top: 180px;
    flex-direction: column;
    gap: 20px;
    margin-left: -340px;
  }

  nav ul li {
    width: 440%;
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

  .profile {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .hamburger-menu {
    display: flex;
  }
  .hamburger-menu .profil {
    background-color: white;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
    margin-left: 170px;
    margin-top: -130px;
    width: 180%;
  }

  .hamburger-menu .signout {
    background-color: #1d40cc;
    margin-left: 170px;
    width: 180%;
  }
}

@media screen and (max-width: 768px) {
  .profileNav {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    margin-top: -340px;
  }
  .profileNav img {
    margin-left: 0px;
    width: 80px;
  }
  .profileNav .imgNav {
    margin-right: -80px;
    margin-top: -330px;
    width: 80px;
  }

  .profileNav .text {
    margin-left: 0px;
    margin-top: -190px;
    margin-right: -225px;
    font-size: 12px;
  }

  nav {
    position: absolute;
    top: 0px;
    right: 0;
    background-image: url("@/assets/sidebar-2.png");
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
    padding-top: 180px;
    flex-direction: column;
    gap: 20px;
    margin-left: -10px;
  }

  nav ul li {
    width: 180%;
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

  .profile {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .hamburger-menu {
    display: flex;
  }

  .hamburger-menu .profil {
    background-color: white;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
    margin-left: 10px;
    margin-top: 0px;
    width: 150%;
  }

  .hamburger-menu .signout {
    background-color: #1d40cc;
    margin-left: 10px;
    width: 150%;
  }
}
</style>
