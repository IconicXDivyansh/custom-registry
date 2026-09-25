import { DocsProvider } from "@/components/docs-provider"

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <DocsProvider>
      <div className="flex flex-col min-h-screen">{children}</div>
    </DocsProvider>
  )
}
