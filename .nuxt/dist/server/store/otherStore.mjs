import { defineStore } from "../node_modules/pinia/dist/pinia.mjs";
import { ref } from "vue";
const useOtherStore = defineStore("other", () => {
  const someData = ref("Data from the other store");
  const someAction = () => {
    console.log("Action from the other store was called");
  };
  return {
    someData,
    someAction
  };
});
export {
  useOtherStore
};
//# sourceMappingURL=otherStore.mjs.map
