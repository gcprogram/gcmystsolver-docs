# Import (GPX / PocketQuery)

<figure class="gcms-shot" markdown>
![Import-scherm met de knop "Choose GPX / ZIP"](../assets/screenshots/import-screen.png)
<figcaption>Import-tabblad</figcaption>
</figure>

## Ondersteunde bestanden

- Losse **GPX-bestanden**, zoals geocaching.com of c:geo die exporteert voor één cache of een
  lijst.
- **PocketQueries** (ook GPX-formaat) met tot enkele honderden caches tegelijk.

Al bestaande caches worden bij een nieuwe import **bijgewerkt**, niet gedupliceerd — je kunt
dezelfde lijst dus zo vaak opnieuw importeren als je wilt, bijvoorbeeld om je actuele vondststatus
over te nemen.

## Wat er automatisch gebeurt bij import

1. **Regiobepaling** (offline, zonder internettoegang): land, regio en gemeente/provincie worden
   bepaald uit de coördinaten van de cache.
2. **Challenge-voorcontrole**: voor alle caches die als challenge worden herkend, wordt de
   stoplicht-beoordeling meteen berekend (zie [Challenge-controle](challenges.md)) — niet pas
   wanneer je de cache opent.
3. **Hoogtebepaling op de achtergrond**: hoogtewaarden worden opgehaald zonder de app te
   blokkeren. Bij zeer grote imports kan dit nog een tijdje op de achtergrond doorlopen.

## Basisprincipe: offline vóór netwerk

Waar mogelijk gebruikt GCMystSolver **lokale gegevens en offline naslagbronnen** bij import en bij
regio-/hoogtebepaling, vóórdat er überhaupt netwerktoegang plaatsvindt. Dat maakt de import
betrouwbaar en snel, ook bij grote lijsten.

## Snelste weg vanuit c:geo

1. Open in c:geo in de lijst-detailweergave het menu → **"Exporteren/Uploaden"** →
   **"GPX exporteren"**.
2. Ga in GCMystSolver naar *Import* en navigeer in de bestandskiezer naar de exportmap van c:geo
   (meestal `\cgeo\gpx`).
3. Stel in het driepuntsmenu van de bestandskiezer **"Sorteren op"** → **"Wijzigingsdatum (nieuwste
   eerst)"** in.
4. Laad het bovenste (nieuwste) GPX-bestand.

Bij meer dan 100 GPX-bestanden in de exportmap van c:geo is het juiste bestand anders lastig te
vinden.
