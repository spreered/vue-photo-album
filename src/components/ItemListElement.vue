<template>
  <div class="photo-item">
    <div class="photo" :style="imgShow">
    </div>
    <h3>{{title}}</h3>
    <p>{{description}}</p>

    <div class="photo-btn-container" v-if="isLogin" >
      <button @click="handleShow">Show</button>
      <button @click="handleEdit">Edit</button>
      <button @click="handleDelete">Destory</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  props: {
    isLogin: {
      type: Boolean,
      default:false
    },
    id:{
      type: Number,
      default:1
    },
    title:{
      type: String,
      default: 'title'
    },
    description:{
      type: String,
      default:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, exercitationem!'
    },
    url:{
      type: String,
      default:'http://via.placeholder.com/200x200'
    },
  },
  methods: {
    handleShow: function() {
      this.$router.push('/photos/' + this.id)
      console.log('show')
    },
    handleEdit: function() {
      this.$router.push('/photos/edit/' + this.id)
      console.log('edit')
    },
    handleDelete: function() {
      var deleteUrl = 'http://35.185.111.183/api/v1/photos/' + this.id
      var token = JSON.parse(localStorage.getItem('photo-album-user')).authToken
      var params = { auth_token: token }
      let that = this
      axios.delete(deleteUrl, {params})
        .then(function(res) { 
          console.log(res)
          //that.$emit('destroy-item',{id: that.id})
          that.$emit('destroy-item')
        })
        .catch(function(err) { console.error(err) })
      console.log('destroy')
    },
  },
  computed: {
    imgShow: function(){
      return {
        background:'url('+ this.url +') no-repeat center',
        backgroundSize: 'cover'
      }
    }
  },
}
</script>

<style scoped>
  .photo-item {
    width: 200px;
    height: auto;
  }

  .photo {
    width: 200px;
    height: 200px;
    border-radius: 12px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .photo img{
    width: 100%;
  }

  .photo span {
    font-size: 24px;
    color: #c0c0c0;
  }

  h3 {
    font-size: 24px;
    text-align: center;
  }

  p {
    font-size: 15px;
    text-align: center;
    height: 50px;
    overflow: hidden;
  }

  .photo-btn-container {
    width: 160px;
    border: 1px solid #c0c0c0;
    border-radius: 6px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .photo-btn-container button {
    height: 24px;
    width: 100%;
    font-size: 15px;
    border: none;
    background-color: transparent;
  }
  .photo-btn-container button:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }
  .photo-btn-container button:nth-child(1) {
    border-right: 1px solid #c0c0c0;
  }
  .photo-btn-container button:nth-child(2) {
    border-right: 1px solid #c0c0c0;
  }
</style>