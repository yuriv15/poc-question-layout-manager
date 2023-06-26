import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useGlobalLayoutStore = defineStore('globalLayout', () => {
  const settings = ref({
    questionnaireSection: {
      gap: 0,
      headerSection: {
        show: true,
        height: '60px',
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
        height: '60px',
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

  const headerStyle = computed(() => {
    const headerSection = settings.value.questionnaireSection.headerSection;

    return {
      height: headerSection.height,
      overflowY: headerSection.virtualScroll ? 'auto' : 'hidden',
      ...headerSection.borderSettings,
      ...headerSection.marginSettings,
      ...headerSection.paddingSettings,
    };
  });

  const bodyStyle = computed(() => {
    const bodySection = settings.value.questionnaireSection.bodySection;

    return {
      height: bodySection.height,
      overflowY: bodySection.virtualScroll ? 'auto' : 'hidden',
      ...bodySection.borderSettings,
      ...bodySection.marginSettings,
      ...bodySection.paddingSettings,
    };
  });

  const footerStyle = computed(() => {
    const footerSection = settings.value.questionnaireSection.footerSection;

    return {
      height: footerSection.height,
      overflowY: footerSection.virtualScroll ? 'auto' : 'hidden',
      ...footerSection.borderSettings,
      ...footerSection.marginSettings,
      ...footerSection.paddingSettings,
    };
  });

  return { settings, headerStyle, bodyStyle, footerStyle };
});
