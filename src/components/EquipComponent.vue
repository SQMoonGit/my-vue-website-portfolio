<template>
    <div>
<<<<<<< HEAD
        <v-card>
            <v-row no-gutters>
                <v-col>
                    <v-autocomplete
                        hide-details hide-selected hide-no-data
                        :items="weaponsList"
                        v-model="weaponChosen"
                        :loading="isLoading">
                    </v-autocomplete>

=======
        <v-card min-height="260">
            <v-row no-gutters>
                <v-col>
                    <v-autocomplete
                        hide-details hide-selected hide-no-data return-object
                        :items="weaponsList" item-text="name"
                        :prepend-inner-icon="'mhw-' + weaponSelected.type"
                        v-model="weaponSelected" :loading="isLoading">
                    </v-autocomplete>

                    <v-autocomplete
                        v-if="!isArmorSet"
                        v-for="(armorType, index) in armorPieces"
                        hide-details hide-selected hide-no-data return-object
                        :items="armorList.filter((v,i) => {return v.type === armorType})" item-text="name"
                        :prepend-inner-icon="'mhw-' + armorType"
                        v-model="armorSelected[armorType]" :loading="isLoading">
                    </v-autocomplete>

                    <v-autocomplete
                        v-if="isArmorSet"
                        hide-details hide-selected hide-no-data return-object
                        :items="armorSets" item-text="name"
                        :prepend-inner-icon="'mhw-armorset'"
                        v-model="armorSetSelected" :loading="isLoading" >
                    </v-autocomplete>

                    <v-btn dense @click="isArmorSet = !isArmorSet">Armorset</v-btn>
>>>>>>> 00108ac9768f3b5eaf87b539182132a35d1f5720

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
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
import {Weapons} from "@/model/weapons";
import {Armor} from "@/model/armor";
import {Armorsets} from "@/model/armorsets";

@Component
export default class EquipComponent extends Vue{
<<<<<<< HEAD
    @Prop() mhwLink!: string;

    private isLoading: boolean = false;

    private armorList: Armor[] = [];

    private weaponsList: Weapons[] = [];
    private weaponChosen: Weapons = new Weapons();

    created(){
        this.$http.get(`${this.mhwLink}/armor`).then((result) =>{
            if(result.ok && result.data){
                this.armorList = result.data;
            } else{
                throw new Error(result.statusText);
            }
        }, (error) =>{
            alert(error.body.error);
            console.log("[ERROR] - GET/armor");
        })

        this.$http.get(`${this.mhwLink}/weapons`).then((result) =>{
            if(result.ok && result.data){
                this.weaponsList = result.data;
            } else{
                throw new Error(result.statusText);
            }
        }, (error) =>{
            alert(error.body.error);
            console.log("[ERROR] - GET/weapons");
        })
=======

  @Prop() private armorSets!: Armorsets[];
  @Prop() private weaponsList!: Weapons[];
  @Prop() private armorList!: Armor[];

  private isLoading: boolean = false;
  private isArmorSet: boolean = false;
  private armorPieces: string[] = [];

  private armorSelected: object = {};
  private armorSetSelected: Armorsets = new Armorsets();
  private weaponSelected: Weapons = new Weapons();

  created(){
      this.armorPieces = ['head', 'chest', 'gloves', 'waist', 'legs'];
      this.armorPieces.forEach((value: string) =>{
          this.$set(this.armorSelected, value, '');
      })


  }

  @Watch('armorSetSelected', {immediate: true, deep: true})
  public updateArmor(){
    if(this.isArmorSet){
      this.armorPieces.forEach((type:string)=>{
        this.armorSetSelected.pieces.forEach((armor:Armor) =>{
          this.$set(this.armorSelected, type, armor);
        });
      });
>>>>>>> 00108ac9768f3b5eaf87b539182132a35d1f5720
    }
  }

}
</script>

<style lang="scss">
    div{
        .v-autocomplete{
            padding-top: 0;
            margin-top: 1px;
            margin-bottom: 5px;
        }
    }

</style>
