<template>
  <lI class="task__item">
    <div class="task__item-titleBox">
      <input class="task__item-checkbox" type="checkbox" />
      {{ task.title }}
      <button @click="test" class="task__editBtn">Redakte</button>
    </div>
    <div class="task__item-tags">
      <div class="task__item-spans">
        <TagItem v-for="tag in task.tags" :key="tag" :tag="tag" />
      </div>

      <button v-if="!editTag" @click="setEditTag" class="task__editBtn">
        Redakte
      </button>
      <button
        @click="closeEditTag"
        v-else="editTag"
        class="task__editBtn task__saveBtn"
      >
        Save
      </button>
    </div>
    <div>
      <button class="task__deleteBtn">Sil</button>
    </div>
  </lI>
</template>

<script>
import TagItem from "../components/TagItem.vue";
export default {
  components: {
    TagItem,
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editTag: false,
    };
  },
  methods: {
    setEditTag() {
      console.log("set edit tag ishleyir");
      this.editTag = true;
    },
    closeEditTag() {
      console.log("close edit tag ishleyir");
      this.editTag = false;
    },
    test() {
      console.log("test is worked");
      console.log(this.task.tags);
    },
  },
};
</script>

<style scoped>
.task__item {
  font-size: 25px;
  background-color: #fff;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
}

.task__item-checkbox {
  width: 20px;
  height: 20px;
}

.task__item-titleBox {
  font-weight: bold;
  font-size: 28px;
}

.task__editBtn {
  padding: 5px;
  font-size: 15px;
  border: none;
  background-color: cornflowerblue;
  color: #fff;
  cursor: pointer;
  border-radius: 8px;
}

.task__saveBtn {
  background-color: yellowgreen;
}

.task__item-tags {
  display: flex;
  align-items: center;
  gap: 10px;
}

.task__item-spans {
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  max-width: 200px;
}

.task__deleteBtn {
  cursor: pointer;
  border: none;
  padding: 5px;
  background-color: red;
  color: #fff;
  font-size: 15px;
  border-radius: 8px;
}
</style>
