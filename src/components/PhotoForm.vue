<template>
   <div class="photo-form">
    <input 
      type="text" 
      id="title" 
      placeholder="Title"
      v-model="title"
    >
    <Datepicker
      wrapper-class="date-wrapper"
      input-class="date-input"
      format="dd.MM.yyyy"
      v-model="date"
    />
    <textarea 
      name="description" 
      id="description" 
      placeholder="description" 
      rows="7"
      v-model="description"
    />
    <div class="upload-container">
      <input type="file" name="upload-file-btn" id="upload-file-btn" @change="handleFileCnage">
    </div>
    <button
      class="submit-btn"
      @click="handleSubmit"
    >
      Submit
    </button>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'
  
  export default {
    props: {
      formData:{
        default: function(){
          return {
            title:'',
            description:'',
            file_location:''
          }
        }
      }
    },
    data: function() {
      return {
        date: new Date(),
        title: this.formData.title,
        description: this.formData.description,
        file: this.formData.file_location,
        
      }
    },
    components: {
      Datepicker: Datepicker,
    },
    methods: {
      handleFileCnage(e) {
        this.file = e.target.files[0]
        console.log(this.file)
      },
      handleSubmit: function() {
        const payload = {
          title: this.title,
          date: this.date,
          description: this.description,
          file_location: this.file,
        }
        console.dir(payload)
        // this.$emit('submitBtnClick', payload)
      }
    }
  }
</script>

<style scoped>
  .photo-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 100%;
  }

  #title {
    width: 100%;
    height: 40px;
    font-size: 24px;
    border: 1px solid #c0c0c0;
    border-radius: 6px;
    margin-bottom: 20px;
  }
  #description {
    width: 100%;
    font-size: 24px;
    border: 1px solid #c0c0c0;
    border-radius: 6px;
    margin-bottom: 20px;
  }

  .upload-container {
    width: 100%;
    margin-bottom: 20px;
  }

  .submit-btn {
    border: 1px solid #c0c0c0;
    background-color: #fff;
    border-radius: 6px;
    width: 108px;
    height: 50px;
    font-size: 18px;
    font-weight: 700;
    margin-right: auto;
  }
</style>

<style>
  .date-wrapper {
    width: 100%;
  }
  
  .date-input {
    width: 100%;
    height: 40px;
    font-size: 24px;
    border: 1px solid #c0c0c0;
    border-radius: 6px;
    margin-bottom: 20px;
  }
</style>