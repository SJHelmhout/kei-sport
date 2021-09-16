<template>
  <div id="app">
    <b-navbar variant="primary" type="dark">
      <b-navbar-brand
        :to="{
          name: 'Home',
          params: {
            message: 'Hoi',
          },
        }"
        >KeiSport</b-navbar-brand
      >
      <b-navbar-nav>
        <b-nav-item
          :to="{
            name: 'WorkoutsAndPractises',
          }"
        >
          WorkoutsAndPractises
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          :to="{
            name: 'Login',
            params: {
              message: 'Login',
            },
          }"
        >
          Login
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          :to="{
            name: 'VoorbeeldStylingMetBootstrap',
            params: {
              message: 'VoorbeeldStylingMetBootstrap',
            },
          }"
        >
          VoorbeeldStylingMetBootstrap
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <main>
      <router-view />
    </main>
    <footer variant="primary" type="dark" class="text-center py-3">quit</footer>
  </div>
</template>

<style lang="scss">
$primary: blue;
$enable-shadows: true;
$body-bg: #ddd;
@import "~bootstrap/scss/bootstrap";
@import "~bootstrap-vue";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
  margin-bottom: 2rem;
}
</style>
