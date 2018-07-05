<template>
  <div class="photo-item">
    <div class="photo" :style="imgShow">
    </div>
    <h3>{{itemData.title}}</h3>
    <p>{{itemData.description}}</p>
    <!-- <div class="photo-btn-container" v-if="isSignin">
      <button @click="handleShow">Show</button>
      <button @click="handleEdit">Edit</button>
      <button @click="handleDelete">Destory</button>
    </div> -->
    <div class="photo-btn-container" >
      <button @click="handleShow">Show</button>
      <button @click="handleEdit">Edit</button>
      <button @click="handleDelete">Destory</button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  // props: ['isSignin', 'id', 'title', 'description', 'url'],
  props: {
    itemData:{
      default: function(){
        return {
          id:'',
          title:'title',
          description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, exercitationem!',
          url:''
        }
      }
    }
  },
  methods: {
    handleShow: function() {
      // this.$router.push('/photo/' + this.id)
      console.log('show')
    },
    handleEdit: function() {
      // this.$router.push('/photo/edit/' + this.id)
      console.log('edit')
    },
    handleDelete: function() {
      // const url = 'http://35.185.111.183/api/v1/photos/' + this.id
      // const token = JSON.parse(localStorage.getItem('vue-photo-album-user')).authToken
      // const params = { auth_token: token }
      // let that = this
      // axios.delete(url, {params})
      //   .then(function(res) { 
      //     console.log(res);
      //     that.$bus.$emit('destroyItem',{id: that.id})
      //   })
      //   .catch(function(err) { console.error(err) })
      console.log('destroy')
    },
  },
  computed: {
    file_location: function() {
      // return this.fileLocation ? 'http://35.185.111.183' + this.url : ''
      return 'https://picsum.photos/200/200'
    },
    imgShow: function(){
      return {
        background:'url('+ this.file_location +') no-repeat center',
        // background:'url(https://picsum.photos/200/200) no-repeat center',
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