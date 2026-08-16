# Kontrola výzev (challenge)

U challenge keší (keší, které vyžadují, abys předtím nalezl/a určité jiné keše) GCMystSolver
automaticky spočítá **semaforové hodnocení**: splňují tvé dosavadní nálezy danou podmínku už teď?

## Kdy se kontroluje?

Při **každém importu** — ne až při otevření keše. Ve svém seznamu keší tak hned vidíš, které
challenge už splňuješ.

## Rozpoznávané typy výzev

- **D/T matice challenge** (např. „všech 81 kombinací Difficulty/Terrain")
- **Zeměpisné challenge** („malá cesta kolem světa" — fyzické nálezy v konkrétních zemích)
- **Krajské/regionální challenge**
- **Okresní challenge** *(aktuálně kontroluje jen počet různých okresů, ne konkrétní předem daný
  seznam)*
- **Výškové challenge** (nálezy nad/pod určitou nadmořskou výškou)
- **Challenge podle počtu nálezů** (např. „minimálně 500 nálezů")
- **Jasmer challenge** (jeden nález za kalendářní měsíc od května 2000)
- **365/366denní challenge** (jeden nález za kalendářní den v roce, napříč lety)
- **Streak challenge** (nejdelší souvislá řada dní s nálezem)

## Barvy semaforu

- 🔴 **Červená**: podmínka aktuálně není splněna.
- 🟡 **Žlutá**: nejisté — např. protože rozpoznání ve volném textu listingu nebylo jednoznačné.
- 🟢 **Zelená**: podmínka je podle aktuálních dat splněna.

## Seznam dokladů

U každé splněné podmínky aplikace zobrazí **minimálně nutné doklady** — tedy přesně ty nálezy,
které podmínku splňují (např. jeden nález za měsíc), ne všechny tvé nálezy dohromady. Při velmi
velkém počtu potřebných dokladů se seznam automaticky zobrazí kompaktněji (jen datum a GC kód
místo celého názvu), při extrémně vysokém počtu jen jako textové shrnutí, aby detailní stránka
zůstala přehledná.

## Transparentnost rozpoznávání ve volném textu

Podmínky, které se musí vyčíst z volného textu listingu (např. v textu uvedený minimální počet
nálezů), se vždy zobrazují spolu s **konkrétně rozpoznanou hodnotou** — chybnou interpretaci tak
hned poznáš, místo abys musel/a spoléhat na tichou černou skříňku.

## Nalezené keše

Již nalezená keš se vždy zobrazuje jako zelená, bez ohledu na svou podmínku challenge.

!!! tip "Po aktualizaci"
    Byla-li kontrola challenge opravena, můžeš v *Setup* přes **"Clear stored solutions"**
    cíleně smazat všechna uložená hodnocení jednoho typu a nechat je přepočítat, aby nezůstala
    žádná zastaralá chybná hodnocení.
