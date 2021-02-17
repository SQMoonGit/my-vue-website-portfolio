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
        <monsters-component @monsterSent="monsterDisplay"></monsters-component>
      </v-col>
    </v-row>

    <v-card>
      <v-row>
        <v-col class="skill-details">
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">Skills</th>
                  <th class="text-center">Level</th>
                </tr>
              </thead>
              <tbody>
                <v-tooltip bottom v-for="(v, i) in skills">
                  <template v-slot:activator="{ on, attrs }">
                    <tr v-bind="attrs" v-on="on">
                      <td>{{ v.skillName }}</td>
                      <td>{{ v.level }}</td>
                    </tr>
                  </template>
                  <span>{{ v.description }}</span>
                </v-tooltip>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col class="weapon-details">
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">Weapon</th>
                  <th class="text-center">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Attack</td>
                  <td>{{ weapon.attack }}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>{{ weapon.type }}</td>
                </tr>
                <tr>
                  <td>Sharpness</td>
                  <td>{{ weapon.durability }}</td>
                </tr>
                <tr>
                  <td>Rarity</td>
                  <td>{{ weapon.rarity }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col class="armor-details">
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">Armor</th>
                  <th class="text-center">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Defense</td>
                  <td>{{ totalDefense }}</td>
                </tr>
                <tr v-for="(v, i) of resistances.keys()">
                  <td>{{ v }}</td>
                  <td>{{ resistances.get(v) }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col class="monster-details">
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">Monster</th>
                  <th class="text-center">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(v, i) of monster">
                  <td>{{ i }}</td>
                  <td>{{ v }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Weapons, Armor, Monster, Skills } from "@/model/mhw";
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
  private monster: Monster = new Monster();
  private skills: Skills[] = [];

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
      x.skills.forEach((v: Skills) => {
        this.skills.push(v);
      });
      this.totalDefense += x.defense["base"];
      this.resistances.forEach((value, key) => {
        this.resistances.set(key, value + x.resistances[`${key}`]);
      });
    });
  }

  public monsterDisplay(value: Monster) {
    this.monster = value;
  }
}
</script>

<style lang="scss">
#monster-selection {
  max-width: 50%;
}
</style>
