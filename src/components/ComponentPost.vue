<template>
  <div class="conatiner">
  <h1>Top posts</h1>
  <hr>
  <p class ="error" v-if="error">{{error}}</p>
  <div class="posts-container"></div>
</template>

<script>
import RequestService from '../ReQuestService';
export default {
  name: 'ComponentPost',
  data() {
    return{
    posts:[],
    error: '',
    text:''}
  },
  async created(){
    try{
      this.posts = await RequestService.getPosts();
    } catch(err){
      this.error = err.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
