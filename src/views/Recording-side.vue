<template>
  <div class="bg-white w-full h-screen">
    <!-- top bar -->
    <div
      class="bg-cyan-900 w-full h-10 text-end pt-2 pb-2 text-white font-serif text-white grid grid-cols-[_1fr,_0px]"
    >
      <div class="justify-self-center bg-cyan-900">{{ $t("recordings") }}</div>

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
    <div class="flex flex-col pt-24 justify-center w-[400px] ml-32">
      <div class="">
        <strong
          ><label class="block mt-1 mb-2 text-xl ml-36">{{
            $t("Employees")
          }}</label></strong
        >
        <input
          type="text"
          class="h-10 w-96 ml-4 border rounded-xl shadow-md bg-white rounded-xl shadow-md border-gray-400 text-base p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
          name="comment"
          placeholder="Employee"
          form="employee"
        />
      </div>
      <!-- date -->
      <div class="flex flex-row mt-5 w-[500px]">
        <div class="ml-10">
          <label class="pt-4 text-xl ml-12" for="Endtime">
            <strong>{{ $t("Month") }}</strong></label
          >

          <Datepicker
            class="pl-[3px] w-[150px] border-0"
            v-model="month"
            monthPicker
            placeholder="month"
            :locale="$i18n.locale"
            cancelText="abbrechen"
            selectText="auswählen"
          />
        </div>

        <div class="ml-7">
          <label class="block text-xl ml-12" for="Endtime">
            <strong>{{ $t("Year") }}</strong></label
          >

          <Datepicker
            class="pl-[3px] w-[150px] border-1"
            v-model="year"
            placeholder="Year"
            yearPicker
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";

export default {
  name: "recording-side",
  components: { Datepicker },

  setup() {
    const month = ref({
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    });
    const year = ref(new Date().getFullYear());
    return {
      month,
      year,
    };
  },
};
</script>
