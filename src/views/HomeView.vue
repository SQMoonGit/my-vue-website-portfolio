<template>
  <div>
    <v-card>

      <v-card-title>Summary</v-card-title>

      <v-row>
        <v-col>Put information summary here I guess</v-col>
      </v-row>

    </v-card>

    <v-card>
      <v-card-title>Skills</v-card-title>
      <v-row class="ma-auto">
        <v-col>Programming Languages</v-col>
        <v-col>Software</v-col>
        <v-col>Operating Systems</v-col>
        <v-col>Other</v-col>
      </v-row>
    </v-card>

    <v-card>
      <v-card-title>Projects</v-card-title>
      <v-row class="ma-auto project">something</v-row>
      <v-row class="ma-auto project">anything</v-row>
      <v-row class="ma-auto project">nothing</v-row>
      <v-row class="ma-auto project">everything</v-row>
    </v-card>

  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

@Component({
})
export default class HomeView extends Vue{
}
</script>

<style lang="scss">
  .project {
    display: flex;
    align-items: baseline;
    padding-left: 1rem;
  }
</style>
