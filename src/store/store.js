import { defineStore } from "pinia";

export default defineStore("main", {
  state: () => ({
    hasError: false,
    errorMessage: "",
  }),
});
