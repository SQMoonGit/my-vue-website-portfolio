<template>
  <div>
    <v-row no-gutters>
      <v-col>
        <equip-component ></equip-component>
      </v-col>

      <v-col>
        <monsters-component ></monsters-component>
      </v-col>
    </v-row>

    <v-card>
      Some information and description and stats and stuff here
    </v-card>

  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import EquipComponent from '../components/EquipComponent.vue';
import MonstersComponent from '../components/MonstersComponent.vue';
import {Armor} from '../model/armor';
import {Monster} from '../model/monsters';
import {Weapons} from '../model/weapons';
import {Armorsets} from '../model/armorsets';

@Component({
  components: {
    MonstersComponent, EquipComponent
  }
})
export default class MHWView extends Vue{
  private isLoading?: boolean = false;
  private model: string = "";
  private mhwURL: string = "https://mhw-db.com";

  private armorList: Armor[] = [];
  private monsterList: Monster[] = [];
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


}
</script>

<style lang="scss">
</style>
