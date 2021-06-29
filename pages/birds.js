import ReactDOM from 'react-dom'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/glb/visitor.gltf')

  useFrame(function (state, delta) {
    if (group && group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.root} />
      <primitive object={nodes['MCH-torsoparent']} />
      <primitive object={nodes['MCH-hand_ikparentL']} />
      <primitive object={nodes['MCH-upper_arm_ik_targetparentL']} />
      <primitive object={nodes['MCH-hand_ikparentR']} />
      <primitive object={nodes['MCH-upper_arm_ik_targetparentR']} />
      <primitive object={nodes['MCH-foot_ikparentL']} />
      <primitive object={nodes['MCH-thigh_ik_targetparentL']} />
      <primitive object={nodes['MCH-foot_ikparentR']} />
      <primitive object={nodes['MCH-thigh_ik_targetparentR']} />
      <skinnedMesh
        geometry={nodes.teeth.geometry}
        material={materials['fem-innermouth.001']}
        skeleton={nodes.teeth.skeleton}
      />
      <skinnedMesh
        geometry={nodes.character.geometry}
        material={nodes.character.material}
        skeleton={nodes.character.skeleton}
      />
      <skinnedMesh
        geometry={nodes.clothes.geometry}
        material={nodes.clothes.material}
        skeleton={nodes.clothes.skeleton}
      />
    </group>
  )
}

useGLTF.preload('/glb/visitor.gltf')

const MikesPage = props => {
  return (
    <>
      <Canvas className="bigc" height="500">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </>
  )
}

export default MikesPage







