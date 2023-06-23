'use strict'

const charlie = document.querySelector('#charlie')
const david = document.querySelector('#david')
const scottie = document.querySelector('#scottie')
const crystal = document.querySelector('#crystal')
const board = document.querySelector('#board')

const charlieBio = document.querySelector('#charlieBio')
const davidBio = document.querySelector('#davidBio')
const scottieBio = document.querySelector('#scottieBio')
const crystalBio = document.querySelector('#crystalBio')
const boardBio = document.querySelector('#boardBio')

charlie.addEventListener('click', () => {
  charlieBio.showModal()
})
scottie.addEventListener('click', () => {
  scottieBio.showModal()
})
david.addEventListener('click', () => {
  crystalBio.showModal()
})
crystal.addEventListener('click', () => {
  davidBio.showModal()
})
board.addEventListener('click', () => {
  boardBio.showModal()
})
