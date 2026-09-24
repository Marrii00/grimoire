const ESPECES=[
{id:"aasimar",nom:"Aasimar",en:"Aasimar",taille:"M ou P",vitesse:"9 m",vision:"18 m",
 resume:"Mortels portant une étincelle céleste, liés aux plans supérieurs et souvent guidés par un gardien divin.",
 traits:[
  ["Résistance céleste","Résistance aux dégâts nécrotiques et radiants."],
  ["Vision dans le noir","18 m."],
  ["Mains guérisseuses","Action magique : soigne une créature touchée d'autant de d4 que ton bonus de maîtrise. 1 fois par repos long."],
  ["Porteur de lumière","Tu connais le sort mineur Lumière (Charisme)."],
  ["Révélation céleste (niv. 3)","Action bonus, 1 minute, 1 fois par repos long. Une fois par tour, dégâts supplémentaires égaux à ton bonus de maîtrise. Trois formes : Ailes célestes (vol), Rayonnement intérieur (lumière et dégâts radiants autour de toi), Voile nécrotique (les ennemis proches peuvent être effrayés)."]
 ],pairs:["Paladin","Clerc","Occultiste","Ensorceleur"]},
{id:"drakeide",nom:"Drakéide",en:"Dragonborn",taille:"M",vitesse:"9 m",vision:"18 m",
 resume:"Descendants des dragons, fiers et imposants, qui portent dans leur sang l'élément de leur ancêtre.",
 traits:[
  ["Ascendance draconique","Choisis un dragon : noir ou cuivre (acide), bleu ou bronze (foudre), airain, or ou rouge (feu), vert (poison), argent ou blanc (froid)."],
  ["Souffle","Remplace une attaque : cône de 4,5 m ou ligne de 9 m, 1d10 dégâts de ton type (2d10 niv. 5, 3d10 niv. 11, 4d10 niv. 17). Utilisations = bonus de maîtrise par repos long."],
  ["Résistance aux dégâts","Résistance au type de dégâts de ton ascendance."],
  ["Vision dans le noir","18 m."],
  ["Vol draconique (niv. 5)","Action bonus : des ailes spectrales te donnent une vitesse de vol égale à ta vitesse pendant 10 minutes. 1 fois par repos long."]
 ],pairs:["Paladin","Guerrier","Ensorceleur","Barbare"]},
{id:"nain",nom:"Nain",en:"Dwarf",taille:"M",vitesse:"9 m",vision:"36 m",
 resume:"Peuple robuste né de la pierre et de la forge, endurant, têtu et fidèle à ses clans.",
 traits:[
  ["Vision dans le noir","36 m, la meilleure portée des espèces du manuel."],
  ["Résilience naine","Résistance aux dégâts de poison et avantage aux jets de sauvegarde contre l'état empoisonné."],
  ["Robustesse naine","+1 point de vie maximum par niveau."],
  ["Connaissance de la pierre","Action bonus : perception des vibrations sur 18 m pendant 10 minutes, sur une surface de pierre. Utilisations = bonus de maîtrise par repos long."]
 ],pairs:["Clerc","Guerrier","Barbare","Paladin"]},
{id:"elfe",nom:"Elfe",en:"Elf",taille:"M",vitesse:"9 m",vision:"18 m",
 resume:"Êtres gracieux au sang féerique, qui ne dorment pas mais entrent en transe.",
 traits:[
  ["Lignée elfique","Drow : vision dans le noir 36 m, Lumières dansantes, puis Lueurs féeriques (niv. 3) et Ténèbres (niv. 5). Haut-elfe : Prestidigitation (échangeable), puis Détection de la magie et Foulée brumeuse. Elfe sylvestre : vitesse 10,5 m, Druidisme, puis Grande foulée et Passage sans trace."],
  ["Ascendance féerique","Avantage aux jets de sauvegarde contre l'état charmé."],
  ["Sens aiguisés","Maîtrise de Perspicacité, Perception ou Survie (au choix)."],
  ["Transe","Un repos long ne prend que 4 heures, en restant conscient."],
  ["Vision dans le noir","18 m (36 m pour les drows)."]
 ],pairs:["Rôdeur","Magicien","Roublard","Druide"]},
{id:"gnome",nom:"Gnome",en:"Gnome",taille:"P",vitesse:"9 m",vision:"18 m",
 resume:"Petits inventeurs curieux et malicieux, à l'esprit très difficile à manipuler.",
 traits:[
  ["Ruse gnome","Avantage aux jets de sauvegarde d'Intelligence, de Sagesse et de Charisme."],
  ["Lignée gnome","Gnome des forêts : Illusion mineure et Communication avec les animaux (bonus de maîtrise fois par repos long). Gnome des roches : Réparation et Prestidigitation, et fabrication de petits mécanismes."],
  ["Vision dans le noir","18 m."]
 ],pairs:["Magicien","Occultiste","Roublard","Barde"]},
{id:"goliath",nom:"Goliath",en:"Goliath",taille:"M",vitesse:"10,5 m",vision:"—",
 resume:"Descendants lointains des géants, taillés pour les sommets et la compétition.",
 traits:[
  ["Ascendance de géant","Un pouvoir au choix, bonus de maîtrise fois par repos long. Nuages : téléportation de 9 m. Feu : +1d10 feu. Givre : +1d6 froid et −3 m de vitesse. Colline : renverse la cible. Pierre : réduit les dégâts reçus de 1d12 + Con. Tempête : 1d8 tonnerre en réaction."],
  ["Forme géante (niv. 5)","Action bonus : tu deviens de taille G pendant 10 minutes, avec avantage aux tests de Force et +3 m de vitesse. 1 fois par repos long."],
  ["Carrure puissante","Avantage pour mettre fin à l'état agrippé, et tu comptes une taille au-dessus pour la capacité de charge."]
 ],pairs:["Barbare","Guerrier","Moine","Paladin"]},
{id:"halfelin",nom:"Halfelin",en:"Halfling",taille:"P",vitesse:"9 m",vision:"—",
 resume:"Petites gens chaleureuses et étonnamment chanceuses, capables de se faufiler partout.",
 traits:[
  ["Chanceux","Quand tu fais un 1 au d20 d'un test, tu relances le dé et gardes le nouveau résultat."],
  ["Brave","Avantage aux jets de sauvegarde contre l'état effrayé."],
  ["Agilité halfeline","Tu peux traverser l'espace d'une créature plus grande que toi."],
  ["Discrétion naturelle","Tu peux te cacher derrière une créature de taille M ou plus."]
 ],pairs:["Roublard","Barde","Rôdeur","Moine"]},
{id:"humain",nom:"Humain",en:"Human",taille:"M ou P",vitesse:"9 m",vision:"—",
 resume:"Le peuple le plus répandu et le plus ambitieux, qui compense sa vie courte par sa polyvalence.",
 traits:[
  ["Ingénieux","Tu gagnes l'Inspiration héroïque à chaque repos long."],
  ["Doué","Maîtrise d'une compétence au choix."],
  ["Polyvalent","Un don d'origine au choix (par exemple Doué ou Vigilant), en plus de celui de ton historique."]
 ],pairs:["Toutes les classes"]},
{id:"orc",nom:"Orc",en:"Orc",taille:"M",vitesse:"9 m",vision:"36 m",
 resume:"Peuple endurant forgé par Gruumsh pour survivre et ne jamais abandonner.",
 traits:[
  ["Poussée d'adrénaline","Action bonus : Foncer et gagner des PV temporaires égaux à ton bonus de maîtrise. Utilisations = bonus de maîtrise par repos court ou long."],
  ["Endurance implacable","Quand tu tombes à 0 PV sans être tué, tu restes à 1 PV. 1 fois par repos long."],
  ["Vision dans le noir","36 m."]
 ],pairs:["Barbare","Guerrier","Rôdeur","Paladin"]},
{id:"tieffelin",nom:"Tieffelin",en:"Tiefling",taille:"M ou P",vitesse:"9 m",vision:"18 m",
 resume:"Mortels marqués par un héritage des plans inférieurs, reconnaissables à leurs cornes et à leur queue.",
 traits:[
  ["Héritage fiélon","Abyssal : résistance au poison, Aspersion de poison, puis Rayon empoisonné (niv. 3) et Immobilisation de personne (niv. 5). Chthonien : résistance nécrotique, Contact glacial, puis Simulacre de vie et Rayon affaiblissant. Infernal : résistance au feu, Trait de feu, puis Représailles infernales et Ténèbres."],
  ["Présence d'outre-monde","Tu connais le sort mineur Thaumaturgie."],
  ["Vision dans le noir","18 m."]
 ],pairs:["Occultiste","Ensorceleur","Barde","Paladin"]}
];

