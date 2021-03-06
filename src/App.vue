<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar app color="blue darken-4">
        <v-btn rounded text>
          <router-link class="title white--text" :to="{ name: 'home' }">
            Home
          </router-link>
        </v-btn>

        <v-btn rounded text>
          <router-link class="white--text" :to="{ name: 'MHW Builder' }">
            MHW Builder
          </router-link>
        </v-btn>

        <v-btn rounded text>
          <router-link class="white--text" :to="{ name: 'Twitch Stats' }">
            Twitch Stats
          </router-link>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-container fluid class="pa-0">
          <router-view />
        </v-container>
      </v-main>
      <v-footer id="footer">
        <a
          id="footer-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/SQMoonGit/my-vue-website-portfolio"
        >
          <v-icon color="blue">fa-laptop-code</v-icon>
          Developed and designed by Steven Moon
        </a>
      </v-footer>
    </v-app>

    <v-btn
      fab
      bottom
      right
      fixed
      id="scroll-button"
      v-if="scrolled"
      @click="scrollToTop"
    >
      <v-icon>fa-arrow-up</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  private isLoading?: boolean = false;
  private scrolled: boolean = false;

  private currentPage?: string = "home";
  private sideMenuExpansion: boolean = true;
  private clipped: boolean = false;

  mounted() {
    document.addEventListener("scroll", this.showScrollToTopButton);
  }

  public scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  public showScrollToTopButton() {
    document.body.scrollTop > 250 || document.documentElement.scrollTop > 250
      ? (this.scrolled = true)
      : (this.scrolled = false);
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
}

#footer {
  background-color: inherit;
  justify-content: center;

  #footer-link {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

#scroll-button {
  height: 3rem;
  width: 3rem;
  background-color: #0d47a1;
  color: #42a5f5;
}
</style>
