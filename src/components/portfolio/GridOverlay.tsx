import React from "react";

export default function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
      <div className="h-full w-full grid grid-cols-12 gap-0 px-[5vw]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-x border-foreground/50 h-full" />
        ))}
      </div>
    </div>
  );
}
