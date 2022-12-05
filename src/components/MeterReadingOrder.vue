<template>
  <div>
    <Multiselect
      v-model="value"
      on-change="order.id"
      placeholder="Select order"
      :close-on-select="false"
      :options="orderList"
      @select="writeLog"
    >
    </Multiselect>
  </div>
</template>

<script>
import axios from "axios";
import Multiselect from "@vueform/multiselect";

export default {
  components: { Multiselect },
  data() {
    return {
      orderList: [],
    };
  },
  mounted() {
    axios
      .get(`${localStorage.url}/api/all-order-list`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.orderList = response.data.data.map((i) => ({
          value: i.id,
          label: i.order_number,
        }));

        /*         console.log(this.orderList);
         */
      });
  },
};
</script>
