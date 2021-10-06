const ZombieFeeding = artifacts.require("ZombieFeeding");

module.exports = function (deployer) {
  await ZombieFeeding.deploy();
  const zombiefeeding = await ZombieFeeding.deployed()
};
