<template>
  <div id="nav">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="../../assets/Logo.svg" alt="Konnect logo" />
      </router-link>
      <div class="buttons">
        <img src="../../assets/Notification.icon.svg" alt="Notification Button" />
        <img src="../../assets/Help.icon.svg" alt="Help Button" />
        <img src="../../assets/Profile.icon.svg" alt="Profile Button" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
#nav {
  width: 100%;
  float: left;
  margin: 0 0 1em 0;
  padding: 0;
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
}

.logo {
  margin: auto 0;
  background-color: transparent;
  border: none;
}

.buttons {
  margin: auto 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.buttons > img {
  margin: auto 0;
  padding: 0 10px;
}

.container {
  padding: 12px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  max-height: 60px;
}
</style>
