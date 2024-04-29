import React from 'react'
import ReactDOM from 'react-dom/client'
import Book from './Book.jsx'
import MusicBand from './MusicBand.jsx'
import './index.css'
import Receipt from './Receipt.jsx'

const recensions= [{
  title:"Film review: the Harry Potter film series",
  body:"The Harry Potter film series is famous all over the world and is loved by children, teenagers and adults. It's based on the books by JK Rowling. The first film, Harry Potter and the Philosopher's Stone, was released in 2001. The whole series consists of eight fantasy films. In each film the main character, Harry, is played by Daniel Radcliffe."
},
{
title:"The plot",
body:"The story begins when 11-year-old orphan Harry discovers that his parents were wizards and he starts his education in magic at Hogwart's School of Witchcraft and Wizardry. There he makes two close friends, Ron and Hermione, who share his adventures. Each film ends dramatically, often with a battle between Harry and his worst enemy, the evil wizard Lord Voldemort."
},
]
const members = ['Dana Foote','Teddy O\'Mara','Palmer Foote','Emma Welch','Austin Holmes']
const albums = [{
  title:"I Am the Dog (19 May 2023; Atlantic Records)",
  image:"src/assets/album-logo.jpg"
}]

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <Book 
     title="Garry Potter"
     author="J. K. Rowling"
     genre="fantasy"
     pages="250"
     recensions={recensions}
     />
     <MusicBand
     title="Sir Chloe" 
     members={members}
     albums={albums}
     />
     <Receipt
     title="Borsh"
     guide="Preheat the oven to 200C. In an ovenproof dish, bake the pork ribs for about 30 minutes or until a golden crust forms. Meanwhile, wash and roughly chop the celery root. There is no need to peel it. Cut up the carrots into chunks of about the same size as the celery pieces. Transfer the baked ribs into a large pot, add about 3 litres of water. Add the celery and carrot chunks, and half an unpeeled onion. Bring to a boil and cook over medium heat for about 30 minutes."
     photo="/src/assets/borsh.jpg"
     ingredients={["400-500 g pork ribs","2 beets","2 tomatoes","¼ celery root"]}
     />
  </>
 
)
