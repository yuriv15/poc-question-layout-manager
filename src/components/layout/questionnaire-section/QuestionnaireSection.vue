<template>
  <div class="section-cnt">
    <div class="screen">
      <div
        v-if="settings.questionnaireSection.headerSection.show"
        class="section header"
        :style="headerStyle"
      >
        Header Section
      </div>
      <div class="section body" :style="bodyStyle">Body Section</div>
      <div
        v-if="settings.questionnaireSection.footerSection.show"
        class="section footer"
        :style="footerStyle"
      >
        Footer Section
      </div>
    </div>

    <div class="controller-cnt">
      <!--      Header Start-->

      <div class="controller">
        <h6>HeaderSettings:</h6>

        <q-toggle
          label="Show header"
          v-model="settings.questionnaireSection.headerSection.show"
        />
        <QSlideTransition>
          <div
            class="controller"
            v-show="settings.questionnaireSection.headerSection.show"
          >
            <q-input
              v-model="settings.questionnaireSection.headerSection.height"
              style="max-width: 300px"
              label="Header height"
              outlined
            />

            <q-toggle
              class="q-my-sm"
              label="Enable vertical scroll"
              v-model="
                settings.questionnaireSection.headerSection.virtualScroll
              "
            />

            <div class="q-my-sm">Border settings:</div>
            <div class="controller">
              <q-select
                outlined
                v-model="
                  settings.questionnaireSection.headerSection.borderSettings
                    .borderStyle
                "
                style="max-width: 300px"
                :options="borderOptions"
                map-options
                emit-value
              />

              <q-input
                label="Border color"
                outlined
                v-model="
                  settings.questionnaireSection.headerSection.borderSettings
                    .borderColor
                "
                style="max-width: 300px"
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
                          settings.questionnaireSection.headerSection
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
                style="max-width: 300px"
                v-model="
                  settings.questionnaireSection.headerSection.borderSettings
                    .borderRadius
                "
              />

              <q-input
                label="Border Width"
                outlined
                style="max-width: 300px"
                v-model="
                  settings.questionnaireSection.headerSection.borderSettings
                    .borderWidth
                "
              />
            </div>

            <div class="q-my-sm">Background settings:</div>
            <div class="controller">
              <q-input
                label="Background color"
                outlined
                v-model="
                  settings.questionnaireSection.headerSection.backgroundSettings
                    .backgroundColor
                "
                style="max-width: 300px"
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
                          settings.questionnaireSection.headerSection
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
                  settings.questionnaireSection.headerSection.backgroundSettings
                    .opacity
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
                style="max-width: 300px"
                v-model="
                  settings.questionnaireSection.headerSection.marginSettings
                    .margin
                "
              />
            </div>

            <div class="q-my-md">Padding Settings:</div>

            <div class="controller">
              <q-input
                label="Padding"
                outlined
                style="max-width: 300px"
                v-model="
                  settings.questionnaireSection.headerSection.paddingSettings
                    .padding
                "
              />
            </div>
          </div>
        </QSlideTransition>
      </div>
      <!--      Header End-->

      <!--      Body Start-->

      <div class="controller">
        <h6>Body Settings:</h6>
        <q-toggle
          label="Show body"
          disable
          v-model="settings.questionnaireSection.bodySection.show"
        />
        <QSlideTransition>
          <div class="controller">
            <q-input
              style="max-width: 300px"
              v-model="settings.questionnaireSection.bodySection.height"
              label="Body height"
              outlined
            />
            <q-toggle
              class="q-my-sm"
              label="Enable vertical scroll"
              v-model="settings.questionnaireSection.bodySection.virtualScroll"
            />

            <div class="q-my-sm">Border settings:</div>
            <div class="controller">
              <q-select
                outlined
                v-model="
                  settings.questionnaireSection.bodySection.borderSettings
                    .borderStyle
                "
                style="max-width: 300px"
                :options="borderOptions"
                map-options
                emit-value
              />

              <q-input
                label="Border color"
                outlined
                v-model="
                  settings.questionnaireSection.bodySection.borderSettings
                    .borderColor
                "
                style="max-width: 300px"
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
                          settings.questionnaireSection.bodySection
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
                style="max-width: 300px"
                v-model="
                  settings.questionnaireSection.bodySection.borderSettings
                    .borderRadius
                "
              />

              <q-input
                label="Border Width"
                outlined
                style="max-width: 300px"
                v-model="
                  settings.questionnaireSection.bodySection.borderSettings
                    .borderWidth
                "
              />
            </div>

            <div class="q-my-sm">Background settings:</div>
            <div class="controller">
              <q-input
                label="Background color"
                outlined
                v-model="
                  settings.questionnaireSection.bodySection.backgroundSettings
                    .backgroundColor
                "
                style="max-width: 300px"
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
                          settings.questionnaireSection.bodySection
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
                  settings.questionnaireSection.bodySection.backgroundSettings
                    .opacity
                "
                :min="0"
                :max="1"
                :step="0.05"
              />
            </div>
          </div>
          <div class="q-my-md">Margin Settings:</div>

          <div class="controller">
            <q-input
              label="Margin"
              outlined
              style="max-width: 300px"
              v-model="
                settings.questionnaireSection.bodySection.marginSettings.margin
              "
            />
          </div>

          <div class="q-my-md">Padding Settings:</div>

          <div class="controller">
            <q-input
              label="Padding"
              outlined
              style="max-width: 300px"
              v-model="
                settings.questionnaireSection.bodySection.paddingSettings
                  .padding
              "
            />
          </div>
        </QSlideTransition>
      </div>

      <!--      Body End-->

      <!--      Footer Start-->

      <div class="controller">
        <h6>Footer Settings:</h6>

        <q-toggle
          class="q-my-sm"
          label="Show footer"
          v-model="settings.questionnaireSection.footerSection.show"
        />
        <QSlideTransition>
          <div
            class="controller"
            v-show="settings.questionnaireSection.footerSection.show"
          >
            <q-input
              style="max-width: 300px"
              v-model="settings.questionnaireSection.footerSection.height"
              label="Footer height"
              outlined
            />
            <q-toggle
              class="q-my-sm"
              label="Enable vertical scroll"
              v-model="
                settings.questionnaireSection.footerSection.virtualScroll
              "
            />

            <div class="q-my-sm">Border settings:</div>
            <div class="controller">
              <q-select
                outlined
                v-model="
                  settings.questionnaireSection.footerSection.borderSettings
                    .borderStyle
                "
                style="max-width: 300px"
                :options="borderOptions"
                map-options
                emit-value
              />

              <q-input
                label="Border color"
                outlined
                v-model="
                  settings.questionnaireSection.footerSection.borderSettings
                    .borderColor
                "
                style="max-width: 300px"
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
                          settings.questionnaireSection.footerSection
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
                style="max-width: 300px"
                v-model="
                  settings.questionnaireSection.footerSection.borderSettings
                    .borderRadius
                "
              />

              <q-input
                label="Border Width"
                outlined
                style="max-width: 300px"
                v-model="
                  settings.questionnaireSection.footerSection.borderSettings
                    .borderWidth
                "
              />
            </div>

            <div class="q-my-sm">Background settings:</div>
            <div class="controller">
              <q-input
                label="Background color"
                outlined
                v-model="
                  settings.questionnaireSection.footerSection.backgroundSettings
                    .backgroundColor
                "
                style="max-width: 300px"
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
                          settings.questionnaireSection.footerSection
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
                  settings.questionnaireSection.footerSection.backgroundSettings
                    .opacity
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
                style="max-width: 300px"
                v-model="
                  settings.questionnaireSection.footerSection.marginSettings
                    .margin
                "
              />
            </div>

            <div class="q-my-md">Padding Settings:</div>

            <div class="controller">
              <q-input
                label="Padding"
                outlined
                style="max-width: 300px"
                v-model="
                  settings.questionnaireSection.footerSection.paddingSettings
                    .padding
                "
              />
            </div>
          </div>
        </QSlideTransition>
      </div>

      <!--      Footer End-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalLayoutStore } from 'stores/global-layout-config-store';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

