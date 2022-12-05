<template>
  <div class="">
    <div
      class="bg-slate-100 h-screen flex w-full justify-center items-center pt-35"
    >
      <form
        v-on:submit.prevent="submitform"
        class="flex flex-col w-80 gap-1 font-sans"
        action=""
      >
        <div class="ml-36">
          <span class="lable text-xl absolote bottom-0">
            {{ displayHour }}:
          </span>
          <span class="lable text-xl absolote bottom-0"
            >{{ displayMinute }}:
          </span>
          <span class="lable text-xl absolote bottom-0">
            {{ displaySeconds }}
          </span>
        </div>
        <button
          v-on:click="startBtn()"
          class="mt-4 h-14 rounded-full bg-cyan-900 cursor-pointer ml-5 text-amber-50 text-lg hover:bg-cyan-700"
          :disabled="validated"
        >
          Start
        </button>
        <button
          v-on:click="stopBtn()"
          class="mt-4 h-14 rounded-full bg-cyan-900 cursor-pointer ml-5 text-amber-50 text-lg hover:bg-cyan-700"
        >
          Stop
        </button>
        <button
          v-on:click="resetbtn()"
          class="mt-4 h-14 rounded-full bg-cyan-900 cursor-pointer ml-5 text-amber-50 text-lg hover:bg-cyan-700"
        >
          Reset
        </button>
        <button
          v-on:click="openPage()"
          class="mt-4 h-14 rounded-full bg-cyan-900 cursor-pointer ml-5 text-amber-50 text-lg hover:bg-cyan-700"
        >
          Back
        </button>
        <span class="text-red-500 ml-12">{{ recordedTime }}</span>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home-vue",
  components: {},
  data() {
    return {
      displayHour: 0,
      displayMinute: 0,
      displaySeconds: 0,
      timer: null,
      totalSeconds: 0,
      intervalId: null,
      recordedTime: "",
      validated: false,
    };
  },

  methods: {
    startTimer() {
      this.totalSeconds = this.totalSeconds + 1;
      this.displayHour = "0" + Math.floor(this.totalSeconds / 3600);
      this.displayMinute =
        "0" + Math.floor((this.totalSeconds - this.displayHour * 3600) / 60);
      this.displaySeconds =
        this.totalSeconds - (this.displayHour * 3600 + this.displayMinute * 60);
    },

    startBtn() {
      this.intervalId = setInterval(this.startTimer, 1000);
      this.validated = true;
    },

    stopBtn: function () {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.recordedTime = `Your recorded time is: ${this.displaySeconds} second!`;
    },

    resetbtn() {
      this.displayHour = 0;
      this.displayMinute = 0;
      this.displaySeconds = 0;
      this.recordedTime = "";
    },

    openPage() {
      this.$router.push({ path: `/` });
    },
  },
};
</script>
