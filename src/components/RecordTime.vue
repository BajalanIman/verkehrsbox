<template>
  <div>
    <div class="flex flex-around justify-center space-x-6">
      <button
        :disabled="isActive"
        v-on:click="start"
        class="bg-cyan-900 h-8 rounded-md text-white w-16 mt-8 hover:bg-cyan-700"
      >
        Start
      </button>
      <button
        v-on:click="stop"
        class="bg-cyan-900 h-8 rounded-md text-white w-16 mt-8 hover:bg-cyan-700"
      >
        Stop
      </button>
      <button
        v-on:click="reset"
        class="bg-cyan-900 h-8 rounded-md text-white w-16 mt-8 hover:bg-cyan-700"
      >
        Reset
      </button>
    </div>
    <div class="flex justify-center mt-6">
      <span>{{ seconds }}:</span>
      <span>{{ minute }}:</span>
      <span>{{ hour }}</span>
    </div>
  </div>
</template>
<script>
export default {
  components: {},

  data() {
    return {
      hour: 0,
      minute: 0,
      seconds: 0,
      totalSeconds: 0,
      intervalId: null,
      isActive: false,
    };
  },
  computed() {},

  methods: {
    startTimer() {
      ++this.totalSeconds;
      this.hour = "0" + Math.floor(this.totalSeconds / 3600);
      this.minute =
        "0" + Math.floor((this.totalSeconds - this.hour * 3600) / 60);
      this.seconds = this.totalSeconds - (this.hour * 3600 + this.minute * 60);
    },

    start() {
      this.intervalId = setInterval(this.startTimer, 1000);
      if (this.isActive === false) {
        this.isActive = true;
      }
    },

    stop() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      if (this.isActive === true) {
        this.isActive = false;
      }
      console.log(this.seconds);
    },

    reset() {
      this.isActive = false;
      this.totalSeconds = 0;
      this.hour = 0;
      this.minute = 0;
      this.seconds = 0;
    },
  },
};
</script>
