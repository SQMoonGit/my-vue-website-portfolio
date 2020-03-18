<template>
  <div>
    <v-row no-gutters>
      <v-col>
<<<<<<< HEAD
        <equip-component :mhwLink="mhwURL"></equip-component>
      </v-col>

      <v-col>
        <monsters-component :mhwLink="mhwURL"></monsters-component>
=======
        <equip-component :armor-list="armorList" :weapons-list="weaponsList" :armor-sets="armorSets"></equip-component>
      </v-col>

      <v-col>
        <monsters-component :monster-lists="monsterList"></monsters-component>
>>>>>>> 00108ac9768f3b5eaf87b539182132a35d1f5720
      </v-col>
    </v-row>

    <v-card>
      Some information and description and stats and stuff here
    </v-card>

  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
<<<<<<< HEAD
import EquipComponent from '@/components/EquipComponent.vue';
import MonsterComponent from '@/components/MonstersComponent.vue';

@Component({
  components: {
    EquipComponent, MonstersComponent
  }
})
export default class MHWView extends Vue{
  private mhwURL: string = "https://mhw-db.com";

=======
import EquipComponent from '../components/EquipComponent.vue';
import MonstersComponent from '../components/MonstersComponent.vue';
import {Monster} from "@/models/monsters";
import {Armor} from "@/models/armor";
import {Weapons} from "@/models/weapons";
import {Armorsets} from "@/models/armorsets";

@Component({
  components: {
    MonstersComponent, EquipComponent
  }
})
export default class MHWView extends Vue{
  private isLoading?: boolean = false;
  private model: string = "";
  private mhwURL: string = "https://mhw-db.com";

  private monsterList: Monster[] = [];
  private armorList: Armor[] = [];
  private weaponsList: Weapons[] = [];
  private armorSets: Armorsets[] = [];

  created(){
    //API call for armor
    this.$http.get(`${this.mhwURL}/armor`).then((result) =>{
        if(result.ok && result.data){
            this.armorList = result.data;
        } else{
            throw new Error(result.statusText);
        }
    }, (error) =>{
        alert(error.body.error);
        console.log("[ERROR] - GET/armor");
    })

    //API call for weapons
    this.$http.get(`${this.mhwURL}/weapons`).then((result) =>{
        if(result.ok && result.data){
            this.weaponsList = result.data;
        } else{
            throw new Error(result.statusText);
        }
    }, (error) =>{
        alert(error.body.error);
        console.log("[ERROR] - GET/weapons");
    })

    //API call for armorsets
    this.$http.get(`${this.mhwURL}/armor/sets`).then((result) =>{
        if(result.ok && result.data){
            this.armorSets = result.data;
        } else{
            throw new Error(result.statusText);
        }
    }, (error) =>{
        alert(error.body.error);
        console.log("[ERROR] - GET/armor/sets");
    })

    //API call for monsters
    this.$http.get(`${this.mhwURL}/monsters`).then((result) =>{
        if(result.ok && result.data){
            this.monsterList = result.data;

        } else{
            throw new Error(result.statusText);
        }
    }, (error) =>{
        alert(error.body.error);
        console.log("[ERROR] - GET/monsters");
    })
  }


>>>>>>> 00108ac9768f3b5eaf87b539182132a35d1f5720
}
</script>

<style lang="scss">
</style>
