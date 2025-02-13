// NavigationBar.tsx
import { DesktopNavigationBar } from "./DesktopNavigationBar";
import { MobileNavigationBar } from "./MobileNavigationBar";

export const NavigationBar = () => {
  return (
    <div>
      {/* Desktop version of the navbar */}
      <DesktopNavigationBar />

      {/* Mobile version of the navbar */}
      <MobileNavigationBar />
    </div>
  );
};
