<template>
  <div class="flex w-full bg-cyan-900">
    <div class="bg-slate-100 h-screen justify-center items-center pt-35">
      <span
        v-on:click="openNav()"
        class="fas fa-bars absolute cursor-pointer z-40 left-2 mt-3 pr-24 pt-1 pb-1 text-white"
        id="btn"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </span>

      <div clas="flex">
        <div
          class="h-screen bg-cyan-900 text-white font-serif px-3"
          :style="{ width: sideBarWidth }"
        >
          <!-- <div class="bg-cyan-900 w-96 h-10"></div> -->

          <div v-if="!showNameMenu" class="pt-[237px]"></div>
          <div
            v-if="showNameMenu"
            class="text-lg justify-center-center items-center flex flex-col w-full pt-16 mr-2 ml-[-5px]"
          >
            <div
              class="ml-2 w-24 h-24 bg-blue-700 rounded-full flex justify-center items-center"
            >
              {{ profileImage }}
            </div>

            <p v-if="showNameMenu" class="mt-6">
              <span class="pr-2">{{ firstName }}</span>
              <span class="pr-2">{{ lastName }}</span>
            </p>
            <p v-if="showNameMenu">{{ role }}</p>
          </div>
          <!-- Side bar -->
          <ul>
            <li>
              <router-link to="/dashboard/main-dashboard">
                <p class="pt-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                    />
                    <path
                      d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                    />
                  </svg>

                  <router-link
                    to="/dashboard/main-dashboard"
                    class="pl-2 pb-1 flex"
                  >
                    <span v-if="showNameMenu" class="hover:text-slate-500"
                      >{{ $t("dashboard") }}
                    </span>
                  </router-link>
                </p></router-link
              >
              <a
                href="#"
                class="fab fa-delicious pl-4 mt-6 hover:text-slate-500"
              >
              </a>
            </li>

            <!-- All Orders -->
            <div>
              <div
                class="w-full flex justify-between cursor-not-allowed pointer-events-none"
                @click="showDetailOrders"
                :style="{ height: allOrderHight }"
              >
                <div class="flex flex-start pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>

                  <span
                    v-if="showNameMenu"
                    class="pl-2 justify-self-start text-gray-400"
                    >{{ $t("allOrders") }}</span
                  >
                </div>
                <div v-if="ShowIcon">
                  <svg
                    v-if="!display"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 ml-2 mt-1 justify-self-end"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                  </svg>

                  <svg
                    v-if="display"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 ml-2 mt-1 justify-self-end"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
              <div class="pl-12">
                <router-link
                  to="/dashboard/tasks"
                  class="pb-1 inline-block"
                  v-if="display"
                >
                  <span v-if="showNameMenu" class="hover:text-slate-500">{{
                    $t("tasks")
                  }}</span>
                </router-link>

                <router-link
                  to="/dashboard/createTask"
                  class="pb-1 flex"
                  v-if="display"
                >
                  <span v-if="showNameMenu" class="hover:text-slate-500">{{
                    $t("createTask")
                  }}</span>
                </router-link>

                <router-link
                  to="/dashboard/tasks"
                  class="pb-1 flex"
                  v-if="display"
                >
                  <span v-if="showNameMenu" class="hover:text-slate-500">{{
                    $t("previousTasks")
                  }}</span>
                </router-link>

                <router-link
                  to="/dashboard/allOrders"
                  class="pb-2 flex"
                  v-if="display"
                >
                  <span v-if="showNameMenu" class="hover:text-slate-500">{{
                    $t("allOrder")
                  }}</span>
                </router-link>
              </div>
            </div>
            <!-- Time Record -->
            <div class="mt-4">
              <div
                class="w-full flex justify-between"
                @click="showtimeSideHight"
                :style="{ height: timeSideHight }"
              >
                <div class="flex flex-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>

                  <span
                    v-if="showNameMenu"
                    class="pl-2 justify-self-start text-white"
                    >{{ $t("timeRecord") }}</span
                  >
                </div>
                <div v-if="ShowIcon">
                  <svg
                    v-if="!displayTime"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 ml-2 mt-1 justify-self-end"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                  </svg>

                  <svg
                    v-if="displayTime"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 ml-2 mt-1 justify-self-end"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
              <div class="pl-12 cursor-pointer cursor-not-allowed">
                <router-link
                  to="/dashboard/recordings"
                  class="pb-1 flex text-gray-400 pointer-events-none"
                  v-if="displayTime"
                >
                  <span v-if="showNameMenu" class="hover:text-slate-500">{{
                    $t("recordings")
                  }}</span>
                </router-link>

                <router-link
                  to="/dashboard/RecordTime"
                  class="pb-1 flex"
                  v-if="displayTime"
                >
                  <span v-if="showNameMenu" class="hover:text-slate-500">{{
                    $t("recordTime")
                  }}</span>
                </router-link>
              </div>
            </div>
            <!-- Apps -->
            <div class="mt-4 cursor-not-allowed pointer-events-none">
              <div
                class="w-full flex justify-between"
                @click="showAppSideHight"
                :style="{ height: appSideHight }"
              >
                <div class="flex flex-initial">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span
                    v-if="showNameMenu"
                    class="pl-2 justify-self-start text-gray-400"
                    >Apps</span
                  >
                </div>
                <div v-if="ShowIcon">
                  <svg
                    v-if="!displayApps"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 ml-4 mt-1 justify-self-end"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                  </svg>

                  <svg
                    v-if="displayApps"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 ml-4 mt-1 justify-self-end"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
              <div class="pl-12">
                <router-link
                  to="/dashboard/meterReading"
                  class="pb-3 flex"
                  v-if="displayApps"
                >
                  <span v-if="showNameMenu" class="pl-1 hover:text-slate-500">
                    {{ $t("recordMeterReading") }}</span
                  >
                </router-link>
              </div>
            </div>
            <!-- Change Language -->
            <div class="mt-4">
              <div
                class="w-full flex justify-between cursor-pointer"
                @click="showLangSideHight"
                :style="{ height: langSideHight }"
              >
                <div class="flex flex-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                    />
                  </svg>
                  <span v-if="showNameMenu" class="pl-2 justify-self-start">
                    {{ $t("changeLanguage") }}</span
                  >
                </div>
                <div v-if="ShowIcon">
                  <svg
                    v-if="!displaylang"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 ml-4 mt-1 justify-self-end"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                  </svg>

                  <svg
                    v-if="displaylang"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 ml-4 mt-1 justify-self-end"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
              <div class="">
                <div class="pb-1 flex flex-col" v-if="displaylang">
                  <div
                    v-for="lan in language"
                    :key="lan.id"
                    v-on:click="changeLanguage(lan.lan)"
                    class="pl-12 hover:text-slate-500 flex justify-self-end cursor-pointer"
                  >
                    {{ lan.name }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 ml-2 mt-1"
                      v-if="$i18n.locale == lan.lan"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Logout -->
            <div class="mt-2" v-on:click="logoutbtn">
              <router-link to="/" class="flex pt-3 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
                <span v-if="showNameMenu" class="hover:text-slate-500">{{
                  $t("Logout")
                }}</span></router-link
              >
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <router-view></router-view>
    </div>
  </div>

  <!-- mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm -->
</template>
<script>
export default {
  name: "Dashboard-Page",
  data() {
    return {
      profileImage: "",

      firstName: "",
      lastName: "",
      role: "",
      language: [
        { name: "English", lan: "en" },
        { name: "Germany", lan: "de" },
      ],
      allOrderHight: "30px",
      timeSideHight: "30px",
      appSideHight: "30px",
      langSideHight: "30px",
      display: false,
      displayTime: false,
      displayApps: false,
      displaylang: false,
      displaylangtik: true,
      sideBarWidth: "250px",
      showNameMenu: true,
      isVisible: false,
      displayApps2: false,
      ShowIcon: true,
      resetLocalstorage: "",
    };
  },
  components: {},

  methods: {
    userInformation() {
      this.firstName = "ghggjhg";
      return this.firstName;
    },

    sfdfsd() {
      this.firstName = "fgjgj";
    },

    showDetailOrders() {
      this.display = !this.display;
      if (this.allOrderHight === "30px") {
        this.allOrderHight = "35px";
      } else {
        this.allOrderHight = "30px";
      }
    },

    showtimeSideHight() {
      this.displayTime = !this.displayTime;
      if (this.timeSideHight === "30px") {
        this.timeSideHight = "35px";
      } else {
        this.timeSideHight = "30px";
      }
    },

    showAppSideHight() {
      this.displayApps = !this.displayApps;
      if (this.appSideHight === "30px") {
        this.appSideHight = "35px";
      } else {
        this.appSideHight = "30px";
      }
    },
    showLangSideHight() {
      this.displaylang = !this.displaylang;
      if (this.langSideHight === "30px") {
        this.langSideHight = "35px";
      } else {
        this.langSideHight = "30px";
      }

      if (this.sideBarWidth === "55px") {
        this.showNameMenu = !this.showNameMenu;
        this.sideBarWidth = "250px";
        this.displayApps2 = false;
        this.ShowIcon = false;
      }
    },

    changeLanguage(lan) {
      /* this.displaylangtik = !this.displaylangtik; */
      this.$i18n.locale = lan;
    },

    toggleVisibility() {
      this.isVisible != this.isVisible;
    },

    openNav() {
      this.showNameMenu = !this.showNameMenu;

      if (this.sideBarWidth === "250px") {
        this.sideBarWidth = "55px";
        this.displayApps2 = false;
        this.ShowIcon = false;
      } else {
        this.sideBarWidth = "250px";
        this.ShowIcon = true;
      }
    },
    logoutbtn() {
      localStorage.setItem("url", this.resetLocalstorage);
    },
  },

  mounted() {
    this.firstName = localStorage.firstName;
    this.lastName = localStorage.lastName;
    this.role = localStorage.role;
    console.log(this.$i18n.locale);

    this.profileImage =
      this.firstName.charAt(0) + " " + this.lastName.charAt(0);
  },
};
</script>
