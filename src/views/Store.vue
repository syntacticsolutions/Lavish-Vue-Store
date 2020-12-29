<template>
  <main class="store-container">
    <h1 class="store-header">Awesome Vue Store</h1>
    <Pagination
      :page="storeState.page"
      :viewingAmount="storeState.viewingAmount"
      :total="storeState.storeItems.length"
      @change="handlePageUpdate"
    />
    <AssetGrid :items="computedItems" :storeConfig="storeState.storeConfig" />
    <Pagination
      :page="storeState.page"
      :viewingAmount="storeState.viewingAmount"
      :total="storeState.storeItems.length"
      @change="handlePageUpdate"
    />
  </main>
</template>

<script lang="ts">
import { reactive, computed } from "vue";
import Pagination from "@/components/Pagination.vue";
import AssetGrid from "@/components/AssetGrid.vue";
import { storeConfig } from "@/assets/fixtures/storeConfig";
const storeItems = require("@/assets/fixtures/storeItems");

export default {
  name: "Store",
  components: {
    Pagination,
    AssetGrid
  },
  setup() {
    const storeState = reactive({
      page: 1,
      viewingAmount: 25,
      storeItems,
      storeConfig
    });

    const handlePageUpdate = ([page, viewingAmount]: Array<number>) => {
      storeState.page = page;
      storeState.viewingAmount = viewingAmount;
    };

    const computedItems = computed(() => {
      const { page, viewingAmount, storeItems } = storeState;

      const lastIndex = page * viewingAmount;
      const firstIndex = lastIndex - viewingAmount;

      return storeItems.slice(firstIndex, lastIndex);
    });

    return {
      storeState,
      handlePageUpdate,
      computedItems
    };
  }
};
</script>

<style lang="scss" scoped>
.store-header {
  text-align: left;
}

.store-container {
  margin: 80px 7%;
}
</style>
