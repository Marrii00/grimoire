# Grimoire de l'aventurier

Site D&D 5e (règles 2024) en français. Cinq pages dans `docs/` :

- `index.html` : les espèces et les 12 classes (fiches résumées, illustrations).
- `sorts.html` : les 339 sorts du SRD 5.2.1 avec filtres et texte complet.
- `equipement.html` : armes, propriétés et bottes d'arme, armures, outils, matériel, montures.
- `objets.html` : les 258 objets magiques du SRD 5.2.1.
- `creation.html` : guide de création et créateur de personnage (fiche calculée, impression, sauvegarde JSON).

Les pages partagent `docs/style.css`. Les illustrations sont dans `docs/img/`.

## Sources et licence

Les sorts, objets magiques, équipement, tables de classes, historiques et dons marqués SRD reprennent la
traduction française officielle du **System Reference Document 5.2.1** de Wizards of the Coast, publiée sous
licence Creative Commons Attribution 4.0 (voir la mention d'attribution en pied de chaque page).
Les données sont extraites du PDF officiel par `tools/parse_srd.py` et `tools/parse_classes.py`
(voir `tools/README.md`).

Les illustrations sont des œuvres du domaine public ou sous licence libre (Wikimedia Commons),
choisies pour évoquer chaque espèce et chaque classe. La liste complète avec les auteurs et les licences
est dans le pied de page du site (« Crédits des illustrations »).

La refonte graphique et les images ont été assemblées avec Claude Code : les sources de travail
(recherche Commons, script d'assemblage) ne sont pas dans le dépôt, seul le site final l'est.

## En ligne

GitHub Pages publie le dossier `docs/` de la branche `main`.
Chaque `git push` met le site à jour en une ou deux minutes.

## En local

`docker-compose.yml` lance un nginx qui sert `docs/` sur le port 8080.

    docker compose up -d      # démarrer
    docker compose down       # arrêter

Adresse locale : http://192.168.1.32:8080 (ou http://100.82.13.78:8080 via Tailscale).
nginx lit le dossier directement : modifie `docs/index.html` et recharge la page.

## Mettre à jour le site public

    git add -A
    git commit -m "Description du changement"
    git push
