// ~/stores/otherStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface OtherStoreState {
  someData: string;
}

interface OtherStoreActions {
  someAction: () => void;
}












export const useOtherStore = defineStore('other', {
  state: (): OtherStoreState => ({
    someData: 'Data from the other store'
  }),
  actions: {
    someAction() {
      console.log('Action from the other store was called');
    }
  }
});