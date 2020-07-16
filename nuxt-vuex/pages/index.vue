<template>
  <div class="container">
    <p>{{ $store.state.message }}</p>
    <!-- <button v-on:click="$store.commit('updateMessage')">Update</button> -->
    <button v-on:click="$store.commit('updateMessage','Commit with payload')">Update</button>
  </div>
</template>

<script>
export default {}
</script>

