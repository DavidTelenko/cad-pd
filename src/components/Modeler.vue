<template>
  <a-scene embedded arjs>
    <a-marker id="asset" preset="hiro">
      <a-box
        position="0 0 0"
        :scale="$store.scale"
        :gltf-model="
          $store.sharedModelLink
            ? $store.sharedModelLink
            : $store.sharedModelFile
        "
      >
      </a-box>
    </a-marker>
    <a-entity camera></a-entity>
  </a-scene>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$router.go(0);
    next();
  },
};
</script>

<style scoped>
span.zoomed {
  transform: scale(1);
  transform-origin: 0 0;
}
</style>