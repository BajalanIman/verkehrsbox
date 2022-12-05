<template>
  <div>
    <div class="pt-1 flex justify-items-start">
      <strong class="w-[230px]">{{ $t("order") }}</strong>
      <p>{{ item.order_number }}</p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
    <div class="pt-1 flex justify-items-start">
      <strong class="w-[230px]">{{ $t("Appointment") }}</strong>
      <p>{{ item.date_of_receipt }}</p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
    <div class="pt-1 flex justify-items-start">
      <strong class="w-[230px]">{{ $t("Status") }}</strong>
      <p>{{ item.status }}</p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
    <div class="pt-1 flex justify-items-start">
      <strong class="w-[230px]">{{ $t("taskText") }}</strong>
      <p>{{ item.custom_description }}</p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
    <div class="pt-1 flex justify-items-start">
      <strong class="w-[230px]">{{ $t("lacation") }}</strong>
      <p>{{ item.order_location }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  components: {},
};
</script>
