<template>
  <section id="PatientsDashboard" class="PatientsDashboard-section">
    <div class="container">
      <div class="btn-back">
        <router-link to="/dashboardDoctor"
          ><i class="fa-solid fa-chevron-left" style="color: #2450ff"></i
        ></router-link>
      </div>
      <!-- Status Cards -->
      <div class="status-cards">
        <div class="card completed">
          <h2>{{ completedCount }}</h2>
          <p>Completed</p>
          <div class="icon">
            <i class="fas fa-check-circle" style="color: #2450ff"></i>
          </div>
        </div>
        <div class="card processing">
          <h2>{{ processingCount }}</h2>
          <p>Being processed</p>
          <div class="icon">
            <i class="fas fa-sync-alt" style="color: #ffa500"></i>
          </div>
        </div>
      </div>

      <div class="patients">
        <router-link to="/AddPatient">
          <button class="add-btn">
            <i class="fas fa-user-plus"></i> Add Patients
          </button>
        </router-link>
        <router-link to="/patients">
          <button class="refresh-btn">
            <i class="fas fa-rotate-right"></i> Refresh Diagnosis
          </button>
        </router-link>
      </div>

      <!-- Data Table -->
      <table class="data-table">
        <thead>
          <tr>
            <th v-if="!isMobile && !isTab">No.</th>
            <th v-if="!isMobile && !isTab">ID Pasien</th>
            <th>Name</th>
            <th v-if="!isMobile && !isTab">Diagnosis</th>
            <th>Registration Date</th>
            <th v-if="!isMobile">Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredData" :key="index">
            <td v-if="!isMobile && !isTab">{{ index + 1 }}</td>
            <td v-if="!isMobile && !isTab">{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td v-if="!isMobile && !isTab">{{ item.diagnosis }}</td>
            <td>{{ item.registrationDate }}</td>
            <td v-if="!isMobile">
              <span :class="item.statusClass">{{ item.status }}</span>
            </td>
            <td>
              <router-link class="action-btn" to="/PatientsDetailDoctor">
                <img src="@/assets/Vector.png" />
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="pagination">
        <div class="pagination-left">
          <span
            >Showing {{ currentPage }} to {{ itemsPerPage }} of
            {{ totalItems }}</span
          >
        </div>
        <div class="pagination-right">
          <button @click="prevPage" :disabled="currentPage === 1">
            Previous
          </button>
          <span>
            {{ currentPage }}
          </span>
          <button
            @click="nextPage"
            :disabled="currentPage * itemsPerPage >= totalItems"
          >
            Next
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
      search: "",
      completedCount: 8,
      processingCount: 2,
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 12,
      isMobile: window.innerWidth <= 768,
      isTab: window.innerWidth <= 1024,
      data: [
        {
          name: "Herdi Andana",
          diagnosis: "Diabetic retinopathy",
          registrationDate: "2024-07-17",
          status: "Being processed",
          statusClass: "being-processed",
        },
        {
          name: "Herdi Andana",
          diagnosis: "Diabetic retinopathy",
          registrationDate: "2024-07-23",
          status: "Being processed",
          statusClass: "being-processed",
        },
        {
          name: "Herdi Andana",
          diagnosis: "Cataract",
          registrationDate: "2024-07-18",
          status: "Test completed",
          statusClass: "test-completed",
        },
        {
          name: "Herdi Andana",
          diagnosis: "Cataract",
          registrationDate: "2024-07-18",
          status: "Test completed",
          statusClass: "test-completed",
        },
        {
          name: "Herdi Andana",
          diagnosis: "Cataract",
          registrationDate: "2024-07-18",
          status: "Test completed",
          statusClass: "test-completed",
        },
        {
          name: "Herdi Andana",
          diagnosis: "Cataract",
          registrationDate: "2024-07-18",
          status: "Test completed",
          statusClass: "test-completed",
        },
        {
          name: "Herdi Andana",
          diagnosis: "Cataract",
          registrationDate: "2024-07-18",
          status: "Test completed",
          statusClass: "test-completed",
        },
        {
          name: "Herdi Andana",
          diagnosis: "Cataract",
          registrationDate: "2024-07-18",
          status: "Test completed",
          statusClass: "test-completed",
        },
        {
          name: "Herdi Andana",
          diagnosis: "Cataract",
          registrationDate: "2024-07-18",
          status: "Test completed",
          statusClass: "test-completed",
        },
        {
          name: "oi Andana",
          diagnosis: "Cataract",
          registrationDate: "2024-07-18",
          status: "Test completed",
          statusClass: "test-completed",
        },
        {
          name: "oi Andana",
          diagnosis: "Cataract",
          registrationDate: "2024-07-18",
          status: "Test completed",
          statusClass: "test-completed",
        },
        {
          name: "oi Andana",
          diagnosis: "Cataract",
          registrationDate: "2024-07-18",
          status: "Test completed",
          statusClass: "test-completed",
        },
      ],
    };
  },
  computed: {
    filteredData() {
      let filtered = this.data;
      if (this.search) {
        filtered = filtered.filter((item) =>
          item.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return filtered.slice(startIndex, startIndex + this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage * this.itemsPerPage < this.totalItems) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px 80px;
}

.btn-back {
  display: none;
}

.status-cards {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: white;
}

.card {
  width: 40%;
  height: 100px;
  padding: 30px 0px 30px 60px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;
}

.card h2 {
  font-size: 3em;
  margin-top: 10px;
}

.card p {
  font-size: 1.5em;
  margin-top: -40px;
}

.card .icon {
  position: absolute;
  top: 50px;
  right: 50px;
  font-size: 3em;
}

.completed {
  border: 2px solid #2450ff;
}

.processing {
  border: 2px solid #ffa500;
}

.patients {
  width: 46%;
  display: flex;
  margin-bottom: 20px;
}

.patients .add-btn,
.patients .refresh-btn {
  padding: 15px 30px;
  border-radius: 50px;
  cursor: pointer;
}

.patients .add-btn {
  background-color: #2450ff;
  border: none;
  color: white;
  margin-right: 20px;
}

.patients .refresh-btn {
  border: 1px solid #2450ff;
  background-color: white;
  color: #2450ff;
}

.data-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.data-table th:nth-child(5),
.data-table td:nth-child(5) {
  width: 170px;
}
.data-table thead th {
  background-color: #bbc9ff;
}

.data-table tbody tr:nth-child(odd) {
  background-color: #dee5ff;
  color: white;
  border-radius: 20px;
}

.data-table tbody tr:nth-child(even) {
  background-color: #bbc9ff;
  color: white;
  border-radius: 20px;
}
.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 20px 10px;
  text-align: left;
  color: black;
}

.data-table th {
  background-color: #f2f2f2;
}

.data-table tbody tr:hover {
  background-color: #f1f1f1;
}

.data-table tbody td img {
  width: 15px;
}

.test-completed {
  background-color: #2450ff;
  color: white;
  padding: 5px 30px;
  border-radius: 20px;
}

.being-processed {
  background-color: #ffa500;
  color: black;
  padding: 5px 25px;
  border-radius: 20px;
}

.action-btn {
  background-color: white;
  color: #2450ff;
  border-radius: 5px;
  border: 1px solid #2450ff;
  padding: 5px 7px;
  cursor: pointer;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination-left {
  display: flex;
  align-items: center;
}

.pagination-right button {
  margin-left: 20px;
}

.pagination-right span {
  color: #2450ff;
  text-decoration: underline;
  margin-top: 5px;
  margin-left: 20px;
}

.pagination-right {
  display: flex;
}

.pagination button {
  background-color: transparent;
  color: #007bff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

/* Media Query untuk menyesuaikan layout di Tab */
@media (max-width: 1024px) {
  .btn-back {
    display: inline;
    padding: 5px;
    font-size: 25px;
  }

  .card {
    width: 43%;
    padding: 20px;
    margin-top: 10px;
  }

  .card p {
    font-size: 1em;
  }

  .card .icon {
    top: 20px;
    right: 20px;
    font-size: 2em;
  }

  .container {
    padding: 20px;
  }

  .search-container {
    width: 40%;
    margin-bottom: 20px;
    margin-left: 27%;
  }

  .search-input {
    padding: 10px 18px;
  }

  .data-table {
    width: 100%;
  }

  .data-table th,
  .data-table td {
    padding: 8px;
  }

  .pagination-left span {
    font-size: 13px;
  }
}

/* Media Query untuk menyesuaikan layout di HP */
@media (max-width: 768px) {
  .btn-back {
    display: inline;
    padding: 5px;
    font-size: 25px;
  }

  .card {
    width: 35%;
    padding: 20px;
    margin-top: 10px;
  }

  .card p {
    font-size: 1em;
  }

  .card .icon {
    top: 20px;
    right: 20px;
    font-size: 2em;
  }

  .container {
    padding: 10px;
  }

  .patients {
    width: 100%;
    margin-bottom: 20px;
  }

  .patients .add-btn,
  .patients .refresh-btn {
    padding: 15px 22px;
    border-radius: 50px;
    cursor: pointer;
  }

  .data-table {
    width: 100%;
  }

  .data-table th,
  .data-table td {
    padding: 8px;
  }

  .pagination-left span {
    font-size: 13px;
  }
}
</style>
