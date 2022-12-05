<template>
  <div class="bg-white w-full h-screen relative">
    <!-- top bar -->
    <div
      class="bg-cyan-900 w-full h-10 text-end pt-2 pb-2 text-white font-serif text-white grid grid-cols-[_1fr,_0px]"
    >
      <div class="justify-self-center bg-cyan-900">{{ $t("allOrder") }}</div>

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
    <!-- body -->
    <div class="grid justify-items-center">
      <div>
        <!-- Select Customer -->
        <div class="ml-1 mt-4 bg-col-500 text-lg">
          <div class="pl-4 pb-1 text-xl">
            <label
              ><strong>{{ $t("SelectCustomer") }}</strong></label
            >
          </div>
          <SelectCustomer></SelectCustomer>
        </div>
      </div>

      <!-- Select Loction -->

      <div class="ml-1 bg-col-500 text-lg">
        <div class="pl-4 pb-1 mt-5 text-xl">
          <label
            ><strong>{{ $t("SelectLoction") }}</strong></label
          >
        </div>
        <AllOrderSelectLocation></AllOrderSelectLocation>
      </div>

      <!-- box -->
      <div id="allOrders ">
        <perfect-scrollbar @ps-scroll-y="onScroll" ref="scrollbar">
          <div class="">
            <ul
              class="mt-5"
              v-for="(item, index) in orderlist"
              v-bind:key="index"
            >
              <div class="shadow-md border-[1px] pt-2 pb-8 pr-3 pl-3 ml-2">
                <AllOrderSideBox :item="item"></AllOrderSideBox>

                <!--                 <div class="pt-1 flex justify-items-start">
                  <strong class="w-[230px]">{{ $t("order") }}</strong>
                  <p>{{ item.order_number }}</p>
                </div>
                <i class="block text-slate-200"
                  >-------------------------------------------------</i
                >
                <div class="pt-1 flex justify-items-start">
                  <strong class="w-[230px]">{{ $t("Appointment") }}</strong>
                  <p>{{ item.date_of_receipt }}</p>
                </div>
                <i class="block text-slate-200"
                  >-------------------------------------------------</i
                >
                <div class="pt-1 flex justify-items-start">
                  <strong class="w-[230px]">{{ $t("Status") }}</strong>
                  <p>{{ item.status }}</p>
                </div>
                <i class="block text-slate-200"
                  >-------------------------------------------------</i
                >
                <div class="pt-1 flex justify-items-start">
                  <strong class="w-[230px]">{{ $t("taskText") }}</strong>
                  <p>{{ item.custom_description }}</p>
                </div>
                <i class="block text-slate-200"
                  >-------------------------------------------------</i
                >
                <div class="pt-1 flex justify-items-start">
                  <strong class="w-[230px]">{{ $t("lacation") }}</strong>
                  <p>{{ item.order_location }}</p>
                </div> -->
                <i class="block text-slate-200"
                  >-------------------------------------------------</i
                >

                <!-- Details -->
                <div class="pt-1">
                  <button
                    v-on:click="opendetails(item)"
                    class="bg-cyan-900 w-[360px] h-8 rounded-md text-white hover:bg-cyan-700"
                  >
                    {{ $t("Details") }}
                  </button>
                </div>
                <!-- Documents -->
                <div class="pt-1">
                  <button
                    v-on:click="openDocuments"
                    class="bg-cyan-900 w-[360px] h-8 rounded-md text-white mt-1 hover:bg-cyan-700"
                  >
                    {{ $t("Documents") }}
                  </button>
                </div>

                <div>
                  <!-- Time Record -->
                  <button
                    v-on:click="openTimeRecord"
                    class="bg-cyan-900 w-[360px] h-8 rounded-md text-white mt-1 hover:bg-cyan-700"
                  >
                    Time record
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </perfect-scrollbar>
      </div>
    </div>
    <!-- Detail description -->
    <div v-if="showDetails" class="absolute inset-0 w-full h-screen z-50">
      <div
        class="bg-gray-800 bg-opacity-60 w-full h-screen flex justify-center items-center"
      >
        <div
          class="flex flex-col justify-first items-center bg-white w-1/2 h-10/12 border-2"
        >
          <div class="w-full align-center">
            <span
              v-on:click="closeDetails"
              class="float-right text-3xl pr-2 text-white cursor-pointer"
              >&times;</span
            >
            <p class="pt-1 text-center bg-cyan-900 h-8 text-white">
              {{ $t("BasicInformation") }}
            </p>
          </div>

          <div class="flex flex-col items-center pt-10 bg-white">
            <AllOrderSideDetails
              :selectedItemDetails="selectedItemDetails"
            ></AllOrderSideDetails>
            <!-- <div class="flex justify-items-start w-[400px]">
              <strong class="w-[250px]">{{ $t("order") }}</strong>
              <p class="">
                {{ selectedItemDetails.order_number }}
              </p>
            </div>
            <i class="block text-slate-200"
              >-------------------------------------------------</i
            >
            <div class="flex justify-items-start w-[400px]">
              <strong class="w-[250px]">{{ $t("OrderId") }}</strong>
              <p class="">{{ selectedItemDetails.id }}</p>
            </div>
            <i class="block text-slate-200"
              >-------------------------------------------------</i
            >
            <div class="flex justify-items-start w-[400px]">
              <strong class="w-[250px]">{{ $t("customOrder") }}</strong>
              <p class="">
                {{ selectedItemDetails.custom_order_number }}
              </p>
            </div>
            <i class="block text-slate-200"
              >-------------------------------------------------</i
            >
            <div class="flex justify-items-start w-[400px]">
              <strong class="w-[250px]">{{ $t("orderCategory") }}</strong>
              <p class="">
                {{ selectedItemDetails.order_category }}
              </p>
            </div>
            <i class="block text-slate-200"
              >-------------------------------------------------</i
            >
            <div class="flex justify-items-start w-[400px]">
              <strong class="w-[250px]">{{ $t("startDate") }}</strong>
              <p class="">{{ selectedItemDetails.start_date }}</p>
            </div>
            <i class="block text-slate-200"
              >-------------------------------------------------</i
            >
            <div class="flex justify-items-start w-[400px]">
              <strong class="w-[250px]">{{ $t("endDate") }}</strong>
              <p class="">{{ selectedItemDetails.end_date }}</p>
            </div>
            <i class="block text-slate-200"
              >-------------------------------------------------</i
            >
            <div class="flex justify-items-start w-[400px]">
              <strong class="w-[250px] justify-items-end">{{
                $t("Description")
              }}</strong>
              <p class="">
                {{ selectedItemDetails.location_description }}
              </p>
            </div>
            <i class="block text-slate-200"
              >-------------------------------------------------</i
            >
            <div class="flex justify-items-start w-[400px]">
              <strong class="w-[250px]">{{ $t("Customer") }}</strong>
              <p class="">
                {{ selectedItemDetails.get_customer }}
              </p>
            </div>
            <i class="block text-slate-200"
              >-------------------------------------------------</i
            >
            <div class="flex justify-items-start w-[400px]">
              <strong class="w-[250px]">{{ $t("ContactPerson") }}</strong>
              <p class="">
                {{ selectedItemDetails.contact_person }}
              </p>
            </div>
            <i class="block text-slate-200"
              >-------------------------------------------------</i
            >
            <div class="flex flex justify-items-start w-[400px]">
              <strong class="w-[250px]">{{ $t("ContactPhoneNummber") }}</strong>
              <p class="">
                {{ selectedItemDetails.cp_phone_number }}
              </p>
            </div>
            <i class="block text-slate-200"
              >-------------------------------------------------</i
            >
            <div class="flex justify-items-start w-[400px]">
              <strong class="w-[250px]">{{ $t("ProjectManager") }}</strong>
              <p class="">
                {{ selectedItemDetails.project_manager }}
              </p>
            </div>
            <i class="block text-slate-200"
              >-------------------------------------------------</i
            > -->
            <div class="flex justify-items-start w-[400px]">
              <strong class="w-[250px]">{{ $t("PhoneNumber") }}</strong>
              <p class="pb-12">
                {{ selectedItemDetails.cp_phone_number }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Documents description -->
    <div v-if="showDocuments" class="absolute inset-0 w-full h-screen z-50">
      <div
        class="bg-gray-800 bg-opacity-60 w-full h-screen flex justify-center items-center"
      >
        <div
          class="flex flex-col justify-first items-center bg-white w-1/2 h-[23rem] border-2"
        >
          <div class="w-full align-center">
            <span
              v-on:click="closeDocuments"
              class="float-right text-3xl pr-2 text-white cursor-pointer"
              >&times;</span
            >
            <p class="pt-1 text-center bg-cyan-900 h-8 text-white">
              {{ $t("Documents") }}
            </p>
          </div>
          <div class="flex w-full shadow-md">
            <p class="ml-16 w-48">{{ $t("Category") }}</p>
            <p class="w-48">{{ $t("FileName") }}</p>
            <p class="w-48">{{ $t("Date") }}</p>
            <p class="w-48">{{ $t("Action") }}</p>
          </div>
          <input
            type="file"
            class="bg-cyan-900 h-10 rounded-md text-white p-1 w-64 mt-6 cursor-pointer hover:bg-cyan-700"
          />
        </div>
      </div>
    </div>
    <!-- Time description -->
    <div v-if="showTimeRecord" class="absolute inset-0 w-full h-screen z-50">
      <div
        class="bg-gray-800 bg-opacity-50 w-full h-screen flex justify-center items-center"
      >
        <div
          class="flex flex-col justify-first items-center bg-white w-1/2 h-1/2 border-2"
        >
          <div class="flex justify-between w-full align-center bg-cyan-900">
            <p
              class="bg-cyan-900 w-full flex justify-center h-8 text-white pt-2"
            >
              Record Time
            </p>

            <span
              v-on:click="closeTimeRecord"
              class="text-3xl text-white justify-end cursor-pointer pr-3"
              >&times;</span
            >
          </div>

          <!-- Select Employee -->
          <div class="text-lg flex flex-col">
            <div class="pt-3 flex justify-center w-full">
              <label><strong>Select employee</strong></label>
            </div>
            <div class="justify-center pr-2 pt-3">
              <SelectEmployee></SelectEmployee>
            </div>

            <div class="flex flex-around justify-center space-x-6">
              <!-- <button
                class="bg-cyan-900 h-8 rounded-md text-white w-16 mt-8 hover:bg-cyan-700"
              >
                Start
              </button>
              <button
                class="bg-cyan-900 h-8 rounded-md text-white w-16 mt-8 hover:bg-cyan-700"
              >
                Pause
              </button>
              <button
                class="bg-cyan-900 h-8 rounded-md text-white w-16 mt-8 hover:bg-cyan-700"
              >
                Stop
              </button>
 -->
              <div>
                <RecordTime></RecordTime>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";

import AllOrderSelectLocation from "../components/AllOrderSelectLocation.vue";
import SelectEmployee from "../components/SelectEmployee.vue";
import SelectCustomer from "../components/SelectCustomer.vue";
import RecordTime from "../components/RecordTime.vue";
import AllOrderSideBox from "../components/AllOrderSideBox.vue";
import AllOrderSideDetails from "../components/AllOrderSideDetails.vue";

export default {
  name: "allOrders",
  components: {
    PerfectScrollbar,
    AllOrderSelectLocation,
    SelectEmployee,
    SelectCustomer,
    RecordTime,
    AllOrderSideBox,
    AllOrderSideDetails,
  },
  data() {
    return {
      orderlist: [],
      showDetails: false,
      showDocuments: false,
      showTimeRecord: false,
      selectedItemDetails: [],
    };
  },
  methods: {
    opendetails(item) {
      console.log(item);
      this.showDetails = true;
      this.selectedItemDetails = item;
    },
    closeDetails() {
      this.showDetails = false;
    },
    openDocuments() {
      this.showDocuments = true;
    },
    closeDocuments() {
      this.showDocuments = false;
    },
    openTimeRecord() {
      this.showTimeRecord = true;
    },
    closeTimeRecord() {
      this.showTimeRecord = false;
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
        /*         this.orderList = response.data.data;
        console.log(this.orderList); */
        this.orderlist = response.data.data;
        console.log(this.orderlist);
        /*           console.log(this.orderlist);
         */
      });
  },
};
</script>
<style src="vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css" />
<style>
#allOrders {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.ps {
  height: 450px;
}
</style>
