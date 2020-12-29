<template>
  <nav id="nav">
    <ul>
      <li><router-link to="/">Store</router-link></li>
    </ul>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import url("https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css");

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
nav {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  box-shadow: 2px 2px 2px #ccc;
  height: 55px;
  width: 100%;

  & ~ * {
    margin-top: 75px;
  }

  ul {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin: 0 7%;
    height: 100%;
  }

  li {
    list-style-type: none;
    margin: 0 20px;
    font-size: 20px;

    .router-link-exact-active {
      text-decoration: none;
      color: #444;
    }
  }
}
</style>
