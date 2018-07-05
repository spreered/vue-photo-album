 <template>
  <div class="signup">
    <!-- <AuthPanel :type="'signup'" @SignBtnClick="handleSignBtnClick" /> -->
    <AuthPanel type="signup" />
  </div>
</template>

<script>
  import AuthPanel from '@/components/AuthPanel'
  // import axios from 'axios'
  export default {
    components: {
      AuthPanel: AuthPanel,
    },
    methods: {
      // handleSignBtnClick: function(payload) {
      //   const that = this
      //   const url = 'http://35.185.111.183/api/v1/signup'
      //   // payload 是 $emit 傳入的值，也就是 { email: xxx, password: xxx }
      //   axios.post(url, payload)
      //     .then(function(res) {
      //       that.$router.push('/user/signin')
      //       // 轉換到登入頁面
      //     })
      //     .catch(function(err) {
      //       console.error(err)
      //     })
      // }
    }
  }
</script>

<style scoped>
  .signup {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }
</style>