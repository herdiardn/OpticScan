<template>
  <div class="signup-section">
    <router-link to="/" class="btn-image">
      <img src="@/assets/logo.png" alt="Button Image" />
    </router-link>
    <div class="content">
      <h2>Sign Up</h2>
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <div class="input-container">
            <input type="text" id="username" placeholder="Username" required />
            <span class="icon fa fa-user"></span>
          </div>
        </div>
        <div class="form-group">
          <label for="fullname">Full Name</label>
          <div class="input-container">
            <input type="text" id="fullname" placeholder="Full Name" required />
            <span class="icon fa fa-user"></span>
          </div>
        </div>
        <div class="form-group flex-container">
          <div class="input-wrapper-birth">
            <label for="birthdate">Birth Date</label>
            <div class="input-container">
              <input type="date" id="birthdate" required />
              <span class="icon fa fa-calendar"></span>
            </div>
          </div>
          <div class="input-wrapper">
            <label for="email">Email</label>
            <div class="input-container">
              <input type="email" id="email" placeholder="Email" required />
              <span class="icon fa fa-envelope"></span>
            </div>
          </div>
          <div class="input-wrapper">
            <label for="phone">Phone Number</label>
            <div class="input-container">
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                required
              />
              <span class="icon fa fa-phone"></span>
            </div>
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
          <label class="info">*Consists of at least 8 characters </label>
          <label class="info"
            >*A combination of letters, numbers, and symbols
          </label>
        </div>
        <div class="form-group">
          <label for="confirm-password">Password Confirmation</label>
          <div class="input-container">
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              required
            />
            <span class="icon fa fa-lock"></span>
          </div>
        </div>
        <button type="submit" class="btn-signup">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTwo",
};
</script>

<style scoped>
.signup-section {
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  background-color: white;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  position: relative;
}

.signup-section img {
  width: 70px;
  position: absolute;
  top: 20px;
  left: 25px;
}
.content {
  text-align: center;
  width: 100%;
  margin-top: 0px;
}
.signup-section h2 {
  color: #2450ff;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-top: 0;
}

form {
  width: 100%;
  align-self: flex-start;
  margin-top: -12px;
}

.form-group {
  width: 95%;
  margin: 0px 5px 5px 10px;
}

label {
  display: block;
  color: black;
  margin-bottom: 5px;
  font-size: 12px;
  text-align: left; /* Mengatur label rata kiri */
  padding-top: 1px;
}

input {
  width: 100%;
  padding: 10px 10px;
  border-radius: 5px;
  border: none;
  background-color: #e8e8e8;
  box-sizing: border-box;
  font-size: 12px;
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
.flex-container {
  display: flex;
  justify-content: space-between;
}

.input-wrapper {
  width: 33%;
}

.input-wrapper-birth {
  width: 25%;
}

.form-group .info {
  font-size: 10px;
}
.btn-signup {
  width: 25%;
  padding: 10px;
  background-color: transparent;
  color: #007bff;
  border: 1px solid #2450ff !important;
  border-radius: 50px;
  cursor: pointer;
  display: block;

  margin: 20px auto 0 auto;
  margin-top: 12px;
}

.btn-signup:hover {
  box-shadow: 0 0px 16px #2450ff;
}

@media (max-width: 768px) {
  .signup-container {
    background-image: url("@/assets/login.png");
    height: 100vh;
  }

  .card {
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;
    overflow-y: auto;
  }

  .signup-section {
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: rgb(255, 255, 255, 0.8);
  }

  /* Mengatur flex-container menjadi flex kolom */
  .flex-container {
    display: flex;
    flex-direction: column;
    gap: 10px; /* Memberi jarak antar input */
    width: 100%;
  }

  /* Set input-wrapper menjadi full width */
  .input-wrapper,
  .input-wrapper-birth {
    width: 100%; /* Semua input menjadi 100% */
  }

  .form-group {
    width: 100%;
    margin-bottom: 20px;
  }
  .btn-signup {
    width: 20%;
    padding: 10px;
    background-color: transparent;
    color: #007bff;
    border: 1px solid #2450ff !important;
    border-radius: 50px;
    cursor: pointer;
    margin: 20px 0;
    margin: auto;
  }
}
</style>
