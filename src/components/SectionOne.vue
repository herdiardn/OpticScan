<template>
  <div class="left-section">
    <router-link to="/">
      <img
        src="@/assets/logo.png"
        alt="Logo"
        class="logo"
        :style="
          isSignIn
            ? { left: '20px', position: 'absolute' }
            : {
                right: '20px',
                position: 'absolute',
                width: '70px',
                color: 'white',
              }
        "
      />
    </router-link>

    <div class="content">
      <h1>{{ isSignIn ? "Welcome Back!" : "Welcome!" }}</h1>
      <p>
        {{
          isSignIn
            ? "Please sign in first"
            : "Please create an account to start"
        }}
      </p>
      <p>
        {{
          isSignIn ? "Dont have an account yet?" : "Already have an account?"
        }}
      </p>
      <router-link v-if="!isSignIn" to="/signin" class="btn-signin"
        >Sign In</router-link
      >
      <router-link v-if="isSignIn" to="/signup" class="btn-signup"
        >Sign Up</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "SectionOne",
  props: {
    isSignIn: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.left-section {
  flex: 1;
  background-image: url("@/assets/login.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
  padding: 20px;
  position: relative;
}

.content {
  text-align: center;
  width: 100%;
  margin-top: 80px;
}

.left-section .logo {
  width: 80px;
  margin: 0;
}

.btn-signup,
.btn-signin {
  display: inline-block;
  margin-top: 15px;
  padding: 10px;
  background-color: #2450ff;
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-size: 13px;
  width: 35%;
}

.btn-signup:hover {
  box-shadow: 0 0px 16px rgba(255, 255, 255, 0.3);
}

.btn-signin:hover {
  box-shadow: 0 0px 16px rgba(255, 255, 255, 0.3);
}
</style>
