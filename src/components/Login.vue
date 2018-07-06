<template>
  <div class="login">
    <AuthPanel type="login" @auth-panel-submit="handleLogin"/>
    <!-- <AuthPanel type="login"/> -->
  </div>
</template>

<script>
  import AuthPanel from '@/components/AuthPanel'
  import axios from 'axios'
  export default {
    components: {
      AuthPanel: AuthPanel,
    },
    methods: {
      handleLogin: function(payload){
        console.log('handleLogin')
        const that = this
        const url = 'http://35.185.111.183/api/v1/login'
        // payload:{
        //   email:'',
        //   password:''
        // }
        axios.post(url, payload)
          .then(function(res){
            //success
            // res.data:{
            //   "message": "Ok",
            //   "auth_token": "5_tbEF-XQVyxEozsua3Q",
            //   "user_id": 1
            // }
            console.log('login success!')
            const authToken = res.data.auth_token
            const email = payload.email
            const sessionData = {authToken: authToken, email: email}
            localStorage.setItem('photo-album-user',JSON.stringify(sessionData))
            //save to localstorage

            //emit login state to event-bus
            that.$bus.$emit('auth-state',{action:'login'})
          }).catch(function(err){
            console.error(err)
          })
      }
      // handleSignBtnClick: function(payload) {
      //   const that = this
      //   const url = 'http://35.185.111.183/api/v1/login'
      //   // payload 是 $emit 傳入的值，也就是 { email: xxx, password: xxx }
      //   axios.post(url, payload)
      //     .then(function(res) {
      //       const authToken = res.data.auth_token
      //       const email = payload.email
      //       const storage = { authToken: authToken, email: email }
      //       that.$bus.$emit('checkSigninState', {action: 'signin', payload: storage})
      //       that.$bus.$emit('checkHomeState', {action: 'signin'})
      //       that.$router.push('/')
      //     })
      //     .catch(function(err) {
      //       console.error(err)
      //     })
      // }
    }

  }
</script>

<style scoped>
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }
</style>