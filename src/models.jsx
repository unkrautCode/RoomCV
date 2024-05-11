import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import { MeshBasicMaterial } from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export function Room({ ...props }) {
  const { scene } = useGLTF('/models/room_col.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function Couch({ ...props }) {
  const { scene } = useGLTF('/models/couch.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function Couchfuesse({ ...props }) {
  const { scene } = useGLTF('/models/couchfuesse.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function Kissen1({ ...props }) {
  const { scene } = useGLTF('/models/couchkissen1_col.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function Kissen2({ ...props }) {
  const { scene } = useGLTF('/models/couchkissen2_col.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function Legdesk({ ...props }) {
  const { scene } = useGLTF('/models/LegsDesk_col.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function Viernullvier({ ...props }) {
  const { scene } = useGLTF('/models/404Landscape.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function BtnLicht({ ...props }) {
  const { scene } = useGLTF('/models/Btn_Lichtschalter.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function BtnVenti({ ...props }) {
  const { scene } = useGLTF('/models/Btn_Venti.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function Maus({ ...props }) {
  const { scene } = useGLTF('/models/Maus.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function BtnMaus({ ...props }) {
  const { scene } = useGLTF('/models/Maus_Btn.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function Projektionsflaeche({ ...props }) {
  const { scene } = useGLTF('/models/projektorflaeche.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function KeyZ({ ...props }) {
  const { scene } = useGLTF('/models/key_Z.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function KeyW({ ...props }) {
  const { scene } = useGLTF('/models/key_W.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function KeyT({ ...props }) {
  const { scene } = useGLTF('/models/key_T.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function KeySpace({ ...props }) {
  const { scene } = useGLTF('/models/key_Space.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function KeyR({ ...props }) {
  const { scene } = useGLTF('/models/key_R.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function KeyQ({ ...props }) {
  const { scene } = useGLTF('/models/key_Q.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function KeyEsc({ ...props }) {
  const { scene } = useGLTF('/models/key_Esc.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function KeyEnter({ ...props }) {
  const { scene } = useGLTF('/models/key_Enter.gltf');
  return <primitive object={scene} {...props} />;
}

export function KeyE({ ...props }) {
  const { scene } = useGLTF('/models/key_E.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function KeyCtrl({ ...props }) {
  const { scene } = useGLTF('/models/key_Ctrl.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function LEDMoni({ ...props }) {
  const { scene } = useGLTF('/models/LEDmonitor.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function Monitor({ ...props }) {
  const { scene } = useGLTF('/models/monitor.gltf'); 
  return <primitive object={scene} {...props} />;
}

export function Gluehbirne({ ...props }) {
  const { scene } = useGLTF('/models/gluehbirne.gltf'); 

  /*
      // Durchlaufe alle Materialien des Modells und ändere die Farbe
      scene.traverse((child) => {
        if (child.isMesh) {
          // ändert die Farbe des Materials
          child.material.color.set('red');
        }
      });
  */

  return <primitive object={scene} {...props} />;
}

/*
// Laden der Farbtextur
const colorMap = useLoader(TextureLoader, 'PavingStones092_1K_Color.jpg')

const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
  'PavingStones092_1K_Color.jpg',
  'PavingStones092_1K_Displacement.jpg',
  'PavingStones092_1K_Normal.jpg',
  'PavingStones092_1K_Roughness.jpg',
  'PavingStones092_1K_AmbientOcclusion.jpg',
])

// Texturen auf das Mesh anwenden
<meshStandardMaterial
  map={colorMap}
  displacementMap={displacementMap}
  normalMap={normalMap}
  roughnessMap={roughnessMap}
  aoMap={aoMap}
/>

*/
