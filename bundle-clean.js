// Clean-repo style bundle for the current custom marker
window.xrConfigData = {
  imageTargetData: [
    {
      type: "PLANAR",
      properties: {
        top: 0,
        left: 312,
        width: 1875,
        height: 2500,
        isRotated: false,
        originalWidth: 2500,
        originalHeight: 2500
      },
      imagePath: "image-targets/marker_luminance.png",
      metadata: null,
      physicalWidthInMeters: 0.115,
      loadAutomatically: true,
      name: "marker",
      resources: {
        originalImage: "marker_original.png",
        croppedImage: "marker_cropped.png",
        thumbnailImage: "marker_thumbnail.png",
        luminanceImage: "marker_luminance.png"
      },
      created: 1781091877698,
      updated: 1781091877698
    }
  ]
};

function configureXR8Targets() {
  if (window.XR8 && window.XR8.XrController && typeof window.XR8.XrController.configure === "function") {
    window.XR8.XrController.configure(window.xrConfigData);
  }
}

function installCleanPipeline() {
  if (!window.XR8) return;
  configureXR8Targets();
  if (window.LandingPage) {
    try {
      XR8.addCameraPipelineModule(LandingPage.pipelineModule());
    } catch (_) {
      // no-op
    }
  }
}

if (window.XR8) {
  installCleanPipeline();
} else {
  window.addEventListener("xrloaded", installCleanPipeline, { once: true });
  window.addEventListener("XRloaded", installCleanPipeline, { once: true });
}
