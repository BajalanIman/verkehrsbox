<template>
  <router-view />
</template>

<script>
export default {
  name: "RecordTime-vue",
  components: {},
  data() {
    return {
      leftChange: "-190px",
      iconLogout: "fas fa-sign-out-alt",
      color: "white",
    };
  },
  methods: {
    openNav() {
      if (this.leftChange === "-190px" && this.color === "white") {
        this.leftChange = "0px";
        this.color = "Indigo";
      } else {
        this.leftChange = "-190px";
        this.color = "white";
      }
    },
    openDashboard() {
      /* this.$router.push({ path: `/MainPage` }); */
    },
  },
};
</script>
