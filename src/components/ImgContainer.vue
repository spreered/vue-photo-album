<template>
  <div>
    <!-- <div id="photo" :style="imgShow" v-if="src"> -->
      <div id="img-panel" :style="imgShow" >
    </div>
  </div>
</template>

<script>
  export default {
    props: ['src'],
    computed:{
      imgShow: function(){
        return {
          // background:'url('+ this.src +') no-repeat center',
          background:'url(https://picsum.photos/200/300) no-repeat center',
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