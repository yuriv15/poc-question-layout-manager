<template>
  <div class="section-cnt">
    <div class="screen">
      <template v-for="section in usedSections" :key="section">
        <div
          v-if="settings.questionnaireSection[`${section}Section`].show"
          class="section"
          :class="section"
          :style="getStyle(section)"
        >
          <div class="inner">{{ `${section}Section` }}</div>
        </div>
      </template>
    </div>

    <div class="controller-cnt">
      <ControllerSection
        v-for="section in usedSections"
        :key="section"
        :type="section"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalLayoutStore } from 'stores/global-layout-config-store';
import { storeToRefs } from 'pinia';
import ControllerSection from 'components/layout/questionnaire-section/controller/ControllerSection.vue';

const { settings, headerStyle, bodyStyle, footerStyle } = storeToRefs(
  useGlobalLayoutStore()
);

const usedSections = ['header', 'body', 'footer'] as const;

function getStyle(style: (typeof usedSections)[number]) {
  const styleMap = {
    header: headerStyle.value,
    body: bodyStyle.value,
    footer: footerStyle.value,
  };

  return styleMap[style];
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.section-cnt {
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  .screen {
    width: 100%;
    max-width: 100%;
    height: 600px;
    border: 1px solid #cecece;
    display: flex;
    flex-direction: column;

    .section {
      position: relative;

      .inner {
        text-transform: capitalize;
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        border: 1px dashed #cecece;
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
      }
    }

    .header:before {
      background-color: v-bind(
        'settings.questionnaireSection.headerSection.backgroundSettings.backgroundColor'
      );
      opacity: v-bind(
        'settings.questionnaireSection.headerSection.backgroundSettings.opacity'
      );
    }

    .body:before {
      background-color: v-bind(
        'settings.questionnaireSection.bodySection.backgroundSettings.backgroundColor'
      );
      opacity: v-bind(
        'settings.questionnaireSection.bodySection.backgroundSettings.opacity'
      );
    }

    .footer:before {
      background-color: v-bind(
        'settings.questionnaireSection.footerSection.backgroundSettings.backgroundColor'
      );
      opacity: v-bind(
        'settings.questionnaireSection.footerSection.backgroundSettings.opacity'
      );
    }
  }

  .controller-cnt {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
}
</style>
