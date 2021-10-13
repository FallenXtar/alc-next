import type { App, State } from "vue";
import { createStore } from "vuex";
import { SandboxInstance } from "../scripts/sandbox";

const store = createStore({
  state: {
    showResult: false,
    SandboxState: {
      totalExp: NaN,
      highestExp: NaN,
      internalTurns: NaN,
    },
  },
  mutations: {
    resultShow(state: State) {
      state.showResult = true;
    },
    updateData(state: State) {
      state.SandboxState.totalExp = SandboxInstance.totalExp;
      
      
      state.SandboxState.highestExp = SandboxInstance.updateHighest();
      state.SandboxState.internalTurns = SandboxInstance.internalTurn;
      console.log(state.SandboxState);
    },
  },
});

export default (app: App<Element>): void => {
  app.use(store);
};
