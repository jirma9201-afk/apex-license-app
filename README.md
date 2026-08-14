# Apex License: Trial Arena

An original turn-based hunter card battle game, packaged as a [Capacitor](https://capacitorjs.com) project so it can be built into real iOS and Android apps.

The game itself lives at `www/index.html` — it's a single self-contained file (no build step needed to *play* it, you can just open it in a browser). This project wraps that file so it can run as a native app.

## What's here

```
apex-license-app/
├── www/index.html        # the game (edit this to change gameplay/art)
├── capacitor.config.ts   # app id, name, native settings
├── package.json
```

## Before you start

You'll need this on your own machine — native builds can't run inside this chat:

- **Node.js** 18+ and npm
- **For iOS:** a Mac with **Xcode** installed, plus an Apple Developer account ($99/yr) to publish
- **For Android:** **Android Studio** installed, plus a Google Play Developer account ($25 one-time) to publish

## First-time setup

```bash
npm install
```

Then add whichever platform(s) you want. This generates a full native project folder (`ios/` or `android/`) — it's a lot of generated files, which is why it isn't included here already:

```bash
npx cap add ios
npx cap add android
```

## Every time you change the game

Edit `www/index.html`, then re-sync so the native projects pick up the change:

```bash
npx cap sync
```

## Running it

```bash
npx cap open ios       # opens Xcode — press ▶ to run in the simulator or on a device
npx cap open android   # opens Android Studio — press ▶ to run in the emulator or on a device
```

## Before you publish

1. **Change the app ID.** Open `capacitor.config.ts` and replace `com.example.apexlicense` with your own reverse-domain ID (e.g. `com.yourstudio.apexlicense`). Do this *before* you add the platforms, or re-add them after.
2. **App icons & splash screen.** Use [`@capacitor/assets`](https://github.com/ionic-team/capacitor-assets) to generate all the required icon sizes from one source image:
   ```bash
   npm install @capacitor/assets --save-dev
   npx capacitor-assets generate
   ```
3. **App Store (iOS):** in Xcode, set your Team/signing, archive the build (Product → Archive), then upload via Xcode Organizer or Transporter. You'll fill out the listing in [App Store Connect](https://appstoreconnect.apple.com).
4. **Play Store (Android):** in Android Studio, Build → Generate Signed App Bundle, create/use a keystore, then upload the `.aab` in the [Play Console](https://play.google.com/console).

Both stores also run content review — since this is an original game with no real IP, that shouldn't be an issue, but expect it to take anywhere from a few hours (Android) to a couple of days (iOS).

## Notes on the game itself

Everything — characters, the "Resonance" power system, trial names — is original, not tied to any existing show. Feel free to reskin freely.
