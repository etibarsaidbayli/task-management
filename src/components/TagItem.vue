<template>
  <span class="task__tag">
    {{ tag }}
    <button class="task__tag-delete">X</button>
  </span>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
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
