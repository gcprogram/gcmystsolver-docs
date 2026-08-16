# GCMystSolver

**GCMystSolver** je aplikace pro Android, která ti pomůže rychleji luštit mystery a hádankové keše.
Keše naimportuješ ze souboru GPX nebo z PocketQuery, aplikace na ně automaticky použije řadu
klasických luštitelů (Vigenère, ROT-N, what3words, Enigma, kryptodekodéry, azimut/posun a další)
a navíc může přizvat na pomoc AI, pokud se žádný vestavěný luštitel nehodí. Aplikace také
automaticky kontroluje, zda tvé nalezené keše splňují požadavky challenge keší (D/T matice, země,
kraje/regiony, nadmořská výška, počet nálezů a další).

Tato příručka podrobně popisuje všechny funkce aplikace. Pro vyhledání tématu použij navigaci
nahoře nebo vyhledávání.

<figure class="gcms-hero" markdown>
![Nevyřešená vs. vyřešená geoart mapa](assets/screenshots/geoart-animation.gif)
<figcaption>Skutečná geoart hádanka (jelen složený z ~300 mystery keší v Nizozemsku) — vlevo
nevyřešená, poté automaticky vyřešená GCMystSolverem, s detailním záběrem na zelené kroužky
řešení</figcaption>
</figure>

## Rychlý start

- [První kroky](erste-schritte.md) — instalace aplikace, první import
- [Automatické řešiče](funktionen/solver.md) — jaké typy hádanek aplikace řeší bez AI
- [Kontrola výzev](funktionen/challenges.md) — jak funguje semaforové hodnocení tvých challenge keší
- [Podpora](support.md) — nahlásit chybu nebo navrhnout novou funkci

## Dobré vědět

!!! info "Zdarma, žádná placená verze"
    GCMystSolver aktuálně nemá žádné placené funkce ani omezenou funkcionalitu.

!!! warning "Nenahrazuje vlastní přemýšlení"
    Automatické luštitele a AI podpora jsou pomocníci, ne kouzlo. U terénních hádanek (multi keše
    s více stanovišti, azimuty měřené na místě apod.) nedokáže aplikace udělat víc než tě
    nasměrovat na vhodný luštitel — keš je nakonec stále potřeba rozlousknout přímo na místě.

!!! note "Stažení APK"
    Odkaz na aktuální APK najdeš nahoře v menu ("APK herunterladen"). Jde o debug verzi mimo Play
    Store — zařízení tě při první instalaci požádá o povolení instalovat aplikace z neznámých
    zdrojů.
