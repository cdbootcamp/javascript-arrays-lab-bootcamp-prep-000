const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var n1  = [...kittens,name]
  return n1
}

function prependKitten(name) {
  var n2 = [name,...kittens]
  return n2
}

function removeLastKitten() {
  n3 = kittens.slice(1)
  return kittens
}
