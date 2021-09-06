<template>
  <div id="app">
    <div id="nav">
      NAV
      <router-link
        :to="{
          name: 'Home',
          params: {
            message: 'Hoi1',
          },
        }"
      >
        Home</router-link
      >
      <router-link
        :to="{
          name: 'Home2',
          params: {
            message: 'Hoi2',
          },
        }"
      >
        Home2</router-link
      >
      <router-link
        :to="{
          name: 'chose_practise',
          params: {
            message: 'chose_practise',
          },
        }"
      >
      </router-link>
    </div>
    <main>
      MAIN
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
    padding: 3rem;
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
