export default {
  state: {
    tasks: [
      // {
      //   id: 1,
      //   title: "vuex task 1",
      //   tags: ["binrinci tag", "ikinci", "ucuncu"],
      //   isCompleted: false,
      // },
      // {
      //   id: 2,
      //   title: "vuex task 2",
      //   tags: ["binrinci tag", "ikinci", "ucuncu"],
      //   isCompleted: false,
      // },
      // {
      //   id: 3,
      //   title: "vuex task 3",
      //   tags: ["binrinci tag", "ikinci", "ucuncu"],
      //   isCompleted: false,
      // },
    ],
    // taskTags:[]
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
    },
    removeTask(state, payload) {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    changeTitle(state,payload) {
      console.log(payload)
      let findedTitle=state.tasks.find((task) => task.id ===payload.id)
      findedTitle.title=payload.newTitle
    }
  },
  getters: {
    getAllTasks(state) {
      return state.tasks;
    },
    // getAllTags(state) {
    //   return state.taskTags
    // }
  },
  actions: {},
};
