import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stage } from '@react-three/drei';
import {Room, Couch, Couchfuesse, Kissen1, Kissen2, Legdesk, Viernullvier, BtnLicht, BtnVenti, Maus, BtnMaus, Projektionsflaeche, KeyZ, KeyW, KeyT, KeySpace, KeyR, KeyQ, KeyEsc, KeyEnter, KeyE, KeyCtrl, LEDMoni, Monitor, Gluehbirne} from './models';


function App() {	
	
	const [gluehbirneColor, setGluehbirneColor] = useState('#FFFFFF'); // Zustand für die Farbe der Gluehbirne
	
	const handleClickBtnLicht = (event) => {
		console.log ('clicked');
		// Überprüfen Sie, ob der PointerTyp eine Maus ist
		if (event.pointerType === 'mouse') {
		  // Umschalten der Farbe der Gluehbirne
		  setGluehbirneColor(color => (color === '#FFFFFF' ? '#000000' : '#FFFFFF'));
		  
		}
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
				<mesh onClick={handleClickBtnLicht}>
				<BtnLicht />
				</mesh>
				
				<BtnVenti />
				<Maus />
				<BtnMaus />
				<mesh>
				<Projektionsflaeche />
				<meshBasicMaterial attach="material" color="red" />
				</mesh>
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
				<mesh>
            	<Gluehbirne color={gluehbirneColor} />
         		</mesh>
			</>
			}
  		</Stage>
    	<OrbitControls />
	</Canvas>
  );
}

export default App;