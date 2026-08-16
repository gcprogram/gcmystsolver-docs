# Ofte stilte spørsmål

**Trenger jeg absolutt en AI-API-nøkkel?**
Nei. De automatiske løserne fungerer uten AI. En nøkkel utvider bare hva som i tillegg forsøkes
automatisk.

**Koster appen noe?**
Nei, GCMystSolver i seg selv er gratis. Bruker du den valgfrie AI-tilkoblingen, oppstår det
kostnader hos den aktuelle AI-leverandøren (din egen API-nøkkel, du betaler direkte der — se
[AI-løsningsforsøk](funktionen/ki-solver.md) for et grovt tokenanslag).

**Hvorfor er multi-cachen min merket som "ikke automatisk løsbar" selv om den inneholder en
gåte?**
Appen gjenkjenner harde bevis på en feltgåte (f.eks. flere etapper i listingen eller ekte
waypoints i GPX-filen) og unngår bevisst å forsøke å løse slike cacher automatisk/via AI — et
element på stedet kan ikke knekkes fra sofaen.

**Challengen min vises som rød/gul selv om jeg egentlig oppfyller den — hva gjør jeg?**
Sjekk den viste bevislisten eller den gjenkjente teksten/verdien på detaljsiden — ofte skyldes
det et funn som ennå ikke er importert, eller en tvetydig fritekstgjenkjenning. Mistenker du en
reell feil i gjenkjenningen, [meld den gjerne fra om](support.md) — helst med cachens GC-kode.

**Jeg har en idé til en ny løser eller challenge-type — hvor melder jeg den?**
Som funksjonsforslag via [Support](support.md).
