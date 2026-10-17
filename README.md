# Propiedades Nuevo Milenio — Landing (Flet-Box)

Landing de marketing para la inmobiliaria **Propiedades Nuevo Milenio**, hecha
con [Flet-Box](./node_modules/flet-box). Página estática de 4 secciones con
barra de pestañas superior (desktop) y botón de menú (móvil).

## Contenido del sitio

| Ruta      | Pantalla           | Qué incluye |
|-----------|--------------------|-------------|
| `/`       | `InicioScreen`     | Hero, stats, servicios, proceso, catálogo (Facebook), por qué elegirnos, testimonios, FAQ, contacto |
| `/info`   | `InfoScreen`       | Historia, cobertura y detalles de los servicios de la inmobiliaria |
| `/acerca` | `AcercaScreen`     | Quién está detrás (Moises Araya Carmona) |
| `/dev`    | `DevScreen`        | Sección del desarrollador (datos editables) |

**Los datos del negocio viven solo en `src/database/company.js`** (texto,
servicios, precios, links, contacto). Editar ese archivo es suficiente para
actualizar todo el sitio; `src/database/dev.js` tiene los datos del
desarrollador. Los colores de marca (azul marino + dorado) están en
`src/database/themes.js`. Las marcas `// EDITAR:` en el código señalan los
placeholders que faltan por personalizar (URLs de Facebook/Instagram, etc.).

La sección de propiedades **no es una plataforma de subida**: es una tarjeta
que enlaza al catálogo de Facebook, donde la inmobiliaria publica las fotos.

El formulario de contacto envía el mensaje por WhatsApp
(`wa.me/56997367307`), y hay enlaces directos de teléfono y correo en todo
el sitio.

## Quick Start

```bash
npm install
npm run dev
```

## Android

This project is preconfigured for Capacitor. Install Node.js 20.9 or newer,
Android Studio, and the Android SDK. Then create the native Android project:

```bash
npm install
flet-box build android
```

The command initializes Android on first use, builds and synchronizes the web
app, generates launcher icons from `assets/logo.png`, and compiles a debug APK
at `android/app/build/outputs/apk/debug/app-debug.apk`. It installs missing
project npm dependencies and prints the absolute APK path when finished.
Android Studio, Java, and the Android SDK must already be installed. Replace
that image with your app logo before distributing. To open the native project
in Android Studio, run `npm run android:open`. For a signed release, use
**Build → Generate Signed Bundle / APK** in Android Studio. The PWA manifest
icons are in `src/assets/`.

## iOS

This project is preconfigured for Capacitor iOS. On macOS, install the full
Xcode app, its iOS simulator runtime, and CocoaPods
(`sudo gem install cocoapods` then `pod setup`). Node.js 20.9 or newer is
required. Then build the simulator app:

```bash
npm install
flet-box build ios
```

The command initializes iOS on first use, builds and synchronizes the web app,
generates the app icon, launch images and launch screen background from
`assets/logo.png`, and compiles
`ios/build/Build/Products/Debug-iphonesimulator/App.app`. It prints the
absolute path when finished. Install it on a running simulator with
`xcrun simctl install booted <path>`.

For a real device or the App Store, build the unsigned archive and sign it with
your Apple team:

```bash
flet-box build ios --archive
```

That writes `ios/build/App.xcarchive`. Open it in Xcode (Product → Archive) with
a signing team selected to export an IPA. To open the native project directly,
run `npm run ios:open`.

Replace `assets/logo.png` with a 1024×1024 logo before distributing; the icon,
the launch images and the launch background are all generated from it. The
launch background is the app brand color `#1a1a2e`, which lives in
`scripts/sync-ios-assets.mjs`.

Capacitor uses a local HTTPS origin (`https://localhost`) in the Android and
iOS WebViews. If the app calls a remote API, allow that origin in the API's
CORS configuration and use HTTPS for the remote service.

## Continuous Integration (GitHub Actions)

Every project ships with `.github/workflows/build.yml`. Once the repo is on
GitHub, each push to `main` (or a manual **Run workflow**) fans out into three
parallel jobs:

- **web** — bundles the app into `www/` and deploys it to **GitHub Pages** so you
  can view it in a browser.
- **android** — compiles a debug **APK** and uploads it as a run artifact.
- **ios** — compiles an unsigned **simulator .app** and uploads it as an artifact.

