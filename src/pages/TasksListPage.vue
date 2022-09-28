<template>
  <h1>TaskLIST PAGE</h1>
  <ul class="task__wrapper">
    <TaskItem
      v-for="task in $store.getters.getAllTasks"
      :key="task.id"
      :task="task"
    />
  </ul>
  <div class="taskList__wrapper"></div>
</template>

<script>
import TaskItem from "../components/TaskItem.vue";
export default {
  components: {
    TaskItem,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
