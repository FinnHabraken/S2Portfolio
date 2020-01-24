Calculator V2

Om te beginnen is mijn html van deze versie van de calculator erg clean. Zoals je kan zien worden alleen de hoogstnodige dingen hier aangemaakt, de rest wordt in de .js file aangemaakt. 

De javacript begint met het aanmaken van de var voor buttons en de switchdisplay boolean. Daarna creëert dit scriptje de buttons voor de rekenmachine door middel van de createElement code. Dit stukje code geeft elke button ook meteen de calcNumbers class mee en voegt de button dan toe aan de grid-div. Vervolgens zorgt de if-statement ervoor dat de actions (+, -, * en /) anders worden behandeld dan de nummers. Zo maakt de actions-code de uiteindelijke berekening. Zodra er op een actions-knop wordt geklikt, switcht de display van de nummers naar de onderste display, zodat je het tweede nummer in kan vullen. Zodra er dan uiteindelijk op de ‘=’-knop wordt geklikt wordt de hele som uitgerekend, en komt de hele som en de uitkomst op de laatste display te staan.
De createButtons() functie wordt direct aangeroepen zodra de pagina wordt geladen, zodat de rekenmachine meteen klaar staat zodra je op de pagina komt.

Reflectie
Ik ben persoonlijk erg tevreden met hoe de uiteindelijke rekenmachine gelukt is. Ik vind deze versie van de calculator een stuk beter dan de vorige versie, omdat ik hier zonder jquery en met minimale html een veel beter uitgewerkt product neergezet heb. Ook ben ik hier Arrays in kwijt gekund, iets wat ik hiervoor nog niet gebruikt had in javascript.
