import { useGLTF } from "@react-three/drei"


export default function Character(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/male/model.gltf')
    return <primitive object={scene} {...props} />
  }