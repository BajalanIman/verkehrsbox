<template>
  <div>
    <div class="flex justify-items-start w-[400px]">
      <strong class="w-[250px]">{{ $t("order") }}</strong>
      <p class="">
        {{ selectedItemDetails.order_number }}
      </p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
    <div class="flex justify-items-start w-[400px]">
      <strong class="w-[250px]">{{ $t("OrderId") }}</strong>
      <p class="">{{ selectedItemDetails.id }}</p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
    <div class="flex justify-items-start w-[400px]">
      <strong class="w-[250px]">{{ $t("customOrder") }}</strong>
      <p class="">
        {{ selectedItemDetails.custom_order_number }}
      </p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
    <div class="flex justify-items-start w-[400px]">
      <strong class="w-[250px]">{{ $t("orderCategory") }}</strong>
      <p class="">
        {{ selectedItemDetails.order_category }}
      </p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
    <div class="flex justify-items-start w-[400px]">
      <strong class="w-[250px]">{{ $t("startDate") }}</strong>
      <p class="">{{ selectedItemDetails.start_date }}</p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
    <div class="flex justify-items-start w-[400px]">
      <strong class="w-[250px]">{{ $t("endDate") }}</strong>
      <p class="">{{ selectedItemDetails.end_date }}</p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
    <div class="flex justify-items-start w-[400px]">
      <strong class="w-[250px] justify-items-end">{{
        $t("Description")
      }}</strong>
      <p class="">
        {{ selectedItemDetails.location_description }}
      </p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
    <div class="flex justify-items-start w-[400px]">
      <strong class="w-[250px]">{{ $t("Customer") }}</strong>
      <p class="">
        {{ selectedItemDetails.get_customer }}
      </p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
    <div class="flex justify-items-start w-[400px]">
      <strong class="w-[250px]">{{ $t("ContactPerson") }}</strong>
      <p class="">
        {{ selectedItemDetails.contact_person }}
      </p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
    <div class="flex flex justify-items-start w-[400px]">
      <strong class="w-[250px]">{{ $t("ContactPhoneNummber") }}</strong>
      <p class="">
        {{ selectedItemDetails.cp_phone_number }}
      </p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
    <div class="flex justify-items-start w-[400px]">
      <strong class="w-[250px]">{{ $t("ProjectManager") }}</strong>
      <p class="">
        {{ selectedItemDetails.project_manager }}
      </p>
    </div>
    <i class="block text-slate-200"
      >-------------------------------------------------</i
    >
  </div>
</template>
<script>
export default {
  props: ["selectedItemDetails"],
  components: {},
};
</script>
