# JWZ Live

## Über dieses Projekt
Am Freitag, den 24.02.2017 um 19:00 Uhr veranstaltet der Hyperion - Kulturverein e.V. einen Poetry Slam mit dem Titel “JEDES WORT ZÄHLT” im weißen Hirsch in Borgsdorf. Unser Ziel ist es einen Slam zu etablieren, der nicht nur durch Qualität, sondern auch durch Regelmäßigkeit überzeugt.

Dieses Repository enthält den Code für die Votingapp.

Damit die App funktioniert wird außerdem die [Adminapp](https://github.com/Turing-X/jwz-live-admin) benötigt.

## Wie man das Projekt zum Laufen bekommt
### Über die Kommandozeile (cmd oder Terminal)
```
$ git clone https://github.com/Turing-X/jwz-live.git
$ cd jwz-live
$ meteor npm install
$ git submodule update --init --recursive
$ meteor
```
### Über Github Desktop
1. Plus-Button (+) klicken, 'Clone' auswählen
2. Unter Turing-X nach jwz-live suchen, auswählen
3. Auf 'Clone jwz-live' klicken, bestätigen
4. Mit der Kommandozeile zum Ordner navigieren, dependencies installieren und Meteor starten:
```
$ cd ./PFAD/ZU/jwz-live
$ meteor npm install
$ git submodule update --init --recursive
$ meteor"
```

## Mitentwickeln
Bitte bei der Entwicklung auf folgende Dinge achten:
- Die Entwicklung von Features erfolgt **[immer in Branches](https://guides.github.com/introduction/flow/index.html)**. Sobald etwas fertiggestellt wurde, kann ein Pull Request erstellt werden, damit sich andere den [Code ansehen können](https://www.sitepoint.com/the-importance-of-code-reviews/).
- Sauberer Code (Clean Code) hat oberste Priorität. Der Code ist lesbar und leicht verständlich.
- Wir folgen dem [AirBnB Styleguide](https://github.com/airbnb/javascript).
- Ein Programm kann dabei helfen, diesen Styleguide zu befolgen. Es gibt dafür sogenannte *Linter* wie [eslint](http://eslint.org/).
- Ich empfehle zur Entwicklung den Code-Editor [Atom](https://atom.io/). Er sieht hübsch aus und kann automatisch auf den Code Style achten.
- Commit Messages [sollten einfach verständlich sein](http://chris.beams.io/posts/git-commit/#seven-rules)

## Weitere Ressourcen
- [Meteor Guide](https://guide.meteor.com) - Artikel zu einzelnen Aspekten bezüglich Meteor
- Speziell zu Code Style findet man im Meteor Guide [eine ganze Menge](https://guide.meteor.com/code-style.html)
- [Meteor API Reference](http://docs.meteor.com/), definitiv einen Blick wert!
- Meteor hat einen eigenen [Package Manager](https://atmospherejs.com/)
- [...]
