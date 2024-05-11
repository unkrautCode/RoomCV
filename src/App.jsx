import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stage } from '@react-three/drei';
import {Room, Couch, Couchfuesse, Kissen1, Kissen2, Legdesk, Viernullvier, BtnLicht, BtnVenti, Maus, BtnMaus, Projektionsflaeche, KeyZ, KeyW, KeyT, KeySpace, KeyR, KeyQ, KeyEsc, KeyEnter, KeyE, KeyCtrl, LEDMoni, Monitor, Gluehbirne} from './models';

function App() {	
	
	const [color, setColor] = useState('white'); // Zustand für die Farbe

  	const handleClick = () => {
    // Farbe wechseln, wenn auf das Objekt geklickt wird
	console.log('clicked');
	console.log(color);
    setColor(color === 'white' ? 'red' : 'white');
  };

  return (
	<Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [2000, 10, 2000] }}>
		<Environment preset='studio'  />	
		
  		<ambientLight intensity={0.5} />
  		<spotLight position={[10, 15, 10]} angle={0.3} />  
  		<Stage>
    		{<>
        		<Room />
				<Couch />
				<Couchfuesse />
				<Kissen1 />
				<Kissen2 />
				<Legdesk />
				<Viernullvier />
				
				{/* onClick-Ereignis für BtnLicht-Schalter */}
				<mesh onClick={handleClick}>
				<BtnLicht />
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
				{/* passt Farbe der Gluehbirne entsprechend dem internen Zustand an */}
             	<Gluehbirne color ={color}  />
			</>
			}
  		</Stage>
    	<OrbitControls />
	</Canvas>
  );
}

export default App;