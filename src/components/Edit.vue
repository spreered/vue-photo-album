<template>
  <div class="edit">
    <div class="photo-container">
      <ImgDisplay />
    </div>

    <div class="main-container">
      <PhotoForm/> 
    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  import ImgDisplay from '@/components/ImgDisplay'
  import PhotoForm from '@/components/PhotoForm'
  export default {
    components: {
      ImgDisplay: ImgDisplay,
      PhotoForm: PhotoForm,
    },
    // data: function() {
    //   return {
    //     data: {},
    //   }
    // },
    methods: {
      // handleSubmitBtnClick: function(payload) {
      //   const id = this.$route.params.id
      //   const url = 'http://35.185.111.183/api/v1/photos/'+ id
      //   const token = JSON.parse(localStorage.getItem('vue-photo-album-user')).authToken
      //   // const params = {
      //   //   auth_token: token,
      //   //   title: payload.title,
      //   //   date: payload.date,
      //   //   description: payload.description,
      //   //   file_location: payload.file_location,
      //   // }
      //   let params = new FormData();
      //   params.append('auth_token',token),
      //   params.append('title',payload.title),
      //   params.append('date',payload.date),
      //   params.append('description',payload.description),
      //   params.append('file_location',payload.file_location)
      //   let that = this;
      //   console.log(params)
      //   axios.patch(url, params,
      //   {
      //     headers: {
      //         'Content-Type': 'multipart/form-data'
      //     }
      //   }).then(function(res) {
      //       console.log(res.data);
      //       that.$router.push('/photo/'+ that.$route.params.id)
      //     })
      //     .catch(function(err) {
      //       alert('更新資料出現問題')
      //       console.dir(err)
      //     })
      // }
    },
    created(){
    //   console.log('edit');
    //   const id = this.$route.params.id
    //   const url = 'http://35.185.111.183/api/v1/photos/' + id
    //   const token = JSON.parse(localStorage.getItem('vue-photo-album-user')).authToken
    //   const params = { auth_token: token }
    //   const that = this
    //   axios.get(url, { params })
    //     .then(function(res) {
    //       that.data = res.data
    //       console.dir(that.data)
    //     })
    //     .catch(function(err) {
    //       alert('照片資料出現問題')
    //       console.dir(err)
    //     })
    }
  }
</script>

<style scoped>
  .edit {
    display: flex;
    justify-content: center;
  }

  .photo-container {
    padding-top: 100px;
    margin-right: 50px;
  }

  .main-container {
    padding-top: 100px;
  }
</style>