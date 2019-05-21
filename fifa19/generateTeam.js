const defenseAttribute = require("./defenseAttributeValue.json");
const attackingMidfieldAttribute = require("./attackingMidfieldAttributeValue.json");
const defensiveMidfieldAttribute = require("./defensiveMidfieldAttributeValue.json");
const forwardAttribute = require("./forwardAttributeValue.json");
const goalKeeperAttribute = require("./goalKeepingAttributeValue.json");
const positionValue = require("./positionValues.json");
const overall = require("./overall.json");
const potential = require("./potential.json");
// const data = require("./fifa19.json");
const _ = require("lodash");


const getPositionValue = function(name){
  return positionValue.filter(player => player.name==name)[0].positionValue
}

const getOverall = function(name){
  return +overall.filter(player => player.name==name)[0].overall
}

const getPotential = function(name){
  return +potential.filter(player => player.name==name)[0].potential
}

const defenseRatings = defenseAttribute.map(player => ({
  name: player.name,
  rating: (getPositionValue(player.name) + (+player.attributeValue) + getOverall(player.name))*getPotential(player.name)/getOverall(player.name)
}));

const goalkeepingRatings = goalKeeperAttribute.map(player =>({
  name: player.name,
  rating : ( +player.attributeValue + getOverall(player.name)) * getPotential(player.name)/ getOverall(player.name)
}));

const attackingMidfieldRatings = attackingMidfieldAttribute.map(player =>({
  name: player.name,
  rating : ( getPositionValue(player.name) + (+player.attributeValue) + getOverall(player.name)) * getPotential(player.name)/ getOverall(player.name)
}));

const defensiveMidfieldRatings = defensiveMidfieldAttribute.map(player => ({
  name: player.name,
  rating: (getPositionValue(player.name) + (+player.attributeValue) + getOverall(player.name))*getPotential(player.name)/getOverall(player.name)
}));

const forwardRatings = forwardAttribute.map(player => ({
  name: player.name,
  rating: (getPositionValue(player.name) + (+player.attributeValue) + getOverall(player.name))*getPotential(player.name)/getOverall(player.name)
}));

const allRatings = [defenseRatings, goalkeepingRatings, attackingMidfieldRatings, defensiveMidfieldRatings, forwardRatings];

const topPlayers = allRatings.map(ratings => ratings.sort((player1,player2) => player2.rating - player1.rating).slice(0,10));

console.log(topPlayers)



// const names = data.map(player => player.Name);

// const getPositionValue = player =>
//   positionValue.filter(x => x.name === player)[0].positionValue;

// const getAttributeValue = function(player) {
//   const allPositions = [
//     defenseAttribute,
//     attackingMidfieldAttribute,
//     defensiveMidfieldAttribute,
//     forwardAttribute,
//     goalKeeperAttribute
//   ];
//   const player1 = allPositions.map(x => x.filter(y => y.name == player)).filter(z => z.length!=0);
//   console.log(_.flatten(player1));
// };

// names.map(player => ({
//   name: player,
//   rating: getPositionValue(player) + getAttributeValue(player)
// }));
