<template>
  <div class="container">
    <!-- <p>{{ $store.state.message }}</p> -->
    <p>{{ $store.state.hello.message }}</p>
    <!-- <button v-on:click="$store.commit('updateMessage')">Update</button> -->
    <!-- <button v-on:click="$store.commit('updateMessage','Commit with payload')">Update</button> -->
    <!-- <button v-on:click="$store.dispatch('updateMessageAction')">Dispatch</button> -->
    <!-- <button v-on:click="$store.dispatch('updateMessageAction','Dispatch with payload')">Dispatch</button> -->
    <button v-on:click="$store.dispatch('hello/updateMessageAction','Dispatch with payload')">Dispatch</button>
  </div>
</template>

<script>
export default {}
</script>

