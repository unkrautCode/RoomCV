import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import {Room, Couch, Couchfuesse, Kissen1, Kissen2, Legdesk, Viernullvier, BtnLicht, BtnVenti, Maus, BtnMaus, Projektionsflaeche, KeyZ, KeyW, KeyT, KeySpace, KeyR, KeyQ, KeyEsc, KeyEnter, KeyE, KeyCtrl, LEDMoni, Monitor, Gluehbirne} from './models';

function App() {
  return (
	<Canvas style={{ width: '100vw', height: '100vh' }}>
  	
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
			<BtnLicht />
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
			<Gluehbirne />
		</>
		}
  	</Stage>
    <OrbitControls />
	</Canvas>
  );
}

export default App;

