import React from 'react';
import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Stage } from '@react-three/drei';
import { Room, Couch, Couchfuesse, Kissen1, Kissen2, Legdesk, Viernullvier, BtnLicht, BtnVenti, Maus, BtnMaus, Projektionsflaeche, KeyZ, KeyW, KeyT, KeySpace, KeyR, KeyQ, KeyEsc, KeyEnter, KeyE, KeyCtrl, LEDMoni, Monitor, Gluehbirne} from './models';
import { Color } from 'three';
import './App.css';

export default function Anwendung()
{
  return(
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />  
      <PresentationControls
        global // make Obj-interface whole Screen (global)
        rotation={[ 0.13, 0.1, 0 ]} // fine tune idle-rotation-animation
        polar={[ - 0.4, 0.2 ]} // restrict Up-n-Down view
        azimuth={[ - 1, 0.75 ]} //restrict left-right view
        config={{ mass: 2, tension: 400 }} //add wobbly-bounce to animations
        snap={{ mass: 4, tension: 400 }} // let Obj snap back to position
      >
        <Float>
          {/* 3D Objekte */}
          {<>
            <Room />
            <Couch />
            <Couchfuesse />
            <Legdesk />
            <Kissen1 />
            <Kissen2 />
            <Viernullvier />				
                {/*<mesh onClick={handleClick}>
                    <BtnLicht/>
                </mesh>*/}
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
                {/*<mesh>
                      <Gluehbirne color={color} />
              </mesh>*/}
            </>}
        </Float>
      </PresentationControls>
      
      <ContactShadows
        position-y={ - 2.5 }
        opacity={ 0.4 }
        scale={ 5 }
        blur={ 2.4 }
      />
    </>
  );
}
