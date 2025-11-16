# GitHub Actions Workflows

This project uses GitHub Actions for continuous integration and automated releases.

## Workflows

### 🔍 CI (`ci.yml`)

**Trigger:** Runs on every push and pull request to `main`/`master` branch

**Purpose:** Fast quality checks to ensure code quality

**Jobs:**

1. **Code Quality**
   - TypeScript type checking (`pnpm typecheck`)
   - ESLint linting (`pnpm lint`)
   - Format checking (`pnpm format:check`)

2. **Rust Quality**
   - Rustfmt formatting check (`pnpm format:check:rust`)
   - Clippy linting (`pnpm lint:rust`)

3. **Build Check**
   - Verifies the app builds successfully (`pnpm build`)
   - Runs on Ubuntu only (fastest)

**Duration:** ~2-3 minutes

**Note:** All checks use npm scripts, so you can run the same commands locally before pushing!

---

### 🚀 Release (`release.yml`)

**Trigger:** Only when you push a version tag (e.g., `v1.0.0`, `v0.2.1`)

**Purpose:** Build installers for all platforms and create a GitHub Release

**Platforms:**

- ✅ **Windows** (x64) - `.exe`, `.msi`, NSIS installer
- ✅ **macOS** (Intel x64) - `.dmg`, `.app`
- ✅ **macOS** (Apple Silicon ARM) - `.dmg`, `.app`
- ✅ **Linux** (x64) - `.deb`, `.AppImage`

**Jobs:**

1. **Create Release** - Creates draft GitHub Release
2. **Build Tauri** - Builds on all 4 platforms in parallel
3. **Publish Release** - Publishes the release with all installers

**Duration:** ~10-15 minutes

---

## How to Use

### Running CI

CI runs automatically on every push/PR. No action needed!

```bash
# CI will run when you:
git push origin main
```

### Creating a Release

1. **Update version** in `package.json` and `src-tauri/Cargo.toml`:

   ```json
   "version": "1.0.0"
   ```

2. **Create and push a version tag**:

   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

3. **Wait for builds** (~10-15 min)
   - Check progress at: `https://github.com/YOUR_USERNAME/tauri-react-starter/actions`

4. **Edit release notes** on GitHub:
   - Go to: `https://github.com/YOUR_USERNAME/tauri-react-starter/releases`
   - Edit the draft release
   - Add what's new, breaking changes, etc.
   - Click "Publish release"

5. **Done!** Users can now download installers for their platform

---

## Environment Variables & Secrets

### Optional: Code Signing

For production apps, you should sign your installers. Add these secrets in GitHub:

**Repository Settings → Secrets and variables → Actions → New repository secret**

- `TAURI_SIGNING_PRIVATE_KEY` - Your signing key
- `TAURI_SIGNING_PRIVATE_KEY_PASSWORD` - Key password

See [Tauri Code Signing Guide](https://tauri.app/distribute/sign/) for details.

---

## Troubleshooting

### CI Fails on `pnpm install`

- Make sure `pnpm-lock.yaml` is committed
- Check Node.js version compatibility

### Release Fails on macOS

- macOS builds are the slowest (~10 min)
- Check logs for code signing issues
- For open-source projects, you can skip signing

### Build Fails on Linux

- Missing dependencies are auto-installed in workflow
- Check if new native dependencies were added to Tauri

---

## Cost

- ✅ **Free for public repositories** (unlimited minutes)
- ℹ️ **Private repos:** 2000 free minutes/month (Linux), macOS uses 10x multiplier

---

## Customization

### Skip macOS ARM builds

Remove this from `release.yml`:

```yaml
- os: macos-latest
  platform: macos-arm
  rust_target: aarch64-apple-darwin
```

### Change trigger branch

Edit `ci.yml`:

```yaml
on:
  push:
    branches: [main, develop] # Add more branches
```

---

Built with ❤️ using GitHub Actions
