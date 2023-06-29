<template>
  <div class="controller">
    <h6 class="text-capitalize">Settings:</h6>

    <q-toggle
      :disable="props.type === 'body'"
      :label="`Show ${props.type}`"
      v-model="
        globalLayoutStore.settings.questionnaireSection[`${props.type}Section`]
          .show
      "
    />
    <div class="controller">
      <q-input
        v-model="selectedCell.style.width"
        label="Width"
        class="text-capitalize"
        outlined
      />
      <q-input
        v-model="selectedCell.style.height"
        label="Height"
        class="text-capitalize"
        outlined
      />

      <div class="q-my-sm">Border settings:</div>
      <div class="controller">
        <q-select
          outlined
          v-model="selectedCell.style.borderStyle"
          :options="borderOptions"
          map-options
          emit-value
        />

        <q-input
          label="Border color"
          outlined
          v-model="selectedCell.style.borderColor"
        >
          <template v-slot:append>
            <q-icon name="colorize" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color v-model="selectedCell.style.borderColor" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input
          label="Border Radius"
          outlined
          v-model="selectedCell.style.borderRadius"
        />

        <q-input
          label="Border Width"
          outlined
          v-model="selectedCell.style.borderWidth"
        />
      </div>

      <div class="q-my-sm">Background settings:</div>
      <div class="controller">
        <q-input
          label="Background color"
          outlined
          v-model="selectedCell.style.backgroundColor"
        >
          <template v-slot:append>
            <q-icon name="colorize" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color v-model="selectedCell.style.backgroundColor" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <QSlideTransition>
          <div v-show="!!selectedCell.style.backgroundColor">
            <div>Opacity:</div>

            <q-slider
              class="q-mt-xs"
              label
              v-model="selectedCell.style.opacity"
              :min="0"
              :max="1"
              :step="0.05"
            />
          </div>
        </QSlideTransition>
      </div>

      <div class="q-my-md">Margin Settings:</div>

      <div class="controller">
        <q-input label="Margin" outlined v-model="selectedCell.style.margin" />
      </div>

      <div class="q-my-md">Padding Settings:</div>

      <div class="controller">
        <q-input
          label="Padding"
          outlined
          v-model="selectedCell.style.padding"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGlobalLayoutStore } from 'stores/global-layout-config-store';
import { useSectionLayoutStore } from 'stores/section-layout-config-store';
import { onUnmounted, watch } from 'vue';

export interface Props {
  type: 'header' | 'body' | 'footer';
}

const props = defineProps<Props>();

const globalLayoutStore = useGlobalLayoutStore();
const sectionLayoutStore = useSectionLayoutStore();
const { settings, selectedCell } = storeToRefs(sectionLayoutStore);

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

watch(
  () => selectedCell.value.style.backgroundColor,
  (value) => {
    if (value) {
      selectedCell.value.style.opacity = 1;
    }
  }
);

onUnmounted(() => {
  sectionLayoutStore.resetStore();
});
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
