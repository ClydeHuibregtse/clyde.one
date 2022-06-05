
import React from 'react';
import * as THREE from 'three';

import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
// import { useSpring, animated } from '@react-spring/three'

function Box(props: JSX.IntrinsicElements['mesh']) {

    const ref = React.useRef<THREE.Mesh>(null!)
    const [hovered, hover] = React.useState(false)
    const [clicked, click] = React.useState(false)
    // const {scale} = useSpring({ scale: clicked ? 1.5 : 1 })

    function animate(state: any, delta: number) {
        ref.current.rotation.y += 0.02;
        ref.current.rotation.x += 0.01
        return (1);
    }
    useFrame(animate);

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1 }
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        >
            <boxGeometry args={[2, 1, 1]} />
            {/* <meshStandardMaterial color='hotpink' /> */}
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

class MainScene extends React.Component {
    render() {
        return (
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 1, 0]} />
            </Canvas>
        )
    }
}

export default MainScene