<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar app color="blue darken-4">
        <v-btn rounded text>
          <router-link class="title white--text" :to="{ name: 'home' }">
            Home
          </router-link>
        </v-btn>

        <!-- <v-btn rounded text>
          <router-link class="white--text" :to="{ name: 'MHW Builder' }">
            MHW Builder
          </router-link>
        </v-btn> -->

        <v-btn rounded text>
          <router-link class="white--text" :to="{ name: 'Twitch Stats' }">
            Twitch Stats
          </router-link>
        </v-btn>
      </v-app-bar>

      <v-content class="pt-3">
        <v-container fluid class="pa-0">
          <router-view />
        </v-container>
      </v-content>
    </v-app>

    <v-btn fab bottom right fixed id="scroll-button" @click="scrollToTop">
      <v-icon>fa-arrow-up</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  private isLoading?: boolean = false;

  private currentPage?: string = "home";
  private sideMenuExpansion: boolean = true;
  private clipped: boolean = false;

  public scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#scroll-button {
  height: 3rem;
  width: 3rem;
  background-color: #0d47a1;
  color: #42a5f5;
}
</style>
