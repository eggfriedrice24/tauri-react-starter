# Tauri React Starter

A modern, lightweight starter template for building cross-platform desktop applications with Tauri, React, TypeScript, and shadcn/ui.

## ✨ Features

- 🚀 **[Tauri 2](https://tauri.app/)** - Build smaller, faster, and more secure desktop applications
- ⚛️ **[React 18](https://react.dev/)** - Modern React with hooks
- 🔷 **[TypeScript](https://www.typescriptlang.org/)** - Type safety out of the box
- 🎨 **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- 🧩 **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- 🌗 **Dark Mode** - Built-in theme switcher with localStorage persistence
- ⚡ **[Vite](https://vitejs.dev/)** - Lightning-fast HMR and build tool
- 🦀 **[Rust](https://www.rust-lang.org/)** - Performance and safety for the backend
- 📦 **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager
- 🔍 **[ESLint](https://eslint.org/)** - Code quality with [antfu's config](https://github.com/antfu/eslint-config)
- 🎯 **Format on Save** - Configured for both React and Rust
- 📝 **VS Code Ready** - Pre-configured settings and extension recommendations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v18 or higher)
- **[pnpm](https://pnpm.io/installation)** (v8 or higher)
- **[Rust](https://www.rust-lang.org/tools/install)** (latest stable)
- **System Dependencies** for Tauri:
  - **Windows**: [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/), [WebView2](https://developer.microsoft.com/microsoft-edge/webview2/)
  - **macOS**: Xcode Command Line Tools
  - **Linux**: See [Tauri prerequisites](https://tauri.app/start/prerequisites/#linux)

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd tauri-react-starter
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development**
   ```bash
   pnpm tauri dev
   ```

## 📜 Available Scripts

### Development

```bash
pnpm dev          # Start Vite dev server
pnpm tauri dev    # Start Tauri app in development mode
```

### Building

```bash
pnpm build        # Build frontend (React app)
pnpm tauri build  # Build Tauri app for production
```

### Linting & Formatting

```bash
pnpm lint              # Check ESLint issues
pnpm lint:fix          # Auto-fix ESLint issues
pnpm lint:rust         # Run Clippy on Rust code
pnpm format            # Format both React and Rust code
pnpm format:rust       # Format Rust code only
pnpm format:check      # Check formatting without fixing
```

## 🏗️ Project Structure

```
tauri-react-starter/
├── src/                      # React frontend
│   ├── components/           # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # Main app component
│   ├── App.css              # Global styles + Tailwind
│   └── main.tsx             # React entry point
├── src-tauri/               # Tauri backend (Rust)
│   ├── src/
│   │   ├── lib.rs           # Main Tauri logic
│   │   └── main.rs          # Entry point
│   ├── Cargo.toml           # Rust dependencies
│   ├── tauri.conf.json      # Tauri configuration
│   └── rustfmt.toml         # Rust formatting config
├── .vscode/                 # VS Code configuration
│   ├── settings.json        # Editor settings
│   └── extensions.json      # Recommended extensions
├── eslint.config.mjs        # ESLint configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Node dependencies & scripts
```

## 🎨 Tech Stack

### Frontend

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - Component library
- **Vite** - Build tool
- **Lucide React** - Icon library

### Backend

- **Tauri 2** - Desktop framework
- **Rust** - System programming language

### Development Tools

- **ESLint** (antfu config) - Linting
- **rustfmt** - Rust formatting
- **Clippy** - Rust linting
- **pnpm** - Package management

## 🔧 Configuration

### Theme Customization

Edit `src/App.css` to customize your theme colors. The starter uses Tailwind v4 with CSS variables for theming.

### Tauri Configuration

Edit `src-tauri/tauri.conf.json` to configure:

- App name and version
- Window size and behavior
- Build targets
- Security settings

### VS Code

The project includes pre-configured settings for:

- Format on save (React & Rust)
- ESLint integration
- Tailwind CSS IntelliSense
- Rust Analyzer

## 📦 Building for Production

Build standalone installers for your platform:

```bash
pnpm tauri build
```

**Outputs:**

- **Windows**: `.exe`, `.msi`, and NSIS installer in `src-tauri/target/release/bundle/`
- **macOS**: `.dmg` and `.app` in `src-tauri/target/release/bundle/`
- **Linux**: `.deb`, `.AppImage` in `src-tauri/target/release/bundle/`

**Note:** You can only build for your current platform. For multi-platform builds, use CI/CD (GitHub Actions recommended).

## 🛠️ Recommended IDE Setup

- **[Visual Studio Code](https://code.visualstudio.com/)**
- **Extensions** (auto-suggested when you open the project):
  - rust-analyzer
  - Even Better TOML
  - ESLint
  - Tailwind CSS IntelliSense

## 📄 License

MIT

## 👤 Author

**eggfriedrice**

---

Built with ❤️ using Tauri, React, and shadcn/ui
