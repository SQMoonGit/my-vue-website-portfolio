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
import { Vue, Component, Watch } from "vue-property-decorator";
import { Monster } from "../model/mhw";
import { mhwURL } from "../utils/constants";

@Component({})
export default class MonstersComponent extends Vue {
  private monsterList: Map<string, Monster> = new Map<string, Monster>();
  private monsterNames: string[] = [];
  private isLoading: boolean = false;
  private model: string = "";

  created() {
    //API call for monsters
    this.isLoading = true;
    this.axios
      .get(`${mhwURL}/monsters`)
      .then(response => {
        if (response.status === 200 && response.data) {
          let temp = response.data;
          temp.forEach(value => {
            if (value) {
              this.monsterList.set(value.name, value);
              this.monsterNames.push(value.name);
            }
          });
          this.isLoading = false;
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
