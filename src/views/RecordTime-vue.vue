<template>
  <div>
    <div>
      <div
        class="pr-2 bg-cyan-900 w-full h-8 text-end pt-2 pb-2 text-white font-serif text-white grid grid-cols-[_1fr,_0px]"
      >
        <div class="justify-self-center bg-cyan-900 pt-1">
          {{ $t("RecordTime") }}
        </div>
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
      <div class="w-full grid grid-col-0 justify-end items-end mt-3 bg-white">
        <p
          v-if="thanksMessage"
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
      <!-- Employees -->

      <div
        class="bg-white flex justify-center items-center pb-[125px] h-[718px]"
      >
        <!-- Header -->

        <form v-on:submit.prevent="submitform" ref="textareaform">
          <div class="flex flex-2 text-xl">
            <div class="pr-3">
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
                    class="w-full h-9 text-gray-400 bg-white border-gray-400 text-base cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                    name="Objecttype"
                    id="Objecttype"
                  >
                    <option value="Not selected" disabled selected>
                      {{ $t("SelectObjectType") }}
                    </option>
                    <option value="Vehicle">{{ $t("Vehicle") }}</option>
                    <option value="Product">{{ $t("Product") }}</option>
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
                    v-model="form.note"
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
              <div class="flex mt-10 pt-10">
                <div class="w-[130px]">
                  <label class="mt-2 text-xl ml-5" for="Starttime"
                    ><strong>{{ $t("StartTime") }}</strong></label
                  >
                </div>
                <div class="h-10 w-[160px] ml-4">
                  <Datepicker
                    :format="format"
                    v-model="date"
                    inputClassName="time"
                    class="h-5 w-88"
                    placeholder="Select Date"
                    :locale="$i18n.locale"
                    cancelText="abbrechen"
                    selectText="auswählen"
                  ></Datepicker>
                </div>
                <div class="w-[160px] ml-5">
                  <Datepicker
                    time-picker
                    v-model="date"
                    inputClassName="time"
                    class="h-5 w-88"
                    placeholder="Select Date"
                    :locale="$i18n.locale"
                    cancelText="abbrechen"
                    selectText="auswählen"
                  ></Datepicker>
                </div>
              </div>
              <!--  End time -->
              <div class="flex mt-5">
                <div class="w-[130px]">
                  <label class="mt-2 text-xl ml-5" for="Endtime">
                    <strong>{{ $t("EndTime") }}</strong></label
                  >
                </div>
                <!-- v-model="dateTwo" -->
                <div class="h-10 w-[160px] ml-4">
                  <Datepicker
                    :format="format"
                    v-model="dateTwo"
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
                    v-model="date"
                    inputClassName="time"
                    class="h-5 w-88"
                    placeholder="Select Date"
                    :locale="$i18n.locale"
                    cancelText="abbrechen"
                    selectText="auswählen"
                  ></Datepicker>
                </div>
              </div>
              <!-- Pause in Minuten -->
              <div class="flex mt-5">
                <div class="w-[130px]">
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
                </div>
              </div>
              <!-- Total Time -->
              <div class="flex mt-5">
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
              </div>
              <!-- submit btn -->

              <div class="flex mt-5">
                <div class="w-[130px]"></div>

                <button
                  class="h-10 w-[160px] text-cyan-900 ml-4 border border-cyan-900 rounded text-white focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                  type="submit"
                >
                  Cancel
                </button>
                <div>
                  <button
                    @click="submit"
                    class="h-10 w-[160px] bg-cyan-900 ml-4 border rounded text-white focus:outline-none focus:border-sky-500 focus:ring-sky-500"
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
import { ref } from "vue";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import LoadingPage from "../components/LoadingPage.vue";

export default {
  name: "RecordTime-vue",
  components: {
    Datepicker,

    LoadingPage,
  },
  setup() {
    const dateInYear = ref(new Date());
    // In case of a range picker, you'll receive [Date, Date]
    const format = (dateInYear) => {
      const day = dateInYear.getDate();
      const month = dateInYear.getMonth() + 1;
      const year = dateInYear.getFullYear();

      return ` ${day}.${month}.${year}`;
    };

    return {
      dateInYear,
      format,
    };
  },

  data() {
    return {
      leftChange: "-210px",

      /* tasks: [], */

      lang: "de",
      errorSending: false,
      loading: false,
      objectLists: [],
      objectSelected: "Not selected",
      vehicleList: [],
      date: new Date(),
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

    // .post(`${localStorage.url}/api/time-tracker`, this.form, {
    submit() {
      axios
        .post(`https://stage.plan-profi.com/api/time-tracker`, this.form, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res);

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

          this.errorSending = true;
          setTimeout(
            function () {
              this.errorSending = false;
            }.bind(this),
            5000
          );
        });
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

"h-16 w-96 ml-4 mt-1 border bg-orange-50 rounded-xl shadow-md border-gray-400
text-base p-2 cursor-pointer focus:outline-none focus:border-sky-500
focus:ring-sky-500"
