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
        <div class="btn-double">
          <router-link to="/morearticledoctor">
            <button class="update">Update</button>
          </router-link>

          <router-link to="/morearticledoctor">
            <button class="cancel">Cancel</button>
          </router-link>
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
            <tags-input
              class="label"
              v-model="labels"
              placeholder="Type the labels here and press enter"
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
import TagsInput from "vue3-tags-input";

export default {
  name: "AddArticle",
  components: {
    QuillEditor,
    TagsInput,
  },
  data() {
    return {
      status: "Unpublish",
      articleContent: "",
      labels: [],
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

            ["image", "link", "table"],
          ],
        },
      },
    };
  },
  mounted() {
    const editorContainer = this.$el.querySelector(".ql-container");
    editorContainer.style.height = "350px";
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
  box-shadow: 0 0px 16px rgba(0, 0, 0, 0.3);
  height: max-content;
}

.left {
  flex: 10;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
  border-bottom: 2px solid rgb(192, 191, 191);
}

.header select {
  border: none;
  cursor: pointer;
}

.status {
  display: flex;
  align-items: center;
  border-left: 2px solid rgb(192, 191, 191);
  padding-left: 10px;
  height: 60px;
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
  border-bottom: 2px solid rgb(192, 191, 191);
}

.right {
  flex: 3;
  padding: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
}

.btn {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 10px;
}
.btn-double {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 10px;
}
.btn-double .update {
  border: none;
  background-color: #2450ff;
  color: white;
  border-radius: 50px;
  padding: 10px 50px;
  cursor: pointer;
}

.btn-double .cancel {
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
  padding-bottom: 20px;
  border-bottom: 1px solid #2450ff;
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
  height: 65px;
  border: 1px solid #2450ff;
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
  background-color: #d00000;
  color: white;
  border-radius: 50px;
  padding: 10px 25px;
  margin: auto;
  cursor: pointer;
  width: 100%;
}

@media screen and (max-width: 1024px) {
  .container {
    flex-direction: column;
    padding: 0px 20px;
  }

  .header h3 {
    font-size: 15px;
  }

  .input-title input::placeholder {
    font-size: 17px;
  }

  .card {
    width: 100%;
    margin: 15px 0;
  }

  .left {
    order: 1;
  }

  .right {
    order: 2;
    display: flex;
    flex-direction: column;
  }

  .btn-double {
    order: 1;
    padding-bottom: 40px;
    border-bottom: 1px solid #2450ff;
  }

  .btn {
    order: 2;
  }

  .btn-delete {
    order: 1;
  }

  .btn-double .update {
    width: 100%;
  }

  .btn-double .cancel {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 0px 20px;
  }

  .header h3 {
    font-size: 15px;
  }

  .input-title input::placeholder {
    font-size: 17px;
  }

  .card {
    width: 100%;
    margin: 15px 0;
  }

  .left {
    order: 1;
  }

  .right {
    order: 2;
    display: flex;
    flex-direction: column;
  }

  .btn-double {
    order: 1;
    padding-bottom: 40px;
    border-bottom: 1px solid #2450ff;
  }

  .btn {
    order: 2;
  }

  .btn-delete {
    order: 1;
  }
}
</style>
