import { useGLTF } from '@react-three/drei';

export default function Model({ ...props }) {
  const { scene } = useGLTF('/models/CompuRoom.gltf');
  return <primitive object={scene} {...props} />;
}
