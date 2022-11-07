import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import firebaseMessaging from "./firebase";

// import NotificationService from "./mixins/NotificationService.vue";

const app = createApp({
  extends: App,
  // mixins: [NotificationService],
});

app.config.globalProperties.$messaging = firebaseMessaging;

app.mount("#app");
