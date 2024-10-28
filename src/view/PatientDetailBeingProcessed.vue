<template>
  <section
    id="PatientDetailBeingProcessed"
    class="PatientDetailBeingProcessed-section"
  >
    <div class="container">
      <div class="card">
        <div class="header">
          <router-link to="/myhistory"
            ><i class="fa-solid fa-chevron-left" style="color: #2450ff"></i
          ></router-link>

          <h2>Patient Detail</h2>
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="content">
          <div class="card image-card">
            <img src="@/assets/patientdetail.png" alt="" />
          </div>
          <div class="data">
            <form>
              <div class="form-group">
                <label for="name">Patient's Name</label>
                <input type="text" id="name" value="Herdi Ardana" readonly />
              </div>
              <div class="form-group">
                <label for="username">Phone Number</label>
                <input
                  type="text"
                  id="username"
                  value="123-456-7890"
                  readonly
                />
              </div>
              <div class="form-group">
                <label for="email">Registration Date</label>
                <input type="email" id="email" value="2024-07-17" readonly />
              </div>
              <div class="form-group">
                <label for="birthDate">Diagnosis</label>
                <input
                  type="text"
                  id="birthDate"
                  value="Diabetic retinopathy"
                  readonly
                />
              </div>
              <div class="form-group">
                <label for="testStatus">Test Status</label>
                <input
                  class="testStatus"
                  type="text"
                  id="testStatus"
                  value="Test is being processed"
                  readonly
                />
              </div>
              <div class="form-group">
                <label for="verificationStatus">Verification Status</label>
                <input
                  class="verificationStatus"
                  type="text"
                  id="verificationStatus"
                  value="Not yet verified by a doctor"
                  readonly
                />
              </div>
              <div class="form-group">
                <label for="doctorName">Doctor's Name</label>
                <input type="text" id="doctorName" value="Dr. Smith" readonly />
              </div>
              <div class="form-group">
                <label for="doctorNote">Doctor's Note</label>
                <input
                  type="text"
                  id="doctorNote"
                  value="Follow up in a week"
                  readonly
                />
              </div>
            </form>
          </div>
        </div>
        <div class="btn-back">
          <router-link to="/myhistory"><button>back</button></router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PatientDetailBeingProcessed",
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
  width: 50%;
  margin-left: -70px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #ccc;
  outline: none;
  font-size: 12px;
}

.form-group .testStatus,
.form-group .verificationStatus {
  padding: 5px 10px;
  width: max-content;
  background-color: #ffa500;
  border-radius: 20px;
}

.btn-back button {
  width: 10%;
  padding: 10px 30px;
  margin: 5px 90px;
  background-color: #003adb;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.btn-back button:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

/* Media query for mobile view */
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
    margin-left: -120px;
    width: 77%;
  }
  .btn-back {
    padding-bottom: 20px;
    text-align: center;
  }

  .btn-back button {
    padding: 10px 30px;
    margin: 10px;
    width: 90px;
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
    margin-left: 30px;
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
  .btn-back {
    padding-bottom: 20px;
    text-align: center;
  }

  .btn-back button {
    padding: 10px 30px;
    margin: 10px;
    width: 90px;
  }
}
</style>
