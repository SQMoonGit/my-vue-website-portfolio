<template>
  <div>
    <v-card min-height="500">
      <v-row no-gutters>
        <v-col :loading="isLoading">
          <v-autocomplete
            id="weapons"
            cache-items
            hide-details
            hide-selected
            hide-no-data
            return-object
            :items="weaponsList"
            item-text="name"
            :prepend-inner-icon="'mhw-' + weaponSelected.type"
            :loading="isLoading"
            @input="sendWeaponSelected($event)"
          >
          </v-autocomplete>

          <v-autocomplete
            v-if="!isArmorSet"
            v-for="(armorType, index) in armorPieces"
            :key="index"
            cache-items
            hide-details
            hide-selected
            hide-no-data
            return-object
            :items="
              armorList.filter((v, i) => {
                return v.type === armorType;
              })
            "
            item-text="name"
            :prepend-inner-icon="'mhw-' + armorType"
            :loading="isLoading"
            @input="sendArmorSelected(armorType, $event)"
          >
          </v-autocomplete>

          <v-autocomplete
            id="armorset"
            v-if="isArmorSet"
            cache-items
            hide-details
            hide-selected
            hide-no-data
            return-object
            :items="armorSets"
            item-text="name"
            :prepend-inner-icon="'mhw-armorset'"
            :loading="isLoading"
            @input="updateArmor($event)"
          >
          </v-autocomplete>

          <v-btn dense @click="isArmorSet = !isArmorSet">Armorset</v-btn>
        </v-col>

        <v-col>
          <!-- better image here with weapons and armor and stuff
          <v-img></v-img> -->
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { Weapons, Armor, Armorsets } from "../model/mhw";
import { mhwURL } from "../utils/constants";

@Component({})
export default class EquipComponent extends Vue {
  private armorSets: Armorsets[] = [];
  private weaponsList: Weapons[] = [];
  private armorList: Armor[] = [];

  private isLoading: boolean = false;
  private isArmorSet: boolean = false;
  private armorPieces: string[] = [];

  private armorSelected: Map<string, Armor> = new Map<string, Armor>();
  private armorSetSelected: Armorsets = new Armorsets();
  private weaponSelected: Weapons = new Weapons();

  created() {
    this.isLoading = true;
    this.armorPieces = ["head", "chest", "gloves", "waist", "legs"];
    this.armorPieces.forEach((value: string) => {
      this.$set(this.armorSelected, value, "");
    });

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
        console.log("[ERROR] - GET/weapons");
      });

    //API call for armorsets
    this.axios
      .get(`${mhwURL}/armor/sets`)
      .then(response => {
        if (response.status === 200 && response.data) {
          this.armorSets = response.data;
        }
        this.isLoading = false;
      })
      .catch(error => {
        alert(error.body.error);
        console.log("[ERROR] - GET/armor/sets");
        this.isLoading = false;
      });
  }

  public sendArmorSelected(armorType: string, e: any) {
    this.armorSelected.set(armorType, e);
    this.$emit("armorSent", this.armorSelected);
  }

  public sendWeaponSelected(e: any) {
    this.weaponSelected = e;
    this.$emit("weaponSent", this.weaponSelected);
  }

  public updateArmor(e: any) {
    this.armorSetSelected = e;
    if (this.isArmorSet) {
      this.armorSetSelected.pieces.forEach((armor: Armor) => {
        !this.armorSelected.has(armor.type) &&
          this.armorSelected.set(armor.type, armor);
      });
    }
    this.$emit("armorSent", this.armorSelected);
  }
}
</script>

<style lang="scss">
div {
  .v-autocomplete {
    padding-top: 0;
    margin-top: 1px;
    margin-bottom: 5px;
  }
}
</style>