const { settings } = storeToRefs(useGlobalLayoutStore());

const headerStyle = computed(() => {
  const headerSection = settings.value.questionnaireSection.headerSection;

  return {
    height: headerSection.height,
    overflow: headerSection.virtualScroll ? 'scroll-y' : 'none',
    ...headerSection.borderSettings,
    ...headerSection.marginSettings,
    ...headerSection.paddingSettings,
  };
});

const bodyStyle = computed(() => {
  const bodySection = settings.value.questionnaireSection.bodySection;

  return {
    height: bodySection.height,
    overflow: bodySection.virtualScroll ? 'scroll-y' : 'none',
    ...bodySection.borderSettings,
    ...bodySection.marginSettings,
    ...bodySection.paddingSettings,
  };
});

const footerStyle = computed(() => {
  const footerSection = settings.value.questionnaireSection.footerSection;

  return {
    height: footerSection.height,
    overflow: footerSection.virtualScroll ? 'scroll-y' : 'none',
    ...footerSection.borderSettings,
    ...footerSection.marginSettings,
    ...footerSection.paddingSettings,
  };
});

const borderOptions = [
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
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

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
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-top: 12px;
    height: fit-content;

    .controller {
      height: min-content;
      border: 1px solid #cecece;
      padding: 8px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
}
</style>
