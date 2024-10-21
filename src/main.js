// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

// Import Vuetify and its styles
// import { createVuetify } from "vuetify";
// import "vuetify/styles";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";

// Vuetify Configuration
// const vuetify = createVuetify({
//   components,
//   directives,
// });

// Font Awesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

const app = createApp(App);

// Use Vuetify and Router
// app.use(vuetify);
app.use(router);

// Mount the app
app.mount("#app");
