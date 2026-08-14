# Setup-Anleitung: separates Feedback-Repo

Diese Dateien gehören in ein **neues, eigenständiges GitHub-Repo**, das von der App-Entwicklung
(`gcprogram/Geocaching-Mystery-Solver`) getrennt ist — z. B. `gcprogram/gcmystsolver-feedback`.

## Schritte

1. Neues Repo auf GitHub anlegen (public, sonst können Nutzer keine Issues öffnen), z. B. Name
   `gcmystsolver-feedback`.
2. Diesen `.github`-Ordner ins neue Repo hochladen (Struktur beibehalten).
3. In den Repo-Einstellungen unter *Settings → General → Features* sicherstellen, dass **Issues**
   aktiviert ist.
4. Falls der Repo-Name von `gcmystsolver-feedback` abweicht: die zwei Links in
   `docs/support.md` der Doku-Website entsprechend anpassen.

Danach führen die Buttons auf der Doku-Seite [Support](../docs/support.md) direkt zu den beiden
vorausgefüllten Issue-Formularen.
