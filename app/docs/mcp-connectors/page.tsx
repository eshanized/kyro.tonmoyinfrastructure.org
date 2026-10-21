import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CodeBlock } from "@/components/CodeBlock";
import { Radio, Shield, Key, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Model Context Protocol & App Connectors",
  description:
    "How Kyro integrates with local and remote Model Context Protocol (MCP) servers and GitHub OAuth PKCE.",
};

export default function McpConnectorsDocPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Docs", href: "/docs" },
          { label: "MCP & App Connectors" },
        ]}
      />

      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Extensibility
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Model Context Protocol (MCP) & Connectors
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Kyro is a full client for the open Model Context Protocol (MCP). Connect local command-line tools or
          remote servers to expand Kyro's autonomous reasoning with external data and actions.
        </p>
      </div>

      {/* Tool Discovery & Namespacing */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Schema Validation & Tool Namespacing</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          To prevent collision attacks and malicious tool execution, Kyro's MCP manager enforces strict rules:
        </p>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li>• <strong>Namespaced Identifiers:</strong> Tools are prefixed with their server ID (<code className="text-foreground">mcp__&#123;server_id&#125;__&#123;tool_name&#125;</code>).</li>
          <li>• <strong>Strict Schema Checks:</strong> Arguments are validated against the server's declared <code className="text-foreground">inputSchema</code> before dispatch.</li>
          <li>• <strong>Untrusted External Classification:</strong> External MCP tools cannot be auto-approved by default; modifying actions require human authorization.</li>
        </ul>
      </section>

      {/* Native GitHub Connector */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Native GitHub Connector with OAuth PKCE</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          The built-in GitHub connector uses OAuth 2.0 with Proof Key for Code Exchange (PKCE).
          Tokens are managed by the Vault service:
        </p>
        <CodeBlock
          filename="libkyro/src/connector/github.rs"
          language="rust"
          code={`// PKCE state verification & single-flight token refresh
// Bearer tokens are stored in the OS Keyring Vault
// Plaintext secrets are never returned in IPC responses`}
        />
      </section>

      {/* Per-Action Governance */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Per-Action Governance Policies</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Inside Kyro's <strong>Connections Modal</strong>, users can configure granular permissions per tool:
        </p>
        <ul className="space-y-1 text-xs text-muted-foreground">
          <li>• <strong className="text-foreground">Allow (Auto):</strong> Permits read-only inspection queries without prompting.</li>
          <li>• <strong className="text-foreground">Ask Always:</strong> Requires explicit human confirmation before the tool runs.</li>
          <li>• <strong className="text-foreground">Deny:</strong> Unconditionally blocks the tool from being called by the agent.</li>
        </ul>
      </section>
    </div>
  );
}
