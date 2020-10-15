import { RootState } from "@/types";
import { onSendAPI } from "@/store/api";

class ConsignmentSerice {
  async getAll(): Promise<RootState[]> {
    return await (await onSendAPI.get("/consignments")).data;
  }

  async get(id: number) {
    return await onSendAPI.get(`/consignments/${id}`);
  }

  async update(id: number, data: RootState) {
    return await onSendAPI.put(`/consignments/${id}`, data);
  }
}

export default new ConsignmentSerice();
