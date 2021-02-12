<template>
  <div>
    <v-card min-height="260">
      <v-autocomplete
        hide-details
        hide-selected
        hide-no-data
        return-object
        :items="monsterNames"
        :prepend-inner-icon="'mhw-' + model.toLowerCase()"
        v-model="model"
        :loading="isLoading"
        class="monsters white--text col-auto"
      >
      </v-autocomplete>

      Insert Monster picture here
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { Monster } from "../model/mhw";
import { mhwURL } from "../utils/constants";

@Component({})
export default class MonstersComponent extends Vue {
  private monsterList!: Monster[];
  private isLoading: boolean = false;
  private model: string = "";
  private monsterNames: string[] = [];

  created() {
    //API call for monsters
    this.axios
      .get(`${mhwURL}/monsters`)
      .then(response => {
        if (response.status === 200 && response.data) {
          this.monsterList = response.data;
          this.monsterList.forEach((value: Monster, index: number) => {
            if (value) {
              this.monsterNames.push(value.name);
            }
          });
        }
      })
      .catch(error => {
        alert(error.body.error);
        console.log("[ERROR] - GET/monsters");
      });
  }
}
</script>

<style lang="scss"></style>
