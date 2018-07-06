<template>
  <div class="container">
    <div class="item-list" v-for="photo in photos">
      <!-- <PhotoContainer
        :isLogin="isSignin"
        :id="photo.id"
        :title="photo.title"
        :description="photo.description"
        :fileLocation="photo.file_location"
      /> -->
      <item-list-element
        :isLogin="isLogin"
        :id ="photo.id"
        :title="photo.title"
        :description="photo.description"
        :url="'http://35.185.111.183'+photo.file_location.url" 
      />
              <!-- :id="photo.id"\
        :title="photo.title"
        :description="photo.description"
        :url="photo.file_location.url" -->
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import ItemListElement from '@/components/ItemListElement'
  export default {
    data: function() {
      return {
        isLogin: false,
        photos: [],
      }
    },
    components: {
      ItemListElement: ItemListElement,
    },
    methods: {
      handleAuthState: function(payload){
        const action = payload.action
        if (action == 'login'){
          this.isLogin = true
        }else if(action == 'logout'){
          this.isLogin = false
        }
      },
      handleDestroyItem: function(id){
        let index = this.photos.findIndex(function(element,index,array){    
          return element.id === id
        })
        console.log(index)
        this.photos.splice(index,1)
        
      }
    },
    created(){
      //1. get photos form api
      const indexUrl = 'http://35.185.111.183/api/v1/photos'
      const hostUrl = 'http://35.185.111.183/'
      const that = this
      axios.get(indexUrl,{})
        .then(function(res){
          // res.data
          // {
          //   "data": [
          //     {
          //       "id": 1,
          //       "title": "Myra's Birthday",
          //       "description": "This is my favourite photo",
          //       "file_location": {
          //         "url": "/uploads/photo/file_location/1/myra-birthday.png"
          //       }
          //     },
          //     {...}
          //   ]
          // }

          that.photos = res.data.data
        }).catch(function(err){console.error(err) })
      
      // 2. subscribe 'auth-state' event from bus
      //    subscribe 'destroy-item' event form bus
      this.$bus.$on('auth-state', function(payload){
        that.handleAuthState(payload)
      })
      this.$bus.$on('destroy-item',function(payload){
        that.handleDestroyItem(payload.id)
      })

      // 3. check auth state form local storage
      const sessionData = JSON.parse(localStorage.getItem('photo-album-user'));
      if (!!sessionData) {
        this.handleAuthState({action: 'login'})
      }
    },
    beforeDestroy: function() {
      this.$bus.$off('auth-state')
      this.$bus.$off('destroy-item')
    },
    
      
  }
</script>

<style scoped>
  .container {
    max-width: 1440px;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
  }

  .item-list {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    margin-bottom: 60px;
  }

  @media (max-width: 993px ) {
    .photo-container-wrapper {
      width: 33.333%
    }
  }

  @media (max-width: 769px ) {
    .photo-container-wrapper {
      width: 50%
    }
  }

  @media (max-width: 577px ) {
    .photo-container-wrapper {
      width: 100%
    }
  }
</style>