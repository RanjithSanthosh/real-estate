// app/layout.tsx
import { UIProvider } from "../context/UIContext";
import GlobalModal from "@/components/shared/GlobalModal";
// ... other imports

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <>
  
        {/* The Provider MUST wrap everything */}
        <UIProvider>
          {children}
          
          <GlobalModal />
          {/* Other floating buttons go here */}
        </UIProvider>
  </>
   
  );
}