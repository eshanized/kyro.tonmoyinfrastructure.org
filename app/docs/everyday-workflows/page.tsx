import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FolderSync, FileText, ScanEye, CheckCircle2 } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Everyday Workflows & Desktop Tools",
  description:
    "Guide to Kyro's Everyday Mode: safe reversible file organization, local PDF parsing, and screen explainer.",
  path: "/docs/everyday-workflows",
});

export default function EverydayWorkflowsDocPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Docs", href: "/docs" },
          { label: "Everyday Workflows" },
        ]}
      />

      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Everyday Mode Guide
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Everyday Desktop Tools
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Everyday Mode is tailored for knowledge workers and non-programmers who want powerful desktop automation
          without complex shell commands.
        </p>
      </div>

      {/* File Organizer */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Safe Reversible File Organizer</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Located under <code className="text-foreground">libkyro/src/storage/organizer.rs</code>, this engine provides
          safe, manifest-backed directory restructuring:
        </p>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li>• <strong>Extension Rules:</strong> Automatically routes files into categorized subfolders (Documents, Images, Archives, Audio).</li>
          <li>• <strong>SHA-256 Deduplication:</strong> Computes cryptographic content hashes to detect duplicate downloads, even if filenames differ.</li>
          <li>• <strong>Collision Prevention:</strong> Appends numeric suffixes if a destination filename already exists.</li>
          <li>• <strong>Reversible Rollback:</strong> Every operation writes a manifest to SQLite; clicking 'Undo' restores every file to its previous path.</li>
        </ul>
      </section>

      {/* Document Assistant */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Local Document Assistant & Diffing</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Located under <code className="text-foreground">libkyro/src/storage/documents.rs</code>, this tool parses documents
          entirely inside the local Rust runtime:
        </p>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li>• <strong>PDF Stream Decompression:</strong> Built-in FlateDecode decompressor unpacks raw stream blocks without external utilities.</li>
          <li>• <strong>Text Operator Extraction:</strong> Interprets PDF Tj and TJ operators into clean text streams.</li>
          <li>• <strong>Action Item & Date Extraction:</strong> Identifies deadlines, milestones, and commitments.</li>
          <li>• <strong>Side-by-Side Diffing:</strong> Highlights additions and deletions between revisions of contracts and reports.</li>
        </ul>
      </section>

      {/* Screen Explainer */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Multimodal Screen Explainer</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Captures screenshots using <code className="text-foreground">xcap</code> and routes them to a vision model:
        </p>
        <div className="rounded-xl border border-border bg-surface p-4 text-xs text-muted-foreground">
          <p>
            Outputs are structured into two distinct sections: <strong>Visible Facts</strong> (unambiguous on-screen content)
            and <strong>Inferred Causes</strong> (hypothesized explanations for errors or UI states), followed by
            grounded action buttons to resolve the problem.
          </p>
        </div>
      </section>
    </div>
  );
}
