'use strict'

const charlie = document.querySelector('#charlie')
const david = document.querySelector('#david')
const scottie = document.querySelector('#scottie')
const bethany = document.querySelector('#bethany')
const board = document.querySelector('#board')

const modal = document.querySelector('#modal')
// const backdrop = window.getComputedStyle(modal, '::backdrop')
// console.log(backdrop)

const closeButton = document.querySelector('#close-button')
const fullName = document.querySelector('#name')
const position = document.querySelector('#position')
const bioParagraph = document.querySelector('#bio')

const bios = {
  charlie: `Pastor Charlie came to Clearview Chapel in October of 2005. He loves
    to spend time with his beautiful wife Kerri and their three kids:
    Logan, Emma, and Cooper. Charlie also enjoys cycling, playing church
    softball, hiking, and coaching. Charlie has a BA in Church
    Ministries from Warner University, a MA in Theological Studies from
    Asbury Theological Seminary, and a PhD in Organizational Leadership
    from Eastern University. He has been in ministry since 1998.His
    ultimate goal is to love Jesus and serve the church for which he
    died.`,
  scottie: `Scottie graduated with an associate’s degree in business
    administration from Andrew College in 2005. He is an owner/operator
    at Troup Farm & Yard in LaGrange. He has been married to his wife
    Cailin since 2012. They have three kids: Beckham, Anderson, and
    Elodie. They enjoy watching movies and being outdoors. Scottie has a
    passion for youth and young adult ministry.`,
  bethany: `Bethany was born and raised in Atlanta, GA. She graduated from Southeastern University in 2007 with a bachelor's degree in English and Intercultural Studies. For 10 years, Bethany worked in foreign missions as a Christian educator, ESL teacher and missions staff in Russia, Israel and Panama. She has also worked as a Children's director at a church in Alabama for two years. Bethany has been married to her husband Corey since 2012 and has two children, Anne and Ben. She is also a part-time teacher at Lafayette Christian School in Lagrange. Bethany’s heart is to see the children of this world find their hope and purpose in Jesus. She believes educating and empowering the next generation with the Gospel will change the world.`,
  david: `David grew up in Northeast Ohio where he spent years cultivating and nurturing his life-long passion for worship ministry. Eventually, this led to worship ministry positions spanning from camp ministry to bible college training to leading worship at both small and large multi-site megachurches. David is also the Paul S. and Jean R. Amos
    Distinguished Chair in Music and Director of Choral Activities at the Schwob School of Music at Columbus State University where he conducts the Schwob Singers, Choral Union, and teaches courses in voice and conducting. David holds the Doctor of Musical Arts degree
    in conducting from the University of Michigan, the Master of Music degree in conducting from the Eastman School of Music, and the Bachelor of Music degree in sacred music (vocal performance emphasis) from the Moody Bible Institute in Chicago, IL. David resides in Columbus, GA and is an avid coffee connoisseur, world traveler, and culinary arts champion.`,
  board: `Our church is led by a seven member board composed of godly women and men. These spiritually mature individuals are chosen by the congregation on an annual basis to serve three year terms. As a team, they gather together and seek God’s direction when it comes to guidance for the church. This group seeks to model servant leadership, wisdom, and unity within the body of Christ.`,
}

modal.addEventListener('click', function (event) {
  var rect = modal.getBoundingClientRect()
  var isInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width
  if (!isInDialog) {
    modal.close()
  }
})

closeButton.addEventListener('click', () => {
  modal.close()
})

charlie.addEventListener('click', () => {
  fullName.innerHTML = charlie.querySelector('h3').innerHTML
  position.innerHTML = charlie.querySelector('h4').innerHTML
  bioParagraph.innerHTML = bios.charlie
  modal.showModal()
})
scottie.addEventListener('click', () => {
  fullName.innerHTML = scottie.querySelector('h3').innerHTML
  position.innerHTML = scottie.querySelector('h4').innerHTML
  bioParagraph.innerHTML = bios.scottie
  modal.showModal()
})
bethany.addEventListener('click', () => {
  fullName.innerHTML = bethany.querySelector('h3').innerHTML
  position.innerHTML = bethany.querySelector('h4').innerHTML
  bioParagraph.innerHTML = bios.bethany
  modal.showModal()
})
david.addEventListener('click', () => {
  fullName.innerHTML = david.querySelector('h3').innerHTML
  position.innerHTML = david.querySelector('h4').innerHTML
  bioParagraph.innerHTML = bios.david
  modal.showModal()
})
board.addEventListener('click', () => {
  fullName.innerHTML = board.querySelector('h3').innerHTML
  position.innerHTML = board.querySelector('h4').innerHTML
  bioParagraph.innerHTML = bios.board
  modal.showModal()
})
