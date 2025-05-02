// @ name : TabPanel
// @ description : index에서 사용되는 탭 패널에 대한 컴포넌트

import s from './TabPanel.module.scss';

import { ReactNode } from 'react';

interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isActive: boolean;
}

const TabPanel:React.FC<TabPanelProps> = ({ children, isActive, ...props }) => {
  return (
    <div role="tabpanel"
         tabIndex={0}
         hidden={ ! isActive }
         {...props}>
      { children }
    </div>
  )
}

export default TabPanel;