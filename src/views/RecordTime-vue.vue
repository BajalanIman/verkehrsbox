<template>
  <div>
    <div>
      <div
        class="pr-2 bg-cyan-900 w-12/12 mr-5 text-end pt-2 pb-2 text-white font-serif text-white grid grid-cols-[_1fr,_0px] h-12"
      >
        <div class="justify-self-center bg-cyan-900 pt-1">
          {{ $t("RecordTime") }}
        </div>
        <div class="justify-self-center h-8">
          <router-link to="/dashboard/main-dashboard" class="">
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
      </div>
      <!-- Messages -->
      <div
        class="min-w-[450px] p-2 ml-[450px] mt-10 h-10 text-lg font-bold absolute flex justify-center items-center"
      >
        <textarea
          class="resize-none text-base text-orange-600 min-w-full text-center focus:outline-none focus:border-sky-50 focus:ring-sky-50"
          v-model="errorMessageFillForm"
        ></textarea>
      </div>

      <p
        v-if="thanksMessage"
        class="h-[50px] text-base text-xl font-bold text-cyan-900 w-[400px] ml-[500px] mt-4 absolute flex justify-end items-end"
      >
        {{ $t("thanksMessage") }}
      </p>

      <p
        v-if="errorSending"
        class="h-8 text-white bg-red-500 justify-center font-bold"
      >
        Error: {{ errors }}
      </p>

      <!-- Employees -->

      <div class="bg-white flex justify-center items-center h-[710px]">
        <!-- Header -->

        <form v-on:submit.prevent="submitform" ref="textareaform">
          <div class="flex flex-2 text-xl">
            <div class="pr-3 pl-2">
              <!-- Object type -->
              <div class="pb-3">
                <label
                  ><strong>{{ $t("RecordWorktime") }}</strong></label
                >
              </div>
              <div class="flex mt-8">
                <div class="w-18 ml-8 pt-2">
                  <label class="text-xl" for="Objecttype"
                    ><strong>{{ $t("ObjectType") }}</strong></label
                  >
                </div>
                <div
                  class="pl-2 h-10 w-[250px] pr-2 ml-4 border rounded mt-1 bg-white border-gray-400 text-base cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                >
                  <select
                    v-model="objectSelected"
                    class="h-9 text-gray-400 ml-1 w-[236px] bg-white border-gray-400 text-base cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                    name="Objecttype"
                    id="Objecttype"
                  >
                    <option
                      class="w-[250px]"
                      value="Not selected"
                      disabled
                      selected
                    >
                      Weekday
                    </option>
                    <!-- <option value="Vehicle">{{ $t("Vehicle") }}</option>
                    <option value="Product">{{ $t("Product") }}</option> -->
                  </select>
                </div>
              </div>
              <!-- Notes -->
              <div class="flex mt-5 items-center">
                <div class="w-18">
                  <label class="mt-3 text-xl ml-5" for="Notes"
                    ><strong>{{ $t("Notes") }}</strong></label
                  >
                </div>
                <div>
                  <textarea
                    v-model="note"
                    type="text"
                    class="h-[180px] p-2 w-[250px] ml-4 mt-1 border rounded bg-white border-gray-400 text-base focus:outline-none focus:border-sky-500 focus:ring-sky-500 resize-none"
                    v-bind:placeholder="$t('Note')"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="h-[360px] bg-gray-300 w-[2px] m-7"></div>
            <div>
              <!-- Task -->

              <!-- Start time -->
              <div class="flex mt-10">
                <div class="w-[130px]">
                  <label class="mt-2 text-xl ml-3" for="Starttime"
                    ><strong>{{ $t("StartTime") }}</strong></label
                  >
                </div>
                <input
                  type="datetime-local"
                  v-model="startTime"
                  id="birthday"
                  class="mb-2 border p-2 w-[350px]"
                />
                <!--  <div class="h-10 w-[160px] ml-4">
                  <Datepicker
                    v-model="time"
                    :format="format"
                    inputClassName="time"
                    class="h-5 w-88"
                    placeholder="Select Date"
                    :locale="$i18n.locale"
                    cancelText="abbrechen"
                    selectText="auswählen"
                  ></Datepicker> 
                </div>-->
                <!--   <div class="w-[160px] ml-5">
                  <Datepicker
                    time-picker
                    v-model="workingTimeStartTime"
                    inputClassName="time"
                    class="h-5 w-88"
                    placeholder="Select Date"
                    :locale="$i18n.locale"
                    cancelText="abbrechen"
                    selectText="auswählen"
                  ></Datepicker> 
                </div>-->
              </div>

              <!--  start pause -->
              <div class="flex mt-5">
                <div class="w-[130px]">
                  <label class="mt-2 text-xl ml-3" for="Endtime">
                    <strong>Start pause</strong></label
                  >
                </div>

                <input
                  type="datetime-local"
                  v-model="startPause"
                  id="birthday"
                  class="mb-2 border p-2 w-[350px]"
                />
              </div>

              <!--  End pause -->
              <div class="flex mt-5">
                <div class="w-[130px]">
                  <label class="mt-2 text-xl ml-3" for="Endtime">
                    <strong>End pause</strong></label
                  >
                </div>

                <input
                  type="datetime-local"
                  v-model="endPause"
                  id="birthday"
                  class="mb-2 border p-2 w-[350px]"
                />
              </div>

              <!--  End time -->
              <div class="flex mt-5">
                <div class="w-[130px]">
                  <label class="mt-2 text-xl ml-3" for="Endtime">
                    <strong>{{ $t("EndTime") }}</strong></label
                  >
                </div>

                <input
                  type="datetime-local"
                  v-model="endTime"
                  id="birthday"
                  class="mb-2 border p-2 w-[350px]"
                />
                <!--  <div class="h-10 w-[160px] ml-4">
                   <Datepicker
                    :format="format"
                    v-model="workingTimeEndDate"
                    class="h-5 w-87"
                    inputClassName="time"
                    placeholder="Select Final Date"
                    :locale="$i18n.locale"
                    cancelText="abbrechen"
                    selectText="auswählen"
                  ></Datepicker> 
                </div>
               <div class="w-[160px] ml-5">
                  <Datepicker
                    time-picker
                    v-model="workingTimeEndTime"
                    inputClassName="time"
                    class="h-5 w-88"
                    placeholder="Select Date"
                    :locale="$i18n.locale"
                    cancelText="abbrechen"
                    selectText="auswählen"
                  ></Datepicker> 
                </div>-->
              </div>
              <!-- Pause in Minuten -->
              <div class="flex mt-5">
                <!-- <div class="w-[130px]">
                  <label class="block mt-3 text-xl ml-5" for="Notes">
                    <strong>{{ $t("PauseTime") }}</strong>
                  </label>
                </div>

                <div
                  class="w-[160px] flex items-center ml-4 mt-1 border rounded border-gray-400 text-base cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-10 w-7 text-gray-400 border rounded"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <input
                    v-model="pause"
                    class="h-10 w-32 text-base p-2 rounded"
                    type="number"
                    id="employees"
                    name="employees"
                    :placeholder="$t('PauseInMinuten')"
                  />
                </div>
                <div class="w-[160px] ml-5 pt-2">
                  <p class="text-lg text-gray-400 rounded">Minuten</p>
                </div> -->
              </div>
              <!-- Total Time -->
              <!-- <div class="flex mt-5">
                <div class="w-[130px]">
                  <label class="block mt-3 ml-5" for="TotalTime">
                    <strong>{{ $t("TotalTime") }}</strong>
                  </label>
                </div>
                <div
                  class="w-[160px] flex items-center ml-4 mt-1 border rounded border-gray-400 text-base cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500 resize-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="text-gray-400 border h-10 w-10 rounded"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <textarea
                    placeholder="--,--"
                    v-on:click="totaldateOne"
                    v-model="totalTime"
                    type="text"
                    class="h-10 text-base p-2 resize-none rounded"
                  ></textarea>
                </div>
                <div class="w-[160px] ml-5 pt-2">
                  <p class="text-lg text-gray-400">HH:MM</p>
                </div>
              </div> -->
              <!-- submit btn -->

              <div class="flex mt-5">
                <div class="w-[120px]"></div>

                <button
                  @click="cancel"
                  class="h-10 w-[160px] text-cyan-900 ml-4 border border-cyan-900 rounded text-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 hover:bg-cyan-700 hover:text-white"
                  type="submit"
                >
                  Cancel
                </button>
                <div>
                  <button
                    @click="submit"
                    class="h-10 w-[160px] bg-cyan-900 ml-4 border rounded text-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 hover:bg-cyan-700"
                    type="submit"
                  >
                    {{ $t("save") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <LoadingPage v-if="loading"></LoadingPage>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

// import Datepicker from "@vuepic/vue-datepicker";
// import "@vuepic/vue-datepicker/dist/main.css";
// import { ref } from "vue";

import LoadingPage from "../components/LoadingPage.vue";

export default {
  name: "RecordTime-vue",
  components: {
    // Datepicker,
    LoadingPage,
  },

  data() {
    return {
      startTime: null,
      endTime: null,
      startPause: null,
      endPause: new Date(""),
      note: "",
      // time: null,
      leftChange: "-210px",
      /* tasks: [], */
      lang: "de",
      errorSending: false,
      loading: false,
      objectLists: [],
      objectSelected: "Not selected",
      vehicleList: [],
      // date: new Date(),
      pause: 0,
      minutes: null,
      dateTwo: new Date(),
      totaldate: null,
      Difference_In_Days: null,
      hours: null,
      totalTime: null,
      timerableType: "",
      form: {
        employeeId: "" /* ok */,
        workingTime: [],
        categoryDayId: null,
        timerableType: "",
        taskId: "" /* ok */,
        /* orderId: "", */
        timerableId: 0 /* finish time */,

        categoryDayIdtwo: "",
        note: "" /* ok */,
      },
      thanksMessage: false,
      errorMessageFillForm: "",

      workingTimeStartDate: "",
      workingTimeStartTime: "01:00:05",
      workingTimeEndDate: "2022-12-09",
      workingTimeEndTime: "03:08:05",
    };
  },

  watch: {
    objectSelected: function () {
      this.form.timerableType = "";
      if (this.objectSelected === "Vehicle") {
        axios
          .get(`${localStorage.url}/api/all-vehicles`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            this.loading = true;
            setTimeout(
              function () {
                this.loading = false;
              }.bind(this),
              300
            );

            (this.objectLists = []),
              response.data.forEach((element) => {
                this.objectLists.push(element.number_plate);
                /* this.form.vehicleModel = this.objectLists; */
              });
          });
      } else {
        this.form.timerableType = "";
        axios
          .get(`${localStorage.url}/api/product-list`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            this.loading = true;
            setTimeout(
              function () {
                this.loading = false;
              }.bind(this),
              300
            );
            this.objectLists = [];
            response.data.data.forEach((element) => {
              this.objectLists.push(element.product_name);
              /* this.form.vehicleModel = this.objectLists; */
            });
          });
      }
    },
  },

  methods: {
    // mmbnmbn() {
    //   const date = ref(new Date());

    //   const time = (dateone) => {
    //     const day = dateone.getDate();
    //     const month = dateone.getMonth() + 1;
    //     const year = dateone.getFullYear();

    //     return `${year}-${month}-${day}`;
    //   };

    //   const format = (date) => {
    //     const day = date.getDate();
    //     const month = date.getMonth() + 1;
    //     const year = date.getFullYear();

    //     return `${year}-${month}-${day}`;
    //   };

    //   return {
    //     time,
    //     date,
    //     format,
    //   };
    // },

    emitedTaskes(task) {
      this.form.taskId = task;
    },
    changeCategory(data) {
      this.form.categoryDayIdtwo = data;
    },

    changeRecordValue(data) {
      this.form.employeeId = data;
    },

    totaldateOne() {
      if (localStorage.lang === "de") {
        this.lang = "de";
      } else {
        this.lang = "en";
      }

      this.totaldate = this.dateTwo.getTime() - this.date.getTime();
      this.totalTime = this.totaldate / (1000 * 3600 * 24);
      this.hours = this.totalTime * 24;
      this.minutes = this.hours * 60 - this.pause;
      this.form.timerableId = this.minutes;

      if (this.dateTwo < this.date) {
        this.totalTime = "Imported days are not correct!";
      } else {
        this.totalTime = ` ${this.form.timerableId.toFixed(0)}  `;
      }
    },

    openNav() {
      if (this.leftChange === "-210px") {
        this.leftChange = "0px";
      } else {
        this.leftChange = "-210px";
      }
    },
    openDashboard() {
      /* this.$router.push({ path: `/MainPage` }); */
      this.$router.push({ path: "/MeterReading" });
    },
    writeLog(e) {
      console.log(e);
    },
    cancel() {
      this.startTime = null;
      this.endTime = null;
      this.startPause = null;
      this.endPause = null;
      this.note = "";
    },

    submit() {
      var moment = require("moment");

      this.startPause = moment(this.startPause).format("YYYY-MM-DD HH:MM:SS");
      this.endPause = moment(this.endPause).format("YYYY-MM-DD HH:MM:SS");

      if (this.startTime === null || this.endTime === null) {
        this.errorMessageFillForm = "You have to define start and end.";
        setTimeout(
          function () {
            this.errorMessageFillForm = "";
          }.bind(this),
          5000
        );
      } else if (this.startTime > this.endTime) {
        this.errorMessageFillForm =
          "Starting date shouldn't be after finishing date!";
        setTimeout(
          function () {
            this.errorMessageFillForm = "";
          }.bind(this),
          5000
        );
      } else if (
        (this.startPause < this.startTime && this.startPause == !null) ||
        (this.endPause > this.endTime && this.endTime == !null)
      ) {
        this.errorMessageFillForm = "Pause is not correct!";
        setTimeout(
          function () {
            this.errorMessageFillForm = "";
          }.bind(this),
          5000
        );
      } else {
        axios
          .post(`https://verkehrsbox.de/api/time-tracker`, null, {
            params: {
              "employeeId[0]": `${localStorage.getItem("id")}`,
              "workingTime[0]": `${this.startTime}`,
              "workingTime[1]": `${this.endTime}`,
              "breakTime[0][pause_time]": `${this.startPause}`,
              "breakTime[0][resume_time]": `${this.endPause}`,
              note: `${this.note}`,
              categoryDayId: 3,
            },

            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            console.log(res);
            this.startTime = null;
            this.endTime = null;
            this.startPause = null;
            this.endPause = null;
            this.note = "";
            console.log(this.startTime);
            console.log(this.endTime);
            console.log(this.startPause);
            console.log(this.endPause);
            this.thanksMessage = true;
            setTimeout(
              function () {
                this.thanksMessage = false;
              }.bind(this),
              5000
            );

            // below lines have to be replace with post information in axios
            console.log(this.form);
            // this.loading = true;
            // this.form = [];
            // this.pause = "";
            // this.data = "";
            // this.dateTwo = "";
            // this.thanksMessage = true;
            // setTimeout(
            //   function () {
            //     this.loading = false;
            //   }.bind(this),
            //   500
            // );

            // setTimeout(
            //   function () {
            //     this.thanksMessage = false;
            //   }.bind(this),
            //   5000
            // );
          })

          .catch((err) => {
            console.error(err.message);
            this.errors = err.message;

            if (this.errors.lenght !== "") {
              this.errors = "Failed to send the information...";
            }
            // this.startTime = null;
            // this.endTime = null;
            // this.startPause = null;
            // this.endPause = null;
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
  },
};
</script>
<!-- style for multiple -->
<style src="@vueform/multiselect/themes/default.css"></style>

<style>
.time {
  height: 40px;

  border: 1px solid #a1a3a5;
  border-radius: 7px;
}
</style>

submit() { axios .post(`https://verkehrsbox.de/api/time-tracker`, null, {
params: { "employeeId[0]": `${localStorage.getItem("id")}`, "workingTime[0]":
`${this.workingTimeStartDate} ${this.workingTimeStartTime}`, "workingTime[1]":
`${this.workingTimeEndDate} ${this.workingTimeEndTime}`, categoryDayId: 3,
"breakTime[0][pause_time]": "2022-12-09 01:10:00", "breakTime[0][resume_time]":
"2022-12-09 01:20:00", note: "Iman1969", }, headers: { Authorization: `Bearer
${localStorage.getItem("token")}`, }, }) .then((res) => { console.log(res);
