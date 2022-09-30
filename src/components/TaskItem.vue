<template>
  <lI 
  :class="[task.isCompleted ? 'task__item completee' : 'task__item']">
    <div class="task__item-titleBox">
      <input 
      v-model="task.isCompleted"
      
      v-show="!editTitle" 
      class="task__item-checkbox" 
      type="checkbox" />
      <strong v-if="!editTitle">
        {{ task.title }}
      </strong>
      <input 
      v-model="editInputValue" 
      
      v-if="editTitle" 
      class="task__item__editInput" 
      type="text" 
      placeholder="yeni bashliq"
      />
      <button v-if="!editTitle" @click="openEditTitle" class="task__editBtn">
        Redakte
      </button>
      <button 
      v-if="editTitle" 
      @click="closeEditTitle"
      :disabled="!editInputValue.length || !editInputValue.trim()"
      class="task__editBtn task__saveBtn">Save</button>
    </div>
    <div class="task__item-tags">
      <div v-if="task.tags.length" class="task__item-spans">
        <TagItem
          :tags="task.tags"
          v-for="(tag, index) in task.tags"
          :key="index"
          :index="index"
          :tag="tag"
          :editTag="editTag"
        />
      </div>
      <div v-show="!task.tags.length">
        <strong> &#128540</strong>
      </div>

      <button v-if="!editTag" @click="openEditTag" class="task__editBtn">
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
      <button @click="deleteTask(task.id)" class="task__deleteBtn">Sil</button>
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
      editTitle: false,
      editInputValue:""
    };
  },
  methods: {
    openEditTag() {
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
    openEditTitle() {
      console.log("openEditTitle is worked");
      this.editTitle = true;
    },
    closeEditTitle (){
      console.log("closeEditTitle is worked");
      this.editTitle = false;
      this.$store.commit('changeTitle',{newTitle:this.editInputValue,id:this.task.id})
      
    },
    deleteTask(id) {
      console.log(id);
      this.$store.commit("removeTask", id);
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

  display: flex;
  justify-content: center;
  align-items: center;
  gap:15px;
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

.task__saveBtn:disabled {
  opacity: .5;
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
  padding:19px;
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

.task__item__editInput {
  padding: 5px;
  margin-right: 10px;
  border-radius: 8px;
  font-size:18px;
}

.completee {
  /* background: rgba(0,0,0,0.1); */
  opacity: .2;
  padding:0 15px;
}
</style>
