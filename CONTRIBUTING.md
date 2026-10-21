# Contributing to Kyro Website & Documentation

Thank you for your interest in contributing to the official Kyro website and technical documentation portal ([kyro.tonmoyinfrastructure.org](https://kyro.tonmoyinfrastructure.org))!

Kyro is an open-source product from [Tonmoy Infrastructure](https://tonmoyinfrastructure.org), owned and architected by [Eshan Roy](https://github.com/eshanized). We welcome contributions from developers, designers, technical writers, and testers of all backgrounds.

---

## 🛠️ Local Development Workflow

### 1. Prerequisites
- **Node.js**: &ge; 20.x (Node 22 / 26 recommended)
- **npm** or **pnpm**
- **Git**

### 2. Setup
```bash
git clone https://github.com/eshanized/kyro.tonmoyinfrastructure.org.git
cd kyro.tonmoyinfrastructure.org
npm install
```

### 3. Development Server
```bash
npm run dev
# Starts Next.js development server at http://localhost:3000
```

### 4. Verification & Testing
Before submitting a pull request, run all verification checks locally:
```bash
# Run complete verification test suite
npm test

# Run TypeScript compiler typecheck
npm run typecheck

# Verify static production build
npm run build
```

---

## 📝 Commit Conventions

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New features, sections, or pages
- `fix:` Bug fixes or broken link repairs
- `docs:` Documentation additions or updates
- `style:` Visual layout, Tailwind formatting, or design token adjustments
- `refactor:` Code restructuring without user-facing changes
- `perf:` Performance optimizations or asset reductions
- `test:` Test additions or verification suite updates
- `chore:` Dependency bumps, CI workflow edits, or tooling configuration

Example:
```bash
git commit -m "docs: add computer use security model guide"
```

---

## 🚀 Pull Request Guidelines

1. **Branch Naming**: Use descriptive branch names:
   - `feature/my-new-feature`
   - `fix/broken-docs-link`
   - `docs/troubleshooting-guide`
2. **Quality Checklist**:
   - [ ] `npm run typecheck` passes with 0 errors.
   - [ ] `npm test` passes all verification checks.
   - [ ] `npm run build` succeeds cleanly.
   - [ ] Responsive design works across mobile, tablet, and desktop viewports.
   - [ ] Dark and light themes render cleanly.
3. **Open PR**: Push your branch to GitHub and create a pull request with a clear description of the problem and your solution.
