<template>
  <div id="app">
    <header>
      <img alt="logo" src="@/assets/logo.png" @click="$router.push('/')">
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  background-color: #2e2e2e;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;

  header {
    text-align: center;
    padding: 40px 20px;

    img {
      width: 200px;
      cursor: pointer;
    }
  }

}

</style>
