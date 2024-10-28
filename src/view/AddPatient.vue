<template>
  <section id="AddPatient" class="AddPatient-section">
    <div class="container">
      <div class="card">
        <div class="form-image">
          <img src="@/assets/addpatient.png" alt="Patient Image" />
        </div>
        <div class="form-content">
          <div class="header">
            <h2>Input Patient's Data</h2>
            <img class="logo" src="@/assets/logo.png" />
          </div>

          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="patient-name">Patient's Name</label>
              <select v-model="patientName">
                <option value="" disabled selected>Patient's Name</option>
                <option value="John Doe">Herdi Ardana</option>
                <option value="Jane Smith">Tsabita Bayu</option>
              </select>
              <span class="error-message" v-if="errors.patientName">{{
                errors.patientName
              }}</span>
            </div>

            <div class="form-group">
              <label for="phone-number">Phone Number</label>
              <input
                type="tel"
                v-model="phoneNumber"
                placeholder="Phone Number"
                class="phone"
              />
              <span class="error-message" v-if="errors.phoneNumber">{{
                errors.phoneNumber
              }}</span>
            </div>

            <div class="form-group">
              <label for="registration-date">Registration Date</label>
              <input type="date" v-model="registrationDate" />
              <span class="error-message" v-if="errors.registrationDate">{{
                errors.registrationDate
              }}</span>
            </div>

            <div class="form-group">
              <label for="diagnostic-image">Upload Diagnostic Image</label>
              <input type="file" @change="handleFileUpload" />
              <label class="file">Supported file formats: jpg, png</label>
              <span class="error-message" v-if="errors.diagnosticImage">{{
                errors.diagnosticImage
              }}</span>
            </div>

            <div class="form-actions">
              <button type="submit" class="save-btn">Save</button>
              <router-link to="/patients">
                <button type="button" class="cancel-btn">Cancel</button>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      patientName: "",
      phoneNumber: "",
      registrationDate: "",
      diagnosticImage: null,
      errors: {
        patientName: "",
        phoneNumber: "",
        registrationDate: "",
        diagnosticImage: "",
      },
    };
  },
  methods: {
    handleFileUpload(event) {
      this.diagnosticImage = event.target.files[0];
    },
    handleSubmit() {
      this.errors = {
        patientName: "",
        phoneNumber: "",
        registrationDate: "",
        diagnosticImage: "",
      };

      let isValid = true;

      if (!this.patientName) {
        this.errors.patientName = "Patient's name must be filled.";
        isValid = false;
      }
      if (!this.phoneNumber) {
        this.errors.phoneNumber = "PhoneNumber must be filled.";
        isValid = false;
      }
      if (!this.registrationDate) {
        this.errors.registrationDate = "Registration date must be filled.";
        isValid = false;
      }
      if (!this.diagnosticImage) {
        this.errors.diagnosticImage = "Diagnostic image must be uploaded.";
        isValid = false;
      }

      if (isValid) {
        console.log("Data is valid, proceed with saving:", {
          patientName: this.patientName,
          phoneNumber: this.phoneNumber,
          registrationDate: this.registrationDate,
          diagnosticImage: this.diagnosticImage,
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  background-image: url("@/assets/bg-login.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.card {
  display: flex;
  width: 90%;
  height: 90%;
  overflow: hidden;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 90px;
  border-radius: 10px;
}
.form-image img {
  width: 100%;
  height: auto;
  border-radius: 10px 0 0 10px;
}

.form-content {
  background-color: white;
  border-radius: 0 10px 10px 0;
  width: 60%;
}

.header {
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #2450ff;
  margin-bottom: 15px;
}

.logo {
  width: 80px;
  height: 30px;
}

h2 {
  color: #2450ff;
  text-align: center;
  font-family: "poppins";
  font-weight: normal;
  margin: auto;
}

.form-group {
  margin-bottom: 10px;
  margin-left: 50px;
}

.form-group label {
  display: block;
  font-size: 12px;
  margin-bottom: 5px;
}
.form-group .file {
  font-size: 10px;
  font-style: italic;
  padding-top: 5px;
}

.form-group select {
  width: 93.5%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #e8e8e8;
}

.form-group input[type="text"],
.form-group input[type="tel"],
.form-group input[type="date"] {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #e8e8e8;
}

.form-group input[type="file"] {
  padding: 10px;
}

.form-group input[type="file"] {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #e8e8e8;
}

.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
}

.save-btn {
  background-color: #2450ff;
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.cancel-btn {
  background-color: white;
  color: #ff4d4d;
  border: 1px solid #ff4d4d;
  padding: 10px 30px;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

@media (max-width: 1024px) {
  .form-image img {
    display: none;
  }
  .container {
    display: flex;
    background-image: url("@/assets/addpatient.png");
    background-size: cover;
    background-position: center;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .header {
    border-bottom: none;
    margin-top: 15px;
  }

  .logo {
    display: none;
  }

  .card {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;
    overflow-y: auto;
  }

  .form-content {
    margin-top: 310px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: rgb(255, 255, 255, 0.8);
    width: 100%;
  }
}

@media (max-width: 768px) {
  .form-image img {
    display: none;
  }
  .container {
    display: flex;
    background-image: url("@/assets/addpatient.png");
    background-size: cover;
    background-position: center;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .card {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;
    overflow-y: auto;
  }

  .form-content {
    margin-top: 330px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: rgb(255, 255, 255, 0.8);
    width: 100%;
  }

  .form-actions {
    margin-bottom: 20px;
  }

  .form-group {
    margin-left: 30px;
  }

  .form-group select {
    width: 91%;
  }

  .form-group input[type="text"],
  .form-group input[type="tel"],
  .form-group input[type="date"],
  .form-group input[type="file"] {
    width: 85%;
  }
}
</style>
