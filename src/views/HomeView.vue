<template>
  <div>
    <v-card class="mx-4">
      <v-col>
        image here
      </v-col>
    </v-card>

    <v-card class="pb-1 mx-4 mb-4">
      <v-card-title class="d-block">Summary</v-card-title>
      <v-row>
        <v-col class="ma-auto">Put information summary here</v-col>
      </v-row>
    </v-card>

    <v-card class="pb-1 ma-4">
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

    <project-component></project-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
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
  private frameworks = ["Vue", "Angular", "Vuetify", "Django", "React"];
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
.project {
  display: flex;
  align-items: baseline;
  padding-left: 1rem;
}

.skill-cards {
  box-shadow: 4px 12px 10px -16px rgb(105, 98, 98);
}
</style>
