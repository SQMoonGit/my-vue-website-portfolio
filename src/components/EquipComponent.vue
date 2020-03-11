<template>
    <div>
        <v-card>
            <v-row>
                <v-col>
                    <!-- <v-autocomplete 
                        hide-details hide-selected hide-no-data 
                        v-model="" :loading="isLoading">
                    </v-autocomplete> -->

                    <!-- <v-autocomplete >
                    </v-autocomplete> -->

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

@Component
export default class EquipComponent extends Vue{
    @Prop() mhwLink!: string;

    private isLoading: boolean = false;
    private model: string = "";
    private armorList: Armor[] = [];
    private weaponsList: Weapons[] = [];

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
    }
}
</script>

<style lang="scss">

</style>