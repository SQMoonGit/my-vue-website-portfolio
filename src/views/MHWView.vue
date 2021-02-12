<template>
  <div>
    <v-row no-gutters>
      <v-col>
        <equip-component
          :armor-list="armorList"
          :weapons-list="weaponsList"
          :armor-sets="armorSets"
        ></equip-component>
      </v-col>

      <v-col>
        <monsters-component></monsters-component>
      </v-col>
    </v-row>

    <v-card>
      Some information and description and stats and stuff here
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import EquipComponent from "../components/EquipComponent.vue";
import MonstersComponent from "../components/MonstersComponent.vue";
import { Monster, Armor, Weapons, Armorsets } from "../model/mhw";
import { mhwURL } from "../utils/constants";

@Component({
  components: {
    MonstersComponent,
    EquipComponent
  }
})
export default class MHWView extends Vue {
  private isLoading?: boolean = false;
  private model: string = "";

  private monsterList: Monster[] = [];
  private armorList: Armor[] = [];
  private weaponsList: Weapons[] = [];
  private armorSets: Armorsets[] = [];

  created() {
    //API call for armor
    this.axios
      .get(`${mhwURL}/armor`)
      .then(response => {
        if (response.status === 200 && response.data) {
          this.armorList = response.data;
        }
      })
      .catch(error => {
        alert(error.body.error);
        console.log("[ERROR] - GET/armor");
      });

    //API call for weapons
    this.axios
      .get(`${mhwURL}/weapons`)
      .then(response => {
        if (response.status === 200 && response.data) {
          this.weaponsList = response.data;
        }
      })
      .catch(error => {
        alert(error.body.error);
        console.log("[ERROR] - GET/wepons");
      });

    //API call for armorsets
    this.axios
      .get(`${mhwURL}/armor/sets`)
      .then(response => {
        if (response.status === 200 && response.data) {
          this.armorSets = response.data;
        }
      })
      .catch(error => {
        alert(error.body.error);
        console.log("[ERROR] - GET/armor/sets");
      });
  }
}
</script>

<style lang="scss"></style>
