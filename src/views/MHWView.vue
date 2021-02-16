<template>
  <div>
    <v-row no-gutters>
      <v-col id="equip-selection">
        <equip-component
          @weaponSent="weaponDisplay"
          @armorSent="armorDisplay"
        ></equip-component>
      </v-col>

      <v-col id="monster-selection">
        <monsters-component></monsters-component>
      </v-col>
    </v-row>

    <v-card>
      <v-row>
        <!-- <v-col>Skills</v-col> -->
        <v-col>
          Weapon: Type {{ weapon.type }} Attack:
          {{ weapon.attack }}
          Sharpness: {{ weapon.durability }}
          <!-- <div>{{}}</div> -->
          Rarity: {{ weapon.rarity }}
        </v-col>
        <v-col>
          Armor: {{ armor.chest }} Total Defense:{{ totalDefense }} Resistances:
          dragon -{{ resistances.get("dragon") }} fire -
          {{ resistances.get("fire") }} ice -
          {{ resistances.get("ice") }} thunder -
          {{ resistances.get("thunder") }} water -{{ resistances.get("water") }}
        </v-col>
      </v-row>
      Some information and description and stats and stuff here
    </v-card>
  </div>
</template>

<script lang="ts">
import { Weapons, Armor } from "@/model/mhw";
import { Component, Vue, Watch } from "vue-property-decorator";
import EquipComponent from "../components/EquipComponent.vue";
import MonstersComponent from "../components/MonstersComponent.vue";

@Component({
  components: {
    MonstersComponent,
    EquipComponent
  }
})
export default class MHWView extends Vue {
  private isLoading?: boolean = false;
  private weapon: Weapons = new Weapons();
  private armor: Map<string, Armor> = new Map<string, Armor>();

  private totalDefense: number = 0;
  private resistances: Map<string, number> = new Map<string, number>([
    ["dragon", 0],
    ["fire", 0],
    ["ice", 0],
    ["thunder", 0],
    ["water", 0]
  ]);

  created() {}

  public weaponDisplay(value: Weapons) {
    this.weapon = value;
  }

  public armorDisplay(value: Map<string, Armor>) {
    this.resistances = new Map<string, number>([
      ["dragon", 0],
      ["fire", 0],
      ["ice", 0],
      ["thunder", 0],
      ["water", 0]
    ]);
    this.armor = value;
    this.totalDefense = 0;

    this.armor.forEach(x => {
      this.totalDefense += x.defense["base"];
      this.resistances.forEach((value, key) => {
        this.resistances.set(key, value + x.resistances[`${key}`]);
      });
    });
  }
}
</script>

<style lang="scss">
#monster-selection {
  max-width: 50%;
}
</style>
