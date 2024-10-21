<template>
  <div class="signin-section">
    <router-link to="/" class="btn-image">
      <img src="@/assets/close.png" alt="Button Image" />
    </router-link>
    <div class="content">
      <h2>Sign In</h2>
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <div class="input-container">
            <input type="text" id="username" placeholder="Username" required />
            <span class="icon fa fa-user"></span>
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-container">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
            <span class="icon fa fa-lock"></span>
          </div>
        </div>
        <router-link to="/dashboard" class="btn-signin"> Sign In </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTwo",
  props: {
    isSignIn: {
      type: Boolean,
      default: false,
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
  margin-top: 10px; /* Ubah margin-top untuk menempatkan lebih ke atas */
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
  text-align: left; /* Mengatur label rata kiri */
}

input {
  width: 100%;
  padding: 12px 30px 12px 12px;
  padding: 12px;
  border-radius: 5px;
  border: none;
  background-color: #e8e8e8;
  box-sizing: border-box;
  font-size: 13px;
}
.input-container {
  position: relative;
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
  background-color: transparent;
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
</style>
