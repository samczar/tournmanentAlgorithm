<template>
  <div>
    <h2>Onsend Front End Test</h2>

    <router-link to="/consignments" class="consignment"
      >Consignment List</router-link
    >

    <ul>
      <li>
        Task 1: You will need to fetch a list of consignments from a mocked API
        endpoint and display each consignment in a card component, similar to
        image below:
        <br />
        <img src="../assets/card.png" alt="" />
        <br />
        <code
          >GET https://5f852307c29abd00161902db.mockapi.io/api/consignments
        </code>
      </li>
      <li>
        Task 2: You will need to update a consignment status and display correct
        status once it has been updated in API, similar to image below:
        <br />
        <img src="../assets/card2.png" alt="" />
        <br />
        <code
          >PUT https://5f852307c29abd00161902db.mockapi.io/api/consignments/{id}
        </code>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.consignment {
  text-align: center;
  background-color: yellow;
  align-items: center;
  justify-content: center;
  margin: 50px 20px;
  display: block;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>
