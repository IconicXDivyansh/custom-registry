import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="flex w-full max-w-xl flex-col gap-6">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Custom Registry
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A shadcn registry. Each component has its own docs page, with a live
          preview and the install command.
        </p>
        <Link
          href="/docs"
          className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-foreground px-5 text-base font-medium text-background"
        >
          Open docs
        </Link>
      </main>
    </div>
  );
}
