<template>
  <form @submit="submit" accesskey="enter">
    <div
      class="container mw-50 d-flex justify-content-center"
      style="max-width: 600px; margin: 0 auto"
    >
      <div class="row">
        <div class="col-12" style="margin-top: 3rem">
          <h4>To load 3d model choose file or valid link to .gltf file</h4>

          <div class="p-x3">
            <div class="form-group" v-if="!$store.sharedModelLink">
              <label class="form-label"
                ><i class="fas fa-upload"></i> GLTF/GLB File</label
              >
              <div class="input-group mb-3">
                <input
                  @change="modelFileLoaded"
                  class="form-control input-group"
                  placeholder="Choose model"
                  ref="modelFiles"
                  type="file"
                  accept=".gltf,.glb"
                />
                <button
                  @click="clearModelSelection"
                  class="btn btn-danger"
                  type="reset"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>

            <div class="form-group py-3" v-if="!$store.sharedModelFile">
              <label class="form-label"
                ><i class="fas fa-link"></i> GLTF/GLB Link</label
              >
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">.gltf</span>
                </div>
                <input
                  class="form-control input-group"
                  v-model="$store.sharedModelLink"
                  placeholder="Link"
                  pattern=".+\.gltf|.+\.glb"
                  type="input"
                />
              </div>
            </div>
          </div>
          <label class="form-label"
            ><i class="fas fa-percentage"></i> Scale [{{ scale }}]</label
          >
          <input
            type="range"
            class="form-range"
            v-model="scale"
            min="0.05"
            max="5"
            step="0.1"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            :title="scale"
          />
        </div>
        <div class="col-12 text-center">
          <div class="pb-3">
            <button type="submit" class="my-submit-btn btn-lg btn-primary w-25">
              <i class="fas fa-check"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "InputGroup",
  data() {
    return {
      scale: 1,
    };
  },

  methods: {
    modelFileLoaded() {
      this.$store.sharedModelFile = URL.createObjectURL(
        this.$refs.modelFiles.files[0]
      );
    },
    clearModelSelection() {
      this.$store.sharedModelFile = null;
    },
    submit() {
      if (!this.$store.sharedModelFile && !this.$store.sharedModelLink) {
        this.$store.sharedModelLink =
          "https://raw.githubusercontent.com/nicolocarpignoli/nicolocarpignoli.github.io/master/ar-playground/models/CesiumMan.gltf";
      }
      this.$store.scale = { x: this.scale, y: this.scale, z: this.scale };
      this.$router.push("modeler");
    },
  },
  props: {},
};
</script>

<style>
</style>
