# Grimoire de l'aventurier

Site D&D 5e (règles 2024) : les espèces et les 12 classes, en français.
Une seule page, tout le contenu est dans `docs/index.html`.

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
