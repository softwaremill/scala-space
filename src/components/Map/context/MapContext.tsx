import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type MapContextObj = {
  openedEventId: number | null;
  setOpenedEventId: (id: number | null) => void;
};

export const MapContext = createContext<MapContextObj>({
  openedEventId: null,
  setOpenedEventId: (id: number | null) => {},
});

const MapContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const setOpenedEventId = useCallback((id: number | null) => {
    setActiveId(id);
  }, []);

  const contextValue: MapContextObj = {
    openedEventId: activeId,
    setOpenedEventId,
  };

  return (
    <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>
  );
};

const useMapContext = () => {
  const context = useContext(MapContext);

  if (context === undefined) {
    throw new Error("useMapContext must be used within a MapContextProvider");
  }

  return context;
};

export { MapContextProvider, useMapContext };
