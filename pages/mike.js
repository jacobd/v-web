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
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -0.06, 0.16]} rotation={[1.73, 0, 0]}>
          <group position={[0, 0.08, 0]} rotation={[-0.11, 0, 0]}>
            <group position={[0, 0.12, 0]} rotation={[-0.06, 0, 0]}>
              <group position={[0, 0.13, 0]} rotation={[-0.22, 0, 0]}>
                <group position={[0, 0.09, 0]} rotation={[0.32, 0, 0]}>
                  <group position={[0, 0.03, 0]} rotation={[0.1, 0, 0]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[0, 0.2, 0.06]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -0.01, 0.16]}>
          <group position={[0, 0, 0]} rotation={[1.62, 0, 0]}>
            <group position={[0, -0.12, 0]} rotation={[-1.62, 0, 0]}>
              <group position={[0, 0, 0]} rotation={[1.73, 0, 0]}>
                <group position={[0, -0.08, 0]} rotation={[0, 0, 0]}>
                  <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                    <group
                      position={[0, 0, 0]}
                      rotation={[-1.76, -0.58, -1.96]}
                      scale={[1, 1, 1]}
                    />
                    <group position={[0, 0, 0]} rotation={[-1.76, 0.58, 1.96]} />
                    <group position={[0.07, 0.02, 0.01]} rotation={[2.84, 0, 0]}>
                      <group position={[0, 0.1, 0]} rotation={[0.38, 0, 0]}>
                        <group position={[0, 0.06, 0]} rotation={[-1.25, 0, 0]}>
                          <group position={[0, 0.04, 0]} rotation={[2.58, 0, 0]} />
                          <group position={[0, 0, 0]} rotation={[0, 0, 0]} />
                        </group>
                        <group position={[0, 0, 0]} rotation={[0, 0, 0]} />
                        <group position={[0, 0.03, 0]} rotation={[0, 0, 0]} />
                      </group>
                      <group position={[0, 0.05, 0]} rotation={[0, 0, 0]} />
                    </group>
                    <group position={[-0.07, 0.02, 0.01]} rotation={[2.84, 0, 0]}>
                      <group position={[0, 0.1, 0]} rotation={[0.38, 0, 0]}>
                        <group position={[0, 0.06, 0]} rotation={[-1.25, 0, 0]}>
                          <group position={[0, 0.04, 0]} rotation={[2.58, 0, 0]} />
                          <group position={[0, 0, 0]} rotation={[0, 0, 0]} />
                        </group>
                        <group position={[0, 0, 0]} rotation={[0, 0, 0]} />
                        <group position={[0, 0.03, 0]} rotation={[0, 0, 0]} />
                      </group>
                      <group position={[0, 0.05, 0]} rotation={[0, 0, 0]} />
                    </group>
                    <group position={[0.07, 0.02, 0.01]} rotation={[-1.73, 0, 0]}>
                      <group position={[0, 0, 0]} rotation={[-1.71, 0, 0]} />
                      <group position={[0, 0, 0]} rotation={[-1.71, 0, 0]}>
                        <group position={[0, 0.1, 0]} rotation={[0.38, 0, 0]}>
                          <group position={[0, 0.06, 0]} rotation={[-1.25, 0, 0]} />
                        </group>
                      </group>
                      <group position={[0, 0, 0]} rotation={[-1.71, 0, 0]} />
                    </group>
                    <group position={[0.07, 0.02, 0.01]} rotation={[2.84, 0, 0]} />
                    <group position={[0.07, 0.02, 0.01]} rotation={[2.84, 0, 0]}>
                      <group position={[0, 0.05, 0]} rotation={[0, 0, 0]}>
                        <group position={[0, 0.05, 0]} rotation={[0.38, 0, 0]}>
                          <group position={[0, 0.03, 0]} rotation={[0, 0, 0]}>
                            <group
                              position={[0, 0.03, 0]}
                              rotation={[-1.25, 0, 0]}
                              scale={[1, 1, 1]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                    <group position={[-0.07, 0.02, 0.01]} rotation={[-1.73, 0, 0]}>
                      <group position={[0, 0, 0]} rotation={[-1.71, 0, 0]} />
                      <group position={[0, 0, 0]} rotation={[-1.71, 0, 0]}>
                        <group position={[0, 0.1, 0]} rotation={[0.38, 0, 0]}>
                          <group position={[0, 0.06, 0]} rotation={[-1.25, 0, 0]} />
                        </group>
                      </group>
                      <group position={[0, 0, 0]} rotation={[-1.71, 0, 0]} />
                    </group>
                    <group position={[-0.07, 0.02, 0.01]} rotation={[2.84, 0, 0]} />
                    <group position={[-0.07, 0.02, 0.01]} rotation={[2.84, 0, 0]}>
                      <group position={[0, 0.05, 0]} rotation={[0, 0, 0]}>
                        <group position={[0, 0.05, 0]} rotation={[0.38, 0, 0]}>
                          <group position={[0, 0.03, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
                            <group
                              position={[0, 0.03, 0]}
                              rotation={[-1.25, 0, 0]}
                              scale={[1, 1, 1]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group position={[0, 0, 0]} rotation={[-0.11, 0, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group position={[0, -0.01, 0.16]}>
          <group position={[0, 0, 0]} rotation={[1.56, 0, 0]}>
            <group position={[0, 0, 0]} rotation={[0.06, 0, 0]}>
              <group position={[0, 0, 0]} rotation={[-0.06, 0, 0]} />
            </group>
            <group position={[0, 0.13, 0]} rotation={[-1.56, 0, 0]}>
              <group position={[0, 0, 0]} rotation={[1.34, 0, 0]}>
                <group position={[0, 0.09, 0]} rotation={[0.32, 0, 0]}>
                  <group position={[0, 0.03, 0]} rotation={[0.1, 0, 0]}>
                    <group position={[0, 0.02, 0]} rotation={[-0.19, 0, 0]}>
                      <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                        <group
                          position={[0.02, 1.45, 0.06]}
                          rotation={[-Math.PI / 2, 0, -Math.PI]}
                        />
                        <group position={[0.02, 1.45, 0.06]} rotation={[-1.73, -0.31, 2.21]} />
                        <group
                          position={[0.02, 1.45, 0.06]}
                          rotation={[-2.27, -1.03, 2]}
                          scale={[1, 1, 1]}
                        />
                        <group
                          position={[0.02, 1.45, 0.06]}
                          rotation={[2.16, 0.61, -0.19]}
                          scale={[1, 1, 1]}
                        />
                        <group
                          position={[0.02, 1.45, 0.06]}
                          rotation={[-1.82, 0.45, -2.13]}
                          scale={[1, 1, 1]}
                        />
                        <group position={[0.02, 1.45, 0.06]} rotation={[-1.55, -0.02, -1.61]} />
                        <group position={[0.02, 1.45, 0.06]} rotation={[-1.29, -0.52, -2.17]} />
                        <group
                          position={[0.02, 1.45, 0.06]}
                          rotation={[1.09, -0.76, -0.19]}
                          scale={[1, 1, 1]}
                        />
                        <group position={[0.02, 1.45, 0.06]} rotation={[-1.27, 0.87, 2.51]} />
                        <group
                          position={[-0.02, 1.45, 0.06]}
                          rotation={[-Math.PI / 2, 0, -Math.PI]}
                        />
                        <group position={[-0.02, 1.45, 0.06]} rotation={[-1.73, 0.31, -2.21]} />
                        <group
                          position={[-0.02, 1.45, 0.06]}
                          rotation={[-2.27, 1.03, -2]}
                          scale={[1, 1, 1]}
                        />
                        <group
                          position={[-0.02, 1.45, 0.06]}
                          rotation={[2.16, -0.61, 0.19]}
                          scale={[1, 1, 1]}
                        />
                        <group
                          position={[-0.02, 1.45, 0.06]}
                          rotation={[-1.82, -0.45, 2.13]}
                          scale={[1, 1, 1]}
                        />
                        <group position={[-0.02, 1.45, 0.06]} rotation={[-1.55, 0.02, 1.61]} />
                        <group position={[-0.02, 1.45, 0.06]} rotation={[-1.29, 0.52, 2.17]} />
                        <group
                          position={[-0.02, 1.45, 0.06]}
                          rotation={[1.09, 0.76, 0.19]}
                          scale={[1, 1, 1]}
                        />
                        <group position={[-0.02, 1.45, 0.06]} rotation={[-1.27, -0.87, -2.51]} />
                        <group position={[0, 1.42, 0.05]} rotation={[1.79, 0, 0]} />
                        <group position={[0, 1.42, 0.05]} rotation={[1.79, 0, 0]} />
                        <group position={[0, 1.44, 0.04]} rotation={[2.56, 0, 0]} />
                        <group position={[0, 1.44, 0.04]} rotation={[2.56, 0, 0]} />
                        <group position={[0, 1.44, 0.04]} rotation={[2.56, 0, 0]} />
                        <group position={[0, 1.44, 0.04]} rotation={[2.56, 0, 0]} />
                        <group position={[0, 1.44, 0.04]} rotation={[2.56, 0, 0]} />
                      </group>
                    </group>
                  </group>
                </group>
                <group position={[0, 0.09, 0]} rotation={[-1.34, 0, 0]}>
                  <group position={[0, 0, 0]} rotation={[1.7, 0, 0]}>
                    <group position={[0, 0.06, 0]} rotation={[-1.7, 0, 0]}>
                      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
                    </group>
                    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                      <group position={[0, 0.03, 0]} rotation={[0, 0, 0]} />
                    </group>
                  </group>
                </group>
                <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                  <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                    <group position={[0.01, 0.02, 0.03]} rotation={[-1.39, 0.05, -1.33]}>
                      <group
                        position={[0, 0.13, -0.01]}
                        rotation={[2.51, 1.44, -2.7]}
                        scale={[1, 1, 1]}>
                        <group position={[0, 0.12, 0]} rotation={[0.23, 0, 0]}>
                          <group
                            position={[0, 0.13, 0]}
                            rotation={[0.05, 0, -0.38]}
                            scale={[1, 1, 1]}>
                            <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
                          </group>
                          <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
                          <group
                            position={[0, 0.06, 0]}
                            rotation={[0, 0.01, 0]}
                            scale={[1, 1, 1]}
                          />
                        </group>
                        <group position={[0, 0.06, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
                      </group>
                      <group position={[0, 0.13, -0.01]} rotation={[0.07, 0.04, 1.33]}>
                        <group position={[0, 0, 0]} rotation={[1.64, 0.16, -1.83]} />
                        <group position={[0, 0, 0]} rotation={[1.64, 0.16, -1.83]}>
                          <group position={[0, 0.12, 0]} rotation={[0.23, 0, 0]}>
                            <group position={[0, 0.13, 0]} rotation={[0.05, 0, -0.38]} />
                          </group>
                        </group>
                        <group
                          position={[0, 0, 0]}
                          rotation={[1.64, 0.16, -1.83]}
                          scale={[1, 1, 1]}
                        />
                      </group>
                      <group
                        position={[0, 0.13, -0.01]}
                        rotation={[2.51, 1.44, -2.7]}
                        scale={[1, 1, 1]}
                      />
                      <group
                        position={[0, 0.13, -0.01]}
                        rotation={[2.51, 1.44, -2.7]}
                        scale={[1, 1, 1]}>
                        <group position={[0, 0.06, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
                          <group position={[0, 0.06, 0]} rotation={[0.23, 0, 0]} scale={[1, 1, 1]}>
                            <group position={[0, 0.06, 0]} rotation={[0, 0.01, 0]}>
                              <group position={[0, 0.06, 0]} rotation={[0.05, -0.01, -0.38]}>
                                <group position={[0, 0.01, 0.01]} rotation={[-1.3, 1.18, 1.43]}>
                                  <group
                                    position={[0, 0.05, 0]}
                                    rotation={[0.02, -0.58, -0.17]}
                                    scale={[1, 1, 1]}>
                                    <group position={[0, 0.01, 0]} rotation={[-0.01, 0, 0]} />
                                  </group>
                                  <group position={[-0.01, 0.01, 0]} rotation={[1.88, -1.01, 1.55]}>
                                    <group position={[0, 0.02, 0]} rotation={[0.1, 0, -0.02]} />
                                  </group>
                                  <group
                                    position={[0, 0.05, 0]}
                                    rotation={[0.02, -0.58, -0.17]}
                                    scale={[1, 1, 1]}>
                                    <group position={[0, 0.01, 0]} rotation={[-0.01, 0, 0]} />
                                  </group>
                                  <group position={[-0.01, 0.01, 0]} rotation={[1.88, -1.01, 1.55]}>
                                    <group position={[0, 0.02, 0]} rotation={[0.1, 0, -0.02]} />
                                  </group>
                                  <group position={[0, 0.05, 0]} rotation={[0.02, -0.58, -0.17]}>
                                    <group
                                      position={[0, 0, 0]}
                                      rotation={[0, 0, 0]}
                                      scale={[1, 1, 1]}>
                                      <group position={[0, 0.01, 0]} rotation={[-0.01, 0, 0]}>
                                        <group
                                          position={[0, 0, 0]}
                                          rotation={[0, 0, 0]}
                                          scale={[1, 1, 1]}>
                                          <group
                                            position={[0, 0.01, 0]}
                                            rotation={[0.14, 0, 0]}
                                            scale={[1, 1, 1]}>
                                            <group position={[0, 0, 0]} rotation={[0, 0, 0]} />
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                  <group position={[-0.01, 0.01, 0]} rotation={[1.88, -1.01, 1.55]}>
                                    <group
                                      position={[0, 0, 0]}
                                      rotation={[0, 0, 0]}
                                      scale={[1, 1, 1]}>
                                      <group position={[0, 0.02, 0]} rotation={[0.1, 0, -0.02]}>
                                        <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                                          <group position={[0, 0.02, 0]} rotation={[0.04, 0, 0.05]}>
                                            <group position={[0, 0, 0]} rotation={[0, 0, 0]} />
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group position={[0, 0.01, 0]} rotation={[-1.43, 1.2, 1.4]}>
                                  <group
                                    position={[0, 0.05, 0]}
                                    rotation={[0.08, -0.04, -0.07]}
                                    scale={[1, 1, 1]}>
                                    <group
                                      position={[0, 0.01, 0]}
                                      rotation={[-0.02, 0, 0]}
                                      scale={[1, 1, 1]}
                                    />
                                  </group>
                                  <group
                                    position={[0, 0.05, 0]}
                                    rotation={[0.08, -0.04, -0.07]}
                                    scale={[1, 1, 1]}>
                                    <group
                                      position={[0, 0.01, 0]}
                                      rotation={[-0.02, 0, 0]}
                                      scale={[1, 1, 1]}
                                    />
                                  </group>
                                  <group position={[0, 0.05, 0]} rotation={[0.08, -0.04, -0.07]}>
                                    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                                      <group position={[0, 0.01, 0]} rotation={[-0.02, 0, 0]}>
                                        <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                                          <group
                                            position={[0, 0.01, 0]}
                                            rotation={[0.13, 0, 0]}
                                            scale={[1, 1, 1]}>
                                            <group
                                              position={[0, 0, 0]}
                                              rotation={[0, 0, 0]}
                                              scale={[1, 1, 1]}
                                            />
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group
                                  position={[0, 0.01, -0.02]}
                                  rotation={[-1.4, 1.19, 1.24]}
                                  scale={[1, 1, 1]}>
                                  <group
                                    position={[0, 0.04, 0]}
                                    rotation={[0.06, -0.6, -0.02]}
                                    scale={[1, 1, 1]}>
                                    <group position={[0, 0.01, 0]} rotation={[0.01, 0, 0.05]} />
                                  </group>
                                  <group
                                    position={[0, 0.04, 0]}
                                    rotation={[0.06, -0.6, -0.02]}
                                    scale={[1, 1, 1]}>
                                    <group position={[0, 0.01, 0]} rotation={[0.01, 0, 0.05]} />
                                  </group>
                                  <group position={[0, 0.04, 0]} rotation={[0.06, -0.6, -0.02]}>
                                    <group
                                      position={[0, 0, 0]}
                                      rotation={[0, 0, 0]}
                                      scale={[1, 1, 1]}>
                                      <group
                                        position={[0, 0.01, 0]}
                                        rotation={[0.01, 0, 0.05]}
                                        scale={[1, 1, 1]}>
                                        <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                                          <group
                                            position={[0, 0.01, 0]}
                                            rotation={[0.08, 0, -0.12]}>
                                            <group position={[0, 0, 0]} rotation={[0, 0, 0]} />
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group
                                  position={[-0.04, -0.04, -0.26]}
                                  rotation={[-0.06, 1.5, -0.13]}
                                  scale={[1, 1, 1]}>
                                  <group
                                    position={[0, 0.03, 0]}
                                    rotation={[0.71, 0.14, 0.05]}
                                    scale={[1, 1, 1]}>
                                    <group
                                      position={[0, 0.01, 0]}
                                      rotation={[-3.05, 0, 0.01]}
                                      scale={[1, 1, 1]}
                                    />
                                  </group>
                                  <group
                                    position={[0, 0.03, 0]}
                                    rotation={[0.71, 0.14, 0.05]}
                                    scale={[1, 1, 1]}>
                                    <group
                                      position={[0, 0.01, 0]}
                                      rotation={[-3.05, 0, 0.01]}
                                      scale={[1, 1, 1]}
                                    />
                                  </group>
                                  <group position={[0, 0.03, 0]} rotation={[0.71, 0.14, 0.05]}>
                                    <group
                                      position={[0, 0.01, 0]}
                                      rotation={[-3.05, 0, 0.01]}
                                      scale={[1, 1, 1]}>
                                      <group position={[0, 0.01, 0]} rotation={[-2.97, 0, -0.02]} />
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                    <group position={[-0.01, 0.02, 0.03]} rotation={[-1.39, -0.05, 1.33]}>
                      <group
                        position={[0, 0.13, -0.01]}
                        rotation={[2.51, -1.44, 2.7]}
                        scale={[1, 1, 1]}>
                        <group position={[0, 0.12, 0]} rotation={[0.23, 0, 0]}>
                          <group
                            position={[0, 0.13, 0]}
                            rotation={[0.05, 0, 0.38]}
                            scale={[1, 1, 1]}>
                            <group position={[0, 0, 0]} rotation={[0, 0, 0]} />
                          </group>
                          <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
                          <group position={[0, 0.06, 0]} rotation={[0, -0.01, 0]} />
                        </group>
                        <group position={[0, 0.06, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
                      </group>
                      <group position={[0, 0.13, -0.01]} rotation={[0.07, -0.04, -1.33]}>
                        <group position={[0, 0, 0]} rotation={[1.64, -0.16, 1.83]} />
                        <group position={[0, 0, 0]} rotation={[1.64, -0.16, 1.83]}>
                          <group position={[0, 0.12, 0]} rotation={[0.23, 0, 0]}>
                            <group position={[0, 0.13, 0]} rotation={[0.05, 0, 0.38]} />
                          </group>
                        </group>
                        <group
                          position={[0, 0, 0]}
                          rotation={[1.64, -0.16, 1.83]}
                          scale={[1, 1, 1]}
                        />
                      </group>
                      <group
                        position={[0, 0.13, -0.01]}
                        rotation={[2.51, -1.44, 2.7]}
                        scale={[1, 1, 1]}
                      />
                      <group
                        position={[0, 0.13, -0.01]}
                        rotation={[2.51, -1.44, 2.7]}
                        scale={[1, 1, 1]}>
                        <group position={[0, 0.06, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
                          <group position={[0, 0.06, 0]} rotation={[0.23, 0, 0]}>
                            <group position={[0, 0.06, 0]} rotation={[0, -0.01, 0]}>
                              <group
                                position={[0, 0.06, 0]}
                                rotation={[0.05, 0.01, 0.38]}
                                scale={[1, 1, 1]}>
                                <group position={[0, 0.01, 0.01]} rotation={[-1.3, -1.18, -1.43]}>
                                  <group
                                    position={[0, 0.05, 0]}
                                    rotation={[0.02, 0.58, 0.17]}
                                    scale={[1, 1, 1]}>
                                    <group
                                      position={[0, 0.01, 0]}
                                      rotation={[-0.01, 0, 0]}
                                      scale={[1, 1, 1]}
                                    />
                                  </group>
                                  <group position={[0.01, 0.01, 0]} rotation={[1.88, 1.01, -1.55]}>
                                    <group
                                      position={[0, 0.02, 0]}
                                      rotation={[0.1, 0, 0.02]}
                                      scale={[1, 1, 1]}
                                    />
                                  </group>
                                  <group
                                    position={[0, 0.05, 0]}
                                    rotation={[0.02, 0.58, 0.17]}
                                    scale={[1, 1, 1]}>
                                    <group
                                      position={[0, 0.01, 0]}
                                      rotation={[-0.01, 0, 0]}
                                      scale={[1, 1, 1]}
                                    />
                                  </group>
                                  <group position={[0.01, 0.01, 0]} rotation={[1.88, 1.01, -1.55]}>
                                    <group
                                      position={[0, 0.02, 0]}
                                      rotation={[0.1, 0, 0.02]}
                                      scale={[1, 1, 1]}
                                    />
                                  </group>
                                  <group position={[0, 0.05, 0]} rotation={[0.02, 0.58, 0.17]}>
                                    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                                      <group position={[0, 0.01, 0]} rotation={[-0.01, 0, 0]}>
                                        <group
                                          position={[0, 0, 0]}
                                          rotation={[0, 0, 0]}
                                          scale={[1, 1, 1]}>
                                          <group
                                            position={[0, 0.01, 0]}
                                            rotation={[0.14, 0, 0]}
                                            scale={[1, 1, 1]}>
                                            <group position={[0, 0, 0]} rotation={[0, 0, 0]} />
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                  <group position={[0.01, 0.01, 0]} rotation={[1.88, 1.01, -1.55]}>
                                    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                                      <group position={[0, 0.02, 0]} rotation={[0.1, 0, 0.02]}>
                                        <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                                          <group
                                            position={[0, 0.02, 0]}
                                            rotation={[0.04, 0, -0.05]}
                                            scale={[1, 1, 1]}>
                                            <group position={[0, 0, 0]} rotation={[0, 0, 0]} />
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group position={[0, 0.01, 0]} rotation={[-1.43, -1.2, -1.4]}>
                                  <group
                                    position={[0, 0.05, 0]}
                                    rotation={[0.08, 0.04, 0.07]}
                                    scale={[1, 1, 1]}>
                                    <group
                                      position={[0, 0.01, 0]}
                                      rotation={[-0.02, 0, 0]}
                                      scale={[1, 1, 1]}
                                    />
                                  </group>
                                  <group
                                    position={[0, 0.05, 0]}
                                    rotation={[0.08, 0.04, 0.07]}
                                    scale={[1, 1, 1]}>
                                    <group
                                      position={[0, 0.01, 0]}
                                      rotation={[-0.02, 0, 0]}
                                      scale={[1, 1, 1]}
                                    />
                                  </group>
                                  <group
                                    position={[0, 0.05, 0]}
                                    rotation={[0.08, 0.04, 0.07]}
                                    scale={[1, 1, 1]}>
                                    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                                      <group position={[0, 0.01, 0]} rotation={[-0.02, 0, 0]}>
                                        <group
                                          position={[0, 0, 0]}
                                          rotation={[0, 0, 0]}
                                          scale={[1, 1, 1]}>
                                          <group position={[0, 0.01, 0]} rotation={[0.13, 0, 0]}>
                                            <group position={[0, 0, 0]} rotation={[0, 0, 0]} />
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group position={[0, 0.01, -0.02]} rotation={[-1.4, -1.19, -1.24]}>
                                  <group position={[0, 0.04, 0]} rotation={[0.06, 0.6, 0.02]}>
                                    <group
                                      position={[0, 0.01, 0]}
                                      rotation={[0.01, 0, -0.05]}
                                      scale={[1, 1, 1]}
                                    />
                                  </group>
                                  <group position={[0, 0.04, 0]} rotation={[0.06, 0.6, 0.02]}>
                                    <group
                                      position={[0, 0.01, 0]}
                                      rotation={[0.01, 0, -0.05]}
                                      scale={[1, 1, 1]}
                                    />
                                  </group>
                                  <group position={[0, 0.04, 0]} rotation={[0.06, 0.6, 0.02]}>
                                    <group
                                      position={[0, 0, 0]}
                                      rotation={[0, 0, 0]}
                                      scale={[1, 1, 1]}>
                                      <group position={[0, 0.01, 0]} rotation={[0.01, 0, -0.05]}>
                                        <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
                                          <group
                                            position={[0, 0.01, 0]}
                                            rotation={[0.08, 0, 0.12]}
                                            scale={[1, 1, 1]}>
                                            <group position={[0, 0, 0]} rotation={[0, 0, 0]} />
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group
                                  position={[0.04, -0.04, -0.26]}
                                  rotation={[-0.06, -1.5, 0.13]}>
                                  <group
                                    position={[0, 0.03, 0]}
                                    rotation={[0.71, -0.14, -0.05]}
                                    scale={[1, 1, 1]}>
                                    <group position={[0, 0.01, 0]} rotation={[-3.05, 0, -0.01]} />
                                  </group>
                                  <group
                                    position={[0, 0.03, 0]}
                                    rotation={[0.71, -0.14, -0.05]}
                                    scale={[1, 1, 1]}>
                                    <group position={[0, 0.01, 0]} rotation={[-3.05, 0, -0.01]} />
                                  </group>
                                  <group
                                    position={[0, 0.03, 0]}
                                    rotation={[0.71, -0.14, -0.05]}
                                    scale={[1, 1, 1]}>
                                    <group
                                      position={[0, 0.01, 0]}
                                      rotation={[-3.05, 0, -0.01]}
                                      scale={[1, 1, 1]}>
                                      <group position={[0, 0.01, 0]} rotation={[-2.97, 0, 0.02]} />
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                    <group position={[0.08, -0.05, -0.03]} rotation={[-1.34, 0, Math.PI]} />
                    <group position={[-0.08, -0.05, -0.03]} rotation={[-1.34, 0, Math.PI]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[0.38, 0.44, 0.05]} rotation={[-0.01, -0.12, -2.21]}>
        <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
      </group>
      <group position={[-0.38, 0.44, 0.05]} rotation={[-0.01, 0.12, 2.21]}>
        <group position={[0, 0, 0]} rotation={[0, 0, 0]} />
      </group>
      <group position={[0.07, 0.03, 0.07]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -0.04, -0.02]}>
          <group position={[-0.01, 0.05, -0.01]}>
            <group position={[0.03, 0, 0]}>
              <group position={[-0.01, 0, 0]}>
                <group position={[0, -0.05, 0.01]}>
                  <group position={[0, 0.04, 0.02]} rotation={[-2.58, 0, 0]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[0.07, 0.09, 0.24]} rotation={[-1.56, 0, 0]} />
      <group position={[-0.07, 0.03, 0.07]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -0.04, -0.02]}>
          <group position={[0.01, 0.05, -0.01]}>
            <group position={[-0.03, 0, 0]}>
              <group position={[0.01, 0, 0]}>
                <group position={[0, -0.05, 0.01]}>
                  <group position={[0, 0.04, 0.02]} rotation={[-2.58, 0, 0]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[-0.07, 0.09, 0.24]} rotation={[-1.56, 0, 0]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.character.geometry}
        material={materials.Material}
        position={[0, 0.31, 0.04]}
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
        <pointLight position={[10, 0, 10]} />
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </>
  )
}

export default MikesPage







