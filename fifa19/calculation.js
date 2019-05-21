const FORWARD_ATTRIBUTE_COUNT = 23;
const ATTACKING_MIDFIELDER_ATTRIBUTE_COUNT = 21;
const DEFENSIVE_MIDFIELDER_ATTRIBUTE_COUNT = 25;
const DEFENDER_ATTRIBUTE_COUNT = 13;
const GOAL_KEEPING_ATTRIBUTES = 5;

const data = require("./fifa19.json");
const fs = require("fs");
const forwardPositions = ["CF", "LF", "Lw", "RF", "RW", "ST"];
const attackingMidfieldPositions = [
  "CAM",
  "CM",
  "LAM",
  "LCM",
  "LM",
  "RAM",
  "RCM",
  "RM"
];
const defensiveMidfieldPositions = ["CDM", "LDM", "RDM"];

const defensePositions = ['CB','LB','LCB','RB','RCB','LWB','RWB'];

const goalKeeperPosition = ['GK'];

const filterGKs = data.filter(player =>
  goalKeeperPosition.includes(player.Position)  
);

const filterDefenders = data.filter(player =>
  defensePositions.includes(player.Position)
);

const filterDefensiveMidfielders = data.filter(player =>
  defensiveMidfieldPositions.includes(player.Position)
);

const filterAttackingMidfielders = data.filter(player =>
  attackingMidfieldPositions.includes(player.Position)
);

const filterForwards = data.filter(player =>
  forwardPositions.includes(player.Position)
);

const goalKeepingAttributes = [
  'GKDiving',
  'GKHandling',
  'GKKicking',
  'GKPositioning',
  'GKReflexes'
];

const defenseAttributes = [
  'SprintSpeed',
  'Agility',
  'Balance',
  'Jumping',
  'Stamina',
  'Strength',
  'Aggression',
  'Interceptions',
  'Positioning',
  'Composure',
  'Marking',
  'StandingTackle',
  'SlidingTackle'
];

const defensiveMidfieldAttributes = [
  'Crossing',
  'Finishing',
  'HeadingAccuracy',
  'ShortPassing',
  'Volleys',
  'Dribbling',
  'Curve',
  'FKAccuracy',
  'LongPassing',
  'BallControl',
  'Acceleration',
  'SprintSpeed',
  'Agility',
  'Reactions',
  'Balance',
  'ShotPower',
  'Jumping',
  'Stamina',
  'Strength',
  'LongShots',
  'Vision',
  'Composure',
  'Marking',
  'StandingTackle',
  'SlidingTackle'
];

const attackingMidfieldAttributes = [
  "Crossing",
  "Finishing",
  "HeadingAccuracy",
  "ShortPassing",
  "Volleys",
  "Dribbling",
  "Curve",
  "FKAccuracy",
  "LongPassing",
  "BallControl",
  "Acceleration",
  "SprintSpeed",
  "Agility",
  "Reactions",
  "Balance",
  "ShotPower",
  "Jumping",
  "Stamina",
  "Strength",
  "LongShots",
  "Vision"
];

const forwardAttributes = [
  "Crossing",
  "Finishing",
  "HeadingAccuracy",
  "ShortPassing",
  "Volleys",
  "Dribbling",
  "Curve",
  "FKAccuracy",
  "LongPassing",
  "BallControl",
  "Acceleration",
  "SprintSpeed",
  "Agility",
  "Reactions",
  "Balance",
  "ShotPower",
  "Jumping",
  "Stamina",
  "Strength",
  "LongShots",
  "Aggression",
  "Vision",
  "Penalties"
];

const goalKeepingAttributeSum = filterGKs.map(player => ({
  name: player.Name,
  attributeValue: (goalKeepingAttributes.reduce((a, b) =>  a + player[b], 0) / GOAL_KEEPING_ATTRIBUTES
  ).toFixed(3)
}));

const defenseAttributeSum = filterDefenders.map(player => ({
  name:player.Name,
  attributeValue: (defenseAttributes.reduce((a, b) =>  a + player[b], 0) / DEFENDER_ATTRIBUTE_COUNT
  ).toFixed(3)
}));

const defensiveMidfielderAttributeSum = filterDefensiveMidfielders.map(player => ({
  name:player.Name,
  attributeValue: (defensiveMidfieldAttributes.reduce((a, b) =>  a + player[b], 0) / DEFENSIVE_MIDFIELDER_ATTRIBUTE_COUNT
  ).toFixed(3)
}));

const attackingMidfielderAttributeSum = filterAttackingMidfielders.map(player => ({
  name:player.Name,
  attributeValue: (attackingMidfieldAttributes.reduce((a, b) => a + player[b], 0) / ATTACKING_MIDFIELDER_ATTRIBUTE_COUNT
  ).toFixed(3)
}));

const forwardAttributeSum = filterForwards.map(player => ({
  name:player.Name,
  attributeValue: (forwardAttributes.reduce((a, b) => a + player[b], 0) / FORWARD_ATTRIBUTE_COUNT
  ).toFixed(3)
}));

const overall = data.map(player => ({
  name: player.Name,
  overall: eval(player.Overall)
}));

const potential = data.map(player => ({
  name: player.Name,
  potential: eval(player.Potential)
}));

const positionValues = data.map(player => ({
  name: player.Name,
  positionValue: eval(player[player.Position])
}));

fs.writeFileSync(
  'potential.json',
  JSON.stringify(potential, null, 2)
)

fs.writeFileSync(
  'overall.json',
  JSON.stringify(overall, null, 2)
)

fs.writeFileSync(
  'goalKeepingAttributeValue.json',
  JSON.stringify(goalKeepingAttributeSum, null, 2)
)

fs.writeFileSync(
  'defenseAttributeValue.json',
  JSON.stringify(defenseAttributeSum, null, 2)
);

fs.writeFileSync(
  'defensiveMidfieldAttributeValue.json',
  JSON.stringify(defensiveMidfielderAttributeSum, null, 2)
);

fs.writeFileSync(
  "forwardAttributeValue.json",
  JSON.stringify(forwardAttributeSum, null, 2)
);

fs.writeFileSync(
  "attackingMidfieldAttributeValue.json",
  JSON.stringify(attackingMidfielderAttributeSum, null, 2)
);

fs.writeFileSync(
  "positionValues.json",
  JSON.stringify(positionValues, null, 2)
);
