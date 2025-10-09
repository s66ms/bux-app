<script setup></script>

<template>
  <button
    v-if="true"
    class="my-button"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.my-button {
  padding: 10px 20px;
  border: 1px solid #EE4312;
  border-radius: 10px;
  background-color: #EE4312;
  width: 100%;
  font-size: 18px;
}
</style>
