<template>
  <div>
    <v-parallax style="height:100vh;" src="../assets/jellyfish.jpg">
      <v-container class="text-h1">
        Steven Moon
        <p class="text-h5">Website Resume</p>
      </v-container>
    </v-parallax>

    <v-card class="d-inline-block sections">
      <v-card-title class="d-block pt-2 pb-0">About Me</v-card-title>
      <v-row class="ma-auto">
        <v-col class="ma-auto"
          >I'm a front-end developer currently employed at Capital One. Started
          my journey in web development 2019 and have been down the rabbit hole
          ever since. Enjoying every bit of it and learning more everyday.
        </v-col>
      </v-row>
    </v-card>

    <v-card class="d-inline-block sections">
      <v-card-title class="d-block pt-2">Skills</v-card-title>
      <v-row class="ma-auto">
        <v-col
          class="pa-0 pb-2 skill-cards"
          v-for="(value, name, index) in skills"
        >
          <v-card :elevation="0">
            <v-card-title class="py-0">
              <v-icon class="mr-2">{{ codeIcons[index] }}</v-icon>
              {{ name }}
            </v-card-title>
            <v-list-item-content
              v-for="skill in value"
              class="px-4 py-0 body-2"
            >
              • {{ skill }}
            </v-list-item-content>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <project-component />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ProjectComponent from "../components/ProjectComponent.vue";

@Component({
  components: {
    ProjectComponent
  }
})
export default class HomeView extends Vue {
  private languages = [
    "Javascript/Typescript",
    "HTML/CSS",
    "Java",
    "Python",
    "SQL",
    "C++"
  ];
  private frameworks = [
    "Vue",
    "Angular",
    "Vuetify",
    "Django",
    "React",
    "Spring"
  ];
  private applications = [
    "VSCode",
    "Webstorm",
    "IntelliJ",
    "Postman",
    "Git",
    "Jenkins",
    "Slack",
    "Jira",
    "Docker"
  ];
  private skills = {
    Programming: this.languages,
    Software: this.applications,
    Frameworks: this.frameworks
  };
  private codeIcons = ["fa-code", "fa-code-branch", "fa-desktop"];
}
</script>

<style lang="scss">
.sections {
  width: 60%;
  margin: 4rem 4rem 0 4rem;
  padding-bottom: 1rem;
}

.skill-cards {
  box-shadow: 4px 12px 10px -16px rgb(105, 98, 98);
}
</style>
