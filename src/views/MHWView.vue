<template>
  <div>
    <v-row no-gutters>
      <v-col>
        <equip-component></equip-component>
      </v-col>

      <v-col>
        <monsters-component></monsters-component>
      </v-col>
    </v-row>

    <v-card>
      Some information and description and stats and stuff here
    </v-card>
  </div>
</template>

<script lang="ts">
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
  private model: string = "";

  created() {}
}
</script>

<style lang="scss"></style>
