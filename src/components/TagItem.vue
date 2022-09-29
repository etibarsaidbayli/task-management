<template>
  <span class="task__tag">
    {{ tag }}
    <button @click="deleteTag(index)"
   
    v-show="editTag" class="task__tag-delete">
      X
    </button>
 
  </span>
</template>

<script>
import { store } from '../store';

export default {
  data() {
    myTags: [];
  },
  props: {
    tag: {
      type: String,
      required: true,
    },
    index: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    editTag: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    deleteTag(i) {
      console.log("delete tag is worked", i);
      this.myTags = this.tags;
      
      this.myTags.splice(i, 1);
      localStorage.setItem('tasks',JSON.stringify(this.$store.getters.getAllTasks) )
      
    },
  },
};
</script>

<style>
.task__tag {
  background-color: gray;
 
  padding: 10px;
  position: relative;
  display: inline-block;
  border-radius: 15px;
  color: #fff;
}

.task__tag-delete {
  background-color: red;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 50%;
}
</style>
