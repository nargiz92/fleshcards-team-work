import { ReactNode } from "react";

import * as Tooltip from "@radix-ui/react-tooltip";

import s from "./tooltip.module.scss";

import { TooltipIcon } from "@/styles/assets/icons/tooltip-icon";

type Props = {
  children?: ReactNode;
};
export const TooltipDemo = ({ children }: Props) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className={s.iconButton}>
            <TooltipIcon />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={s.tooltipContent}
            sideOffset={5}
            side={"top"}
          >
            {children}
            <Tooltip.Arrow className={s.tooltipArrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
