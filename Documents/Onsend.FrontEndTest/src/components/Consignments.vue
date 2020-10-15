<template>
  <div class="card">
    <div>
      <consignment-card
        :key="consignment.id"
        v-for="consignment in consignments"
        :title="'OnSend'"
        :name="consignment.sender.name"
        :address="consignment.sender.address"
        :receivername="consignment.receiver.name"
        :receiveraddress="consignment.receiver.address"
        :id="consignment.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import consignment from "@/store/modules/consignment";
import { RootState } from "@/types";
import ConsignmentCard from "@/components/ConsignmentCard.vue";

@Component({
  components: { ConsignmentCard }
})
export default class Consignments extends Vue {
  private consignments: Array<RootState> = [];
  private consignment: any;

  async fetchAllConsignments() {
    this.consignments = await consignment.fetchConsignments();
  }

  mounted() {
    this.fetchAllConsignments();
  }
}
</script>

<style></style>
