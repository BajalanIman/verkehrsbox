<template>
  <div class="">
    <div class="bg-white h-screen justify-center items-center pt-35 mt-0">
      <div
        class="bg-cyan-900 w-full h-10 text-end pt-2 pb-2 text-white font-serif text-white grid grid-cols-[_1fr,_0px]"
      >
        <div class="justify-self-center bg-cyan-900">Create Task</div>
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
      <div class="w-full grid grid-col-0 justify-end items-end ">
      <p v-if=displaythanksMessage  class="mr-5 pl-8 pt-1 pb-2 w-96 h-8 mt-3 text-white bg-cyan-800 justify-center font-bold">
           {{$t("thanksMessage")}}
            </p>

            <p v-if=errorSending  class="mr-5 pl-6 pr-4 pt-1 w-96 pb-2 h-8 mt-3 text-white bg-red-500 justify-center font-bold">
              Error: {{errors}}
            </p>
          </div>
      <div
        class="bg-white h-[660px] pr-[200px] flex justify-center items-center"
      >
        <form v-on:submit="submitform" action="" name: c>
          <div class="pl-32 pb-12 flex-2 pt-10">
            <!-- Select Users -->
            <div class="ml-1 bg-col-500 text-lg">
              <div class="pl-4 pb-1 text-xl">
                <label
                  ><strong>{{ $t("Users") }}</strong></label
                >
              </div>
              <Multiselect
                v-model="users"
                :searchable="true"
                mode="tags"
                placeholder="Select employees"
                track-by="name"
                label="name"
                :close-on-select="false"
                :search="true"
                :options="
                  allInfoEmployees.map((i) => `${i.first_name} ${i.last_name}`)
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
              </Multiselect>
            </div>
            
            <!-- Vehicle -->

            <div class="ml-1 bg-col-500 text-lg mt-3">
              <div class="pl-4 pb-1">
                <label
                  ><strong>{{ $t("Vehicle") }}</strong></label
                >
              </div>
              <div>
                <Multiselect
                  v-model="TheVehicles"
                  placeholder="Select object"
                  track-by="name"
                  label="name"
                  :close-on-select="true"
                  :clear-on-select="false"
                  :search="true"
                  :options="objectLists"
                  @select="writeLog"
                >
                  <template v-slot:tag="{ option, handleTagRemove, disabled }">
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

            <!-- Date and timew -->

<!-- date -->
<div class="flex mt-3 pt-3 " >


            <div>
            <label class="pl-12  text-xl ml-4" for="Starttime"
              ><strong>{{$t("Date")}}</strong></label
            >
            <Datepicker
            class="pl-4 w-[160px] border-1 mt-2 border-red-500"
            v-model="form.date" :format="format"
          />
        </div>
        <!-- Start -->
        <div>
            <label class="text-xl ml-8 " for="Starttime"
              ><strong>{{$t("Start")}}</strong></label
            >
            <Datepicker v-model="form.start_time" timePicker placeholder="Start" class="mt-2 ml-2 w-[110px]" :class="start"
          />
        </div>

         <!-- End -->
          <div>
            <label class="text-xl ml-10" for="Starttime"
              ><strong>{{$t("End")}}</strong></label
            >
            <Datepicker v-model="form.end_time" timePicker placeholder="End" class="mt-2 ml-2 w-[110px]"

          />
        </div>
        </div>
       

         <!--  <input
            v-model="form.DateTime"
              class="pl-2 h-10 ml-4 mt-1 border-2 rounded-md border-gray-300 text-base cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500 shadow-md"
              type="datetime-local"
              id="Starttime"
              name="Starttime"
            /> -->



            <!-- Location -->

            <label class="block mb-0 mt-3 text-xl ml-4" for="Notes"
              ><strong>{{ $t("OrderLocation") }}</strong></label
            >

            <input
            v-model="form.orderLocation"
              type="text"
              class="pl-2 h-10 w-96 ml-4 mt-1 border-2 rounded-md border-gray-300 text-base cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500 shadow-md"
              name="comment"
              placeholder="Enter order locatio"
              form=""
              
            />
            <!-- Description -->

            <label class="block mb-0 mt-3 text-xl ml-4" for="Notes"
              ><strong>{{ $t("TaskDescription") }}</strong></label
            >

            <input
            v-model="form.TaskDescription"
              type="text"
              class="pl-2 h-24 w-96 ml-4 mt-1 border-2 rounded-md border-gray-300 text-base focus:outline-none focus:border-sky-500 focus:ring-sky-500 shadow-md"
              name="comment"
              placeholder="Enter Task Description"
              form="Task Description"
            />

            <!-- submit btn -->
            <button
            v-on:click="submit"
              class="block h-10 shadow-md w-96 bg-cyan-900 ml-4 mt-4 border-2 rounded-md text-white cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500"
              type="submit"
                           
              >{{$t("save")}} </button>
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
import { ref } from 'vue';

import "@vuepic/vue-datepicker/dist/main.css";
import LoadingPage from "../components/LoadingPage.vue"

export default {
  name: "CreateTask-vue",
  components: { Multiselect, Datepicker, LoadingPage},


  setup() {
        const date = ref(new Date());
        // In case of a range picker, you'll receive [Date, Date]
        const format = (date) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return `${day}/${month}/${year}`;
        }
        
        return {
            date,
            format,
        }
    },

  data() {
    return {
      errorSending:false,
      errors:"",
      loading:true,
      allInfoEmployees: [
        {
          value: "",
          name: "",
        },
      ],
      objectLists: [],
      objectSelected: "",
      vehicleList: [],
      selctedObject: "",
      MyorderLocation:"",
      displaythanksMessage:false,
      users:[],
      TheVehicles:[],
      form: {
        users: "",
        vehicles: "",
        date:null,
        start_time:null,
        end_time :null,
        orderLocation: "",/* this name may not be correct! */
        TaskDescription:"",/* this name may not be correct! */
      },
      thanksMessage:true,
    };
  },

  methods: {
    submit() {
      this.form.vehicles = this.TheVehicles;
      console.log(this.form)
        this.form={};
      this.users=[];
      this.TheVehicles=[],
      this.loading = true;
      setTimeout(
              function () {
                this.loading = false;
              }.bind(this),
              1000
            );
            this.displaythanksMessage = true;
            setTimeout(
              function () {
                this.displaythanksMessage = false;
              }.bind(this),
              3000
            );


      axios
          .post(`${localStorage.url}/api/create-task2`, this.form, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
           this.displaythanksMessage=!this.displaythanksMessage
            console.log(res);
                      })
          .catch((err) => {
            console.error(err.message);
this.errors=err.message;

            this.errorSending=true;
            setTimeout(
                function () {
                this.errorSending=false
              }.bind(this),
              5000
            );
            }); 
    
    },
  },

  mounted() {
    axios
      .get(`${localStorage.url}/api/all-employees`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.allInfoEmployees = response.data;
        this.loading=false;
        /*         console.log(this.allInfoEmployees);
         */
      });
    axios
      .get(`${localStorage.url}/api/all-vehicles`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.loading=false;
        (this.objectLists = []),
          response.data.forEach((element) => {
            this.objectLists.push(element.number_plate);
          });
      });
  },
};
</script>


