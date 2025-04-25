// ~/stores/otherStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface OtherStoreState {
  someData: string;
}

interface OtherStoreActions {
  someAction: () => void;
}

export const useOtherStore = defineStore<'other', OtherStoreState, {}, OtherStoreActions>('other', () => {
  const someData = ref<string>('Data from the other store');

  const someAction = () => {
    console.log('Action from the other store was called');
  };

  return {
    someData,
    someAction
  };
});