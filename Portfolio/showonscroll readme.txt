Ik wil een script maken waarbij content van de pagina pas zichtbaar is zodra ik bij het kopje van de content ben. Ook wil ik proberen de titel mee te laten scrollen met de pagina en de navbar pas zichtbaar te laten zijn zodra er tot een bepaald deel gescrold is, zodat er steeds meer delen van de site zichtbaar worden naarmate je naar beneden scrolt.
Bij het maken van deze opdracht heb ik javascript, jquery en jqueryui gebruikt. 

Script
Om te beginnen heb ik vier verschillende variabelen aangemaakt: 
Var content
Var pos
Var title
Var old
Content pakt het id van het kopje dat je wil laten zien, pos pakt de positie (pixels vanaf boven), title pakt het id van de titel van de pagina (zodat deze mee kan scrollen) en old pakt de oude titel, zodat deze verdwijnt zodra er voorbij gescrold wordt.

 
Hierna heb ik een script geschreven die elke keer gebruikt wordt zodra er op de pagina gescrolt wordt. Var windowpos kijkt naar hoe ver de pagina op dit moment gescrold is. Als windowpos groter is dan de positie vanaf boven min het nummer van de contenthoogte, dan wordt deze content in beeld gebracht door de class ScrollShown toe te voegen. Als er weer boven de content gescrold wordt, dan verdwijnt deze weer door middel van een else-statement.
Om de titel mee te laten scrollen met de pagina heb ik het volgende script geschreven. Ik heb hiervoor eigenlijk twee verschillende titels in mijn html code gezet, waarbij er altijd één onzichtbaar is. Er wordt eerst gekeken of er al voorbij de stationaire titel is gescrold. Als dit het geval is, verdwijnt de stationaire titel en komt de fixed titel in beeld, waar het dus lijkt alsof de titel met de pagina mee scrolt.
 
 
Om ervoor te zorgen dat de pagina niet halverwege begint met tellen (en alle content dus later in beeld komt dan bedoeld), zorgt dit onderstaande korte script ervoor dat de pagina na een reload automatisch bovenaan begint.
 
Om ervoor te zorgen dat alle content op de juiste plaats verdwijnt en in beeld komt, zorgt dit script voor alle nummers die bij bijbehorende content passen. Elk kopje komt hier dus na 700px scrollen in beeld. Zodra de eerste content dus in beeld gekomen is, komt er na 700px het tweede kopje dus in beeld. Alle ui aspecten komen hier dus na 837px in beeld.
 
