<template>
  <div class="bg-white h-screen justify-center items-center pt-35">
    <div
      class="bg-cyan-900 w-full h-10 text-end pt-2 pb-2 text-white font-serif text-white grid grid-cols-[_1fr,_0px]"
    >
      <div class="justify-self-center bg-cyan-900">
        {{ $t("DocCreator") }}
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
    <perfect-scrollbar
      @ps-scroll-y="onScroll"
      ref="scrollbar"
      class="bg-white pt-12"
    >
      <div class="flex justify-center h-full">
        <form v-on:submit.prevent="submitform" action="">
          <div class="flex pr-6 pt-1 flex-4 pt-2">
            <div class="pt-2">
              <!-- Select orders -->
              <div class="ml-2">
                <label class="ml-5 text-xl" for="Selectorder"
                  ><strong>{{ $t("SelectOrder") }}</strong>
                </label>

                <Multiselect
                  v-model="selctedObject"
                  placeholder="Select order"
                  track-by="name"
                  label="name"
                  :close-on-select="true"
                  :clear-on-select="false"
                  :search="true"
                  :options="order.map((i) => `${i.order_number}`)"
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
              <!-- Select Doc Task -->
              <label class="block mt-3 text-xl ml-6" for="SelectDocTask"
                ><strong>{{ $t("SelectDocTask") }}</strong></label
              >
              <select
                class="h-10 w-96 ml-4 border rounded-xl shadow-md bg-white rounded-xl shadow-md border-gray-400 text-base p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                name="SelectDocTask"
                id="SelectDocTask"
              >
                <option value="Search">{{ $t("SelectDocTask") }}</option>
              </select>

              <!-- Select Employees -->
              <div class="ml-1 text-lg">
                <div class="ml-5 mt-2">
                  <label
                    ><strong>{{ $t("Employees") }}</strong></label
                  >
                </div>
                <Multiselect
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
                </Multiselect>
              </div>

              <!-- Authority -->

              <label class="block mb-0 mt-3 text-xl ml-6" for="Authority"
                ><strong>{{ $t("Authority") }}</strong>
              </label>

              <input
                type="text"
                class="h-10 w-96 ml-4 border bg-gray-200 rounded-xl shadow-md bg-white rounded-xl shadow-md border-gray-400 text-base p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                name="comment"
                placeholder="Authority"
                form="Authority"
              />
              <!-- VAO-ID -->
              <label class="block mb-0 mt-3 text-xl ml-6" for="VAO-ID"
                ><strong>{{ $t("VAO-ID") }}</strong>
              </label>

              <input
                type="text"
                class="h-10 w-96 ml-4 border bg-gray-200 rounded-xl shadow-md bg-white rounded-xl shadow-md border-gray-400 text-base p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                name="comment"
                placeholder="VAO-ID"
                form="VAO-ID"
              />
              <!-- Street name -->

              <label class="block mb-0 mt-3 text-xl ml-6" for="Streetname"
                ><strong>{{ $t("StreetName") }}</strong>
              </label>

              <input
                type="text"
                class="h-10 w-96 ml-4 border bg-gray-200 rounded-xl shadow-md bg-white rounded-xl shadow-md border-gray-400 text-base p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                name="comment"
                placeholder="Street name"
                form="Streetname"
              />
            </div>

            <div class="ml-2">
              <!-- House from -->
              <label class="block mb-0 mt-3 text-xl ml-6" for="Housefrom"
                ><strong>{{ $t("HouseFrom") }}</strong>
              </label>

              <input
                type="text"
                class="h-10 w-96 ml-4 border rounded-xl shadow-md bg-white rounded-xl shadow-md border-gray-400 text-base p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                name="comment"
                placeholder="Enter House from"
                form="Housefrom"
              />
              <!-- House To -->
              <label class="block mb-0 mt-3 text-xl ml-6" for="HouseTo"
                ><strong>{{ $t("HouseTo") }}</strong>
              </label>

              <input
                class="h-10 w-96 ml-4 border rounded-xl shadow-md bg-white rounded-xl shadow-md border-gray-400 text-base p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                name="comment"
                placeholder="Enter House To"
                form="HouseTo"
              />
              <!-- Date and timew -->

              <label class="block mt-3 text-xl ml-6" for="Starttime"
                ><strong>{{ $t("DateAndTime") }}</strong></label
              >

              <input
                class="h-10 w-96 ml-4 border rounded-xl shadow-md bg-white rounded-xl shadow-md border-gray-400 text-base p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                type="datetime-local"
                id="Starttime"
                name="Starttime"
              />
              <!-- Text Area -->
              <label class="block mb-0 mt-3 text-xl ml-6" for="TextArea">
                <strong>{{ $t("TextArea") }}</strong>
              </label>

              <input
                type="text"
                class="h-24 w-96 ml-4 border rounded-xl shadow-md bg-white rounded-xl shadow-md border-gray-400 text-base p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                name="comment"
                placeholder="TextArea"
                form="TextArea"
              />
              <!-- Document -->
              <div class="flex justify-center items-center">
                <label class="block mb-0 mt-2 text-xl ml-6" for="Document"
                  ><strong>{{ $t("Document") }}</strong>
                </label>
              </div>
              <div class="flex justify-center items-center">
                <input type="file" class="ml-24 mt-1" />
              </div>
            </div>
          </div>
          <!-- Data Group -->
          <div class="">
            <div class="mt-4 grid grid-rows-2 grid-flow-col w-[850px]">
              <docCreator :counter="counter"></docCreator>
            </div>
          </div>
        </form>
      </div>
    </perfect-scrollbar>
  </div>
  <LoadingPage v-if="loading"></LoadingPage>
</template>
<script>
import axios from "axios";
import Multiselect from "@vueform/multiselect";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";

import docCreator from "../components/docCreator.vue";

export default {
  name: "DocCreator-vue",
  components: { Multiselect, PerfectScrollbar, docCreator },
  data() {
    return {
      loading: true,
      AdddocCreator: [],

      order: [],
      allInfoEmployees: [],
    };
  },

  methods: {
    renderHtml() {},
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
        this.order = response.data.data;
      });
    axios
      .get(`${localStorage.url}/api/all-employees`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.loading = false;
        this.allInfoEmployees = response.data;
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
  min-height: 95%;
  height: 95%;
}
</style>
