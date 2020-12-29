<template>
  <section class="item-grid">
    <div v-for="(item, index) in items" :key="index">
      <div class="item-card-value-container">
        <figure>
          <p
            class="item-title"
            :style="{ width: `${localImageConfig.sm[1] - 1}px` }"
          >
            {{ item.title }}
          </p>
          <img
            :src="item.image"
            :alt="item.title + '_image'"
            :style="{
              height: `${localImageConfig.sm[0]}px`,
              width: `${localImageConfig.sm[1]}px`
            }"
          />
        </figure>
        <p
          class="item-price"
          :style="{ width: `${localImageConfig.sm[1] - 10}px` }"
        >
          {{ item.price }}
        </p>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { computed } from "vue";
import { Config } from "@/assets/fixtures/storeConfig";

type StoreItem = {
  id: number;
  inStock: boolean;
  price: string;
  image: string;
  colors: Array<string>;
  title: string;
  description: string;
  freeShipping: boolean;
};

type AssetGridProps = {
  items: Array<StoreItem>;
  storeConfig: Array<Config>;
};
export default {
  name: "AssetGrid", // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  props: ["storeConfig", "items"], // @ts-ignore
  setup(props: AssetGridProps) {
    const localImageConfig = computed(() => {
      return props.storeConfig.find(({ type }: Config) => type === "preview");
    });

    return {
      localImageConfig
    };
  }
};
</script>

<style lang="scss" scoped>
.item-grid {
  margin-top: 30px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  margin-left: 7%;
  margin-right: 7%;
  justify-items: center;

  .item-card-value-container {
    position: relative;
    display: flex;
    justify-content: space-between;

    .item-title,
    .item-price {
      position: absolute;
      margin-block-start: 0;
      margin-block-end: 0;
      background: #fff;
      display: flex;
      opacity: 0.9;
      justify-content: center;
      align-items: center;
      padding-top: 5px;
      padding-bottom: 5px;
    }

    .item-price {
      bottom: 1px;
      left: 1px;
      border-top: 1px solid #dfdfdf;
      justify-content: flex-start;
      font-weight: 500;
      padding-left: 10px;
    }
  }
}

figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  border: 1px solid #ccc;
  border-radius: 2px;
  position: relative;
}
</style>
