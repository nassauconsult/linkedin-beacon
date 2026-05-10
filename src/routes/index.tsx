import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import logo from "@/assets/nassau-consult-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nassau Consult" },
      { name: "description", content: "Nassau Consult — Wout Zwaagman" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-16">
      <div className="flex flex-col items-center gap-12 text-center">
        <h1 className="sr-only">Nassau Consult</h1>
        <img
          src={logo}
          alt="Nassau Consult logo"
          className="w-64 max-w-full sm:w-80"
        />
        <a
          href="https://www.linkedin.com/in/woutzwaagman/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#1a3668] px-6 py-3 text-sm font-medium tracking-wide text-[#1a3668] transition-colors hover:bg-[#1a3668] hover:text-white"
        >
          <Linkedin className="h-4 w-4" />
          Connect on LinkedIn
        </a>
      </div>
    </main>
  );
}
