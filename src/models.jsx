import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Model({ ...props }) {
  const { scene } = useGLTF('/models/b2_Room.gltf');
  const colorMap = useLoader(TextureLoader, '/models/b_Room.jpg')
  // Verwende die Textur in dem Modell
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = colorMap
    }
  })
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
