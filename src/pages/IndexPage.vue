<template>
  <q-page class="page-cnt">
    <q-splitter unit="px" v-model="splitterModel" :limits="[250, 350]">
      <template v-slot:before>
        <div class="q-pa-md">
          <q-tree
            :nodes="simple"
            node-key="component"
            selected-color="primary"
            v-model:selected="selectedSection"
            default-expand-all
          />
        </div>
      </template>

      <template v-slot:after>
        <component :is="components[selectedSection]"></component>
      </template>
    </q-splitter>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import components from 'src/components/layout/register';

const splitterModel = ref(250);
const selectedSection = ref('QuestionnaireSection');

const simple = [
  {
    label: 'Questionnaire Section',
    component: 'QuestionnaireSection',
    children: [
      {
        label: 'Header Section',
        component: 'HeaderSection',
      },
      {
        label: 'Body Section',
        component: 'BodySection',
      },
      {
        label: 'Footer Section',
        component: 'FooterSection',
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.page-cnt {
  width: 100%;
  height: 100%;
  padding: 8px;
}
</style>
