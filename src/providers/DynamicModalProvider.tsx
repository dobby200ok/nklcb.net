// @ name : DynamicModalProvider
// @ description : 다이나믹 모달의 전역 상태를 관리하기 위한 Zustand 프로바이더

'use client';

import { useContext, createContext, useRef } from "react";
import { createDynamicModalStore, DynamicModalProps, DynamicModalStateProps, DynamicModalStoreProps,  } from "@/stores/DynamicModalStore";
import { useStore } from "zustand";

export const DynamicModalContext = createContext<DynamicModalStoreProps | null>(null);

export const useDynamicModalContext = <T,>(selector: (state: DynamicModalStateProps) => T): T => {
  const store = useContext(DynamicModalContext);
  if(! store) throw new Error("Missing useDynamicModalContext.Provider in the tree");

  return useStore(store, selector);
}

type DynamicModalProviderProps = React.PropsWithChildren<DynamicModalProps>;

export const DynamicModalProvider:React.FC<DynamicModalProviderProps> = ({ children, ...props }) => {
  const storeRef = useRef<DynamicModalStoreProps>(null);

  if(! storeRef.current) {
    storeRef.current = createDynamicModalStore(props);
  }

  return (
    <DynamicModalContext.Provider value={ storeRef.current }>
      { children }
    </DynamicModalContext.Provider>
  )
}