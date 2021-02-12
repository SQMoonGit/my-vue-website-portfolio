<template>
  <div>
    <v-card min-height="260">
      <v-row no-gutters>
        <v-col :loading="isLoading">
          <v-autocomplete
            id="weapons"
            hide-details
            hide-selected
            hide-no-data
            return-object
            :items="weaponsList"
            item-text="name"
            :prepend-inner-icon="'mhw-' + weaponSelected.type"
            v-model="weaponSelected"
          >
          </v-autocomplete>

          <v-autocomplete
            v-if="!isArmorSet"
            v-for="(armorType, index) in armorPieces"
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
            v-model="armorSelected[armorType]"
          >
          </v-autocomplete>

          <v-autocomplete
            id="armorset"
            v-if="isArmorSet"
            hide-details
            hide-selected
            hide-no-data
            return-object
            :items="armorSets"
            item-text="name"
            :prepend-inner-icon="'mhw-armorset'"
            v-model="armorSetSelected"
          >
          </v-autocomplete>

          <v-btn dense @click="isArmorSet = !isArmorSet">Armorset</v-btn>
        </v-col>

        <v-col>
          better image here with weapons and armor and stuff
          <v-img></v-img>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { Weapons, Armor, Armorsets } from "../model/mhw";

@Component({})
export default class EquipComponent extends Vue {
  @Prop() private armorSets!: Armorsets[];
  @Prop() private weaponsList!: Weapons[];
  @Prop() private armorList!: Armor[];

  private isLoading: boolean = false;
  private isArmorSet: boolean = false;
  private armorPieces: string[] = [];

  private armorSelected: object = {};
  private armorSetSelected: Armorsets = new Armorsets();
  private weaponSelected: Weapons = new Weapons();

  created() {
    this.armorPieces = ["head", "chest", "gloves", "waist", "legs"];
    this.armorPieces.forEach((value: string) => {
      this.$set(this.armorSelected, value, "");
    });
  }

  @Watch("armorSetSelected", { immediate: true, deep: true })
  public updateArmor() {
    if (this.isArmorSet) {
      this.armorPieces.forEach((type: string) => {
        this.armorSetSelected.pieces.forEach((armor: Armor) => {
          this.$set(this.armorSelected, type, armor);
        });
      });
    }
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
