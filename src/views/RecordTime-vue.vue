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
      <div class="bg-white flex justify-center items-center pt-20 pb-[120px]">
        <form v-on:submit.prevent="submitform" ref="textareaform">
          <div class="flex pr-8 flex-2 text-xl">
            <div class="pl-3 pr-3">
              <!--             <label class="block mt-3 text-xl ml-4" for="Employees">{{
              $t("Employees")
            }}</label>

            <select
              class="h-8 w-96 ml-4 mt-1 border-2 rounded-md"
              name="employees"
              id="employees"
              size="5"
              multiple
            >
              <option v-for="(info, id) in allInfoEmployees" v-bind:key="id">
                {{ info.first_name }} {{ info.last_name }}
              </option>
            </select> -->

              <!-- Employees -->
              <div>
                <div class="pl-4 pb-1">
                  <label
                    ><strong>{{ $t("Employees") }}</strong></label
                  >
                </div>
                <SelectEmployee
                  class="pl-1"
                  @recordValue="changeRecordValue"
                ></SelectEmployee>
                <p></p>

                <!-- <Multiselect
                  v-model="multiselect"
                  :searchable="true"
                  mode="tags"
                  placeholder="Select employees"
                  track-by="name"
                  label="name"
                  :close-on-select="false"
                  :search="true"
                  :options="
                    allInfoEmployees.map(
                      (i) => `${i.first_name} ${i.last_name}`
                    )
                  "
                  @select="writeLog"
                >
                  <template v-slot:tag="{ option, handleTagRemove, disabled }">
                    <div
                      class="multiselect-tag is-user"
                      :class="{
                        'is-disabled': disabled,
                      }"
                    >
                      <span
                        v-if="!disabled"
                        class="multiselect-tag-remove"
                        @mousedown.prevent="handleTagRemove(option, $event)"
                      >
                        <img :src="option.image" />
                        {{ option.name }}
                        <span class="multiselect-tag-remove-icon"></span>
                      </span>
                    </div>
                  </template>
                </Multiselect> -->
              </div>

              <!-- Object type -->

              <label class="pl-4 mt-3 block" for="Objecttype"
                ><strong>{{ $t("ObjectType") }}</strong></label
              >
              <div
                class="pl-2 h-10 w-96 pr-2 ml-4 border rounded-xl mt-1 shadow-md bg-white border-gray-400 text-base cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
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
              <!-- Select Object -->
              <!--             <div>
              <label class="block mt-3 text-xl ml-5" for="Objecttype"
                ><strong>{{ $t("SelectObject") }}</strong></label
              >
              <select
                class="h-10 w-96 ml-4 border rounded-xl mt-1 shadow-md border-gray-400 text-base p-2 cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                name="Objecttype"
                id="Objecttype"
              >
                <option value="Search" disabled selected>
                  Select object type
                </option>
                <option v-for="(vehicle, id) in vehicleList" v-bind:key="id">
                  {{ vehicle }}
                </option>
              </select>
            </div> -->
              <div class="ml-1 bg-col-500 text-lg mt-3">
                <div class="pl-4 pb-1">
                  <label
                    ><strong>{{ $t("SelectObject") }}</strong></label
                  >
                </div>
                <div>
                  <Multiselect
                    v-model="form.timerableType"
                    :placeholder="$t('Selectobject')"
                    track-by="name"
                    label="name"
                    :close-on-select="true"
                    :clear-on-select="false"
                    :search="true"
                    :options="objectLists"
                    @select="writeLog"
                  >
                    <template
                      v-slot:tag="{ option, handleTagRemove, disabled }"
                    >
                      <div
                        class="multiselect-tag is-userfdgf"
                        :class="{
                          'is-disabledfgd': disabled,
                        }"
                      >
                        <span
                          v-if="!disabled"
                          class="multiselect-tag-removefdsf"
                          @mousedown.prevent="handleTagRemove(option, $event)"
                        >
                          <img :src="option.image" />
                          {{ option.name }}
                          <span class="multiselect-tag-remove-icongh"></span>
                        </span>
                      </div>
                    </template>
                  </Multiselect>
                </div>
              </div>

              <!-- select object old -->

              <!--             <label class="block mt-3 text-xl ml-5" for="Object"
              ><strong>{{ $t("SelectObject") }}</strong></label
            > -->
              <!--  <select
              class="h-10 w-96 ml-4 border rounded-xl mt-1 shadow-md border-gray-400 text-base p-2 cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
              name="Object"
              id="Object"
            >
              <option value="Search" disabled selected>Select object</option>

              <option v-for="(vehicle, id) in productList.data" v-bind:key="id">
                {{ vehicle.product_name }}
              </option>

            </select> -->

              <!-- Category/Activiry-->
              <label class="block mt-3 text-xl ml-5" for="Category/Activiry">
                <strong>{{ $t("CategoryActiviry") }}</strong></label
              >
              <!--               <div
                class="pl-2 h-10 w-96 pr-2 ml-4 border rounded-xl mt-1 shadow-md bg-white border-gray-400 text-base cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
              >
                <select
                  class="w-full h-9 text-gray-400 bg-white border-gray-400 text-base cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                  name="Category/Activiry"
                  id="Category/Activiry"
                >
                  <option value="Search" disabled selected>
                    Select Category/Activiry
                  </option>
                  <option value="Waschen">Waschen</option>
                  <option value="Intandhaltung">Intandhaltung</option>
                </select>
              </div> -->
              <div class="pl-1">
                <RecordTimeCategory
                  @maincategory="changeCategory"
                ></RecordTimeCategory>
              </div>
              <!-- Notes -->
              <label class="block mt-3 text-xl ml-5" for="Notes"
                ><strong>{{ $t("Notes") }}</strong></label
              >
              <textarea
                v-model="form.note"
                type="text"
                class="h-[140px] p-2 w-96 ml-4 mt-1 border rounded-xl shadow-md bg-white rounded-xl shadow-md border-gray-400 text-base focus:outline-none focus:border-sky-500 focus:ring-sky-500 resize-none"
                v-bind:placeholder="$t('Note')"
              ></textarea>
            </div>
            <div>
              <!-- Task -->

              <!--               <label class="block mt-1 text-xl ml-5" for="Task">
                <strong>{{ $t("Task") }}</strong>
              </label>
              <div
                class="pl-2 h-10 w-96 pr-2 ml-4 border rounded-xl mt-1 shadow-md bg-white border-gray-400 text-base cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
              >
                <select
                  class="w-full h-9 text-gray-400 bg-white border-gray-400 text-base cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                  name="Task"
                  id="Task"
                >
                  <option value="Search" disabled selected>Select task</option>
                  <option value="Search pl-2">Select task</option>
                </select>
              </div> -->

              <!-- Task -->
              <div class="ml-1 bg-col-500 text-lg">
                <div class="pl-4 pb-1 text-xl">
                  <label
                    ><strong>{{ $t("Task") }}</strong></label
                  >
                </div>
                <RecordTimeTask @timeTasks="emitedTaskes"> </RecordTimeTask>
                <!--                 <Multiselect
                  :searchable="true"
                  mode="tags"
                  placeholder="Select Task"
                  track-by="name"
                  label="name"
                  :close-on-select="false"
                  :search="true"
                  :options="tasks.map((i) => `${i.id} - ${i.text_description}`)"
                  @select="writeLog"
                >
                  <template v-slot:tag="{ option, handleTagRemove, disabled }">
                    <div
                      class="multiselect-tag is-user"
                      :class="{
                        'is-disabled': disabled,
                      }"
                    >
                      <span
                        v-if="!disabled"
                        class="multiselect-tag-remove"
                        @mousedown.prevent="handleTagRemove(option, $event)"
                      >
                        <img :src="option.image" />
                        {{ option.name }}
                        <span class="multiselect-tag-remove-icon"></span>
                      </span>
                    </div>
                  </template>
                </Multiselect> -->
              </div>

              <!-- Start time -->
              <label class="block mt-3 text-xl ml-5" for="Starttime"
                ><strong>{{ $t("StartTime") }}</strong></label
              >
              <div class="h-10 w-96 ml-4 mt-1">
                <Datepicker
                  modelAuto
                  v-model="date"
                  inputClassName="time"
                  class="h-5 w-88"
                  placeholder="Select Date"
                  :locale="$i18n.locale"
                  cancelText="abbrechen"
                  selectText="auswählen"
                ></Datepicker>
              </div>

              <!-- Pause in Minuten -->

              <label class="block mt-3 text-xl ml-5" for="Notes">
                <strong>{{ $t("PauseTime") }}</strong>
              </label>

              <input
                v-model="pause"
                class="h-10 w-96 ml-4 mt-1 border rounded-xl shadow-md border-gray-400 text-base p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                type="number"
                id="employees"
                name="employees"
                :placeholder="$t('PauseInMinuten')"
              />

              <!--  End time -->
              <label class="block mt-3 text-xl ml-5" for="Endtime">
                <strong>{{ $t("EndTime") }}</strong></label
              >

              <div class="h-10 w-96 ml-4 mt-1">
                <Datepicker
                  class="h-5 w-87"
                  inputClassName="time"
                  v-model="dateTwo"
                  placeholder="Select Final Date"
                  :locale="$i18n.locale"
                  cancelText="abbrechen"
                  selectText="auswählen"
                ></Datepicker>
              </div>
              <!-- Total Time -->
              <label class="block mt-3 text-xl ml-5" for="TotalTime">
                <strong>{{ $t("TotalTime") }}</strong>
              </label>
              <div>
                <textarea
                  :placeholder="$t('totalTimeDescription')"
                  v-on:click="totaldateOne"
                  v-model="totalTime"
                  type="text"
                  class="h-[70px] w-96 ml-4 mt-1 border bg-orange-50 rounded-xl shadow-md border-gray-400 text-base p-2 cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500 resize-none"
                ></textarea>
              </div>
              <!-- submit btn -->
              <button
                @click="submit"
                class="block h-12 w-96 bg-cyan-900 ml-4 mt-4 border rounded-xl shadow-md text-white focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                type="submit"
              >
                {{ $t("save") }}
              </button>
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
import Multiselect from "@vueform/multiselect";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import SelectEmployee from "../components/SelectEmployee.vue";
import RecordTimeTask from "../components/RecordTimeTask.vue";
import RecordTimeCategory from "../components/RecordTimeCategory.vue";
import LoadingPage from "../components/LoadingPage.vue";

