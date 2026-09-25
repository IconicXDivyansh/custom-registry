"use client"

import { RootProvider } from "fumadocs-ui/provider/next"
import type { ComponentProps } from "react"

type DocsProviderProps = ComponentProps<typeof RootProvider>

export function DocsProvider({ children, theme, ...props }: DocsProviderProps) {
  return (
    <RootProvider
      {...props}
      theme={{
        ...theme,
        scriptProps: {
          ...theme?.scriptProps,
          ...(typeof window === "undefined"
            ? {}
            : { type: "application/json" as const }),
        },
      }}
    >
      {children}
    </RootProvider>
  )
}
