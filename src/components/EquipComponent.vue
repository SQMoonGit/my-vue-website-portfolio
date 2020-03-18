<template>
    <div>
        <v-card>
            <v-row no-gutters>
                <v-col>
                    <v-autocomplete 
                        hide-details hide-selected hide-no-data return-object
                        :items="weaponsList" item-text="name"
                        :prepend-inner-icon="'mhw-' + weaponChosen.type"
                        v-model="weaponChosen" :loading="isLoading">
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

                    <v-btn dense @click="updateArmorSelected">Armorset</v-btn>

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
import {Vue, Component, Prop} from 'vue-property-decorator';
import {Weapons} from "@/model/weapons";
import {Armor} from "@/model/armor";
import {Armorsets} from "@/model/armorsets";

@Component
export default class EquipComponent extends Vue{
    @Prop() mhwLink!: string;

    private isLoading: boolean = false;
    private isArmorSet: boolean = false;

    private armorList: Armor[] = [];
    private armorSelected: object = {};
    private armorPieces: string[] = [];

    private armorSets: Armorsets[] = [];
    private armorSetSelected: Armorsets = new Armorsets();

    private weaponsList: Weapons[] = [];
    private weaponChosen: Weapons = new Weapons();

    created(){
        this.armorPieces = ['head', 'chest', 'gloves', 'waist', 'legs'];
        this.armorPieces.forEach((value: string) =>{
            this.$set(this.armorSelected, value, '');
        })

        //API call for armor
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

        //API call for weapons
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

        //API call for armorsets
        this.$http.get(`${this.mhwLink}/armor/sets`).then((result) =>{
            if(result.ok && result.data){
                this.armorSets = result.data;
            } else{
                throw new Error(result.statusText);
            }
        }, (error) =>{
            alert(error.body.error);
            console.log("[ERROR] - GET/armor/sets");
        })
    }

    public updateArmorSelected(){
        this.isArmorSet = !this.isArmorSet;
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