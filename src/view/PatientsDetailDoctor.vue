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
                <textarea
                  type="text"
                  id="doctorNote"
                  v-model="formData.doctorNote"
                  :disabled="!isEditing"
                ></textarea>
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
  justify-content: center;
  align-items: flex-start;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0px 20px;
  color: blue;
  border-bottom: 1px solid #2450ff;
  margin-bottom: 15px;
}
h2 {
  font-weight: normal;
}
.card {
  background-color: white;
  margin: 0 auto;
  border-radius: 10px;
  width: 90%;
  height: 90%;
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
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  border-bottom: 1px solid #2450ff;
  padding: 15px 0px;
  margin-bottom: 5px;
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
  width: 70%;
  margin-left: -70px;
  padding: 8.5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #ccc;
  outline: none;
  font-size: 12px;
}

.form-group textarea {
  width: 70%;
  margin-left: -70px;
  padding: 8.5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #ccc;
  outline: none;
  font-size: 12px;
}

.form-group select {
  width: 73%;
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

@media (max-width: 1024px) {
  .container {
    height: max-content;
  }

  .card {
    height: max-content;
    overflow: hidden;
    margin: 50px 0px;
  }

  .header img {
    width: 70px;
    height: 30px;
  }

  .content {
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
  .card .image-card {
    width: 70%;
    height: 400px;
    margin-left: 0;
    margin-bottom: 20px;
    padding: 10px;
  }

  .card .image-card img {
    width: 100%;
    height: 100%;
  }
  .data {
    width: 100%;
    margin-left: 30px;
  }
  form {
    margin-left: 0px;
  }

  .form-group input {
    margin-left: -110px;
    width: 77%;
  }

  .form-group textarea {
    margin-left: -110px;
    width: 77%;
  }

  .form-group select {
    margin-left: -110px;
    width: 79.5%;
  }

  .btn {
    padding-bottom: 20px;
  }

  .btn .left-btn {
    text-align: left;
    width: 70px;
    padding: 10px 20px;
    margin: 5px 20px 5px 20px;
  }

  .btn .edit-btn {
    width: 120px;
    padding: 10px 20px;
  }

  .btn .cancel-btn {
    width: 80px;
    padding: 10px 20px;
  }
}

/* Media query for mobile view */
@media (max-width: 768px) {
  .container {
    height: max-content;
  }

  .card {
    height: max-content;
    overflow: hidden;
    margin: 50px 0px;
  }

  .header h2 {
    margin-left: -30px;
  }

  .content {
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
  .card .image-card {
    width: 70%;
    height: 200px;
    margin-left: 0;
    margin-bottom: 20px;
    padding: 10px;
  }

  .card .image-card img {
    width: 100%;
    height: 100%;
  }
  .data {
    width: 100%;
    margin-left: 20px;
  }
  form {
    margin-left: 0px;
  }
  .form-group label {
    width: 10%;
    margin-left: 10px;
  }
  .form-group input {
    margin-left: 50px;
    width: 55%;
  }

  .form-group textarea {
    margin-left: 50px;
    width: 55%;
  }
  .form-group select {
    margin-left: 50px;
    width: 61%;
  }

  .btn {
    padding-bottom: 20px;
  }

  .btn .left-btn {
    text-align: left;
    width: 70px;
    padding: 10px 20px;
    margin: 5px 20px 5px 20px;
  }

  .btn .edit-btn {
    width: 120px;
    padding: 10px 20px;
  }

  .btn .cancel-btn {
    width: 80px;
    padding: 10px 20px;
  }
}
</style>
