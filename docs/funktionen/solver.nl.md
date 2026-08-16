# Automatische oplossers

Voordat er überhaupt een AI wordt geraadpleegd, probeert GCMystSolver je puzzel te kraken met een
reeks ingebouwde, klassieke oplossers. Dat is sneller, gratis en werkt ook volledig zonder
AI-koppeling.

## Wat wordt herkend

| Oplosser | Herkent |
|---|---|
| **what3words** | Drie-woorden-coördinaten (`///woord.woord.woord`) |
| **Vigenère** | Met Vigenère versleutelde tekst, inclusief sleutelherkenning |
| **ROT-N** | Caesar-/ROT-verschuivingen, ook met onbekende N |
| **Crypto (multi-decoder)** | Bekende klassiekers zoals Base64, Morse, Atbash e.a., in combinatie |
| **Enigma** | Met Enigma versleutelde tekst |
| **Peiling/verschuiving** | "Peil … graden, … meter" en de compacte N/E-verschuivingsnotatie, in Duits/Engels/Nederlands/Frans/Tsjechisch |
| **Reverse-Wherigo** | Wherigo-cartridges achterstevoren geanalyseerd |
| **Cijfers/telwoorden verstopt in een verhaal** | Coördinaten verstopt als verspreide cijfers of voluit geschreven telwoorden in een lopende tekst |
| **One-stage-herkenning** | Herkent expliciete "one-stage"/"één fase"-aanwijzingen; bij letterbox-caches ook een voorzichtige indicatieve heuristiek |
| **Jigidi** | Herkent een onopgeloste Jigidi-puzzellink en markeert die als "slechts gedeeltelijk automatisch oplosbaar", in plaats van hem stilzwijgend aan de AI door te geven (die de gelinkte afbeelding niet kan zien) |

Elke oplosser schrijft transparant op **wat er precies herkend is** (bijv. het herkende getal of
de herkende tekst) — zo valt een verkeerde interpretatie meteen op, in plaats van zich als stille
foute oplossing te vermommen.

## Veldpuzzels versus bank-puzzels

GCMystSolver onderscheidt of een puzzel in principe vanaf de bank op te lossen is, of noodzakelijk
een bezoek ter plekke vereist (bijv. een multi met meerdere stations, een peiling die pas bij het
eerste waypoint gemeten kan worden). Bij harde aanwijzingen voor een veldpuzzel (bijv. expliciete
stationsnummering in de listing of echte waypoints in het GPX-bestand) wordt geen AI-oplospoging
ondernomen — de app zou anders alleen maar gokken.

## Oplosmodus

Bij het starten van een oplosronde kies je welke caches worden meegenomen:

- **Unsolved (standaard)**: alleen echt onopgeloste (rode) caches; harde veldpuzzels worden
  overgeslagen.
- **+ Partial**: daarnaast onzekere (gele) oplossingen; bestaande betrouwbare (groene) oplossingen
  blijven ongemoeid.
- **Force (alle)**: echt alle caches, ongeacht stoplichtkleur of vondststatus — bijv. om een
  oplossing na een oplosser-update opnieuw te berekenen.

Daarnaast kies je een **preset** (snel/alleen offline tot intensief met AI), die bepaalt hoeveel
moeite wordt gedaan voordat de AI wordt geraadpleegd.

## Gevonden caches

Al gevonden caches worden altijd als opgelost (groen) getoond, zonder opnieuw gecontroleerd te
worden.
