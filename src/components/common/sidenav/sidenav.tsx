import { ISidenavRoutes } from "@/routes";
import { SidenavAccordion } from "./sidenav-accordion";
import { Icon } from "@/components/common";
import { useUiContext } from "@/contaxt/ui-context";
import classNames from "classnames";

type Props = {
  routes: ISidenavRoutes[];
};

export const Sidenav = ({ routes }: Props) => {
  const { isSidenavCollapsed, setSideNaveCollapse } = useUiContext();
  return (
    <div
      className={classNames("bg-neutral-50 h-screen  pt-5 transition-all", {
        "w-12": isSidenavCollapsed,
        "w-56": !isSidenavCollapsed,
      })}
    >
      <button onClick={() => setSideNaveCollapse(!isSidenavCollapsed)}>
        <Icon size={30} color="black" name="ArrowBigLeft" />
      </button>
      {routes.map((el: any) => (
        <SidenavAccordion routeItem={el} />
      ))}
    </div>
  );
};
