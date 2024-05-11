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
				{/* passt Farbe der Gluehbirne entsprechend dem internen Zustand an */}
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


/* Emssive Ansatz
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, Stage } from '@react-three/drei';
import { Room, Couch, Couchfuesse, Kissen1, Kissen2, Legdesk, Viernullvier, BtnLicht, BtnVenti, Maus, BtnMaus, Projektionsflaeche, KeyZ, KeyW, KeyT, KeySpace, KeyR, KeyQ, KeyEsc, KeyEnter, KeyE, KeyCtrl, LEDMoni, Monitor, Gluehbirne } from './models';

const GlowingMaterial = ({ color }) => {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      const intensity = Math.sin(clock.getElapsedTime()) * 0.5 + 0.5;
      materialRef.current.emissive.set(color);
      materialRef.current.emissiveIntensity = intensity;
    }
  });

  return (
    <meshBasicMaterial
      ref={materialRef}
      color={color}
      emissive={color}
      emissiveIntensity={0}
    />
  );
};

const App = () => {
  const [color, setColor] = useState('red');

  const ChangeColorOnClick = () => {
    const handleClick = () => {
      setColor((prevColor) => (prevColor === 'red' ? 'white' : 'red'));
    };

    return (
      <mesh onClick={handleClick}>
        <BtnLicht />
      </mesh>
    );
  };

  return (
    <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [2000, 10, 2000] }}>
      <Environment preset='studio' />

      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <ChangeColorOnClick />
      <Stage>
        <>
          <Room />
          <Couch />
          <Couchfuesse />
          <Kissen1 />
          <Kissen2 />
          <Legdesk />
          <Viernullvier />
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
          <Gluehbirne color={color} />
        </>
      </Stage>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
*/