### Run it on the web (one-time setup)

1. Push this project to a GitHub repository.
2. Open **Settings → Pages** in that repo.
3. Set **Source** to **GitHub Actions** (not "Deploy from a branch").
4. Push to `main`, or open the **Actions** tab and click **Run workflow**.

The site goes live at `https://<your-user>.github.io/<repo-name>/`. That is a
sub-path, so `index.html` uses relative asset paths and works without changes.

### Download the mobile artifacts

Open the workflow run in the **Actions** tab; the Android APK and the iOS
`.app` are listed under **Artifacts** at the bottom of the run summary.

> The workflow installs dependencies with `npm install`, which resolves the
> `flet-box` package from npm. If you develop against a local copy of the
> framework, publish it first — or add a step that checks out the framework and
> runs `npm pkg set dependencies.flet-box=file:<path>` before `npm install`.

## Ads (AdSense & AdMob) — optional

Both ad integrations ship **disabled by default**, ready to switch on. Replace
every `ca-pub-XXXXXXXXXXXXXXXX` / `ca-app-pub-XXXXXXXXXXXXXXXX` placeholder
with your own IDs from the AdSense/AdMob console. While developing keep test
mode on and never click your own live ads — AdMob can ban the account.

### AdSense (web)

`index.html` has a commented-out AdSense `<script>` in the `<head>`. To
enable: get an approved domain at https://www.google.com/adsense, put your
publisher ID in the script, and delete the surrounding `<!--` / `-->` so the
tag goes live. Ads only render on an approved domain, not on localhost. You can
also drop the `AdSense` widget into any screen (see
https://github.com/kuko53348/flet-box/blob/refactory/docs/widget/AdSense.md).

### AdMob (Android / iOS)

1. Install the Capacitor plugin:

   ```bash
   npm install @capacitor-community/admob
   ```

2. Add your AdMob **App ID** to the native projects.

   Android — `android/app/src/main/AndroidManifest.xml`, inside `<application>`:

   ```xml
   <meta-data
       android:name="com.google.android.gms.ads.APPLICATION_ID"
       android:value="ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY"/>
   ```

   iOS — `ios/App/App/Info.plist`, inside the top-level `<dict>`:

   ```xml
   <key>GADApplicationIdentifier</key>
   <string>ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY</string>
   ```

3. Sync and rebuild:

   ```bash
   npm run android:sync && npm run ios:sync
   ```

4. Uncomment the `AdMob` import and the `AdMob({...})` widget in
   `src/screens/HomeScreen.js` (they are marked with ADMOB comments). Full
   props in
   https://github.com/kuko53348/flet-box/blob/refactory/docs/widget/AdMob.md.

## Over-the-air updates (OTA)

This app can update its web layer without a new store submission. The project
ships with `fletbox.config.json`, which tells the app where to check for
updates:

```json
{
  "update": {
    "url": "https://TU-USUARIO.github.io/TU-REPO/",
    "mode": "prompt"
  }
}
```

- The GitHub repository **must be public**.
- Replace `TU-USUARIO` with your GitHub username and `TU-REPO` with the
  repository name, or set `update.url` to any HTTPS host that serves your
  `config.json` + bundle.
- Enable GitHub Pages: **Settings → Pages → Source: GitHub Actions**.
- Cut a release with `flet-box release --push` (bumps the version, rebuilds
  `www/`, commits and tags `vX.Y.Z`). CI then deploys `www/` and installed
  apps self-update the next time they open.
- The update URL is also reflected in `www/config.json` after `flet-box
  createBundle www`; it is baked into Android/iOS builds at `cap sync` time.
- Only web files are updated OTA. Native changes (plugins, permissions,
  manifest/Info.plist edits) still require a new store submission.

## Features

- Welcome screen with rocket icon
- Dashboard screen with welcome message
- About screen with framework info
- Drawer menu for navigation
- PWA icons and Capacitor Android launcher/splash assets
- Capacitor iOS project, icon and launch screen assets
- Dark/Light theme support

## Project Structure

```
├── src/
│   ├── app.js
│   ├── components/
│   │   └── layouts/
│   │       └── DrawerMenu.js
│   ├── screens/
│   │   ├── RootScreen.js
│   │   ├── HomeScreen.js
│   │   └── AboutScreen.js
│   └── database/
│       └── themes.js
├── index.html
├── package.json
└── run.sh
```

## License

MIT
