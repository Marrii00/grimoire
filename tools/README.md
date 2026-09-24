# Outils de génération

`docs/index.html` est généré à partir de ces fichiers, puis modifié à la main si besoin.
Le fichier généré fait foi : si tu modifies `docs/index.html` directement, reporte le
changement dans `template.html` avant de relancer une génération.

- `template.html` : la page complète, avec trois marqueurs remplacés à la génération :
  `/*__DATA__*/` (tableaux ESPECES et CLASSES), `/*__PORTRAIT__*/` (portraits SVG de secours),
  `/*__IMAGES__*/` (objet IMAGES : fichier, titre, artiste, licence, lien Commons) et `/*__HERO__*/`.
- `part_data.js`, `part_portrait.js` : le contenu injecté dans les deux premiers marqueurs.
- `picks.json` : pour chaque espèce ou classe, le candidat retenu (index dans `candidates.json`).
- `meta.json` : titre français, artiste, année et cadrage (`pos`) de chaque image retenue.
- `candidates.json` : les fichiers Wikimedia Commons examinés (titre, auteur, licence, lien).
- `build.py` : assemble la page et redimensionne les images retenues vers `docs/img/`.

Les vignettes sources (dossier `img/` de travail) ne sont pas dans le dépôt : `build.py`
attend un dossier de travail contenant `img/<clé>-<index>.jpg` pour chaque candidat retenu.
Pour les retrouver, utiliser le lien `desc` de `candidates.json` (page Commons du fichier).

    python3 tools/build.py <dossier_de_travail> <dossier_docs>
