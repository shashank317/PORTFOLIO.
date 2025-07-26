import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext(undefined);

export const CardContainer = ({ children, className = "", containerClassName = "" }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15;
    const y = (e.clientY - top - height / 2) / 15;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseEnter = () => setIsMouseEntered(true);
  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={`py-10 flex justify-center ${containerClassName}`}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`transition-all duration-200 ease-linear ${className}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className = "" }) => (
  <div className={`h-96 w-80 [transform-style:preserve-3d] ${className}`}>
    {children}
  </div>
);

export const CardItem = ({
  children,
  className = "",
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useContext(MouseEnterContext);

  useEffect(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `
        translateX(${translateX}px)
        translateY(${translateY}px)
        translateZ(${translateZ}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        rotateZ(${rotateZ}deg)
      `;
    } else {
      ref.current.style.transform = `
        translateX(0px)
        translateY(0px)
        translateZ(0px)
        rotateX(0deg)
        rotateY(0deg)
        rotateZ(0deg)
      `;
    }
  }, [isMouseEntered]);

  return (
    <div
      ref={ref}
      className={`transition duration-200 ease-linear ${className}`}
    >
      {children}
    </div>
  );
};
