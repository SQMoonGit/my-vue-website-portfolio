<template>
  <div>
    <weather-component></weather-component>

    <v-card>

      <v-card-title>Summary</v-card-title>

      <v-row>
        <v-col>Put information summary here I guess</v-col>
      </v-row>

    </v-card>

    <v-card>
      <v-card-title>Skills</v-card-title>
      <v-row class="ma-auto">
        <v-col>test</v-col>
        <v-col>tes</v-col>
        <v-col>te</v-col>
        <v-col>t</v-col>

      </v-row>
    </v-card>

    <v-card>
      <v-card-title>Projects</v-card-title>
      <v-row class="ma-auto">something</v-row>
      <v-row class="ma-auto">anything</v-row>
      <v-row class="ma-auto">nothing</v-row>
      <v-row class="ma-auto">everything</v-row>

    </v-card>

  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import WeatherComponent from '@/components/WeatherComponent.vue'

@Component({
  components: {WeatherComponent}
})
export default class HomeView extends Vue{
}
</script>

<style lang="scss">
</style>
