import {
  Module,
  VuexModule,
  Mutation,
  getModule,
  Action
} from "vuex-module-decorators";
import store from "@/store";
import { RootState } from "@/types";
import ConsignmentService from "@/store/services/ConsignmentSerice";

@Module({
  namespaced: true,
  name: "consignment",
  store,
  dynamic: true
})
class Consignment extends VuexModule {
  consignments: RootState[] = [];
  consignment: RootState | null = null;

  @Mutation
  async mutateConsignments(consignments: RootState[]) {
    this.consignments = consignments;
  }

  @Action({ commit: "mutateConsignments" })
  async fetchConsignments() {
    const mutateConsignments = await ConsignmentService.getAll();
    console.log("mutateConsignments ", mutateConsignments);
    return mutateConsignments;
  }

  @Mutation
  async mutateGetConsignment(consignment: RootState) {
    this.consignment = consignment;
  }

  @Action({ commit: "mutateGetConsignment" })
  async getConsignment(index: any) {
    const result = await ConsignmentService.get(index);
    return result;
  }
}

export default getModule(Consignment);
