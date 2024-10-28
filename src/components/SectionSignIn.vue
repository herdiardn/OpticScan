<template>
  <div class="signin-section">
    <router-link to="/" class="btn-image">
      <img src="@/assets/close.png" alt="Button Image" />
    </router-link>
    <div class="content">
      <h2>Sign In</h2>
      <form @submit.prevent="handleSignIn">
        <div class="form-group">
          <label for="username">Username</label>
          <div
            class="input-container"
            :class="{ 'error-border': errorMessage || usernameError }"
          >
            <input
              type="text"
              id="username"
              placeholder="Username"
              v-model="form.username"
            />
            <span class="icon fa fa-user"></span>
          </div>
          <p v-if="usernameError" class="input-error">{{ usernameError }}</p>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <div
            class="input-container"
            :class="{ 'error-border': errorMessage || passwordError }"
          >
            <input
              type="password"
              id="password"
              placeholder="Password"
              v-model="form.password"
            />
            <span class="icon fa fa-lock"></span>
          </div>
          <p v-if="passwordError" class="input-error">{{ passwordError }}</p>
        </div>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <button type="submit" class="btn-signin">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTwo",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      errorMessage: "",
      usernameError: "",
      passwordError: "",
      dummyUser: {
        username: "herdi",
        password: "herdi123",
      },
    };
  },
  methods: {
    handleSignIn() {
      this.usernameError = "";
      this.passwordError = "";
      this.errorMessage = "";

      if (!this.form.username) {
        this.usernameError = "Username must be filled";
      }
      if (!this.form.password) {
        this.passwordError = "Password must be filled";
      }
      if (!this.usernameError && !this.passwordError) {
        if (
          this.form.username === this.dummyUser.username &&
          this.form.password === this.dummyUser.password
        ) {
          this.$router.push("/dashboard");
        } else if (
          this.form.username === "doctor" &&
          this.form.password === "doctor123"
        ) {
          this.$router.push("/dashboardDoctor");
        } else {
          this.errorMessage = "Username or password is wrong.";
        }
      }
    },
  },
};
</script>

<style scoped>
.signin-section {
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  background-color: white;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  position: relative;
}

.signin-section img {
  width: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
}

.content {
  text-align: center;
  width: 100%;
  margin-top: 60px;
}

.signin-section h2 {
  color: #2450ff;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-top: 10px;
}

form {
  width: 100%;
  align-self: flex-start;
  margin-top: 10px;
}

.form-group {
  width: 70%;
  margin: 15px 5px 15px 75px;
}

label {
  display: block;
  color: black;
  margin-bottom: 5px;
  font-size: 13px;
  text-align: left;
}

input {
  width: 100%;
  padding: 12px 30px 12px 12px;
  border-radius: 5px;
  border: none;
  background-color: #e8e8e8;
  box-sizing: border-box;
  font-size: 13px;
}

.input-container {
  position: relative;
}

.error-border input {
  border: 1px solid red;
}

.icon {
  width: 10px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: black;
}

.btn-signin {
  width: 25%;
  padding: 10px;
  margin-top: 20px;
  background-color: white;
  color: #007bff;
  border: 1px solid #2450ff !important;
  border-radius: 50px;
  cursor: pointer;
  display: block;
  margin: 50px auto 0 auto;
  text-decoration: none;
}

.btn-signin:hover {
  box-shadow: 0 0px 16px #2450ff;
}

.error {
  color: #700000;
  background-color: #ef9a9d;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 14px;
  width: 65%;
  margin: 15px 5px 15px 75px;
}

.input-error {
  color: red;
  font-size: 10px;
  margin-top: 5px;
  text-align: left;
}

@media (max-width: 1024px) {
  .form-group {
    margin: 15px 5px 15px 150px;
  }
}

@media (max-width: 768px) {
  .form-group {
    margin: 15px 5px 15px 50px;
  }
}
</style>
