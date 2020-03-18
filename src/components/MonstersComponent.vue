<template>
    <div>
<<<<<<< HEAD
        <v-card>
            <v-autocomplete
                hide-details hide-selected hide-no-data
=======
        <v-card min-height="260">
            <v-autocomplete
                hide-details hide-selected hide-no-data return-object
>>>>>>> 00108ac9768f3b5eaf87b539182132a35d1f5720
                :items="monsterNames"
                :prepend-inner-icon="'mhw-'+ model.toLowerCase()"
                v-model="model" :loading="isLoading"
                class="monsters white--text col-auto">
            </v-autocomplete>

            Insert Monster picture here

        </v-card>
    </div>

</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import {Monster} from "@/model/monsters";

@Component
export default class MonsterComponent extends Vue{
  @Prop() private monsterList!: Monster[];

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
