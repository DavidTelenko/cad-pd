import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router"

const app = createApp(App).use(router);
app.config.globalProperties.$store = reactive({
    sharedModelFile: "",
    sharedModelLink: "",
    scale: {
        x: 1,
        y: 1,
        z: 1,
    }
});

app.mount("#app");