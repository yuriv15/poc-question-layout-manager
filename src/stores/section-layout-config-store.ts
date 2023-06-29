import { defineStore } from 'pinia';
import { ref } from 'vue';
import { CellItem } from 'components/layout/questionnaire-section/components/header-section/components/HeaderSectionCell.vue';

export const useSectionLayoutStore = defineStore('sectionLayout', () => {
  const selectedCell = ref<CellItem>(undefined);

  function resetStore() {
    selectedCell.value = undefined;
  }

  return { resetStore, selectedCell };
});
