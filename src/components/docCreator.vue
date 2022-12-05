<template>
  <div>
    <form
      v-on:submit.prevent="submitform"
      action=""
      class="grid grid-cols-2 grid-flow-rows"
    >
      <div v-for="group in groups" v-bind:key="group" class="">
        <div class="mt-4 flex">
          <label class="block pb-3 mt-3 text-xl ml-6" for="Document"
            ><strong>{{ $t("DataGroup") }} {{ group.id }}</strong>
          </label>
        </div>
        <!-- plate Id -->
        <div>
          <label class="block text-xl ml-6" for="TextArea">
            <strong>{{ $t("Plateid") }}</strong>
          </label>

          <input
            v-model="group.plateId"
            type="text"
            class="h-10 w-96 ml-4 border rounded-xl shadow-md bg-white rounded-xl shadow-md border-gray-400 text-base p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
            name="comment"
            placeholder="Enter Plate Id"
            form="TextArea"
          />
        </div>
        <!-- Vehicle Type -->
        <label class="block mt-3 text-xl ml-6" for="TextArea">
          <strong>{{ $t("VehicleType") }}</strong>
        </label>

        <input
          v-model="group.vehicleType"
          type="text"
          class="h-10 w-96 ml-4 border rounded-xl shadow-md bg-white rounded-xl shadow-md border-gray-400 text-base p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
          name="comment"
          placeholder="Enter vehicle type"
          form="TextArea"
        />
        <!-- House Number -->
        <label class="block mt-3 text-xl ml-6" for="TextArea">
          <strong>{{ $t("HouseNumber") }}</strong>
        </label>

        <input
          v-model="group.HouseNumber"
          type="text"
          class="h-10 w-96 ml-4 border rounded-xl shadow-md bg-white rounded-xl shadow-md border-gray-400 text-base p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
          name="comment"
          placeholder="Enter house number"
          form="TextArea"
        />
        <div class="mt-3 pb-3">
          <button
            v-on:click="add"
            class="ml-4 pl-3 pr-3 p-2 border-2 bg-cyan-900 text-white rounded-lg"
          >
            {{ $t("NewGroup") }}
          </button>
          <button
            v-on:click="copy(group.id)"
            class="ml-3 pl-4 pr-4 p-2 border-2 bg-cyan-900 text-white rounded-lg"
          >
            {{ $t("copyGroup") }} ...
          </button>

          <button
            v-if="group.id != 1"
            v-on:click="remove(group.id)"
            class="ml-3 p-2 border-2 bg-cyan-900 text-white rounded-lg"
          >
            {{ $t("Remove") }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ["counter"],

  data() {
    return {
      desplayRemove: false,
      groups: [{ id: 1, plateId: "", vehicleType: "", HouseNumber: "" }],
      objectLists: [],
      rows: [],
    };
  },
  methods: {
    add() {
      console.log(this.groups.length + 1);
      console.log(this.groups.length);
      this.groups.push({
        id: this.groups.length + 1,
        plateId: " ",
        vehicleType: " ",
        HouseNumber: " ",
      });
    },

    copy(id) {
      let value = this.groups.findIndex((groups) => groups.id === id);
      this.groups.push({
        id: value + 1,
      });
    },

    remove(id) {
      this.groups.splice(
        this.groups.findIndex((i) => i.id == id),
        1
      );
    },
  },
};
</script>
