# AlbumVault Website – GitHub Pages

Diese statische Website enthält:

- `index.html` – Startseite
- `privacy.html` – Datenschutzerklärung (Privacy Policy URL)
- `support.html` – Support-Seite (Support URL)
- `imprint.html` – Impressum
- `assets/` – Design und Skript

## Vor der Veröffentlichung zwingend anpassen

Suche im gesamten Ordner nach `EINFÜGEN`, `POSTAL ADDRESS` und `SUPPORT EMAIL` und ersetze alle Platzhalter:

1. vollständige ladungsfähige Anschrift
2. öffentliche Support-E-Mail-Adresse
3. Datenschutzerklärung nochmals mit dem tatsächlichen App-Funktionsumfang abgleichen

Die Datenschutzerklärung beschreibt den aktuellen Stand ohne aktive iCloud-Synchronisierung. Vor Veröffentlichung der iCloud-Funktion muss sie angepasst werden.

## GitHub Pages veröffentlichen

1. Auf GitHub ein neues **öffentliches** Repository erstellen, z. B. `albumvault-website`.
2. Den Inhalt dieses Ordners (nicht zwingend den übergeordneten Ordner) in das Repository hochladen.
3. Im Repository `Settings` → `Pages` öffnen.
4. Unter `Build and deployment` die Quelle `Deploy from a branch` auswählen.
5. Branch `main` und Ordner `/ (root)` auswählen, danach speichern.
6. Nach kurzer Verarbeitung ist die Seite erreichbar unter:
   `https://DEIN-GITHUB-NAME.github.io/albumvault-website/`

## URLs für App Store Connect

- Datenschutz-URL: `https://DEIN-GITHUB-NAME.github.io/albumvault-website/privacy.html`
- Support-URL: `https://DEIN-GITHUB-NAME.github.io/albumvault-website/support.html`
- Marketing-URL (optional): `https://DEIN-GITHUB-NAME.github.io/albumvault-website/`

## Lokale Vorschau

Du kannst `index.html` direkt im Browser öffnen. Besser ist ein kleiner lokaler Server:

```bash
python3 -m http.server 8080
```

Danach: `http://localhost:8080`

## Rechtlicher Hinweis

Die enthaltenen Rechtstexte sind eine projektspezifische Vorlage und keine individuelle Rechtsberatung. Vor dem öffentlichen App-Store-Release sollten sie anhand des finalen Datenflusses und der persönlichen Anbieterangaben geprüft werden.
