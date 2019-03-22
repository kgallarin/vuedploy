<template>

  <CardList>
    <div v-if="isLoading" slot="is-loading" class="text-center w-100 h-100">
      <h1>Fetching Users . . .</h1>
    </div>
    <Card v-else slot="card" v-for="user in users.slice(0,6)" :key="user.id.value">
      <img slot="image" class="card-img-top img-fluid" v-bind:src="user.picture.large" alt="card">
      <p slot="username" class="card-title">{{ user.login.username }}</p>
      <p slot="age" class="age">{{ user.dob.age }}</p>
      <p slot="name" class="card-text">{{ user.name.first }}</p>
    </Card>
  </CardList>

</template>

<script>
  import store from '@store'

  import CardList from './CardList.vue'
  import Card from './Card.vue'
  export default {
    name:'Cards',
    data: () => ({
      isLoading: false
    }),

    computed:{
      users(){
        return store.getters.userCount
      }
    },

    created(){
      this.isLoading = true
      store.dispatch('fetchUsers')
        .then(() => new Promise(resolve => setTimeout(resolve, 2000)))
        .then(() => this.isLoading = false)
    },
    components:{
      CardList,
      Card
    }
  }
</script>

<style lang="scss" scoped>
  .loading-state{
    text-align:center;
    width:100%;
  }
</style>
