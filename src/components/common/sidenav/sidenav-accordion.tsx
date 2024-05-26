import classNames from "classnames";
import { useState } from "react";
import { Icon } from "..";
import { ISidenavRoutes } from "@/routes";
import { useUiContext } from "@/contaxt/ui-context";
import { Link } from "react-router-dom";

type Props = {
  routeItem: ISidenavRoutes;
};

export const SidenavAccordion = ({ routeItem }: Props) => {
  const { isSidenavCollapsed } = useUiContext();

  const [active, setActive] = useState(false);
  return (
    <div
      className={classNames("relative", {
        " group": isSidenavCollapsed,
      })}
    >
      <button
        className="p-2 bg-slate-400 w-full text-left flex items-center justify-between"
        onClick={() => {
          setActive((prev) => !prev);
        }}
      >
        <div className="flex items-center gap-2">
          {routeItem.icon && (
            <Icon size={15} color="gray" name={routeItem.icon} />
          )}
          <span className={classNames({ hidden: isSidenavCollapsed })}>
            {routeItem.name}
          </span>
        </div>
        {routeItem.children && (
          <span
            className={classNames("transition", {
              "rotate-180": active,
              hidden: isSidenavCollapsed,
            })}
          >
            <Icon color="gray" name="ChevronDown" size={15} />
          </span>
        )}
      </button>
      {routeItem.children && (
        <ul
          className={classNames(
            "max-h-0 px-1  overflow-hidden transition-all group-hover:absolute group-hover:bg-white group-hover:w-56  group-hover:max-h-52 group-hover:py-2",
            {
              "max-h-52 py-2": active && !isSidenavCollapsed,
            }
          )}
        >
          {routeItem.children.map((el) => (
            <li className="py-1 px-2  bg-orange-300 rounded mb-1 cursor-pointer">
              <Link to={routeItem.path}> {el.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
