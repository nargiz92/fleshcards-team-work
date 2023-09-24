import { ComponentProps, ReactNode } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import s from "./modale.module.scss";

import { CrossedIcon } from "@/styles/assets/icons/crossed";
export type ModalSize = "sm" | "md" | "lg";
type Props = {
  title?: string;
  onClose?: () => void;
  open: boolean;
  showCloseButton?: boolean;
  children: ReactNode;
  size?: ModalSize;
} & ComponentProps<"div">;

const dropIn = {
  hidden: {
    y: "-100vh",
    x: "-50%",
    opacity: 0,
  },
  visible: {
    y: "-50%",
    x: "-50%",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const Modal = ({
  size = "md",
  title,
  children,
  onClose,
  open = false,
  className,
  showCloseButton = true,
}: Props) => {
  const handleOpenChange = () => {
    onClose?.();
  };
  const classNames = {
    content: getContentClassName(size, className),
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className={s.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content className={classNames.content} asChild forceMount>
              <motion.div
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <header className={s.header}>
                  <Dialog.Title asChild>
                    <h2 className={s.title}>{title}</h2>
                  </Dialog.Title>

                  {showCloseButton && (
                    <Dialog.Close className={s.closeButton}>
                      <CrossedIcon />
                    </Dialog.Close>
                  )}
                </header>
                <div className={s.contentBox}>{children}</div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};
function getContentClassName(size: ModalSize, className?: string) {
  const sizeClassName = getSizeClassName(size);

  return clsx(className, s.content, sizeClassName);
}

function getSizeClassName(size: ModalSize) {
  if (size === "sm") return s.sm;
  if (size === "md") return s.md;
  if (size === "lg") return s.lg;
}
