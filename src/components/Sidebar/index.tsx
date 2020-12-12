import { FC } from 'react';
import DesktopSidebar from './DesktopSidebar';
import SidebarOverlay from './SidebarOverlay';
import { SidebarProps } from './types';

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, handleIsSidebarOpen }) => (
  <>
    <SidebarOverlay
      isSidebarOpen={isSidebarOpen}
      handleIsSidebarOpen={handleIsSidebarOpen}
    />
    <DesktopSidebar isSidebarOpen={isSidebarOpen} />
  </>
);

export default Sidebar;
