import * as React from "react";
import { cn } from "../../lib/utils";

interface DockProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "left" | "right" | "middle";
}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className, direction = "middle", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "fixed bottom-4 left-1/2 -translate-x-1/2 flex h-16 items-end gap-2 rounded-2xl bg-background/80 p-2 shadow-xl backdrop-blur-lg",
          direction === "left" && "left-4 -translate-x-0",
          direction === "right" && "right-4 left-auto translate-x-0",
          className
        )}
        {...props}
      />
    );
  }
);
Dock.displayName = "Dock";

const DockIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("group relative flex items-center", className)}
      {...props}
    />
  );
});
DockIcon.displayName = "DockIcon";

export { Dock, DockIcon };