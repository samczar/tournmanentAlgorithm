<template>
  <div>
    <h2>Consignment List</h2>
    <consignments />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Consignments from "@/components/Consignments.vue";

@Component({
  components: {
    Consignments
  }
})
export default class Consignmentlist extends Vue {}
</script>
