import { createApp } from "vue";
// import "element-plus/dist/index.css";
import App from "./App.vue";
import "./scripts/core";
import installElementPlus from "./plugins/element";
import installVuex from "./plugins/vuex";
import installAxios from "./plugins/axios";

const app = createApp(App);

// 创建应用

installElementPlus(app);
// 安装 Emelemt-Plus

installVuex(app);
// 安装 Vuex

installAxios(app);
// 安装 Axios

app.mount("#app");
// 将应用挂载到 id 为 app 的元素
