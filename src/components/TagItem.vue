<template>
  <span class="task__tag"
  @click="currentFilterTasks(tag)"
  >
    {{ tag }}
    <button @click.stop.prevent="deleteTag(index)" v-show="editTag" class="task__tag-delete">
      X
    </button>
  </span>
</template>

<script>

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
     
      console.log('deleted worked' , i )
      this.myTags = this.tags;
      this.myTags.splice(i, 1);
      localStorage.setItem(
        "tasks",
        JSON.stringify(this.$store.getters.getAllTasks)
      );
    },
    currentFilterTasks(currentTag) {
      console.log('current tag worked')
      this.$store.commit("currentFilter",currentTag)
      
    } 
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
  cursor: pointer;
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
