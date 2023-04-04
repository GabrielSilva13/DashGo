import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextsData = UseDisclosureReturn;

const SidebarDrawerContexts = createContext({} as SidebarDrawerContextsData);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);
  return (
    <SidebarDrawerContexts.Provider value={disclosure}>
      {children}
    </SidebarDrawerContexts.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContexts);
