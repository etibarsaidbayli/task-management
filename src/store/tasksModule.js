export default {
  state: {
    tasks: [
      {
        id: 1,
        title: "vuex task 1",
        tags: ["binrinci tag", "ikinci", "ucuncu"],
        isCompleted: false,
      },
      {
        id: 2,
        title: "vuex task 2",
        tags: ["binrinci tag", "ikinci", "ucuncu"],
        isCompleted: false,
      },
      {
        id: 3,
        title: "vuex task 3",
        tags: ["binrinci tag", "ikinci", "ucuncu"],
        isCompleted: false,
      },
    ],
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
    },
  },
  getters: {
    getAllTasks(state) {
      return state.tasks;
    },
  },
  actions: {},
};
