import { Points, BufferGeometry, BufferAttribute, PointsMaterial, SphereGeometry, Mesh } from 'three';

class StarFactory {
  createStars = (quantity: number): Points | Mesh => {
    if (quantity >= 10000) {
      const geometry = new SphereGeometry(20, 32, 32);
      const material = new PointsMaterial({ color: 0xFFD700 });
      const sun = new Mesh(geometry, material);
      return sun;
    } else if (quantity >= 1000) {
      const planets = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
      const randomPlanet = planets[Math.floor(Math.random() * planets.length)];

      const geometry = new SphereGeometry(10, 32, 32);
      const material = new PointsMaterial({ color: 0x7EC8E3 });
      const planet = new Mesh(geometry, material);
      planet.name = randomPlanet;

      return planet;
    } else {
      const positions = new Float32Array(quantity * 3);

      for (let i = 0; i < quantity; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
      }

      const geometry = new BufferGeometry();
      geometry.setAttribute('position', new BufferAttribute(positions, 3));

      const material = new PointsMaterial({ color: 0xFFFFFF, size: 5 });

      const stars = new Points(geometry, material);

      return stars;
    }
  };
}

export default StarFactory;