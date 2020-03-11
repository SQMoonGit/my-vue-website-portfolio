<template>
  <div>
    <v-row no-gutters>
      <v-col>
        <equip-component :mhwLink="mhwURL"></equip-component>
      </v-col>

      <v-col>
        <monsters-component :mhwLink="mhwURL"></monsters-component>
      </v-col>
    </v-row>

    <v-card>
      Some information and description and stats and stuff here
    </v-card>

  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import EquipComponent from '@/components/EquipComponent.vue';
import MonsterComponent from '@/components/MonstersComponent.vue';

@Component({
  components: {
    EquipComponent, MonstersComponent
  }
})
export default class MHWView extends Vue{
  private mhwURL: string = "https://mhw-db.com";

}
</script>

<style lang="scss">
</style>
