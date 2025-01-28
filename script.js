const quotes =["“Husk at elske mens du gør det, og husk at leve mens du gør det.” af Piet Hein",
"“Det er bedre at være ulykkelig alene end ulykkelig sammen med én” af Marilyn Monroe",
"“Kend reglerne, så du ved, hvordan du bryder dem ordentligt.” af Dalai Lama",
"“Man genkender ikke sit livs vigtige øjeblikke, før det er for sent.” af Agatha Christie",
"“Hvis man præcis ved, hvad man skal gøre, hvorfor så gøre det?” Af Pablo Picasso",
"“Husk, at for hvert minut du er vred, mister du tres sekunders lykke” af Ralph Waldo Emerson",
"“Hvis du er lykkelig, er det sandsynligvis din egen skyld, for der er masser af ting i verden at være ulykkelig over.” af Storm P",
"“Det er bedre at have elsket og mistet end slet ikke at have elsket.” af Alfred Lord Tennyson"] 

const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
console.log(randomQuotes);
window.onload = () =>{
   const quoteElement = document.getElementById("quote");
    quoteElement.innerHTML = randomQuotes;
}



