import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Model from './models';

function App() {
  return (
	<Canvas style={{ width: '100vw', height: '100vh' }}>
  	
  	<ambientLight intensity={0.5} />
  	<spotLight position={[10, 15, 10]} angle={0.3} />
  	<Stage>
    	{/* Hier können Sie Ihr 3D-Modell einbinden, z.B. mit <Model /> */
        <Model />
      }
  	</Stage>
	</Canvas>
  );
}

export default App;

