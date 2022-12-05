<template>
  <div
    class="bg-slate-100 h-screen justify-center items-center pt-35 pb-10 mt-0 pb-96"
  >
    <div
      class="bg-cyan-900 w-full h-10 text-end pt-2 pb-2 text-white font-serif text-white grid grid-cols-[_1fr,_0px]"
    >
      <div class="justify-self-center bg-cyan-900">Task</div>
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
  </div>
</template>
<script>
export default {
  name: "Tasks-vue",
  components: {},
};
</script>
