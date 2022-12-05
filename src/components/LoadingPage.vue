<template>
  <div class="flex flex-col items-center pt-10 bg-white">
    <div class="absolute inset-0 w-full h-screen z-50">
      <div
        class="bg-gray-800 bg-opacity-60 w-full h-screen block justify-center items-center pl-[600px] pt-64"
      >
        <div class="">
          <h2 class="pl-8 text-black-500">Loading...</h2>
        </div>

        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script></script>
<style>
.loader {
  border: 16px solid #bed4ce;
  border-radius: 50%;
  border-top: 16px solid hsl(188, 40%, 24%);
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
