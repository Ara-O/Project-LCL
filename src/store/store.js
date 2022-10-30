import { defineStore } from "pinia";

export default defineStore("main", {
  state: () => ({
    hasError: false,
    errorMessage: "",
    userID: "",
  }),

  getters: {
    userIsLoggedIn(state) {
      if (state.userID !== "") {
        return true;
      } else {
        return false;
      }
    },
  },

  actions: {
    storeUserID(payload) {
      console.log("paylload, ", payload);
      this.userID = payload;
    },

    updateError(message) {
      this.hasError = true;
      this.errorMessage = message;
    },

    clearError() {
      this.hasError = false;
      this.errorMessage = "";
    },
  },
});
