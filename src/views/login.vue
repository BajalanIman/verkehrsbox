<template>
  <div
    class="bg-white h-screen flex w-full justify-center items-center relative"
  >
    <form
      v-on:submit.prevent="submitform"
      class="flex flex-col w-80 gap-1 font-sans"
      action=""
    >
      <!-- Messages -->

      <div class="w-96 h-12 justify-end items-end">
        <p
          v-if="errorSending"
          class="pt-1 w-96 p-2 pt-3 h-12 mt-3 text-white bg-red-500 text-center justify-center font-bold"
        >
          Error: {{ errors }}
        </p>
      </div>
      <div class="w-80 mt-6 mb-6 flex justify-center">
        <img class="w-60" src="../assets/MIETBOX.png" alt="" />
      </div>

      <!-- Login url -->

      <div class="h-14 rounded-lg bg-zinc-100 cursor-pointer ml-5 mt-3">
        <span class="absolute pt-4 pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-cyan-900/30"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </span>
        <input
          v-on:change="saveUrl"
          v-model="loginData.url"
          class="h-14 pl-10 rounded-lg bg-zinc-100 w-full"
          type="text"
          placeholder="http//"
        />
      </div>

      <!-- Login Email -->

      <div class="h-14 rounded-lg bg-zinc-100 cursor-pointer ml-5 mt-3">
        <span class="absolute pt-4 pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-cyan-900/30"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </span>
        <input
          v-model="loginData.email"
          class="h-14 pl-10 rounded-lg bg-zinc-100 w-full"
          type="text"
          placeholder="Email"
        />
      </div>
      <!-- Login password -->
      <div class="h-14 rounded-lg bg-zinc-100 cursor-pointer ml-5 mt-3">
        <span class="absolute pt-4 pl-2"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-cyan-900/30"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
            />
          </svg>
        </span>
        <input
          v-model="loginData.password"
          class="h-14 pl-10 rounded-lg bg-zinc-100 w-full"
          :type="thetype"
          placeholder="Password"
        />
        <span v-on:click="showpassword" class="absolute pt-4 -ml-10">
          <svg
            v-if="showpass"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-cyan-900/30"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-red-500/30"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
      </div>

      <!-- Login button -->
      <button
        v-on:click="login()"
        class="mt-8 h-14 rounded-full bg-cyan-900 cursor-pointer ml-5 text-amber-50 text-lg hover:bg-cyan-700"
      >
        Login
      </button>
    </form>
    <div class="absolute ml-[800px] mt-[720px] text-xs">
      Copyright © 2022 by AK Software GmbH, Version: {{ version }}
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { version } from "/package.json";

export default {
  name: "login-vue",
  components: {},
  data() {
    return {
      version: version,
      errorSending: false,
      showpass: true,
      thetype: "password",
      loginData: {
        url: "",
        password: "",
        email: "",
      },
    };
  },

  methods: {
    saveUrl() {
      if (this.loginData.url.length > 0) {
        localStorage.setItem("url", this.loginData.url);
      }
    },

    showpassword() {
      if (this.thetype === "password") {
        this.thetype = "text";
        this.showpass = false;
      } else {
        this.thetype = "password";
        this.showpass = true;
      }
    },

    login() {
      axios
        .post(`${localStorage.getItem("url")}/api/app/login`, {
          password: this.loginData.password,
          email: this.loginData.email,
        })
        .then((response) => {
          // console.log(response.data.token);
          // console.log(response.data.user.first_name);
          // console.log(response.data.user.last_name);
          // console.log(response.data.user.role);

          localStorage.setItem("url", `${this.loginData.url}`);
          localStorage.setItem("token", `${response.data.token}`);
          localStorage.setItem("firstName", `${response.data.user.first_name}`);
          localStorage.setItem("lastName", `${response.data.user.last_name}`);
          localStorage.setItem("role", `${response.data.user.role}`);
          localStorage.setItem("id", `${response.data.user.id}`);
          console.log(this.loginData.url);

          this.$router.push({ path: "dashboard/main-dashboard" });
        })
        .catch((err) => {
          console.log(err.response.data.error);

          if (err.response.data.error === "invalid_credentials") {
            this.errors = "Email or password is not correct!";
          }

          this.errorSending = true;
          setTimeout(
            function () {
              this.errorSending = false;
            }.bind(this),
            5000
          );
        });
    },
  },
};
</script>
