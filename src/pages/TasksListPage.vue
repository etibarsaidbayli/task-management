<template>
  <h1>TaskLIST PAGE</h1>
  <ul v-if="$store.getters.getAllTasks.length" class="task__wrapper">
    <TaskItem
      v-for="task in $store.getters.getAllTasks"
      :key="task.id"
      :task="task"
    />
  </ul>
  <div v-else="!$store.getters.getAllTasks.length">Yeni tapshiriq <router-link to="/createtask"> Elave </router-link>etmek isteyirsinizmi?</div>

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
