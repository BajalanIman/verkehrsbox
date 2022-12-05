<template>

    <div v-if="showDocuments" class="absolute inset-0 w-full h-screen z-50">
      <div
        class="bg-gray-800 bg-opacity-60 w-full h-screen flex justify-center items-center"
      >
        <div
          class="flex flex-col justify-first items-center bg-white w-1/2 h-[23rem] border-2"
        >
          <div class="w-full align-center">
            <span
              v-on:click="closeDocuments"
              class="float-right text-3xl pr-2 text-white cursor-pointer"
              >&times;</span
            >
            <p class="pt-1 text-center bg-cyan-900 h-8 text-white">
              document
            </p>
          </div>
          <div class="flex w-full shadow-md">
            <p class="ml-16 w-48">{{ $t("Category") }}</p>
            <p class="w-48">{{ $t("FileName") }}</p>
            <p class="w-48">{{ $t("Date") }}</p>
            <p class="w-48">{{ $t("Action") }}</p>
          </div>
          <input
            type="file"
            class="bg-cyan-900 h-10 rounded-md text-white p-1 w-64 mt-6 cursor-pointer hover:bg-cyan-700"
          />
        </div>
      </div>
      </div>
      </template>