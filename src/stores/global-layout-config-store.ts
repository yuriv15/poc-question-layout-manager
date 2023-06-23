import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useGlobalLayoutStore = defineStore('globalLayout', () => {
  const settings = ref({
    questionnaireSection: {
      gap: 0,
      headerSection: {
        show: true,
        height: '100%',
        virtualScroll: false,
        borderSettings: {
          borderStyle: 'none',
          borderColor: '#000',
          borderRadius: 0,
          borderWidth: '1px',
        },
        backgroundSettings: {
          backgroundColor: '#fff',
          opacity: 1,
        },
        marginSettings: {
          margin: 0,
        },
        paddingSettings: {
          padding: 0,
          boxSizing: 'border-box',
        },
      },
      bodySection: {
        show: true,
        height: '100%',
        virtualScroll: false,
        borderSettings: {
          borderStyle: 'none',
          borderColor: '#000',
          borderRadius: 0,
          borderWidth: '1px',
        },
        backgroundSettings: {
          backgroundColor: '#fff',
          opacity: 1,
        },
        marginSettings: {
          margin: 0,
        },
        paddingSettings: {
          padding: 0,
        },
      },
      footerSection: {
        show: true,
        height: '100%',
        virtualScroll: false,
        borderSettings: {
          borderStyle: 'none',
          borderColor: '#000',
          borderRadius: 0,
          borderWidth: '1px',
        },
        backgroundSettings: {
          backgroundColor: '#fff',
          opacity: 1,
        },
        marginSettings: {
          margin: 0,
        },
        paddingSettings: {
          padding: 0,
        },
      },
    },
  });

  // const headerStyle = computed({
  //   get: () => {
  //     const { headerSection } = settings.value.questionnaireSection;
  //     return {
  //       height: headerSection.height,
  //       overflow: headerSection.virtualScroll ? 'scroll-y' : 'none',
  //       ...headerSection.borderSettings,
  //       ...headerSection.backgroundSettings,
  //       ...headerSection.marginSettings,
  //       ...headerSection.paddingSettings,
  //     };
  //   },
  //   set: (
  //     styleSettings: Partial<
  //       typeof settings.value.questionnaireSection.headerSection
  //     >
  //   ) => {
  //     const { headerSection } = settings.value.questionnaireSection;
  //     settings.value.questionnaireSection.headerSection = {
  //       ...headerSection,
  //       ...styleSettings,
  //     };
  //   },
  // });

  return { settings };
});
