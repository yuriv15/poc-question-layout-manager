<template>
  <div class="controller">
    <h6 class="text-capitalize">{{ props.type }} Settings:</h6>

    <q-toggle
      :disable="props.type === 'body'"
      label="Show header"
      v-model="settings.questionnaireSection[`${props.type}Section`].show"
    />
    <QSlideTransition>
      <div
        class="controller"
        v-show="settings.questionnaireSection[`${props.type}Section`].show"
      >
        <q-input
          v-model="settings.questionnaireSection[`${props.type}Section`].height"
          label="Header height"
          outlined
        />

        <q-toggle
          class="q-my-sm"
          label="Enable vertical scroll"
          v-model="
            settings.questionnaireSection[`${props.type}Section`].virtualScroll
          "
        />

        <div class="q-my-sm">Border settings:</div>
        <div class="controller">
          <q-select
            outlined
            v-model="
              settings.questionnaireSection[`${props.type}Section`]
                .borderSettings.borderStyle
            "
            :options="borderOptions"
            map-options
            emit-value
          />

          <q-input
            label="Border color"
            outlined
            v-model="
              settings.questionnaireSection[`${props.type}Section`]
                .borderSettings.borderColor
            "
          >
            <template v-slot:append>
              <q-icon name="colorize" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-color
                    v-model="
                      settings.questionnaireSection[`${props.type}Section`]
                        .borderSettings.borderColor
                    "
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input
            label="Border Radius"
            outlined
            v-model="
              settings.questionnaireSection[`${props.type}Section`]
                .borderSettings.borderRadius
            "
          />

          <q-input
            label="Border Width"
            outlined
            v-model="
              settings.questionnaireSection[`${props.type}Section`]
                .borderSettings.borderWidth
            "
          />
        </div>

        <div class="q-my-sm">Background settings:</div>
        <div class="controller">
          <q-input
            label="Background color"
            outlined
            v-model="
              settings.questionnaireSection[`${props.type}Section`]
                .backgroundSettings.backgroundColor
            "
          >
            <template v-slot:append>
              <q-icon name="colorize" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-color
                    v-model="
                      settings.questionnaireSection[`${props.type}Section`]
                        .backgroundSettings.backgroundColor
                    "
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <div class="q-mt-md">Opacity:</div>

          <q-slider
            class="q-mt-xs"
            label
            v-model="
              settings.questionnaireSection[`${props.type}Section`]
                .backgroundSettings.opacity
            "
            :min="0"
            :max="1"
            :step="0.05"
          />
        </div>

        <div class="q-my-md">Margin Settings:</div>

        <div class="controller">
          <q-input
            label="Margin"
            outlined
            v-model="
              settings.questionnaireSection[`${props.type}Section`]
                .marginSettings.margin
            "
          />
        </div>

        <div class="q-my-md">Padding Settings:</div>

        <div class="controller">
          <q-input
            label="Padding"
            outlined
            v-model="
              settings.questionnaireSection[`${props.type}Section`]
                .paddingSettings.padding
            "
          />
        </div>
      </div>
    </QSlideTransition>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGlobalLayoutStore } from 'stores/global-layout-config-store';

export interface Props {
  type: 'header' | 'body' | 'footer';
}

const props = defineProps<Props>();

const layoutStore = useGlobalLayoutStore();
const { settings } = storeToRefs(layoutStore);

const borderOptions: { label: string; value: string }[] = [
  {
    label: 'None',
    value: 'none',
  },
  {
    label: 'Double',
    value: 'double',
  },
  {
    label: 'Groove',
    value: 'groove',
  },
  {
    label: 'Ridge',
    value: 'ridge',
  },
  {
    label: 'Inset',
    value: 'inset',
  },
  {
    label: 'Outset',
    value: 'outset',
  },
  {
    label: 'Dashed',
    value: 'dashed',
  },
  {
    label: 'Solid',
    value: 'solid',
  },
];
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.controller {
  flex-grow: 1;
  height: min-content;
  border: 1px solid #cecece;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
