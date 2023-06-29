<template>
  <div
    class="outside"
    :style="{ flexDirection: props.vertical ? 'row' : 'column' }"
  >
    <div
      v-for="rowItem in computedCells"
      :key="rowItem.id"
      :style="rowItem.style"
      class="cell-item"
    >
      <div v-if="rowItem.rowChildren.length" class="cell-item-row">
        <HeaderSectionCell
          @remove="removeSection(rowItem.id)"
          :items="rowItem.rowChildren"
        />
      </div>
      <div v-else-if="rowItem.columnChildren.length" class="cell-item-column">
        <HeaderSectionCell
          :vertical="true"
          @remove="removeSection(rowItem.id)"
          :items="rowItem.columnChildren"
        />
      </div>

      <q-btn-dropdown
        v-if="!rowItem.rowChildren.length && !rowItem.columnChildren.length"
        class="action-btn"
        dense
        text-color="black"
        :color="selectedCell?.id === rowItem.id ? 'primary' : 'white'"
      >
        <q-list>
          <q-item clickable v-close-popup @click="selectItem(rowItem.id)">
            <q-item-section>
              <q-item-label>Edit</q-item-label>
            </q-item-section>
          </q-item>

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

          <q-item
            v-if="!first"
            clickable
            v-close-popup
            @click="$emit('remove')"
          >
            <q-item-section>
              <q-item-label>Remove Section</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { uid } from 'quasar';
import { computed, onMounted, ref, watch } from 'vue';
import { useSectionLayoutStore } from 'stores/section-layout-config-store';
import { storeToRefs } from 'pinia';

export interface CellItem {
  id: string;
  component?: string;
  style: Record<string, any>;
  rowChildren: CellItem[];
  columnChildren: CellItem[];
}

interface Props {
  items?: CellItem[];
  first: boolean;
  vertical: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  first: false,
  vertical: false,
});

const { selectedCell } = storeToRefs(useSectionLayoutStore());

const cellConfigs = ref<CellItem[]>([
  {
    id: uid(),
    component: undefined,
    style: {},
    rowChildren: [],
    columnChildren: [],
  },
]);

const computedCells = computed(() => {
  return props.first ? cellConfigs.value : props.items;
});

function selectItem(id: string) {
  const index = cellConfigs.value.findIndex((item) => item.id === id);
  if (index !== -1) {
    selectedCell.value = cellConfigs.value[index];
  }
}

watch(selectedCell, (cell) => {
  handleCellChange(cell);
});

function addRow(id: string) {
  const index = cellConfigs.value.findIndex((item) => item.id === id);
  if (index !== -1) {
    cellConfigs.value[index].rowChildren.push(
      generateCellItem(),
      generateCellItem()
    );
  }
}

function addColumn(id: string) {
  const index = cellConfigs.value.findIndex((item) => item.id === id);
  if (index !== -1) {
    cellConfigs.value[index].columnChildren.push(
      generateCellItem(),
      generateCellItem()
    );
  }
}

function removeSection(id: string) {
  const index = cellConfigs.value.findIndex((item) => item.id === id);
  if (index !== -1) {
    cellConfigs.value[index].rowChildren.length = 0;
    cellConfigs.value[index].columnChildren.length = 0;
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

function generateCellItem() {
  return {
    id: uid(),
    component: undefined,
    style: {},
    rowChildren: [],
    columnChildren: [],
  };
}

function handleCellChange(cell: CellItem) {
  const index = cellConfigs.value.findIndex((item) => item.id === cell.id);
  if (index !== 1) {
    cellConfigs.value[index] = cell;
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.outside {
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;

  .cell-item {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px dashed #cecece;

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
}
.action-btn {
  position: absolute;
  top: 4px;
  left: 4px;
}
</style>
