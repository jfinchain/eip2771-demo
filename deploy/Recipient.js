module.exports = async ({ getNamedAccounts, deployments, network }) => {
  if (!network.tags.production) {
    const { deployer } = await getNamedAccounts();
    const { deploy } = deployments;
    await deploy("Recipient", {
      args: ['0x1b99F5D4a18e095BabAaFaC3B94789b44cFD0bDd'],
      from: deployer,
      log: true,
    });
  }
};
module.exports.tags = ["Recipient"];
