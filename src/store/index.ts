import { defineStore } from 'pinia';

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: '样例',
  }),
  actions: {
    async updateName(data: string) {
      this.name = data;
    },
  },
});
