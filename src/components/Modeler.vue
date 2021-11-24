<template>
  <div>
    <a-assets>
      <a-asset-item id="asset" :src="modelLink1 ? modelLink1 : modelFile">
      </a-asset-item>
    </a-assets>

    <a-scene embedded arjs>
      <a-marker id="asset" preset="shared-preset">
        <a-box position="0 0.5 0" scale="0.1 0.1 0.1" gltf-model="#asset">
        </a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  </div>
</template>

<script>
export default {
  inject: [
    "modelProvided",
    "modelFile",
    "modelLink",
    "markerFile",
    "markerLink",
  ],
  name: "Modeler",

  data: function () {
    return {
      modelLink1:
        "https://3ckid.com/01/assets/mech_drone/scene.gltf",
    };
  },
};
</script>

<style>
</style>
