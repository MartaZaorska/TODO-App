import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useWidth = () => {  
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function resizeHandler(){ setWidth(window.innerWidth); }
    const debouncedResizeHandler = debounce(() => resizeHandler(), 200);

    window.addEventListener("resize", debouncedResizeHandler);
    
    return () => window.removeEventListener("resize", debouncedResizeHandler);
  }, []);

  return width;
}

export default useWidth;