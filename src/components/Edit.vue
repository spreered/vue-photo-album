<template>
  <div class="edit">
    <div class="photo-container">
      <!-- <ImgDisplay :url="'http://35.185.111.183'+photo.file_location.url" v-if="photo.file_location"/> -->
      <ImgDisplay/>
    </div>

    <div class="main-container">
      <!-- <PhotoForm
      :title="photo.title"
      :description="photo.description"
      v-if="photo.id"
      @photo-form-submit="patchUpdate"/>  -->
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
    data: function() {
      return {
        photo: {},
      }
    },
    // methods: {
    //   patchUpdate: function(payload){
    //     const id = this.$route.params.id
    //     const updateUrl = 'http://35.185.111.183/api/v1/photos/'+id
    //     const token = JSON.parse(localStorage.getItem('photo-album-user')).authToken
    //     let params = new FormData();
    //     params.append('auth_token',token),
    //     params.append('title',payload.title),
    //     params.append('date',payload.date),
    //     params.append('description',payload.description),
    //     params.append('file_location',payload.file_location)

    //     let that = this;
    //     console.log(params)
    //     axios.patch(updateUrl, params,
    //     {
    //       headers: {
    //           'Content-Type': 'multipart/form-data'
    //       }
    //     })
    //       .then(function(res) {
    //          console.log(res);
    //          that.$router.push('/photo/'+ res.data.result.id)
             
    //       })
    //       .catch(function(err) { console.error(err) })
    //   },
    // },
    // created(){
    // //   console.log('edit');
    //   const id = this.$route.params.id
    //   const url = 'http://35.185.111.183/api/v1/photos/' + id
    //   const token = JSON.parse(localStorage.getItem('photo-album-user')).authToken
    //   const params = { auth_token: token }
    //   const that = this
    //   axios.get(url, { params })
    //     .then(function(res) {
    //       // {
    //       //   "id": 1,
    //       //   "title": "Myra's Birthday",
    //       //   "description": "This is my favourite photo",
    //       //   "file_location": {
    //       //     "url": "/uploads/photo/file_location/1/myra-birthday.png"
    //       //   }
    //       // }
    //       that.photo = res.data
    //       // console.dir(that.data)
    //     })
    //     .catch(function(err) {
    //       console.dir(err)
    //     })
    // }
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