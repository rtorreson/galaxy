import React, { useRef, useEffect } from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
import StarFactory from './Stars';

interface ThreeSceneProps {
  starQuantity: number;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ starQuantity }) => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new WebGLRenderer();

    if (sceneRef.current) {
      renderer.setSize(window.innerWidth, window.innerHeight);
      sceneRef.current.appendChild(renderer.domElement);

      camera.position.z = 5;

      const starFactory = new StarFactory();
      const stars = starFactory.createStars(starQuantity);
      scene.add(stars);

      const animate = () => {
        requestAnimationFrame(animate);


        renderer.render(scene, camera);
      };

      animate();
    }

    return () => {
    };
  }, [starQuantity]);

  return <div ref={sceneRef} style={{
    overflow: 'hidden',
    overflowX: 'hidden',
    overflowY: 'hidden',
    width: '100%',
    height: '100%'
  }} />;
};

export default ThreeScene;