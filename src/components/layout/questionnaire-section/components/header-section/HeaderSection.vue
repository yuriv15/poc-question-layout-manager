<template>
  <div class="q-pa-lg">
    <div :style="headerStyle" class="header-cnt">
      <slot />
      <!--      <div class="grid-line" v-for="item in exampleGrid" :key="item.id">-->
      <!--        <span-->
      <!--          v-for="child in item.children"-->
      <!--          :key="child.component"-->
      <!--          :style="getStyle(child)"-->
      <!--        >-->
      <!--          {{ child.component }}-->
      <!--        </span>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGlobalLayoutStore } from 'stores/global-layout-config-store';
import { uid } from 'quasar';

const { settings, headerStyle } = storeToRefs(useGlobalLayoutStore());
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.header-cnt {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  //display: flex;
  //flex-direction: column;

  &:before {
    //border: 1px solid #cecece;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: v-bind(
      'settings.questionnaireSection.headerSection.backgroundSettings.backgroundColor'
    );
    opacity: v-bind(
      'settings.questionnaireSection.headerSection.backgroundSettings.opacity'
    );
  }
}
</style>
