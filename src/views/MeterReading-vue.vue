<template>
  <div class="bg-white h-fit justify-center items-center pt-35 pb-20 mt-0">
    <div
      class="bg-cyan-900 w-full h-10 text-end pt-2 pb-2 pr-2 text-white font-serif text-white grid grid-cols-[_1fr,_0px]"
    >
      <div class="justify-self-center bg-cyan-900">Meter Reading</div>
      <router-link
        to="/dashboard/main-dashboard"
        class="justify-self-end bg-cyan-900 pr-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-7 h-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </router-link>
    </div>
    <!-- Messages -->
    <div class="w-full grid grid-col-0 justify-end items-end">
      <p
        v-if="thanksMsg"
        class="mr-5 pl-8 pt-1 pb-2 w-[350px] h-8 mt-3 text-white bg-cyan-800 justify-center font-bold"
      >
        {{ $t("thanksMessage") }}
      </p>

      <p
        v-if="errorSending"
        class="mr-5 pl-6 pr-4 pt-1 w-96 pb-2 h-8 mt-3 text-white bg-red-500 justify-center font-bold"
      >
        Error: {{ errors }}
      </p>
    </div>
    <div class="bg-white h-full pr-32 flex justify-center items-center">
      <form v-on:submit.prevent="submitform" ref="textareaform">
        <div class="pl-28 h-screen flex-2 pt-16">
          <!-- Order -->
          <div class="ml-1 bg-col-500 text-lg">
            <div class="pl-4 pb-1 text-xl">
              <label for="order"
                ><strong>{{ $t("order") }}</strong></label
              >
            </div>
          </div>

          <!-- Order -->
          <!--     <MeterReadingOrder></MeterReadingOrder> -->
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
          <!-- Meter number -->
          <div>
            <label class="block mb-0 mt-3 text-xl ml-4" for="meternumber">
              <strong>{{ $t("meternumber") }}</strong>
              <span class="text-red-600">*</span>
            </label>

            <input
              v-on:focus="disableErrorOne"
              v-model="form.meter_number"
              class="pl-2 h-8 w-96 ml-4 mt-1 border bg-slate-200 border-gray-400 rounded-md cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
              type="number"
              name="comment"
              placeholder="1234232"
              form="meternumber"
            />
            <p class="text-red-500 ml-6">{{ showErrorMesageOne }}</p>
          </div>
          <!-- Reading -->
          <div>
            <label class="block mb-0 mt-3 ml-4 text-xl ml-4" for="Reading"
              ><strong>{{ $t("reading") }}</strong>
              <span class="text-red-600">*</span></label
            >

            <input
              v-on:focus="disableErrorTwo"
              v-model="form.reading"
              type="number"
              class="pl-2 h-8 w-96 mt-1 ml-4 border bg-slate-200 border-gray-400 rounded-md cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
              placeholder="12423523"
              form=""
            />
            <p class="text-red-500 ml-6">{{ showErrorMesageTwo }}</p>
          </div>
          <!-- Document -->
          <div>
            <label class="block mb-0 mt-3 text-xl ml-4" for="Document">
              <strong>{{ $t("document") }}</strong>
            </label>

            <input
              @change="upload"
              id="file-input"
              type="file"
              class="mt-3 ml-4"
            /><br /><br />
          </div>
          <!-- submit btn -->

          <button
            @click="submit"
            type="submit"
            class="block h-10 w-96 bg-cyan-900 ml-4 mt-4 text-neutral-50 border-2 rounded-md cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
          >
            <strong>{{ $t("Add") }}</strong>
          </button>
          <LoadingPage v-if="loading"></LoadingPage>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Multiselect from "@vueform/multiselect";

import LoadingPage from "../components/LoadingPage.vue";

/* import MeterReadingOrder from "../components/MeterReadingOrder.vue";
 */
export default {
  name: "MeterReading-vue",
  components: { Multiselect /* MeterReadingOrder */, LoadingPage },

  data() {
    return {
      errorSending: false,
      loading: true,
      value: [],
      orderList: [],
      errorInfoOne: "",
      showErrorMesageOne: null,
      errorInfoTwo: "",
      showErrorMesageTwo: "",
      meter_number: "",
      photo: "",
      selectedId: [],
      documents: "",
      form: {
        order_id: "",
        meter_number: "",
        reading: "",
        photo: "",
      },
      thanksMsg: false,
    };
  },
  methods: {
    upload(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        this.form.photo = this.previewImage;
      };
    },

    submit() {
      this.form.order_id = Number(this.value);
      console.log(this.form);
      console.log(`Bearer ${localStorage.getItem("token")}`);
      if (!this.form.reading) {
        this.showErrorMesageTwo = "Please Enter Meter Number!";
      } else if (!this.form.meter_number) {
        this.showErrorMesageOne = "Please Enter Meter Number!";
      } else {
        axios
          .post(`${localStorage.url}/api/add-meter-reading`, this.form, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            this.thanksMsg = true;
            setTimeout(
              function () {
                this.loading = false;
              }.bind(this),
              500
            );
            this.loading = true;
            setTimeout(
              function () {
                this.thanksMsg = false;
              }.bind(this),
              3000
            );
            console.log(res);
            this.$refs.textareaform.reset();
            this.form = [];
            this.value = [];

            //TODO:
          })
          .catch((err) => {
            console.error(err.message);
            this.errors = err.message;

            this.errorSending = true;
            setTimeout(
              function () {
                this.errorSending = false;
              }.bind(this),
              5000
            );
          });
      }
    },

    disableErrorOne() {
      if (this.showErrorMesageOne) {
        this.showErrorMesageOne = null;
      }
    },

    disableErrorTwo() {
      if (this.showErrorMesageTwo) {
        this.showErrorMesageTwo = "";
      }
    },
  },
  mounted() {
    axios
      .get(`${localStorage.url}/api/all-order-list`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.loading = false;
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
