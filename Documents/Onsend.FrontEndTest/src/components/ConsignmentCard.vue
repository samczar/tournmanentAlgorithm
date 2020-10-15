<template>
  <div>
    <div v-if="!editMode" class="card__layer">
      <div class="card">
        <div class="card__layer">
          <v-card class="mx-auto my-12" max-width="374">
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <div class="card__sender">Sender: {{ name }}</div>
              </v-row>
              <div class="card__address">{{ address }}</div>
            </v-card-text>
            <v-btn
              color="deep-purple lighten-2"
              @click.prevent="editMode = true"
              text
            >
              Edit
            </v-btn>
            <div v-show="message">
              <v-alert type="success" dismissible>
                {{ message }}
              </v-alert>
            </div>
          </v-card>
        </div>
      </div>
    </div>
    <div v-else>
      <v-card class="mx-auto my-12" max-width="374">
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  :value="receivername"
                  :rules="nameRules"
                  :counter="100"
                  label="Receiver"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="8">
                <v-text-field
                  :value="receiveraddress"
                  :rules="nameRules"
                  :counter="100"
                  label="Receiver Address"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn
              color="deep-purple lighten-2"
              @click="updateConsignment(id)"
              text
            >
              update
            </v-btn>
            <v-btn
              color="deep-purple lighten-2"
              @click.prevent="editMode = false"
              text
            >
              cancel
            </v-btn>
          </v-container>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ConsignmentService from "@/store/services/ConsignmentSerice";
import consignments from "@/store/modules/consignment";

@Component
export default class Consignments extends Vue {
  @Prop(Number) readonly id: number | undefined;
  @Prop(String) readonly title: string | undefined;
  @Prop(String) readonly name: string | undefined;
  @Prop(String) readonly address: string | undefined;
  @Prop(String) readonly receivername: string | undefined;
  @Prop(String) readonly receiveraddress: string | undefined;

  private editMode: boolean = false;

  private valid: boolean = false;

  private nameRules = [
    (v: any) => !!v || "Name is required",
    (v: any) => v.length <= 100 || "Name must be less than 100 characters"
  ];

  private message: string = "";
  private consignment: any = {};

  async updateConsignment(id: number) {
    await ConsignmentService.update(id, this.consignment)
      .then(response => {
        this.consignment = response.data;
        this.message = "Update succesfully";

        console.log("response get ", this.consignment);
        this.editMode = false;
      })
      .catch(e => console.log(e));
  }
}
</script>

<style></style>
