<template>
  <div id="app">
    <div id="nav">
      <router-link
        :to="{
          name: 'Home',
          params: {
            message: 'Hoi',
          },
        }"
      >
        Home
      </router-link>
      <router-link
        :to="{
          name: 'Login',
          params: {
            message: 'Login',
          },
        }"
      >
        Login
      </router-link>
      <router-link
        :to="{
          name: 'WorkoutsAndPractises',
        }"
        >WorkoutsAndPractises
      </router-link>
      <router-link
        :to="{
          name: 'WorkoutAndPractisesFrame',
        }"
        >WorkoutAndPractisesFrame</router-link
      >
      }
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  main {
    padding: 1rem;
    background: #ddd;
  }
}

#nav {
  padding: 30px;
  background: #eee;
  margin-bottom: 2rem;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
