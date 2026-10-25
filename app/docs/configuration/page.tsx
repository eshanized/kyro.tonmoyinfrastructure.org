import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CodeBlock } from "@/components/CodeBlock";
import { Key, Cpu, ShieldCheck, CheckCircle2 } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Configuration & Model Providers",
  description:
    "How to configure model credentials, NVIDIA NIM endpoints, OpenAI-compatible APIs, and local LLM servers in Kyro.",
  path: "/docs/configuration",
});

export default function ConfigurationDocPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Docs", href: "/docs" },
          { label: "Configuration & Models" },
        ]}
      />

      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Model & Settings Guide
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Model Providers & Configuration
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Kyro includes an intelligent <code className="text-emerald-400">ModelRouter</code> with exponential backoff
          retry logic, multimodal payload validation, and capability mapping.
        </p>
      </div>

      {/* Credential Storage */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Where Credentials Are Stored</h2>
        <div className="rounded-xl border border-border bg-surface p-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <p>
            When you enter an API key in Kyro's <strong>Settings Modal</strong>, it is immediately migrated to your
            <strong> Operating System Keyring</strong> (Keychain on macOS, Secret Service on Linux, Credential Manager on Windows).
            Keys are <strong>never written in plaintext</strong> into SQLite database files or exposed to the frontend.
          </p>
        </div>
      </section>

      {/* Endpoints */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Default & Custom Endpoints</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Kyro's default endpoint is NVIDIA NIM API, offering ultra-fast inference for Nemotron and Llama vision models:
        </p>
        <ul className="space-y-1 text-xs font-mono text-muted-foreground">
          <li>• Base URL: <code className="text-emerald-400">https://integrate.api.nvidia.com/v1</code></li>
          <li>• Default Text Model: <code className="text-emerald-400">nvidia/nemotron-3-ultra-550b-a55b</code></li>
          <li>• Default Vision Model: <code className="text-emerald-400">meta/llama-3.2-11b-vision-instruct</code></li>
        </ul>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-3">
          You can specify any custom OpenAI-compatible endpoint (e.g. self-hosted Ollama, vLLM, or LM Studio) by setting
          the custom Base URL in Settings.
        </p>
      </section>

      {/* Verified Models Table */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Verified Model Capability Registry</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-surface text-foreground border-b border-border">
              <tr>
                <th className="p-3">Model Identifier</th>
                <th className="p-3">Provider</th>
                <th className="p-3">Vision</th>
                <th className="p-3">Tool Calling</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground font-mono">
              <tr>
                <td className="p-3 text-foreground font-semibold">nvidia/nemotron-3-ultra-550b-a55b</td>
                <td className="p-3 font-sans">NVIDIA</td>
                <td className="p-3 text-rose-400">No</td>
                <td className="p-3 text-emerald-400">Yes</td>
                <td className="p-3 text-emerald-400 font-sans">Verified</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-semibold">meta/llama-3.2-11b-vision-instruct</td>
                <td className="p-3 font-sans">Meta / NVIDIA</td>
                <td className="p-3 text-emerald-400">Yes</td>
                <td className="p-3 text-emerald-400">Yes</td>
                <td className="p-3 text-emerald-400 font-sans">Verified</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-semibold">meta/llama-3.2-90b-vision-instruct</td>
                <td className="p-3 font-sans">Meta / NVIDIA</td>
                <td className="p-3 text-emerald-400">Yes</td>
                <td className="p-3 text-emerald-400">Yes</td>
                <td className="p-3 text-emerald-400 font-sans">Verified</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-semibold">openai/gpt-4o</td>
                <td className="p-3 font-sans">OpenAI</td>
                <td className="p-3 text-emerald-400">Yes</td>
                <td className="p-3 text-emerald-400">Yes</td>
                <td className="p-3 text-emerald-400 font-sans">Verified</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-semibold">anthropic/claude-3-5-sonnet</td>
                <td className="p-3 font-sans">Anthropic</td>
                <td className="p-3 text-emerald-400">Yes</td>
                <td className="p-3 text-emerald-400">Yes</td>
                <td className="p-3 text-emerald-400 font-sans">Verified</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-semibold">google/gemini-1.5-pro</td>
                <td className="p-3 font-sans">Google</td>
                <td className="p-3 text-emerald-400">Yes</td>
                <td className="p-3 text-emerald-400">Yes</td>
                <td className="p-3 text-emerald-400 font-sans">Verified</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Multimodal Validation */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Multimodal Image Validation</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Before dispatching image attachments to models, Kyro's router inspects the raw payload:
        </p>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li>• <strong>Supported MIME types:</strong> PNG, JPEG, WEBP, GIF.</li>
          <li>• <strong>Size cap:</strong> Maximum 20MB per image payload.</li>
          <li>• <strong>Capability check:</strong> Refuses to transmit images to models that do not declare vision capability.</li>
        </ul>
      </section>
    </div>
  );
}
