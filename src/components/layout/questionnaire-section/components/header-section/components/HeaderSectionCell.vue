<template>
  <div class="outside">
    <div
      v-for="rowItem in computedCells"
      :key="rowItem.id"
      :style="rowItem.style"
      class="cell-item"
    >
      <div v-if="rowItem.rowChildren.length" class="cell-item-row">
        <HeaderSectionCell :items="rowItem.rowChildren" />
        <!--        <q-btn-dropdown-->
        <!--          class="action-btn"-->
        <!--          dense-->
        <!--          text-color="black"-->
        <!--          color="white"-->
        <!--        >-->
        <!--          <q-list>-->
        <!--            <q-item clickable v-close-popup @click="addRow(rowItem.id)">-->
        <!--              <q-item-section>-->
        <!--                <q-item-label>Add Row</q-item-label>-->
        <!--              </q-item-section>-->
        <!--            </q-item>-->

        <!--            <q-item clickable v-close-popup @click="addColumn(rowItem.id)">-->
        <!--              <q-item-section>-->
        <!--                <q-item-label>Add Column</q-item-label>-->
        <!--              </q-item-section>-->
        <!--            </q-item>-->
        <!--          </q-list>-->
        <!--        </q-btn-dropdown>-->
      </div>
      <div v-if="rowItem.columnChildren.length" class="cell-item-column">
        <HeaderSectionCell :items="rowItem.columnChildren" />
      </div>
      <!--      <div class="row-item">-->
      <!--        <q-btn-dropdown-->
      <!--          class="action-btn"-->
      <!--          dense-->
      <!--          text-color="black"-->
      <!--          color="white"-->
      <!--        >-->
      <!--          <q-list>-->
      <!--            <q-item-->
      <!--              clickable-->
      <!--              v-close-popup-->
      <!--              @click="addRowInRowElement(rowItem.id)"-->
      <!--            >-->
      <!--              <q-item-section>-->
      <!--                <q-item-label>Add Row</q-item-label>-->
      <!--              </q-item-section>-->
      <!--            </q-item>-->

      <!--            <q-item-->
      <!--              clickable-->
      <!--              v-close-popup-->
      <!--              @click="addColumnInRowElement(rowItem.id)"-->
      <!--            >-->
      <!--              <q-item-section>-->
      <!--                <q-item-label>Add Column</q-item-label>-->
      <!--              </q-item-section>-->
      <!--            </q-item>-->
      <!--          </q-list>-->
      <!--        </q-btn-dropdown>-->
      <!--      </div>-->
      <!--      <div-->
      <!--        class="column-item"-->
      <!--        v-for="columnItem in rowItem.columnChildren"-->
      <!--        :key="columnItem.id"-->
      <!--      >-->
      <!--              <q-btn-dropdown-->
      <!--                class="action-btn"-->
      <!--                dense-->
      <!--                text-color="black"-->
      <!--                color="white"-->
      <!--              >-->
      <!--                <q-list>-->
      <!--                  <q-item-->
      <!--                    clickable-->
      <!--                    v-close-popup-->
      <!--                    @click="addRowInColumnElement(columnItem.id)"-->
      <!--                  >-->
      <!--                    <q-item-section>-->
      <!--                      <q-item-label>Add Row</q-item-label>-->
      <!--                    </q-item-section>-->
      <!--                  </q-item>-->

      <!--                  <q-item-->
      <!--                    clickable-->
      <!--                    v-close-popup-->
      <!--                    @click="addColumnInColumnElement(columnItem.id)"-->
      <!--                  >-->
      <!--                    <q-item-section>-->
      <!--                      <q-item-label>Add Column</q-item-label>-->
      <!--                    </q-item-section>-->
      <!--                  </q-item>-->
      <!--                </q-list>-->
      <!--              </q-btn-dropdown>-->
      <!--      </div>-->
      <q-btn-dropdown class="action-btn" dense text-color="black" color="white">
        <q-list>
          <q-item clickable v-close-popup @click="addRow(rowItem.id)">
            <q-item-section>
              <q-item-label>Add Row</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="addColumn(rowItem.id)">
            <q-item-section>
              <q-item-label>Add Column</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

    <!--    <div-->
    <!--      v-if="rowItem.columnChildren"-->
    <!--      style="position: relative; width: 100%; height: 100%; display: flex"-->
    <!--    >-->
    <!--      <HeaderSectionCell :items="rowItem.columnChildren" />-->
    <!--      &lt;!&ndash;      <q-btn-dropdown class="action-btn" dense text-color="black" color="white">&ndash;&gt;-->
    <!--      &lt;!&ndash;        <q-list>&ndash;&gt;-->
    <!--      &lt;!&ndash;          <q-item clickable v-close-popup @click="addRow(rowItem.id)">&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;              <q-item-label>Add Row</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;            </q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;          </q-item>&ndash;&gt;-->

    <!--      &lt;!&ndash;          <q-item clickable v-close-popup @click="addColumn(rowItem.id)">&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;              <q-item-label>Add Column</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;            </q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;          </q-item>&ndash;&gt;-->
    <!--      &lt;!&ndash;        </q-list>&ndash;&gt;-->
    <!--      &lt;!&ndash;      </q-btn-dropdown>&ndash;&gt;-->
    <!--    </div>-->

    <!--    <HeaderSectionCell :items="rowItem.rowChildren" />-->
  </div>