ESPECES.forEach(e=>{e.src='phb'});
const f=(nom,en,src,taille,vitesse,vision,resume,traits,pairs,type)=>({id:norm(nom).replace(/[^a-z]+/g,'-'),nom,en,src,taille,vitesse,vision,resume,traits,pairs,type});
function norm(s){return s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase()}
ESPECES.push(
// Eberron : Forge of the Artificer (déc. 2025)
f("Changelin","Changeling","eberron","M ou P","9 m","—","Métamorphes capables de changer d'apparence à volonté, qui vivent souvent sous plusieurs identités.",[
 ["Métamorphe","Action : tu changes d'apparence (traits, voix, taille dans ta catégorie). Avantage aux tests de Charisme tant que tu es métamorphosé (révision 2025)."],
 ["Instincts de changelin","Maîtrise de deux compétences sociales (Tromperie, Intimidation, Perspicacité, Représentation ou Persuasion)."]
],["Roublard","Barde","Occultiste","Ensorceleur"],"Humanoïde"),
f("Kalashtar","Kalashtar","eberron","M","9 m","—","Humains liés à un esprit venu du plan des rêves, calmes, télépathes et coupés de leurs propres songes.",[
 ["Type Aberration","Depuis la révision 2025, les kalashtar sont des Aberrations."],
 ["Lien mental","Télépathie, désormais avec plusieurs créatures à la fois et sans ligne de vue."],
 ["Discipline mentale","Résistance aux dégâts psychiques."],
 ["Coupé des rêves","Après un repos long, maîtrise d'une compétence au choix jusqu'au repos long suivant. Les sorts de rêve n'ont pas d'effet sur toi."]
],["Moine","Clerc","Magicien","Barde"],"Aberration"),
f("Khoravar","Khoravar","eberron","M ou P","9 m","18 m","Les demi-elfes d'Eberron, devenus un peuple à part entière entre les mondes humain et elfique.",[
 ["Ascendance féerique","Avantage aux sauvegardes contre l'état charmé."],
 ["Don féerique","Tu connais le sort mineur Amis, échangeable après un repos long contre un sort mineur de clerc, druide ou magicien."],
 ["Résilience à la léthargie","Transforme un échec contre l'état inconscient en réussite. Se recharge après 1d4 repos longs."],
 ["Polyvalence","Maîtrise d'une compétence ou d'un outil, échangeable après chaque repos long."],
 ["Vision dans le noir","18 m."]
],["Barde","Rôdeur","Paladin","Toutes les classes"],"Humanoïde"),
f("Changeforme","Shifter","eberron","M ou P","9 m","18 m","Descendants des lycanthropes, capables de laisser surgir leur bête intérieure pendant un moment.",[
 ["Mutation","Action bonus : tu libères ta part animale et gagnes des PV temporaires, plus un effet selon ta lignée (Longues-dents, Crins-sauvages, Pieds-rapides, Cuir-dur…). Utilisations liées au bonus de maîtrise."],
 ["Instincts bestiaux","Maîtrise d'une compétence parmi Acrobaties, Athlétisme, Intimidation ou Survie."],
 ["Vision dans le noir","18 m."]
],["Barbare","Rôdeur","Moine","Druide"],"Humanoïde"),
f("Forgelier","Warforged","eberron","M ou P","9 m","—","Soldats artificiels créés pour la Dernière Guerre, en quête d'un sens maintenant que la paix est revenue.",[
 ["Type Artificiel","Depuis la révision 2025, les forgeliers sont des Artificiels (Construct)."],
 ["Résilience construite","Résistance au poison et avantage pour éviter ou mettre fin à l'état empoisonné."],
 ["Protection intégrée","Armure intégrée au corps. Enfiler une armure ne prend plus une heure."],
 ["Repos de sentinelle","Pas besoin de dormir, et la magie ne peut pas t'endormir."],
 ["Infatigable","Pas d'épuisement dû à la soif, la faim ou l'asphyxie."]
],["Guerrier","Paladin","Artificier","Clerc"],"Artificiel"),
// Ravenloft : The Horrors Within (juin 2026)
f("Dhampir","Dhampir","ravenloft","M ou P","10,5 m","18 m","Mortels à moitié touchés par le vampirisme, qui ont soif sans être morts.",[
 ["Pattes d'araignée","Vitesse d'escalade égale à ta vitesse. Niveau 3 : tu te déplaces sur les murs et plafonds sans les mains."],
 ["Trace de mort-vivant","Résistance aux dégâts nécrotiques."],
 ["Morsure vampirique","Frappe à mains nues de 1d4 + Con perforants. Tu peux drainer (PV récupérés égaux aux dégâts) ou te renforcer (bonus à ton prochain test ou attaque dans la minute)."]
],["Roublard","Moine","Occultiste","Guerrier"],"Humanoïde"),
f("Hexblood","Hexblood","ravenloft","M ou P","9 m","18 m","Créatures transformées par une sorcière ou un pacte de guenaude, marquées par une magie étrange.",[
 ["Jeton étrange","Action bonus : tu crées un jeton magique pour envoyer un message télépathique (25 mots, 16 km) ou voir à distance à travers lui."],
 ["Magie maléfique","Déguisement et Maléfice toujours préparés, chacun lançable une fois par repos long sans emplacement (Int, Sag ou Cha)."],
 ["Vision dans le noir","18 m."]
],["Occultiste","Ensorceleur","Druide","Barde"],"Fée"),
f("Lupin","Lupin","ravenloft","M ou P","9 m","?","Nouvelle espèce 2026 : un peuple à l'allure de loup, héritier des instincts des loups-garous.",[
 ["Bond sauvage","Tes frappes à mains nues infligent des dégâts tranchants, et tu peux combiner dégâts et bousculade sur le même coup."],
 ["Hurlement","Action bonus : les créatures à 4,5 m font une sauvegarde de Sagesse (DD 8 + Con + maîtrise) ou ont un désavantage aux attaques et sauvegardes jusqu'à ton prochain tour."],
 ["Instincts de loup-garou","Maîtrise de Perception, Discrétion ou Survie."]
],["Barbare","Rôdeur","Moine","Guerrier"],"Humanoïde"),
f("Reborn","Reborn","ravenloft","M ou P","9 m","—","Revenus d'entre les morts, avec des souvenirs fragmentés d'une vie passée.",[
 ["Endurance étrange","Résistance au froid, au nécrotique ou au poison (au choix)."],
 ["Mort évitée","Avantage aux jets de sauvegarde contre la mort."],
 ["Éternel","Pas d'épuisement dû à la soif, la faim ou l'asphyxie, pas besoin de dormir, repos long en 4 heures."],
 ["Savoir d'une vie passée","Maîtrise d'une compétence. Sur un test raté, ajoute 1d6 (bonus de maîtrise fois par repos long)."]
],["Paladin","Clerc","Occultiste","Guerrier"],"Humanoïde"),
// Héritage : Monstres du Multivers (2022) et Manuel 2014
f("Aarakocra","Aarakocra","legacy","M","9 m","—","Peuple d'oiseaux venus du plan élémentaire de l'Air.",[
 ["Vol","Vitesse de vol égale à ta vitesse, sans armure intermédiaire ni lourde."],
 ["Serres","Frappes à mains nues de 1d6 tranchants."],
 ["Appel du vent (niv. 3)","Bourrasque une fois par repos long sans emplacement."]
],["Moine","Rôdeur","Druide"]),
f("Gobelours","Bugbear","legacy","M","9 m","18 m","Gobelinoïdes massifs et étonnamment discrets, liés aux fées.",[
 ["Membres allongés","+1,5 m d'allonge pour tes attaques au corps à corps pendant ton tour."],
 ["Attaque surprise","+2d6 dégâts contre une créature qui n'a pas encore joué au premier round."],
 ["Sournois","Maîtrise de Discrétion, tu passes par des espaces étroits."],
 ["Carrure puissante","Capacité de charge d'une taille au-dessus."],
 ["Ascendance féerique","Avantage contre l'état charmé."]
],["Roublard","Barbare","Guerrier"]),
f("Centaure","Centaur","legacy","M","12 m","—","Mi-humain mi-cheval, peuple nomade proche de la nature. Type Fée.",[
 ["Charge","Après 9 m en ligne droite, attaque de sabots en action bonus."],
 ["Sabots","Frappes à mains nues de 1d6 contondants."],
 ["Physionomie équine","Les montées coûtent le double, mais tu portes comme une créature plus grande."],
 ["Affinité naturelle","Dressage, Médecine, Nature ou Survie."]
],["Rôdeur","Paladin","Guerrier"],"Fée"),
f("Gnome des profondeurs","Deep Gnome","legacy","P","9 m","36 m","Svirfneblin de l'Outreterre, discrets et résistants à la magie.",[
 ["Résistance magique gnome","Avantage aux sauvegardes d'Int, Sag et Cha contre les sorts."],
 ["Camouflage svirfneblin","Avantage en Discrétion, bonus de maîtrise fois par repos long."],
 ["Don svirfneblin (niv. 3 et 5)","Déguisement, puis Antidétection sur toi."]
],["Roublard","Magicien","Rôdeur"]),
f("Duergar","Duergar","legacy","M","9 m","36 m","Nains gris de l'Outreterre, marqués par les flagelleurs mentaux.",[
 ["Magie duergar (niv. 3 et 5)","Agrandissement/Rapetissement, puis Invisibilité."],
 ["Résilience naine","Résistance au poison, avantage contre l'état empoisonné."],
 ["Fortitude psionique","Avantage contre les états charmé et étourdi."]
],["Guerrier","Barbare","Clerc"]),
f("Eladrin","Eladrin","legacy","M","9 m","18 m","Elfes de la Féerie dont l'humeur suit les saisons.",[
 ["Pas féerique","Action bonus : téléportation de 9 m, bonus de maîtrise fois par repos long. Effet de saison dès le niveau 3 (automne, hiver, printemps, été)."],
 ["Sens aiguisés, Ascendance féerique, Transe","Comme l'elfe."]
],["Paladin","Magicien","Ensorceleur","Occultiste"]),
f("Fée","Fairy","legacy","P","9 m","—","Petite créature de la Féerie aux ailes délicates. Type Fée.",[
 ["Vol","Vitesse de vol égale à ta vitesse, sans armure intermédiaire ni lourde."],
 ["Magie féerique","Druidisme, puis Lueurs féeriques (niv. 3) et Agrandissement/Rapetissement (niv. 5)."]
],["Druide","Occultiste","Barde"],"Fée"),
f("Firbolg","Firbolg","legacy","M","9 m","—","Gardiens des forêts, discrets et bienveillants, apparentés aux géants.",[
 ["Magie firbolg","Détection de la magie et Déguisement une fois par repos long."],
 ["Pas caché","Action bonus : invisible jusqu'à ton prochain tour, bonus de maîtrise fois par repos long."],
 ["Parole des bêtes et des feuilles","Tu peux te faire comprendre des bêtes et des plantes."],
 ["Carrure puissante","Capacité de charge d'une taille au-dessus."]
],["Druide","Clerc","Rôdeur"]),
f("Génasi","Genasi","legacy","M ou P","9 m","18 m","Mortels porteurs du sang d'un génie, chacun lié à un élément.",[
 ["Air","Vitesse 10,5 m, respiration sans fin, résistance à la foudre ; Poigne électrique, Feuille morte, Lévitation."],
 ["Terre","Ignore le terrain difficile de pierre ou de terre ; Protection contre les armes en action bonus, Passage sans trace."],
 ["Feu","Résistance au feu ; Flammes, Mains brûlantes, Lame de feu."],
 ["Eau","Amphibie, nage, résistance à l'acide ; Aspersion d'acide, Création ou destruction d'eau, Marche sur l'eau."]
],["Ensorceleur","Moine","Druide","Magicien"]),
f("Githyanki","Githyanki","legacy","M","9 m","—","Guerriers du plan Astral, libérés jadis des flagelleurs mentaux.",[
 ["Savoir astral","Après un repos long, maîtrise d'une compétence et d'une arme ou d'un outil."],
 ["Psionique githyanki","Main de mage invisible, puis Saut (niv. 3) et Foulée brumeuse (niv. 5)."],
 ["Résilience psychique","Résistance aux dégâts psychiques."]
],["Guerrier","Paladin","Magicien"]),
f("Githzerai","Githzerai","legacy","M","9 m","—","Moines ascétiques des Limbes, maîtres de leur esprit.",[
 ["Psionique githzerai","Main de mage invisible, puis Bouclier (niv. 3) et Détection des pensées (niv. 5)."],
 ["Discipline mentale","Avantage contre les états charmé et effrayé."],
 ["Résilience psychique","Résistance aux dégâts psychiques."]
],["Moine","Magicien","Clerc"]),
f("Gobelin","Goblin","legacy","P","9 m","18 m","Petits gobelinoïdes vifs et débrouillards.",[
 ["Furie des petits","Dégâts supplémentaires égaux à ton bonus de maîtrise contre plus grand que toi, bonus de maîtrise fois par repos long."],
 ["Fuite agile","Action bonus : Se désengager ou Se cacher."],
 ["Ascendance féerique","Avantage contre l'état charmé."]
],["Roublard","Guerrier","Rôdeur"]),
f("Lièvrin","Harengon","legacy","M ou P","9 m","—","Peuple lapin de la Féerie, toujours sur le qui-vive.",[
 ["Réflexe du lièvre","Bonus de maîtrise à l'initiative."],
 ["Sens léporins","Maîtrise de Perception."],
 ["Pied chanceux","Réaction : +1d4 à une sauvegarde de Dextérité ratée."],
 ["Saut du lapin","Action bonus : saut de 1d12 × 1,5 m sans attaque d'opportunité."]
],["Roublard","Moine","Rôdeur","Barde"]),
f("Hobgobelin","Hobgoblin","legacy","M","9 m","18 m","Gobelinoïdes disciplinés, forts ensemble.",[
 ["Don féerique","Aider en action bonus, avec un bonus au choix dès le niveau 3."],
 ["Fortune du nombre","Sur un test raté, bonus égal au nombre d'alliés proches (max +3)."],
 ["Ascendance féerique","Avantage contre l'état charmé."]
],["Guerrier","Magicien","Paladin"]),
f("Kenku","Kenku","legacy","M ou P","9 m","—","Peuple corbeau, imitateur hors pair.",[
 ["Duplication experte","Avantage pour copier une écriture ou un objet."],
 ["Mémoire kenku","Deux compétences, et avantage sur un test de compétence bonus de maîtrise fois par repos long."],
 ["Mimétisme","Imite les sons et voix entendus."]
],["Roublard","Rôdeur","Barde"]),
f("Kobold","Kobold","legacy","P","9 m","18 m","Petits reptiliens dévoués aux dragons, inventifs et rusés.",[
 ["Cri draconique","Action bonus : tes alliés ont l'avantage contre les ennemis à 3 m, bonus de maîtrise fois par repos long."],
 ["Héritage kobold","Ingéniosité (compétence), Défi (avantage contre la peur) ou Sorcellerie draconique (sort mineur)."]
],["Ensorceleur","Roublard","Occultiste"]),
f("Homme-lézard","Lizardfolk","legacy","M","9 m","—","Reptiliens pragmatiques des marais. Nage 9 m.",[
 ["Morsure","Frappes à mains nues de 1d6 perforants."],
 ["Mâchoires affamées","Action bonus : morsure qui donne des PV temporaires."],
 ["Armure naturelle","CA 13 + Dex sans armure."],
 ["Retenir son souffle","15 minutes."],
 ["Intuition naturelle","Deux compétences de nature ou de survie."]
],["Druide","Barbare","Rôdeur"]),
f("Minotaure","Minotaur","legacy","M","9 m","—","Guerriers à tête de taureau, puissants et au sens de l'orientation infaillible.",[
 ["Cornes","Frappes à mains nues de 1d6 perforants."],
 ["Charge encornante","Après avoir foncé, attaque de cornes en action bonus."],
 ["Cornes martelantes","Action bonus : bousculer une créature touchée."],
 ["Mémoire du labyrinthe","Tu sais toujours où est le nord, avantage pour t'orienter."]
],["Barbare","Guerrier","Paladin"]),
f("Satyre","Satyr","legacy","M","10,5 m","—","Fêtards de la Féerie, joueurs et résistants à la magie. Type Fée.",[
 ["Résistance à la magie","Avantage aux sauvegardes contre les sorts."],
 ["Coup de tête","Frappe à mains nues de 1d6 contondants."],
 ["Bonds joyeux","Tes sauts gagnent 1d8 × 30 cm."],
 ["Fêtard","Représentation, Persuasion et un instrument."]
],["Barde","Occultiste","Roublard"],"Fée"),
f("Elfe de mer","Sea Elf","legacy","M","9 m","18 m","Elfes des océans, amis des créatures marines.",[
 ["Enfant de la mer","Nage égale à ta vitesse, respiration aquatique, résistance au froid."],
 ["Ami de la mer","Communication simple avec les bêtes aquatiques."],
 ["Sens aiguisés, Ascendance féerique, Transe","Comme l'elfe."]
],["Rôdeur","Druide","Guerrier"]),
f("Shadar-kai","Shadar-kai","legacy","M","9 m","18 m","Elfes de la Gisombre au service de la Reine Corneille.",[
 ["Bénédiction de la Reine Corneille","Action bonus : téléportation de 9 m ; dès le niveau 3, résistance à tous les dégâts jusqu'à ton prochain tour."],
 ["Résistance nécrotique","Résistance aux dégâts nécrotiques."],
 ["Sens aiguisés, Ascendance féerique, Transe","Comme l'elfe."]
],["Occultiste","Roublard","Paladin"]),
f("Tabaxi","Tabaxi","legacy","M ou P","9 m","18 m","Félins curieux et voyageurs. Escalade 9 m.",[
 ["Griffes","Frappes à mains nues de 1d6 tranchants."],
 ["Talent félin","Maîtrise de Perception et Discrétion."],
 ["Agilité féline","Double ta vitesse pour un tour, puis doit rester immobile un tour pour recommencer."]
],["Roublard","Moine","Rôdeur"]),
f("Tortue","Tortle","legacy","M ou P","9 m","—","Peuple tortue qui porte sa maison sur son dos.",[
 ["Armure naturelle","CA de base 17, sans armure."],
 ["Défense de la carapace","Action : +4 CA en rentrant dans ta carapace."],
 ["Griffes","Frappes à mains nues de 1d6 tranchants."],
 ["Retenir son souffle","1 heure."]
],["Guerrier","Clerc","Druide"]),
f("Triton","Triton","legacy","M","9 m","18 m","Gardiens des profondeurs marines. Nage 9 m.",[
 ["Amphibie","Respire l'air et l'eau, résistance au froid."],
 ["Contrôle de l'air et de l'eau","Nappe de brouillard, puis Bourrasque et Marche sur l'eau."],
 ["Émissaire de la mer","Communication avec les bêtes aquatiques."]
],["Paladin","Druide","Ensorceleur"]),
f("Yuan-ti","Yuan-ti","legacy","M ou P","9 m","18 m","Serpentins issus d'anciens empires, résistants au poison et à la magie.",[
 ["Résistance à la magie","Avantage aux sauvegardes contre les sorts."],
 ["Résilience au poison","Résistance au poison, avantage contre l'état empoisonné."],
 ["Magie serpentine","Aspersion de poison, Amitié avec les animaux (serpents), puis Suggestion (niv. 3)."]
],["Occultiste","Ensorceleur","Roublard"]),
f("Demi-elfe","Half-Elf","legacy","M","9 m","18 m","Espèce du Manuel 2014, retirée en 2024 (remplacée par des parents d'espèces différentes).",[
 ["Ascendance féerique","Avantage contre l'état charmé, immunité au sommeil magique."],
 ["Polyvalence","Maîtrise de deux compétences."]
],["Barde","Paladin","Occultiste"]),
f("Demi-orc","Half-Orc","legacy","M","9 m","18 m","Espèce du Manuel 2014, retirée en 2024 au profit de l'orc.",[
 ["Endurance implacable","Tombe à 1 PV au lieu de 0, une fois par repos long."],
 ["Attaques sauvages","Un dé de dégâts en plus sur un coup critique au corps à corps."],
 ["Menaçant","Maîtrise d'Intimidation."]
],["Barbare","Guerrier","Paladin"])
);
const SOURCES={phb:"Manuel des Joueurs 2024",eberron:"Eberron : Forge of the Artificer (2025)",ravenloft:"Ravenloft : The Horrors Within (2026)",legacy:"Héritage (Monstres du Multivers 2022, Manuel 2014)"};
const SRC_SHORT={phb:"Manuel 2024",eberron:"Eberron",ravenloft:"Ravenloft",legacy:"Héritage"};

