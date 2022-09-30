<template>

  <ul v-if="$store.getters.getAllTasks.length" class="task__wrapper">
    <TaskItem
      v-for="task in $store.getters.getAllTasks"
      :key="task.id"
      :task="task"
    />
    <button
    class="allViewBtn"
    @click="AllTasksView"
    >Hamisini goster</button>
  </ul>
  <div class="empty__wrap" v-else="!$store.getters.getAllTasks.length">Yeni tapshiriq <router-link to="/createtask"> elave </router-link>etmek isteyirsinizmi?</div>

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
  methods:{
    AllTasksView () {
      this.$store.commit("allViews")
    }
  }
};
</script>

<style >
  .task__wrapper {
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .empty__wrap {
    background-color: aliceblue;
    font-size: 30px;
    text-align: center;
    padding:25px 0;
  }

  .empty__wrap a {
    color:yellowgreen;
    text-decoration: underline;
  }

  .allViewBtn {
    position:absolute;
    top:0;
    right: 0;
  }

</style>
