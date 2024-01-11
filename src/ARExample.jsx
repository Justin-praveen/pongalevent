import React, { useRef, useEffect } from 'react';
import 'aframe';
import 'aframe-ar';
import 'aframe-particle-system-component';

const ARExample = () => {
  const sceneRef = useRef();

  useEffect(() => {
    // You can add AR interaction logic here
    sceneRef.current.addEventListener('arSessionStarted', () => {
      console.log('AR session started');
    });
  }, []);

  return (
    <a-scene
      embedded
      arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
      vr-mode-ui="enabled: false"
      ref={sceneRef}
    >
      <a-marker preset="hiro">
        {/* Your AR object goes here */}
        <a-box position="0 0.5 0" material="color: #4CC3D9;"></a-box>
      </a-marker>

      {/* Particle system for fun */}
      <a-entity particle-system={{ preset: 'snow' }}></a-entity>

      <a-camera-static />
    </a-scene>
  );
};

export default ARExample;
