import { App } from "vue";

import VueAxios from "vue-axios";

import Axios from "axios";

export default (app: App): void => {
  app.use(VueAxios, Axios);
};
