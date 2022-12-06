<template>
  <div>
    <Multiselect
      v-model="value"
      :searchable="true"
      mode="tags"
      :placeholder="$t('SelectTask')"
      track-by="name"
      label="name"
      :close-on-select="false"
      :search="true"
      :options="tasks.map((i) => `${i.id} ${i.task_title}`)"
      @select="timeTask"
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
      tasks: [],
    };
  },

  methods: {
    timeTask() {
      this.$emit("timeTasks", this.value);
    },
  },

  mounted() {
    axios
      .get(`${localStorage.url}/api/task-list`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.tasks = response.data.data;
      });
  },
};
</script>
