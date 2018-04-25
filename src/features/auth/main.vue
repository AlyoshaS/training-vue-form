<script>
import SignIn from './sign-in';
import SignUp from './sign-up';

export default {
  components: {
    SignIn,
    SignUp,
  },
  name: 'EveAuth',
  data() {
    return {
      navigation: 'signin',
    };
  },
  methods: {
    navigate() {
      this.$bus.$emit('navigate', this.navigation);
    },
    doSignIn(obj) {
      // Suponha que aqui exista uma chamada AJAX
      window.console.log(obj);
    },
    doSignUp(obj) {
      // Suponha que aqui exista uma chamada AJAX
      window.console.log(obj);
    },
  },
};
</script>

<template>
  <div id="EveAuth">
    <div class="login-wrap">

      <div class="login-html">

        <input
          id="tab-1"
          type="radio"
          value="signin"
          v-model="navigation"
          @change="navigate"
          name="tab"
          class="sign-in"
          checked><label for="tab-1" class="tab">Sign In</label>

        <input
          id="tab-2"
          type="radio"
          value="signup"
          v-model="navigation"
          @change="navigate"
          name="tab"
          class="sign-up"><label for="tab-2" class="tab">Sign Up</label>

        <div class="login-form">

          <SignIn @do-sign-in="doSignIn"/>
          <SignUp @do-sign-up="doSignUp"/>

        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style src="./styles.css"></style>