</template>

<script setup lang="ts">
import { uid } from 'quasar';
import { computed, onMounted, ref, watch } from 'vue';

interface CellItem {
  id: string;
  component?: string;
  style?: Record<string, any>;
  rowChildren: CellItem[];
  columnChildren: CellItem[];
}

interface Props {
  items?: CellItem[];
  first: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  first: false,
});

const cellConfigs = ref<CellItem[]>([
  {
    id: uid(),
    component: undefined,
    style: undefined,
    rowChildren: [],
    columnChildren: [],
  },
]);

const computedCells = computed(() => {
  return props.first ? cellConfigs.value : props.items;
});

// const exampleGrid = [
//   {
//     id: uid(),
//     label: 'section1',
//     children: [
//       { component: 'placeholder.logo;', width: '150px' },
//       { component: 'placeholder.progress;', width: undefined },
//     ],
//   },
//   {
//     id: uid(),
//     label: 'section2',
//     children: [{ component: 'none' }],
//   },
// ];
//
// function getStyle(item: { width?: string }) {
//   return {
//     flexGrow: 1,
//     width: item.width ? item.width : '100%',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     border: '1px dashed #cecece',
//   };
// }

function addRow(id: string) {
  const index = cellConfigs.value.findIndex((item) => item.id === id);
  if (index !== -1) {
    cellConfigs.value[index].rowChildren.push({
      id: uid(),
      component: undefined,
      style: undefined,
      rowChildren: [],
      columnChildren: [],
    });
  }
}

function addColumn(id: string) {
  const index = cellConfigs.value.findIndex((item) => item.id === id);
  if (index !== -1) {
    cellConfigs.value[index].columnChildren.push({
      id: uid(),
      component: undefined,
      style: undefined,
      rowChildren: [],
      columnChildren: [],
    });
  }
}

watch(
  () => props.items,
  (val) => {
    if (val) updateChildren(val);
  },
  { deep: true }
);

onMounted(() => {
  if (props.items) {
    updateChildren(props.items);
  }
});

function updateChildren(items: CellItem[]) {
  cellConfigs.value = items;
}
</script>

<style lang="scss" scoped>
//* {
//  position: relative;
//  width: 100%;
//  height: 100%;
//  display: flex;
//}

.outside {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;

  border: 1px dashed #cecece;

  .cell-item {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .cell-item-row {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .cell-item-column {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
    }
  }

  //.cell-item {
  //  width: 100%;
  //  height: 100%;
  //  display: flex;
  //  position: relative;
  //  border: 1px dashed #cecece;
  //
  //  .action-btn {
  //    position: absolute;
  //    top: 4px;
  //    left: 4px;
  //  }
  //}
}
.action-btn {
  position: absolute;
  top: 4px;
  left: 4px;
}
</style>
