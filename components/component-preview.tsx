import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

function ComponentPreview({
  children,
  className,
  title,
  align = "center",
}: {
  children: ReactNode
  className?: string
  title?: string
  align?: "center" | "start" | "end"
}) {
  return (
    <figure
      data-slot="component-preview"
      className={cn("not-prose my-6 w-full rounded-xl border bg-muted/40", className)}
    >
      {title ? (
        <figcaption className="flex h-9 items-center border-b px-3.5 text-sm font-medium">
          {title}
        </figcaption>
      ) : null}
      <div
        className={cn(
          "flex min-h-40 items-center justify-center p-8",
          align === "start" && "items-start justify-start",
          align === "end" && "items-end justify-end",
        )}
      >
        {children}
      </div>
    </figure>
  )
}

export { ComponentPreview }
