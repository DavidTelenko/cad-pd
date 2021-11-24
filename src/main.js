import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"

const app = createApp(App).use(router);

app.provide('modelLink', "");
app.provide('modelFile', "");
app.provide('markerLink', "");
app.provide('markerFile', "");

app.mount("#app");