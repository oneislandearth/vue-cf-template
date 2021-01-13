// Import the required modules
import { createCamera, createEngine, createEnvironment, createLight, createMesh, createScene } from './modules';

// Setup a engine and scene
export const setupEngine = () => {

  // Select the canvas element
  const canvas = document.querySelector('canvas');

  // Create the engine
  const engine = createEngine({ canvas }, ({ scene }) => {

    // Create the environment
    createEnvironment({ scene });

    // Create the camera
    createCamera({ scene, canvas });

    // Create the light
    createLight({ scene });

    // Create the mesh
    createMesh({ scene });
  });
}