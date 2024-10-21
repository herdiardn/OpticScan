<template>
  <section id="PatientsDetailDoctor" class="PatientsDetailDoctor-section">
    <div class="container">
      <div class="card">
        <div class="header">
          <router-link to="/patients">
            <i class="fa-solid fa-chevron-left" style="color: #2450ff"></i>
          </router-link>
          <h2>Patient Detail</h2>
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="content">
          <div class="card image-card">
            <img src="@/assets/patientdetail.png" alt="" />
          </div>
          <div class="data">
            <form @submit.prevent="saveInfo">
              <div class="form-group">
                <label for="name">Patient's Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  :disabled="!isEditing"
                />
              </div>
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input
                  type="number"
                  id="phone"
                  v-model="formData.phone"
                  :disabled="!isEditing"
                />
              </div>
              <div class="form-group">
                <label for="registration">Registration Date</label>
                <input
                  type="date"
                  id="registration"
                  v-model="formData.registration"
                  :disabled="!isEditing"
                />
              </div>
              <div class="form-group">
                <label for="diagnosis">Diagnosis</label>
                <input
                  type="text"
                  id="diagnosis"
                  v-model="formData.diagnosis"
                  :disabled="!isEditing"
                />
              </div>
              <div class="form-group">
                <label for="testStatus">Test Status</label>
                <select
                  class="testStatus"
                  type="text"
                  id="testStatus"
                  v-model="formData.testStatus"
                  :disabled="!isEditing"
                  required
                >
                  <option value="" disabled selected>Select</option>
                  <option>Test is being Processed</option>
                  <option>Test Completed</option>
                </select>
              </div>
              <div class="form-group">
                <label for="verificationStatus">Verification Status</label>
                <select
                  class="verificationStatus"
                  type="text"
                  id="verificationStatus"
                  v-model="formData.verificationStatus"
                  :disabled="!isEditing"
                  required
                >
                  <option value="" disabled selected>Select</option>
                  <option>Not yet verified by doctor</option>
                  <option>Verified by doctor</option>
                </select>
              </div>
              <div class="form-group">
                <label for="doctorName">Doctor's Name</label>
                <input
                  type="text"
                  id="doctorName"
                  v-model="formData.doctorName"
                  :disabled="!isEditing"
                />
              </div>
              <div class="form-group">
                <label for="doctorNote">Doctor's Note</label>
                <input
                  type="text"
                  id="doctorNote"
                  v-model="formData.doctorNote"
                  :disabled="!isEditing"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="btn">
          <router-link to="/patients">
            <button class="left-btn" v-if="!isEditing">Back</button>
          </router-link>
          <button class="edit-btn" v-if="!isEditing" @click="editInfo">
            Edit History
          </button>
          <button
            class="left-btn"
            v-if="isEditing"
            type="submit"
            @click="saveInfo"
          >
            Save
          </button>
          <button class="cancel-btn" v-if="isEditing" @click="cancelEdit">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      formData: {
        name: "Herdi Ardana",
        phone: "081223505630",
        registration: "2024-07-17",
        diagnosis: "Diabetic retinophaty",
        testStatus: "Test is being Processed",
        verificationStatus: "Not yet verified by doctor",
        doctorName: "Dr.Herdi Ardana",
        doctorNote: "There's no doctor's yet",
      },
      originalFormData: {},
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
  },
};
</script>

<style scoped>
.container {
  background-image: url("@/assets/bg-login.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center; /* Pusatkan card secara horizontal */
  align-items: flex-start;
}

.header {
  display: flex;
  justify-content: space-between; /* Pojok kiri dan kanan */
  align-items: center; /* Untuk vertikal align tengah */
  position: relative;
  padding: 0px 20px;
  color: blue;
}
h2 {
  font-weight: normal;
}
.card {
  background-color: white;
  margin: 0 auto;
  border-radius: 10px;
  width: 90%;
  height: 80%;
  overflow: hidden;
  margin-top: auto;
  margin-bottom: auto;
}

.header img {
  width: 100px;
  height: 40px;
}
.content {
  display: flex;
  justify-content: flex-start; /* Mengatur elemen-elemen ke arah kiri */
  align-items: flex-start; /* Agar semua elemen dimulai dari atas */
  gap: 20px;
}
.card .image-card {
  width: 400px;
  margin-left: 90px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  margin-top: 0px;
}
.content img {
  width: 400px;
  height: 300px;
}
.data {
  width: 50%;
  margin-left: 10px;
  color: black;
}
form {
  margin-left: -30px;
}
.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.form-group label {
  width: 30%;
  text-align: left;
  font-size: 12px;
}

.form-group input {
  width: 50%;
  margin-left: -70px;
  padding: 8.5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #ccc;
  outline: none;
  font-size: 12px;
}

.form-group select {
  width: 53%;
  margin-left: -70px;
  padding: 8.5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #ccc;
  outline: none;
  font-size: 12px;
}

.btn .left-btn {
  width: 8%;
  padding: 10px 30px;
  margin: 5px 20px 5px 90px;
  background-color: #003adb;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.btn .edit-btn {
  width: 12%;
  padding: 10px 30px;
  background-color: white;
  color: #003adb;
  border: 1px solid #003adb;
  border-radius: 50px;
  cursor: pointer;
}

.btn .cancel-btn {
  width: 9%;
  padding: 10px 30px;
  background-color: white;
  color: red;
  border: 1px solid red;
  border-radius: 50px;
  cursor: pointer;
}
</style>
