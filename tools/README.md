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

## Pages générées à partir du SRD 5.2.1 (sorts, équipement, objets, création)

- `parse_srd.py` : lit le PDF `FR_SRD_CC_v5.2.1.pdf` (téléchargé depuis https://media.dndbeyond.com/compendium-images/srd/5.2/FR_SRD_CC_v5.2.1.pdf,
  à placer dans le dossier de travail) et écrit `srd_fr.json` (sorts, objets magiques, armes, armures, outils, matériel,
  propriétés, bottes, montures, historiques, dons). Nécessite PyMuPDF (`pip install pymupdf`, dans un venv).
- `parse_classes.py` : extrait la table « Traits de base » et la table de progression de chaque classe (`classes_fr.json`).
- La normalisation (niveaux, écoles, raretés, champs des historiques…) est faite dans la session qui a produit
  `data/srd_norm.json` et `data/creation.json` ; ces deux fichiers sont la source des pages.
- `build_pages.py` : injecte `data/*.json` dans `pages/*.html` (marqueurs `/*__DATA:clé,clé__*/`, `/*__FILE:nom__*/`)
  et écrit `docs/*.html`. Lancer `python3 tools/build_pages.py` après toute modification d'un gabarit ou des données.
