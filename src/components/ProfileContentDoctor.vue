<template>
  <section id="ProfileContentDoctor" class="ProfileContentDoctor-section">
    <div class="container">
      <div class="btn-back">
        <router-link to="/dashboard"
          ><i class="fa-solid fa-chevron-left" style="color: #2450ff"></i
        ></router-link>
      </div>
      <div class="card profile-card">
        <div class="profile-image">
          <div class="profile-picture">
            <img src="@/assets/profile-new.png" alt="Profile Picture" />
            <div class="icon-group">
              <button @click="editProfile" title="Edit Profile">
                <i class="fas fa-edit"></i>
              </button>
              <button @click="deleteProfile" title="Delete Profile">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>

          <h4>Herdi Ardana</h4>
          <p>Doctor</p>
        </div>
      </div>
      <div class="card info-card">
        <h3>Personal Information</h3>
        <form @submit.prevent="saveInfo">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              :disabled="!isEditing"
            />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              v-model="formData.username"
              :disabled="!isEditing"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              :disabled="!isEditing"
            />
          </div>
          <div class="form-group">
            <label for="birthDate">Birth Date</label>
            <input
              type="date"
              id="birthDate"
              v-model="formData.birthDate"
              :disabled="!isEditing"
            />
          </div>
          <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              v-model="formData.phoneNumber"
              :disabled="!isEditing"
            />
          </div>
          <div class="button-group">
            <button v-if="!isEditing" @click="editInfo">Edit</button>
            <button v-if="isEditing" type="submit" @click="saveInfo">
              Save
            </button>
            <button v-if="isEditing" @click="cancelEdit" class="cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div class="card pass-card">
        <h3>Update Password</h3>
        <form @submit.prevent="savePassword">
          <div class="form-group">
            <label for="latestPassword">Latest Password</label>
            <input
              placeholder="Latest Password"
              type="password"
              id="latestPassword"
              v-model="passwordData.latestPassword"
              :disabled="!isEditingPassword"
            />
          </div>
          <div class="form-group">
            <label for="newPassword">New Password</label>
            <input
              placeholder="New Password"
              type="password"
              id="newPassword"
              v-model="passwordData.newPassword"
              :disabled="!isEditingPassword"
            />
            <label class="info">*Consists of at least 8 characters </label>
            <label class="info"
              >*A combination of letters, numbers, and symbols
            </label>
          </div>
          <div class="form-group">
            <label for="confirmPassword">Password Confirmation</label>
            <input
              placeholder="Password Confirmation"
              type="password"
              id="confirmPassword"
              v-model="passwordData.confirmPassword"
              :disabled="!isEditingPassword"
            />
          </div>
          <div class="button-group">
            <button v-if="!isEditingPassword" @click="editPassword">
              Edit
            </button>
            <button v-if="isEditingPassword" type="submit" @click="saveInfo">
              Save
            </button>
            <button
              v-if="isEditingPassword"
              @click="cancelEditPassword"
              class="cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      isEditingPassword: false,
      formData: {
        name: "Herdi Ardana",
        username: "herdiardana",
        email: "herdi@gmail.com",
        birthDate: "2002-04-12",
        phoneNumber: "081234567891",
      },
      originalFormData: {},
      passwordData: {
        latestPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      originalFormDataPass: {},
    };
  },
  methods: {
    editInfo() {
      this.isEditing = true;
      this.originalFormData = { ...this.formData };
    },
    cancelEdit() {
      this.isEditing = false;
      this.formData = { ...this.originalFormData };
    },
    saveInfo() {
      alert("Information updated!");
      this.isEditing = false;
    },
    editPassword() {
      this.isEditingPassword = true;
      this.originalFormDataPass = { ...this.passwordData };
    },
    cancelEditPassword() {
      this.isEditingPassword = false;
      this.passwordData = { ...this.originalFormDataPass };
    },
    savePassword() {
      alert("Password updated!");
      this.isEditingPassword = false;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  padding: 20px 60px;
}

.btn-back {
  display: none;
}

.card {
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  margin-top: -80px;
}

.profile-card {
  padding: 20px 0px;
  width: 22%;
  height: 100%;
}

.profile-picture {
  display: flex;
  justify-content: center;
  padding-left: 80px;
  padding-top: 30px;
}
.icon-group {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.icon-group button {
  background: transparent;
  border: none;
  color: #2450ff;
  font-size: 18px;
  cursor: pointer;
}

.icon-group button:hover {
  color: #ffffff;
}

.info-card {
  width: 30%;
  height: 100%;
  margin-bottom: 30px;
}
.pass-card {
  width: 30%;
  height: 100%;
}
.profile-image {
  text-align: center;
}
.profile-image img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

h3 {
  font-weight: normal;
  margin-top: 0px;
  background-color: #2450ff;
  color: white;
  text-align: center;
  padding: 10px 10px;
  border-radius: 10px 10px 0px 0px;
}

.form-group {
  margin-bottom: 15px;
  padding: 0px 25px 0px 25px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  padding: 10px 10px;
  border: 1px solid #2450ff;
  border-radius: 5px;
  width: 90%;
}
.form-group .info {
  padding-top: 5px;
  font-size: 10px;
}
.button-group {
  margin-top: 10px;
  text-align: center;
  padding-bottom: 20px;
}

button {
  background-color: #2450ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: #1a3cb3;
}

.button-group .cancel {
  padding: 8px 20px;
  background-color: white;
  color: red;
  border: 1px solid red;
}

@media (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .btn-back {
    display: inline;
    font-size: 1.5em;
    z-index: 10;
    left: 20px;
    position: absolute;
    top: 320px;
  }

  .card {
    width: 70%;
    margin-bottom: 120px;
  }

  .profile-card {
    width: 35%;
  }

  .pass-card {
    margin-bottom: 50px;
  }
}

@media (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .btn-back {
    display: inline;
    font-size: 1.5em;
    z-index: 10;
    left: 20px;
    position: absolute;
    top: 300px;
  }

  .card {
    width: 80%;
    margin-bottom: 120px;
  }

  .profile-card {
    width: 70%;
  }

  .pass-card {
    margin-bottom: 50px;
  }
}
</style>
