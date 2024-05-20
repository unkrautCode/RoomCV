import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, Stage, Box } from '@react-three/drei';
import {Room, Couch, Couchfuesse, Kissen1, Kissen2, Legdesk, Viernullvier, BtnLicht, BtnVenti, Maus, BtnMaus, Projektionsflaeche, KeyZ, KeyW, KeyT, KeySpace, KeyR, KeyQ, KeyEsc, KeyEnter, KeyE, KeyCtrl, LEDMoni, Monitor, Gluehbirne} from './models';
import { Mesh, MeshStandardMaterial } from 'three';

function App() {	

  	// Lichtschalter Farbe & Klick-handler
	const [color, setColor] = useState('white'); // Zustand für die Farbe

  	const handleClick = () => {
    // Farbe wechseln, wenn auf das Objekt geklickt wird
	console.log('clicked');
	console.log(color);
    setColor(color === 'white' ? 'red' : 'white');
  };


  return (
	<Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [10, 5, 10] }}>
      {/* //alles baked, also ohne Env
      <Environment background files={['/models/courtyard.jpg']} />	
      */
	  }
		<ambientLight intensity={0.5} />
  		<spotLight position={[10, 15, 10]} angle={0.3} />  
  		<Stage>
    		{<>
        	<Room />
			<Couch />
			<Couchfuesse />
			<Legdesk />
			<Kissen1 />
			<Kissen2 />
			<Viernullvier />				
				<mesh onClick={handleClick}>
			    	<BtnLicht/>
				</mesh>
			<BtnVenti />
			<Maus />
			<BtnMaus />
			<Projektionsflaeche />
			<KeyZ />
			<KeyW />
			<KeyT />
        	<KeySpace />
        	<KeyR />
			<KeyQ />
			<KeyEsc />
			<KeyEnter />
			<KeyE />
			<KeyCtrl />
			<LEDMoni />
			<Monitor />
				<mesh>
           			<Gluehbirne color={color} />
         		</mesh>
			</>
			}
  		</Stage>
    	<OrbitControls />
	</Canvas>
  );
}

export default App;