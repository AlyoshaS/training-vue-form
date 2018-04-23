<template>
<div id="SignIn">
  <div class="sign-in-htm">
    <div class="group">
      <label for="sign-in-user" class="label">Username</label>
      <input id="sign-in-user" type="text" class="input">
    </div>
    <div class="group">
      <label for="sign-in-pass" class="label">Password</label>
      <input id="sign-in-pass" type="password" class="input" data-type="password">
    </div>
    <div class="group">
      <input id="check" type="checkbox" class="check" checked>
      <label for="check"><span class="icon"></span> Keep me Signed in</label>
    </div>
    <div class="group">
      <input type="submit" class="button" value="Sign In">
    </div>
    <div class="hr"></div>
    <div class="foot-lnk">
      <a href="#forgot">Forgot Password?</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SignIn',
};
</script>
