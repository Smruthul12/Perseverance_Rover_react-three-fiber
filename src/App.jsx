import { Suspense} from 'react';
import './App.css';
import styled from "styled-components";
import { Canvas } from '@react-three/fiber';
import { Robot } from "./components/robot/Robot";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {


  return (
    <>
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Robot scale={2.8}/>
        </Suspense>
      </Canvas>
    </CanvasContainer>     
    </>
  )
}

export default App
