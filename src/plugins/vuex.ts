import type { App, State } from "vue";
import { createStore } from "vuex";

const store = createStore({
  state: {
    showResult: false,
  },
  mutations: {
    resultShow(state: State) {
      state.showResult = !state.showResult;
    },
  },
});

export default (app: App<Element>): void => {
  app.use(store);
};
