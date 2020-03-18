<template>
    <div>
        <v-card>
            <v-autocomplete 
                hide-details hide-selected hide-no-data 
                :items="monsterNames" 
                :prepend-inner-icon="'mhw-'+ model.toLowerCase()"
                v-model="model" :loading="isLoading" 
                class="monsters white--text col-auto">
            </v-autocomplete>
        </v-card>
    </div>
    
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import {Monster} from "@/model/monsters";

@Component
export default class MonsterComponent extends Vue{

    private isLoading: boolean = false;
    private model: string = "";
    private monsterList: Monster[] = [];
    private monsterNames: string[] = [];

    created(){
        this.monsterList.forEach((value: Monster, index: number)=>{
            if(value){
                this.monsterNames.push(value.name);
            }
        })
    }
}
</script>

<style lang="scss">

</style>