export default {
  name: "RecordTime-vue",
  components: {
    SelectEmployee,
    Multiselect,
    Datepicker,
    RecordTimeTask,
    RecordTimeCategory,
    LoadingPage,
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
        this.totalTime = `The total time is ${this.form.timerableId.toFixed(
          0
        )} minutes (including ${this.pause} minutes pause). `;
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
.multiselect {
  font-size: 14px;
  width: 385px;
  margin-left: 10px;
  padding-right: 0px;
  border: 1px solid #838282;
  border-radius: 10px;
  box-shadow: 0px 1px 6px rgb(195, 192, 192);
}
</style>
<style>
.multiselect-tag.is-user {
  font-size: 12px;
  padding: 3px 2px;
  border-radius: 22px;
  background: #379c49;
  margin: 3px 3px 8px;
}

.multiselect-tag.is-user i:before {
  color: #ffffff;
  border-radius: 50%;
}

#start {
  width: 400px;
  border: 2px solid red;
  border-radius: 20px;
}

.time {
  height: 40px;
  box-shadow: 2px 2px 6px #d8d8d8;
  border: 1px solid #a1a3a5;
  border-radius: 9px;
}
</style>

"h-16 w-96 ml-4 mt-1 border bg-orange-50 rounded-xl shadow-md border-gray-400
text-base p-2 cursor-pointer focus:outline-none focus:border-sky-500
focus:ring-sky-500"
