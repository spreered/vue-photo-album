<template>
  <div class="container">
    <div class="item-list" v-for="(photo,index) in photos">
      <item-list-element
        :isLogin="isLogin"
        :id ="photo.id"
        :title="photo.title"
        :description="photo.description"
        :url="'http://35.185.111.183'+photo.file_location.url" 
        @destroy-item="handleDestroyItem(index)"
      />
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
        var action = payload.action
        if (action == 'login'){
          this.isLogin = true
        }else if(action == 'logout'){
          this.isLogin = false
        }
      },
      handleDestroyItem: function(index){
        // console.log('delete id is '+ payload.id)
        // var index = this.photos.findIndex(function(element,index,array){    
        //   return element.id === payload.id
        // })
        // console.log(index)
        this.photos.splice(index,1)
        
      }
    },
    created(){
      //get photos form api
      var indexUrl = 'http://35.185.111.183/api/v1/photos'
      var hostUrl = 'http://35.185.111.183/'
      var that = this
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
      
      // subscribe 'auth-state' event from bus
      this.$bus.$on('auth-state', function(payload){
        that.handleAuthState(payload)
      })

      // check auth state form local storage
      var sessionData = JSON.parse(localStorage.getItem('photo-album-user'));
      if (!!sessionData) {
        this.handleAuthState({action: 'login'})
      }else{
        this.handleAuthState({action: 'logout'})
      }
    },
    beforeDestroy() {
      this.$bus.$off('auth-state',this)
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