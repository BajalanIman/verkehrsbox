<template>
  <div>
    <Multiselect
      v-model="value"
      :placeholder="$t('Selectcategory')"
      :close-on-select="false"
      track-by="name"
      label="value"
      :options="category"
      @select="categoryInfo"
    >
      <template v-slot:tag="{ option, handleTagRemove, disabled }">
        <div
          class="multiselect-tag is-user"
          :class="{
            'is-disabled': disabled,
          }"
        >
          <img :src="option.image" />
          {{ option.name }}
          <span
            v-if="!disabled"
            class="multiselect-tag-remove"
            @mousedown.prevent="handleTagRemove(option, $event)"
          >
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
      category: [],
    };
  },
  methods: {
    categoryInfo() {
      this.$emit("maincategory", this.value);
      console.log(this.value);
    },
  },
  mounted() {
    axios
      .get(`${localStorage.url}/api/time-tracker/all-activity-categories`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.category = response.data.data.map((i) => ({
          value: i.category_name,
        }));
        console.log(this.category);
      });
  },
};
</script>
