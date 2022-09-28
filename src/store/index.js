import { createApp } from "vue";
import { createStore } from "vuex";
import tasksModule from "../store/tasksModule";

export const store = createStore({
  modules: {
    tasksModule,
  },
});
