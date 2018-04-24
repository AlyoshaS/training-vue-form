
<script>
import EveAuth from './features/auth/main';

export default {
  components: {
    EveAuth,
  },
  name: 'App',
};
</script>

<template>
  <EveAuth />
</template>

<style>
    body{
    margin: 100px;
    color:#6a6f8c;
    background:#c8c8c8;
    font:600 16px/18px 'Open Sans',sans-serif;
  }
  *,:after,:before{box-sizing:border-box}
  .clearfix:after,.clearfix:before{content:'';display:table}
  .clearfix:after{clear:both;display:block}
  a{color:inherit;text-decoration:none}
</style>
