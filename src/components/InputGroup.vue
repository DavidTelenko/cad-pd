<template>
  <form>
    <div
      class="container mw-50 d-flex justify-content-center"
      style="max-width: 600px; margin: 0 auto"
    >
      <div class="row">
        <div class="col-12" style="margin-top: 3rem">
          <h4>To load 3d model choose file or valid link to .gltf file</h4>

          <div class="p-x3">
            <div class="form-group" v-if="!modelLink">
              <label><i class="fas fa-upload"></i> GLTF/GLB File</label>
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

            <div class="form-group py-3" v-if="!modelFile">
              <label><i class="fas fa-link"></i> GLTF/GLB Link</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">.gltf</span>
                </div>
                <input
                  class="form-control input-group"
                  v-model="modelLink"
                  placeholder="Link"
                  pattern=".+\.gltf|.+\.glb"
                  type="input"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12" style="padding-top: 3rem">
          <h4>To load marker choose file or valid link to .patt file</h4>

          <div class="p-x3">
            <div class="form-group" v-if="!markerLink">
              <label><i class="fas fa-upload"></i> PATT File</label>
              <div class="input-group mb-3">
                <input
                  @change="markerFileLoaded"
                  class="form-control input-group"
                  placeholder="Choose model"
                  ref="markerFiles"
                  type="file"
                  accept=".patt"
                />
                <button
                  @click="clearMarkerSelection"
                  class="btn btn-danger"
                  type="reset"
                >
                  <i class="fas fa-times"></i>
                </button>
                <small class="input-group doomed">optional</small>
              </div>
            </div>

            <div class="form-group py-3" v-if="!markerFile">
              <label><i class="fas fa-link"></i> PATT Link</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">.patt</span>
                </div>
                <input
                  class="form-control input-group"
                  v-model="markerLink"
                  placeholder="Link"
                  pattern=".+\.patt"
                  type="input"
                />
                <small class="input-group doomed">optional</small>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-12 col-sm-6 text-center"
          v-if="modelFile || modelLink"
        >
          <div class="pb-3">
            <button
              type="submit"
              class="my-submit-btn btn-lg btn-primary w-25"
              @click="submit"
            >
              <i class="fas fa-check"></i>
            </button>
          </div>
        </div>

        <div class="col-lg-12 col-sm-6 text-center" v-else>
          <div class="pb-3">
            <button
              type="submit"
              class="my-submit-btn btn-lg btn-primary w-25"
              disabled
            >
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
  inject: [
    "modelProvided",
    "modelFile",
    "modelLink",
    "markerFile",
    "markerLink",
  ],

  methods: {
    submit() {
      this.$router.push("modeler");
    },
    modelFileLoaded() {
      this.modelFile = this.$refs.modelFiles.files[0];
    },
    clearModelSelection() {
      this.modelFile = null;
    },
    markerFileLoaded() {
      this.markerFile = this.$refs.markerFiles.files[0];
    },
    markerModelSelection() {
      this.markerFile = null;
    },
  },
  props: {},
};
</script>

<style></style>
