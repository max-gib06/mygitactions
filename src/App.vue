<template>
  <div class="container">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Create Post</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/posts" class="nav-link">Posts</router-link>
        </li>
      </ul>
    </nav><br />
    <transition name="transition">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
    .transition-enter-active, .transition-leave-active {
      transition: opacity .5s
    }
    .transition-enter, .transition-leave-active {
      opacity: 0
    }
</style>

<script>

    export default{
    }
</script>