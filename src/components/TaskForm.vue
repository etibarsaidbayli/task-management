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
      <ul class="tagsView__wrapper" v-show="tagInput.length">
        <li v-for="(t,i) in tagsView" :key="i">{{t}}</li>
      </ul>
      <div class="sucsess__add_message" v-show="isSucsessAddTag">
        tag elave olundu !
      </div>
    </div>
    <button
      :disabled="!titleInput.length || !titleInput.trim()"
      @click="testParentForm"
      class="form__btn"
    >
      Tapshiriq yarat
    </button>
    <div class="sucsess__add_message" v-show="isSucsessAddTask">
      Tapshiriq yaradildi ! <router-link to="/taskslist"> BAX </router-link>
    </div>
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
      tagsView:[]
    };
  },
  watch: {
    tagInput (value) {
      this.inputListView(value)
    }
  }
  ,
  methods: {
    titleInputChange(e) {
      this.isSucsessAddTask = false;
      this.titleInput = e.target.value;
    },
    tagInputChange(e) {
      
      this.isSucsessAddTag = false;
      this.tagInput = e.target.value;
      this.tagsView=[]
      
    },
    testParentForm() {
      const newTask = {
        id: Date.now(),
        title: this.titleInput,
        tags: this.tags,
        isCompleted: false,
      };
      if (newTask.tags.length === 0) {
        return alert("zehmet olmasa teg elave et");
      }
      this.titleInput = "";
      this.isSucsessAddTask = true;
      this.$store.commit("addTask", newTask);
      this.$router.push("/taskslist");
    },
    testChildForm() {
      // add bonus functional

      this.tags.push(this.tagInput);

      this.isSucsessAddTag = true;
      this.tagInput = "";
    },
    inputListView (value) {
      let localTasks = JSON.parse(localStorage.getItem('tasks'))
      localTasks.forEach((item) => {
        
          item.tags.forEach((tag) => {
            if(tag.startsWith(value)) {
              console.log(tag + ' burdu ')
              this.tagsView.push(tag)
            }
          })
      })
    }
    
  },
};
</script>

<style scoped>
#form {
  padding: 30px 0;
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
  width: 200px;
}

.form__input {
  font-size: 22px;
  padding: 5px;
  border-radius: 8px;
  width: 50%;
}

.sucsess__add_message {
  background-color: aliceblue;
  font-weight: bold;
  color: #000;
  margin-top: 10px;
  font-size: 15px;
  padding: 3px;
}

.sucsess__add_message a {
  color: yellowgreen;
  text-decoration: underline;
}

.tagsView__wrapper {
  margin-top:5px;
  width: 50%;
  background-color: white;
}
.tagsView__wrapper li {
  padding:3px;
}
</style>
