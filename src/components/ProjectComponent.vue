<template>
  <v-container id="projects-section" class="d-inline-block">
    <div class="projects-title">Projects</div>
    <v-card class="">
      <v-card-title class="ma-0 py-0">Senior Design Project</v-card-title>
      <v-card-subtitle class="project-details"
        >Automated Slab-Lifting Control System</v-card-subtitle
      >
      <v-row>
        <v-col class="project-images">
          <v-img src="../assets/slab-gif.gif"></v-img>
        </v-col>
        <v-col class="project-details diagram">
          <ul>
            <li>
              Project sponsored by construction firm Tella Firma to create a
              control system to automate their slab-lifting process
            </li>
            <li>
              Worked with a separate mechanical engineering team to produce a
              demo of the system
            </li>
            <li>
              Utilized Arduino Megas, a Raspberry Pi, and ultrasonic sensors for
              the control system
            </li>
            <li>
              Data management was coded in C, data upload and download in
              Python, and GCP for data storage and host maintenance
            </li>
            <li>Awarded 1st place in both Fall and Spring UTDesign Expos</li>
          </ul>
          <v-img src="../assets/slab_diagram.png"></v-img>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pb-2">
      <v-card-title class="ma-0 pb-0">Twitch Data Analysis</v-card-title>
      <v-card-subtitle class="project-details"
        >Data visualization of Twitch's metrics
      </v-card-subtitle>
      <v-row>
        <v-col class="project-images">Add graph here</v-col>
        <v-col class="project-details">
          <ul>
            <li>
              Python script to retrieve data from Twitch's API to analyze data
              from its streaming platform
            </li>
            <li>
              Hosted in Amazon Lambda to run on an hourly basis, storing the
              data in DynamoDB tables
            </li>
            <li>
              Separate Lambda script retrieves data from DynamoDB and analyzes
              data to desired metrics
            </li>
          </ul>
          <router-link class="link" :to="{ name: 'Twitch Stats' }">
            See charts
          </router-link>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pb-2">
      <v-card-title class="ma-0 pb-0">Calendar App</v-card-title>
      <v-card-subtitle class="project-details"
        >React Native Calendar App</v-card-subtitle
      >
      <v-row>
        <v-col class="project-images">Add pic here</v-col>
        <v-col class="project-details">
          <ul>
            <li>A mobile calendar app using React Native framework</li>
            <li>Utilizing styled-component library to minimize styling code</li>
            <li>
              Testing and debugging mobile app with Android Studio virtual
              device and react-devtools library
            </li>
          </ul>
          <a
            class="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/SQMoonGit/CalendarApp"
          >
            Github Repo
          </a>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ProjectComponent extends Vue {}
</script>

<style lang="scss">
#projects-section {
  width: 60%;
  margin: 4rem;
  padding: 0;

  .projects-title {
    background-color: #1e1e1e;
    border-radius: 4px;
    display: block;
    padding: 8px 16px 0 16px;
    align-items: center;
    font-size: 1.25rem;
  }

  .project-images {
    width: 50%;
  }

  .project-details {
    text-align: start;
    margin-top: 0;
    padding: 0 24px 4px 24px;

    &.diagram {
      width: 50%;
    }
  }
}

.link {
  display: flex;
  justify-content: flex-end;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
