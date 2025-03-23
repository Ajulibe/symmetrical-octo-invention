import React, { useEffect, useState } from "react";

import { Container } from "./style";
import dynamic from "next/dynamic";

const PadGroup = dynamic(() => import("./components"));

const Pads: React.FC = () => {
  const [padGroupCount, setPadGroupCount] = useState(12);

  useEffect(() => {
    const calculatePadGroups = () => {
      // Each PadGroup contains 50 cells (5 TenGroups x 10 cells each)
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let cellSize = 5; // vw units - matches the CSS minmax value

      // Adjust cellSize based on viewport width
      if (viewportWidth <= 480) {
        cellSize = 10; // vw units for mobile
      } else if (viewportWidth <= 768) {
        cellSize = 7; // vw units for tablets
      }

      // Calculate how many cells can fit in the viewport
      const horizontalCells = Math.ceil(100 / cellSize); // 100vw divided by cell size (vw)
      const verticalCells = Math.ceil((100 * (viewportHeight / viewportWidth)) / cellSize);
      const totalCells = horizontalCells * verticalCells;

      // Calculate how many PadGroups needed (50 cells per PadGroup)
      const groupsNeeded = Math.ceil(totalCells / 50) + 1; // Add 1 for safety

      setPadGroupCount(groupsNeeded);
    };

    // Calculate on mount and window resize
    calculatePadGroups();
    window.addEventListener("resize", calculatePadGroups);

    return () => {
      window.removeEventListener("resize", calculatePadGroups);
    };
  }, []);

  return (
    <Container>
      {Array.from({ length: padGroupCount }).map((_, index) => (
        <PadGroup key={`pad-group-${index}`} />
      ))}
    </Container>
  );
};

export default Pads;
