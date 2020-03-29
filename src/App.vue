<template>
  <v-app>
    <router-view></router-view>
    <div class="nav">
      <router-link to="/">
      <div class="nav-head">
        <h2>CoVID-19</h2>
        <h3>Balkans</h3>
      </div>
      </router-link>
      <router-link to="/">
      <div class="nav-item"
      @click="activeBtn='today'" :class="{active: activeBtn === 'today' }">
        <v-icon dark>mdi-calendar-today</v-icon>
        <p>Danas</p>
      </div>
      </router-link>
      <router-link to="/progress">
      <div class="nav-item"
      @click="activeBtn='stats'" :class="{active: activeBtn === 'stats' }">
        <v-icon dark>mdi-chart-bell-curve</v-icon>
        <p>Razvoj</p>
      </div>
      </router-link>
      <router-link to="/advice">
      <div class="nav-item"
      @click="activeBtn='info'" :class="{active: activeBtn === 'info' }">
        <v-icon dark>mdi-information</v-icon>
        <p>Savjeti</p>
      </div>
      </router-link>
      <router-link to="/questionaire">
      <div class="nav-item"
      @click="activeBtn='test'" :class="{active: activeBtn === 'test' }">
        <v-icon dark>mdi-account-question</v-icon>
        <p>Upitnik</p>
      </div>
      </router-link>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    activeBtn: 'today',
  }),
};
</script>

<style>
#app {
  background: rgb(70, 70, 70);
}
.nav {
  width: 10%;
  height: 100%;
  position: fixed;
  background: rgb(40, 40, 40);
}
.nav-item, .nav-head {
  text-align: center;
  font-size: 15px;
  padding: 10px 0;
}
.nav-item:hover {
  background: rgb(55, 55, 55);
  font-weight: bold;
}
a {
  text-decoration: none;
  color: white !important;
}
.active {
  background:rgb(55, 55, 55);
  font-weight: bold;
}
@media only screen and (max-width: 600px) {
  .nav {
    width: 100%;
    height: 400px;
    position: absolute;
  }
  .today, .advice, .progress, .quest {
    margin-top: 400px;
    width: 100% !important;
    margin-left: 0px !important;
  }
}
</style>
