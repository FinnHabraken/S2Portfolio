Voor het Rock Paper Scissors spel wil ik proberen een online versie van het spel maken, waarbij je tegen de computer speelt. Als je je keuze hebt gemaakt, verspringt het bijbehorende plaatje. De keuze van de tegenstander is volledig random en is ook niet te beïnvloeden. Onder de plaatjes komt te staan of je hebt gewonnen, verloren of gelijk hebt gespeeld.

Script
De html die bij dit script hoort is vrij simpel; 3 buttons, 3 plaatjes voor jouw keuze, 3 plaatjes voor de keuze van de tegenstander en tekst met informatie over het spel:
 
Zodra je op een knop drukt wordt er een random nummer aangemaakt van 1 t/m 3. Dit nummer is de keuze van de tegenstander (1 = rock, 2 = paper en 3 = scissors).

Vervolgens wordt door de volgende methode de keuze van de tegenstander weergegeven in het tekstvak onder de plaatjes. Herbij wordt ook de changeImg function aangeroepen. Deze verandert het plaatje dat bij de keuze hoort.
 
Hierna wordt er bepaald of je hebt gewonnen, verloren of gelijk hebt gespeeld. 
 
De changeImg function zorgt voor het veranderen van het plaatje. Eerst zet deze functie alle plaatjes op hidden, en laat hierna alleen de plaatjes zien die bij de bijbehorende keuzes horen. Num1 bepaalt of het om jouw keuze of om die van de tegenstander gaat, door er bij de tegenstander een O (van Opponent) achter te zetten.
 
