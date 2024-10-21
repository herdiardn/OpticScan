<template>
  <section id="AddPatient" class="AddPatient-section">
    <div class="container">
      <div class="card">
        <div class="form-image">
          <img src="@/assets/addpatient.png" alt="Patient Image" />
        </div>
        <div class="form-content">
          <h2>Input Patient's Data</h2>
          <form>
            <div class="form-group">
              <label for="patient-name">Patient's Name</label>
              <select v-model="patientName" required>
                <option value="" disabled selected>
                  Select Patient's Name
                </option>
                <option value="John Doe">Herdi Ardana</option>
                <option value="Jane Smith">Tsabita Bayu</option>
              </select>
            </div>

            <div class="form-group">
              <label for="phone-number">Phone Number</label>
              <input type="tel" placeholder="Phone Number" required />
            </div>

            <div class="form-group">
              <label for="registration-date">Registration Date</label>
              <input type="date" placeholder="DD/MM/YYYY" required />
            </div>

            <div class="form-group">
              <label for="diagnostic-image">Upload Diagnostic Image</label>
              <input
                type="file"
                @change="handleFileUpload"
                placeholder="No file chosen"
                required
              />
              <label class="file">Supported file formats: jpg, png</label>
            </div>

            <div class="form-actions">
              <button type="submit" class="save-btn">Save</button>
              <router-link to="/patients"
                ><button type="button" class="cancel-btn">Cancel</button>
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
    };
  },
  methods: {
    handleFileUpload(event) {
      this.diagnosticImage = event.target.files[0];
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
  height: 80%;
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
  padding: 20px;
  width: 60%;
}

h2 {
  color: #2450ff;
  text-align: center;
  font-family: "poppins";
  font-weight: normal;
  margin-top: 0px;
}

.form-group {
  margin-bottom: 15px;
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
</style>
