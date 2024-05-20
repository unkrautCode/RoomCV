import React from 'react';
import { Text, Html, ContactShadows, PresentationControls, Float, Enviroment, useGLTF } from '@react-three/drei';}
import { Room, Couch, Couchfuesse, Kissen1, Kissen2, Legdesk, Viernullvier, BtnLicht, BtnVenti, Maus, BtnMaus, Projektionsflaeche, KeyZ, KeyW, KeyT, KeySpace, KeyR, KeyQ, KeyEsc, KeyEnter, KeyE, KeyCtrl, LEDMoni, Monitor, Gluehbirne} from './models';
import { Color } from 'three';
import './App.css';

export default function Anwendung()
{
  return(
    <>
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
        </>}
      </Stage>
      <PresentationControls />
      <ContactShadows
        position-y={ - 2.5 }
        opacity={ 0.4 }
        scale={ 5 }
        blur={ 2.4 }
      />
    </>
  );
}
