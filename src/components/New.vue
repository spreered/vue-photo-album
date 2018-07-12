<template>
  <div class="create">
    <div class="photo-container">
      <ImgDisplay />
    </div>
    <div class="main-container" >
      <PhotoForm @photo-form-submit="postCreate"/> 
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import ImgDisplay from '@/components/ImgDisplay'
  import PhotoForm from '@/components/PhotoForm'
  export default {
    components: {
      ImgDisplay: ImgDisplay,
      PhotoForm: PhotoForm,
    },
    methods: {
      postCreate: function(payload){
        var createUrl = 'http://35.185.111.183/api/v1/photos'
        var token = JSON.parse(localStorage.getItem('photo-album-user')).authToken
        var params = new FormData()
        params.append('auth_token',token)
        params.append('title',payload.title)
        params.append('date',payload.date)
        params.append('description',payload.description)
        params.append('file_location',payload.file_location)

        var that = this;
        console.log(params)
        axios.post(createUrl, params,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        })
          .then(function(res) {
             console.log(res);
             that.$router.push('/photo/'+ res.data.result.id)
             
          })
          .catch(function(err) { console.error(err) })
      }
    }
  }
</script>

<style scoped>
  .create {
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