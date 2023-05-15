"use client";
import { useEffect } from "react";

const ModelViewer = () => {
  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);

  return (
    <div id="card" className="w-[100vw] h-[100vh] bg-slate-300">
      <model-viewer
        src="./RobotExpressive.glb"
        ios-src=""
        poster=""
        alt="A 3D model of an astronaut"
        shadow-intensity="1"
        camera-controls
        autoplay
        animation-name="Idle"
        ar
        ar-modes="webxr scene-viewer quick-look"
      >
        <button
          class="Hotspot"
          slot="hotspot-1"
          data-surface="1 1 1294 1295 1292 0.379 0.568 0.053"
          data-visibility-attribute="visible"
        >
          <div class="HotspotAnnotation">Dance</div>
        </button>
        <button
          class="Hotspot"
          slot="hotspot-2"
          data-surface="11 0 314 315 316 0.225 0.283 0.492"
          data-visibility-attribute="visible"
        >
          <div class="HotspotAnnotation">Death</div>
        </button>
        <button
          class="Hotspot"
          slot="hotspot-3"
          data-surface="9 0 314 315 316 0.331 0.238 0.431"
          data-visibility-attribute="visible"
        >
          <div class="HotspotAnnotation">Something</div>
        </button>
        <div class="progress-bar hide" slot="progress-bar">
          <div class="update-bar"></div>
        </div>
        <button slot="ar-button" id="ar-button">
          View in your space
        </button>
        <div id="ar-prompt">
          <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
        </div>
      </model-viewer>
    </div>
  );
};

export default ModelViewer;
