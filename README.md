
Ontwerp en maak een interactieve website voor een opdrachtgever.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/INSTRUCTIONS.md)

# Titel
Deze 'fix-the-flow-interactive-website' sprint, hebben wij interacties gemaakt. Ik heb ervoor gezorgd dat de AI chat opent, sluit en een beetje werkt. 

## Beschrijving

https://github.com/user-attachments/assets/e735cebc-f754-430c-8d9e-10635276d859

In dit filmpje zie je dat wanneer ik begin met typen of op 'enter' knop klik in de bar er een chat opent met een kleine animatie. Dan kun je aan de bovenkant bij het pijltje de chat weer dichtklappen. Een andere manier om de chat te openen is om op de 'search' knop te klikken. In de chat is het mogelijk om dan een filter te selecteren, waarna er één product over blijft (dit is een dummy voorbeeld, dus werkt niet als een echt filter op databases).

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
**Door CSS komt de chat omhoog als een animatie.**
Door keyframes en verschillende animatie types, heb ik ervoor gezorgd dat de chat eerst een klein beetje omhoog komt en wel de volle breedte pakt, en daarna de volledige hoogte en breedte pakt.

**Door middel van JavaScript opent de chat wanneer je op 'enter' klikt of als je op de search knop klikt.**
Het moment dat je op de 'enter' toets klikt wanneer je typt in de input of wanneer je klikt op de 'search' button, dan wordt er een classlist toegevoegd die zegt dat er een article moet zijn (deze staat normaal op niet laten zien). Ook wordt er een classlist toegevoegd aan de 'I'm looking for a gift for... my uncle' titel, die zegt dat deze titel niet meer moet worden laten zien.

## Bronnen
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@keyframes

https://github.com/fdnd-task/ui-events/blob/main/docs/INSTRUCTIONS.md

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

