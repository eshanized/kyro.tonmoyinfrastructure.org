import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CodeBlock } from "@/components/CodeBlock";
import { Eye, MousePointer, Monitor, Crosshair } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Computer Use & Visual Grounding",
  description:
    "How Kyro performs screen capture with xcap, Set-of-Marks visual tagging, native input synthesis with enigo, and Ghost Mode isolation.",
  path: "/docs/computer-use",
});

export default function ComputerUseDocPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Docs", href: "/docs" },
          { label: "Computer Use & Vision" },
        ]}
      />

      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Visual Subsystem
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Computer Use & Visual Grounding
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Kyro enables autonomous desktop interaction using low-latency screen capture, coordinate transformation,
          and native input synthesis without relying on heavyweight accessibility frameworks.
        </p>
      </div>

      {/* Set of Marks */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Set-of-Marks (SoM) Visual Grounding</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Instead of guessing arbitrary pixel coordinates, Kyro can apply a visual Set-of-Marks (SoM) tag overlay to
          screenshots. Each interactable target (buttons, text inputs, menus) receives a numbered bounding badge:
        </p>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li>• The LLM reasons over high-level mark numbers (<code className="text-foreground">click_mark(14)</code>).</li>
          <li>• The Rust engine maps mark 14 to precise display coordinates (<code className="text-foreground">x, y</code>).</li>
          <li>• Multi-monitor scale factors and DPI differences are automatically normalized via <code className="text-foreground">overlay.rs</code>.</li>
        </ul>
      </section>

      {/* Input Synthesis */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Native Input Synthesis via Enigo</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Low-level mouse and keyboard inputs are emitted through the native <code className="text-emerald-400">enigo</code> crate.
          Operations include smooth cursor movement, left/right clicks, double clicks, text typing, and key combinations.
        </p>
        <div className="rounded-xl border border-border bg-surface p-4 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground block mb-1">Safety Override:</span>
          <span>
            Users can immediately abort computer actions at any time by moving the physical mouse, pressing the global
            hotkey, or clicking 'Abort Computer Use' in the floating HUD.
          </span>
        </div>
      </section>

      {/* Ghost Mode */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Ghost Mode Virtual Display (:99)</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          On Linux systems, Kyro can run desktop automation tasks headlessly inside an isolated virtual X11 display
          (<code className="text-foreground">DISPLAY=:99</code> powered by Xvfb). This prevents the agent from hijacking
          your primary screen and mouse cursor while you work.
        </p>
      </section>
    </div>
  );
}
