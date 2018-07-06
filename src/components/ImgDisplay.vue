<template>
  <div>
    <!-- <div id="photo" :style="imgShow" v-if="url"> -->
      <div id="img-panel" :style="imgShow" v-if="url">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['url'],
    computed:{
      // file_location: function() {
      //   return this.fileLocation ? 'http://35.185.111.183' + this.fileLocation.url : ''
      // },
      imgShow: function(){
        return {
          background:'url('+ this.url +') no-repeat center',
          backgroundSize: 'cover'     
        }
      }
    }
  }
</script>

<style scoped>
  #img-panel {
    width: 400px;
    height: 400px;
    border-radius: 12px;
    background-color: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>