const CLASSES=[
{id:"barbare",nom:"Barbare",en:"Barbarian",de:"d12",type:"Martial",carac:"Force",js:"Force, Constitution",armures:"Légères, intermédiaires, boucliers",armes:"Courantes et de guerre",complexite:1,
 resume:"Guerrier primal porté par la rage, qui encaisse et frappe plus fort que quiconque.",
 feats:[[1,"Rage","Action bonus : dégâts bonus, résistance aux dégâts contondants, perforants et tranchants, avantage aux tests de Force."],[1,"Défense sans armure","CA = 10 + Dex + Con sans armure."],[1,"Maîtrise des armes","Propriétés spéciales sur 2 types d'armes."],[2,"Attaque téméraire","Avantage à tes attaques de Force, mais les ennemis ont l'avantage contre toi."],[2,"Sens du danger","Avantage aux sauvegardes de Dextérité."],[5,"Attaque supplémentaire","Deux attaques par action Attaquer. Déplacement rapide : +3 m."]],
 subs:[["Voie du Berserker","Path of the Berserker","Frénésie : dégâts en plus quand tu attaques de façon téméraire, immunité à la peur pendant la rage."],["Voie du Cœur sauvage","Path of the Wild Heart","Esprits animaux (ours, aigle, loup…) qui modifient ta rage."],["Voie de l'Arbre-Monde","Path of the World Tree","Liée à l'arbre cosmique : PV temporaires pour les alliés, téléportations, allonge accrue."],["Voie du Fanatique","Path of the Zealot","Dégâts divins supplémentaires et retour à la vie facilité."]]},
{id:"barde",nom:"Barde",en:"Bard",de:"d8",type:"Lanceur",carac:"Charisme",js:"Dextérité, Charisme",armures:"Légères",armes:"Courantes",complexite:2,
 resume:"Artiste dont les mots et la musique tissent la magie. Soutien, contrôle et compétences à la fois.",
 feats:[[1,"Inspiration bardique","Action bonus : un allié gagne un d6 à ajouter à un test raté."],[1,"Incantation","Lanceur complet (Charisme), liste de sorts de barde."],[2,"Expertise","Double maîtrise sur deux compétences."],[2,"Touche-à-tout","Moitié du bonus de maîtrise aux tests sans maîtrise."],[5,"Source d'inspiration","L'Inspiration passe au d8 et se recharge aussi sur un repos court."],[10,"Secrets magiques","Deux sorts de n'importe quelle liste de classe."]],
 subs:[["Collège de la Danse","College of Dance","Défense et déplacements acrobatiques, combat à mains nues élégant."],["Collège du Prestige","College of Glamour","Charme féerique, PV temporaires et repositionnement des alliés."],["Collège du Savoir","College of Lore","Compétences supplémentaires, Mots cinglants, sorts d'autres classes plus tôt."],["Collège de la Vaillance","College of Valor","Armures intermédiaires, boucliers, armes de guerre et Attaque supplémentaire."]]},
{id:"clerc",nom:"Clerc",en:"Cleric",de:"d8",type:"Lanceur",carac:"Sagesse",js:"Sagesse, Charisme",armures:"Légères, intermédiaires, boucliers",armes:"Courantes",complexite:2,
 resume:"Prêtre combattant qui canalise la puissance d'un dieu pour soigner, protéger et punir.",
 feats:[[1,"Incantation","Lanceur complet (Sagesse), prépare ses sorts chaque jour."],[1,"Ordre divin","Protecteur (armures lourdes, armes de guerre) ou Thaumaturge (sort mineur en plus, bonus en Arcanes et Religion)."],[2,"Conduit divin","Étincelle divine (soigne ou blesse) et Renvoi des morts-vivants."],[5,"Brûlure des morts-vivants","Le Renvoi inflige aussi des dégâts radiants."],[10,"Intervention divine","Lance un sort de clerc de niveau 5 ou moins gratuitement."]],
 subs:[["Domaine de la Vie","Life Domain","Soins renforcés, le soigneur par excellence."],["Domaine de la Lumière","Light Domain","Feu et lumière radiante, Illumination protectrice."],["Domaine de la Duperie","Trickery Domain","Illusions, discrétion et doubles trompeurs."],["Domaine de la Guerre","War Domain","Attaques bonus guidées par le dieu, sorts de combat."]]},
{id:"druide",nom:"Druide",en:"Druid",de:"d8",type:"Lanceur",carac:"Sagesse",js:"Intelligence, Sagesse",armures:"Légères, boucliers",armes:"Courantes",complexite:3,
 resume:"Gardien de la nature qui manie les éléments et prend la forme des bêtes.",
 feats:[[1,"Incantation","Lanceur complet (Sagesse), sorts de nature et de soins."],[1,"Druidique","Langue secrète des druides, Communication avec les animaux toujours préparé."],[1,"Ordre primordial","Magicien (sort mineur en plus) ou Gardien (armes de guerre, armures intermédiaires)."],[2,"Forme sauvage","Action bonus : se transformer en bête connue, avec PV temporaires."],[2,"Compagnon sauvage","Dépense une Forme sauvage pour invoquer un familier."],[5,"Résurgence sauvage","Échange Forme sauvage et emplacements de sorts."]],
 subs:[["Cercle de la Terre","Circle of the Land","Sorts liés au terrain (aride, polaire, tempéré, tropical), récupération de magie."],["Cercle de la Lune","Circle of the Moon","Formes sauvages plus puissantes, le druide combattant."],["Cercle de la Mer","Circle of the Sea","Colère de la mer : aura de froid et de vagues qui repousse."],["Cercle des Étoiles","Circle of the Stars","Forme étoilée (archer, calice, dragon) et carte céleste."]]},
{id:"guerrier",nom:"Guerrier",en:"Fighter",de:"d10",type:"Martial",carac:"Force ou Dextérité",js:"Force, Constitution",armures:"Toutes, boucliers",armes:"Courantes et de guerre",complexite:1,
 resume:"Maître de toutes les armes et armures, le combattant le plus régulier et le plus endurant.",
 feats:[[1,"Style de combat","Archerie, Défense, Duel, Arme à deux mains…"],[1,"Second souffle","Action bonus : récupère 1d10 + niveau PV, plusieurs fois par repos."],[1,"Maîtrise des armes","Propriétés spéciales sur 3 types d'armes."],[2,"Fougue","Une action supplémentaire, 1 fois par repos."],[2,"Esprit tactique","Dépense un Second souffle pour réussir un test de caractéristique raté."],[5,"Attaque supplémentaire","Deux attaques (trois au niv. 11, quatre au niv. 20)."],[9,"Indomptable","Relance une sauvegarde ratée."]],
 subs:[["Maître de guerre","Battle Master","Manœuvres alimentées par des dés de supériorité : feinte, désarmement, riposte…"],["Champion","Champion","Critiques sur 19–20, athlétisme amélioré, simple et efficace."],["Chevalier occulte","Eldritch Knight","Sorts de magicien (abjuration, évocation), arme liée."],["Guerrier psi","Psi Warrior","Énergie psionique : dégâts, bouclier, télékinésie."]]},
{id:"moine",nom:"Moine",en:"Monk",de:"d8",type:"Martial",carac:"Dextérité et Sagesse",js:"Force, Dextérité",armures:"Aucune",armes:"Courantes, et de guerre avec la propriété Légère",complexite:2,
 resume:"Artiste martial rapide qui canalise son énergie intérieure en rafales de coups.",
 feats:[[1,"Arts martiaux","Frappes à mains nues avec un d6 (évolue), attaque en action bonus."],[1,"Défense sans armure","CA = 10 + Dex + Sag."],[2,"Focus du moine","Points de focus : Déluge de coups, Défense patiente, Pas du vent."],[2,"Mouvement sans armure","+3 m de vitesse (augmente avec les niveaux)."],[3,"Parade des attaques","Réduit les dégâts d'une attaque et peut la renvoyer."],[5,"Attaque supplémentaire","Et Frappe étourdissante."]],
 subs:[["Guerrier de la Miséricorde","Warrior of Mercy","Soigne ou blesse d'un même geste, médecin masqué."],["Guerrier de l'Ombre","Warrior of Shadow","Ténèbres, téléportation d'ombre en ombre."],["Guerrier des Éléments","Warrior of the Elements","Frappes élémentaires à allonge, contrôle du terrain."],["Guerrier de la Paume","Warrior of the Open Hand","Renverser, repousser, priver de réaction ; techniques pures."]]},
{id:"paladin",nom:"Paladin",en:"Paladin",de:"d10",type:"Hybride",carac:"Force et Charisme",js:"Sagesse, Charisme",armures:"Toutes, boucliers",armes:"Courantes et de guerre",complexite:2,
 resume:"Chevalier lié par un serment sacré, redoutable au corps à corps et protecteur de ses alliés.",
 feats:[[1,"Imposition des mains","Réserve de PV égale à 5 × niveau pour soigner."],[1,"Incantation","Demi-lanceur (Charisme)."],[1,"Maîtrise des armes","Propriétés spéciales sur 2 types d'armes."],[2,"Châtiment du paladin","Châtiment divin toujours préparé : gros dégâts radiants sur un coup."],[2,"Style de combat","Au choix, ou sort mineur de clerc."],[5,"Attaque supplémentaire","Et Destrier fidèle toujours préparé."],[6,"Aura de protection","Toi et tes alliés proches ajoutez ton Charisme aux sauvegardes."]],
 subs:[["Serment de Dévotion","Oath of Devotion","Arme sacrée, idéal du chevalier vertueux."],["Serment de Gloire","Oath of Glory","Héros athlétique, vitesse et exploits."],["Serment des Anciens","Oath of the Ancients","Protège la lumière et la vie, résistance aux sorts."],["Serment de Vengeance","Oath of Vengeance","Traque implacable d'un ennemi désigné."]]},
{id:"rodeur",nom:"Rôdeur",en:"Ranger",de:"d10",type:"Hybride",carac:"Dextérité et Sagesse",js:"Force, Dextérité",armures:"Légères, intermédiaires, boucliers",armes:"Courantes et de guerre",complexite:2,
 resume:"Chasseur des terres sauvages qui mêle tir, pistage et magie de la nature.",
 feats:[[1,"Incantation","Demi-lanceur (Sagesse)."],[1,"Ennemi juré","Marque du chasseur toujours préparée, lancers gratuits."],[1,"Maîtrise des armes","Propriétés spéciales sur 2 types d'armes."],[2,"Explorateur habile","Expertise dans une compétence et deux langues."],[2,"Style de combat","Au choix, ou sort mineur de druide."],[5,"Attaque supplémentaire",""],[6,"Vagabond","+3 m de vitesse, escalade et nage."]],
 subs:[["Maître des bêtes","Beast Master","Un compagnon primordial (terre, mer ou ciel) qui combat à tes côtés."],["Vagabond féerique","Fey Wanderer","Dégâts psychiques, charme, présence féerique."],["Traqueur des ténèbres","Gloom Stalker","Invisible dans le noir, gros premier tour de combat."],["Chasseur","Hunter","Choix tactiques contre les hordes ou les grosses cibles."]]},
{id:"roublard",nom:"Roublard",en:"Rogue",de:"d8",type:"Martial",carac:"Dextérité",js:"Dextérité, Intelligence",armures:"Légères",armes:"Courantes, et de guerre Finesse ou Légère",complexite:1,
 resume:"Expert en compétences et en coups précis, qui frappe là où ça fait mal.",
 feats:[[1,"Attaque sournoise","+1d6 dégâts (évolue) avec avantage ou un allié à côté de la cible."],[1,"Expertise","Double maîtrise sur deux compétences."],[1,"Jargon des voleurs","Langage secret, et une langue en plus."],[1,"Maîtrise des armes","Propriétés spéciales sur 2 types d'armes."],[2,"Ruse","Action bonus : Foncer, Se désengager ou Se cacher."],[3,"Visée stable","Avantage si tu ne bouges pas ce tour."],[5,"Frappe rusée","Échange des dés de sournoise contre des effets (empoisonner, renverser, reculer)."]],
 subs:[["Escroc arcanique","Arcane Trickster","Sorts de magicien (illusion, enchantement), Main de mage invisible."],["Assassin","Assassin","Premier coup dévastateur, déguisements et poisons."],["Lame psychique","Soulknife","Lames psychiques et télépathie."],["Voleur","Thief","Mains lestes, escalade, utilisation d'objets magiques."]]},
{id:"ensorceleur",nom:"Ensorceleur",en:"Sorcerer",de:"d6",type:"Lanceur",carac:"Charisme",js:"Constitution, Charisme",armures:"Aucune",armes:"Courantes",complexite:3,
 resume:"Magie innée dans le sang, que l'ensorceleur plie et modèle avec la métamagie.",
 feats:[[1,"Incantation","Lanceur complet (Charisme), peu de sorts mais très souples."],[1,"Sorcellerie innée","Action bonus, 1 minute : DD des sorts +1 et avantage aux attaques de sort."],[2,"Source de magie","Points de sorcellerie, convertibles en emplacements de sorts."],[2,"Métamagie","Sort accéléré, jumelé, subtil, prolongé…"],[5,"Restauration sorcière","Récupère des points de sorcellerie sur un repos court."]],
 subs:[["Sorcellerie aberrante","Aberrant Sorcery","Télépathie et sorts psioniques."],["Sorcellerie mécanique","Clockwork Sorcery","Ordre de Méchanus : annule avantage et désavantage."],["Sorcellerie draconique","Draconic Sorcery","Écailles, résistance, ailes de dragon."],["Magie sauvage","Wild Magic Sorcery","Poussées de magie chaotique, Marées du chaos."]]},
{id:"occultiste",nom:"Occultiste",en:"Warlock",de:"d8",type:"Lanceur",carac:"Charisme",js:"Sagesse, Charisme",armures:"Légères",armes:"Courantes",complexite:3,
 resume:"Pouvoir obtenu par un pacte avec une entité, personnalisé par ses manifestations occultes.",
 feats:[[1,"Manifestations occultes","Pouvoirs à la carte, dont Pacte de la lame, de la chaîne ou du grimoire."],[1,"Magie de pacte","Peu d'emplacements, toujours au plus haut niveau, rechargés sur repos court."],[2,"Astuce magique","Récupère des emplacements de pacte en 1 minute, 1 fois par repos long."],[9,"Contacter le protecteur","Contact avec les plans toujours préparé."],[11,"Arcanum mystique","Un sort de niveau 6 (puis 7, 8, 9) 1 fois par jour."]],
 subs:[["Protecteur Archifée","Archfey Patron","Téléportation féerique, charme et illusions."],["Protecteur Céleste","Celestial Patron","Soins et lumière radiante."],["Protecteur Fiélon","Fiend Patron","PV temporaires à chaque ennemi vaincu, feu infernal."],["Protecteur Grand Ancien","Great Old One Patron","Télépathie, sorts psychiques, folie."]]},
{id:"magicien",nom:"Magicien",en:"Wizard",de:"d6",type:"Lanceur",carac:"Intelligence",js:"Intelligence, Sagesse",armures:"Aucune",armes:"Courantes",complexite:3,
 resume:"Érudit de l'arcane qui possède la plus grande liste de sorts du jeu, consignée dans son grimoire.",
 feats:[[1,"Incantation","Lanceur complet (Intelligence), sorts copiés dans un grimoire."],[1,"Adepte des rituels","Lance les rituels du grimoire sans les préparer."],[1,"Restauration arcanique","Récupère des emplacements sur un repos court, 1 fois par jour."],[2,"Érudit","Expertise en Arcanes, Histoire, Investigation, Médecine, Nature ou Religion."],[5,"Mémorisation","Échange un sort préparé après un repos court."],[18,"Maîtrise des sorts","Deux sorts lancés à volonté."]],
 subs:[["Abjurateur","Abjurer","Barrière arcanique, contresorts renforcés."],["Devin","Diviner","Présage : remplace des jets de d20 par des valeurs tirées d'avance."],["Évocateur","Evoker","Sorts de dégâts qui épargnent les alliés."],["Illusionniste","Illusionist","Illusions améliorées et plus réelles."]]}
];

