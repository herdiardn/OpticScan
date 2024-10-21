<template>
  <section id="AddArticle" class="AddArticle-section">
    <div class="main-header" style="background-color: #2450ff">
      <img src="@/assets/logo.png" style="width: 90px; padding: 5px 25px" />
    </div>
    <div class="container">
      <div class="card left">
        <div class="header">
          <router-link to="/morearticledoctor">
            <i class="fa-solid fa-chevron-left" style="color: #2450ff"></i>
          </router-link>
          <h3 style="color: #2450ff">Create an Article</h3>
          <div class="status">
            <span :class="statusColor" class="status-dot"></span>
            <select v-model="status">
              <option value="Unpublish">Unpublish</option>
              <option value="Publish">Publish</option>
            </select>
          </div>
        </div>
        <div class="input-title">
          <input placeholder="Type The Title of The Article Here" type="text" />
        </div>
        <quill-editor
          class="text-area"
          v-model="articleContent"
          :options="editorOptions"
        ></quill-editor>
      </div>
      <div class="right">
        <div class="btn">
          <button class="update">Update</button>
          <button class="cancel">Cancel</button>
        </div>
        <form>
          <div class="form-group">
            <label>Thumbnail Picture</label>
            <input
              type="file"
              @change="handleFileUpload"
              placeholder="No file chosen"
              required
            />
          </div>
          <div class="form-group">
            <label>Author</label>
            <div class="author-info">
              <img
                src="@/assets/profile-new.png"
                alt="Profile Image"
                class="profile-img"
              />
              <span>Dr.Herdi Ardana</span>
            </div>
          </div>
          <div class="form-group">
            <label>Labels</label>
            <input
              class="label"
              type="text"
              placeholder="Type the labels here"
              required
            />
          </div>
          <div class="form-group">
            <label>Estimated Reading Duration</label>
            <input type="text" placeholder="Ex. 7 minutes" required />
          </div>
        </form>
        <div class="btn">
          <button class="btn-delete">Delete Article</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  name: "AddArticle",
  components: {
    QuillEditor,
  },
  data() {
    return {
      status: "Unpublish", // Default status
      articleContent: "", // Untuk menyimpan konten artikel
      editorOptions: {
        placeholder: "Type the paragraphs here",
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", { color: [] }],

            [{ list: "ordered" }, { list: "bullet" }],
            [
              { align: "" },
              { align: "center" },
              { align: "right" },
              { align: "justify" },
            ],

            ["image", "link"],
          ],
        },
      },
    };
  },
  computed: {
    statusColor() {
      return this.status === "Publish" ? "blue-dot" : "red-dot";
    },
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
  justify-content: space-between;
}

.card {
  margin: 30px 10px 30px 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.left {
  flex: 10;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
  border-bottom: 1px solid rgb(192, 191, 191);
}

.header select {
  border: none;
  cursor: pointer;
}

.status {
  display: flex;
  align-items: center;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
}

.red-dot {
  background-color: red;
}

.blue-dot {
  background-color: blue;
}

.input-title input {
  font-size: 20px;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
}

.right {
  flex: 3;
  padding: 20px;
}

.btn {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.btn .update {
  border: none;
  background-color: #2450ff;
  color: white;
  border-radius: 50px;
  padding: 10px 50px;
  cursor: pointer;
}

.btn .cancel {
  border: 1px solid red;
  background-color: transparent;
  color: red;
  border-radius: 50px;
  padding: 10px 50px;
  cursor: pointer;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.form-group input[type="file"]::file-selector-button {
  background-color: #2450ff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.form-group input[type="file"] {
  padding: 5px;
}

.form-group input {
  max-width: 100%;
  padding: 10px;
  border: 1px solid #2450ff;
  border-radius: 5px;
  background-color: transparent;
}

.form-group .label {
  max-width: 100%;
  height: 75px;
}

label {
  margin-bottom: 5px;
  font-size: 13px;
}
.author-info {
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.profile-img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

span {
  font-size: 13px;
}

.btn-delete {
  border: none;
  background-color: red;
  color: white;
  border-radius: 50px;
  padding: 10px 25px;
  margin: auto;
  cursor: pointer;
  width: 100%;
}
</style>
