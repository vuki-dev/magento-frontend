import { useState, useEffect } from 'react';

const useScreenWidth = (): { screenWidth: number; isClient: boolean } => {
  // Initialize state with window.innerWidth and isClient
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true); // Update isClient state to true on client side
    setScreenWidth(window.innerWidth); // Set initial width

    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { screenWidth, isClient };
};

export default useScreenWidth;