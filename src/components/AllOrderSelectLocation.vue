<template>
  <div>
    <Multiselect
      v-model="multiselect"
      :searchable="true"
      mode="tags"
      placeholder="Select employees"
      track-by="name"
      label="name"
      :close-on-select="false"
      :search="true"
      :options="allcostomers.map((i) => `${i.Location}`)"
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
      allcostomers: [],
    };
  },
  mounted() {
    axios
      .get(`${localStorage.url}/api/all-customers`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.allcostomers = response.data.data;
      });
  },
};
</script>
