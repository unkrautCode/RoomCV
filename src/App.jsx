import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, Stage } from '@react-three/drei';
import Anwendung from './Anwendung.jsx';
import { Mesh } from 'three';

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
	<Canvas
		//className='r3f'
		style={{ width: '100vw', height: '100vh' }} camera={{ position: [10, 5, 10] }}
	>
		<>
		<Anwendung />
		</>     
	</Canvas>
  );
}

export default App;