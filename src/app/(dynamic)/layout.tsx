import DynamicModal from "@/components/molecules/DynamicModal";
import { DynamicModalProvider } from "@/providers/DynamicModalProvider";

const DynamicLayout = ({
    children
  }: Readonly<
  {
    children: React.ReactNode;
  }>) => {
  return (
    <>
      <DynamicModalProvider active={ false }
                            type="" >
        { children }
        <DynamicModal />
      </DynamicModalProvider>
    </>
  )
}

export default DynamicLayout;