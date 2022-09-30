export default {
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks"))
      ? JSON.parse(localStorage.getItem("tasks"))
      : [],
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask(state, payload) {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    changeTitle(state, payload) {
      let findedTitle = state.tasks.find((task) => task.id === payload.id);
      findedTitle.title = payload.newTitle;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    currentFilter(state,payload) {
        let currentStateTasks = null;
        let localTasks =JSON.parse(localStorage.getItem('tasks'))
        currentStateTasks=localTasks.filter((task) => task.tags.includes(payload))
        state.tasks=currentStateTasks 
          


    },
    allViews(state,_) {
      state.tasks=JSON.parse(localStorage.getItem("tasks"))
    }
  },
  getters: {
    getAllTasks(state) {
      return state.tasks;
    },
  },
  actions: {},
};
