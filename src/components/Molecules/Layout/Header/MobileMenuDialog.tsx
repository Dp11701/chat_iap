"use client";
import React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import type { TransitionProps } from "@mui/material/transitions";

type MobileMenuDialogProps = {
  open: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  onToggleTheme: () => void;
  themeLabel: string;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MobileMenuDialog({
  open,
  onClose,
  onNavigate,
  onToggleTheme,
  themeLabel,
}: MobileMenuDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      PaperProps={{
        className:
          "bg-[#0F1214] dark:bg-[#0F1214] text-white rounded-2xl w-[90vw] max-w-[420px] mx-auto",
        style: { backgroundImage: "none" },
      }}
    >
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-[#10A469]">Overview</h3>
        </div>

        <nav className="flex flex-col gap-4 text-lg">
          <button
            className="text-left text-white/90 hover:text-white transition-colors"
            onClick={() => {
              onNavigate("/");
              onClose();
            }}
          >
            Overview
          </button>
          <button
            className="text-left text-white/90 hover:text-white transition-colors"
            onClick={() => {
              onNavigate("/compared");
              onClose();
            }}
          >
            Compared Plans
          </button>
          <button
            className="text-left text-white/90 hover:text-white transition-colors"
            onClick={() => {
              onNavigate("/faq");
              onClose();
            }}
          >
            FAQ
          </button>
        </nav>

        <div className="mt-6 flex flex-col gap-4">
          <button className="w-full bg-[#2A2F33] text-white font-semibold py-3 rounded-2xl">
            Log In
          </button>
          <button
            onClick={() => {
              onToggleTheme();
            }}
            className="w-full bg-[#2A2F33] text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2"
          >
            <span>🌙</span>
            <span>{themeLabel}</span>
          </button>
        </div>
      </div>
    </Dialog>
  );
}
