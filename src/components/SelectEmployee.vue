<template>
  <div>
    <Multiselect
      v-model="value"
      :searchable="true"
      mode="tags"
      placeholder="Select employees"
      track-by="label"
      label="label"
      :close-on-select="false"
      :search="true"
      :options="employeeId"
      @select="employeeIdParent"
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
</template>
<script>
import axios from "axios";
import Multiselect from "@vueform/multiselect";

export default {
  components: { Multiselect },
  data() {
    return {
      employeeId: [],
    };
  },
  methods: {
    employeeIdParent() {
      this.$emit("recordValue", this.value);
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
        this.employeeId = response.data.map((i) => ({
          value: i.id,
          label: `${i.first_name} ${i.last_name}`,
          name: `${i.first_name} ${i.last_name}`,
        }));
      });
  },
};
</script>
