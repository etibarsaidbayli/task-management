<template>
  <form @submit.prevent id="form">
    <input
      :value="titleInput"
      @input="titleInputChange"
      class="form__input"
      type="text"
      placeholder="Bashliq"
    />
    <div class="input__box">
      <input
        :value="tagInput"
        @input="tagInputChange"
        class="form__input"
        type="text"
        placeholder="teqleri yaz"
      />

      <button
        @click="testChildForm"
        :disabled="!tagInput.length || !tagInput.trim()"
        class="form__btn add__tag"
      >
        Teg Elave et
      </button>
      <div v-show="isSucsessAddTag">daxil etdiyiniz tag elave olundu</div>
    </div>
    <button
      :disabled="!titleInput.length || !titleInput.trim()"
      @click="testParentForm"
      class="form__btn"
    >
      Tapshiriq yarat
    </button>
    <div v-show="isSucsessAddTask">Tapshiriq yaradildi</div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      titleInput: "",
      tagInput: "",
      tags: [],
      isSucsessAddTag: false,
      isSucsessAddTask: false,
    };
  },
  methods: {
    titleInputChange(e) {
      this.isSucsessAddTask = false;
      this.titleInput = e.target.value;
    },
    tagInputChange(e) {
      this.isSucsessAddTag = false;
      this.tagInput = e.target.value;
    },
    testParentForm() {
      console.log("parent form is clicked");

      const newTask = {
        id: Date.now(),
        title: this.titleInput,
        tags: this.tags,
        isCompleted: false,
      };
      if (newTask.tags.length === 0) {
        return alert("bosh teg xanasi olmaz");
      }
      this.titleInput = "";
      this.isSucsessAddTask = true;
      this.$store.commit("addTask", newTask);
    },
    testChildForm() {
      console.log("child form is clicked");
       // add bonus functional


      this.tags.push(this.tagInput);
      

      this.isSucsessAddTag = true;
      this.tagInput = "";
    },
  },
};  
</script>

<style scoped>
#form {
  padding:30px 0;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;

  align-items: center;
}

.form__btn {
  font-size: 15px;
  padding: 5px;
  background-color: yellowgreen;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  color: #fff;
}

.input__box {


  width: 50%;
  
}

.form__btn:disabled {
  opacity: 0.5;
}

.add__tag {
  margin-left: 15px;
  background-color: cornflowerblue;
  width:200px;
}

.form__input {
  font-size: 22px;
  padding: 5px;
  border-radius: 8px;
  width:50%;
}
</style>
