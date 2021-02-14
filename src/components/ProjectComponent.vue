<template>
  <v-container id="projects-section" class="d-inline-block">
    <v-card-title class="d-block pt-2 pb-0">Projects</v-card-title>
    <v-card>
      <v-card-title class="ma-0 pb-0">Senior Design Project</v-card-title>
      <v-card-subtitle class="project-details pb-0"
        >Automated Slab-Lifting Control System</v-card-subtitle
      >
      <v-row>
        <v-col class="project-images">
          <v-img src="../assets/slab_diagram.png"></v-img>
        </v-col>
        <v-col class="project-details">
          <v-row class="mx-2">
            • Project sponsored by construction firm Tella Firma to create a
            control system to automate their slab-lifting process
          </v-row>
          <v-row class="mx-2">
            • Worked with a separate mechanical engineering team to produce a
            demo of the system
          </v-row>
          <v-row class="mx-2">
            • Utilized Arduino Megas, a Raspberry Pi, and ultrasonic sensors for
            the control system
          </v-row>
          <v-row class="mx-2">
            • Data management was coded in C, data upload and download in
            Python, and GCP for data storage and host maintenance
          </v-row>
          <v-row class="mx-2">
            • Awarded 1st place in both Fall and Spring UTDesign Expos
          </v-row>
          <v-img width="60px" height="60px" src="../assets/slab-gif.gif">
          </v-img>
        </v-col>
      </v-row>
    </v-card>

    <v-card>
      <v-card-title class="ma-0 pb-0">Twitch Data Analysis</v-card-title>
      <v-card-subtitle class="project-details pb-0"
        >Data visualization of Twitch's metrics
      </v-card-subtitle>
      <v-row>
        <v-col class="project-images">Add graph here</v-col>
        <v-col class="project-details">
          <v-row class="mx-2">
            • Python script to retrieve data from Twitch's API to analyze data
            from its streaming platform
          </v-row>
          <v-row class="mx-2">
            • Hosted in Amazon Lambda to run on an hourly basis, storing the
            data in DynamoDB tables
          </v-row>
          <v-row class="mx-2">
            • Separate Lambda script retrieves data from DynamoDB and analyzes
            data to desired metrics
          </v-row>
          <v-row class="mx-2 justify-end">
            <router-link class="link" :to="{ name: 'Twitch Stats' }">
              See charts
            </router-link>
          </v-row>
        </v-col>
      </v-row>
    </v-card>

    <v-card>
      <v-card-title class="ma-0 pb-0">AR Mobile App</v-card-title>
      <v-card-subtitle class="project-details pb-0"
        >Augmented Reality Globe Mobile App</v-card-subtitle
      >
      <v-row>
        <v-col class="project-details">
          <v-row class="mx-2">
            • A mobile app that tests plane surface validation
          </v-row>
          <v-row class="mx-2">
            • Scans and display valid plane surfaces as camera is moved
          </v-row>
          <v-row class="mx-2">
            • Touching valid surface displays rotatable globe based on anchor
            point
          </v-row>
          <v-row class="mx-2">
            • Coded in C# with Google ARCore assets in Unity Editor
          </v-row>
          <v-row class="mx-2 justify-end">
            <a
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/SQMoonGit/EarthAR"
            >
              Github Repo
            </a>
          </v-row>
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

  .project-images {
    width: 50%;
  }

  .project-details {
    text-align: start;
  }
}

.link {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
