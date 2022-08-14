module.exports = async ({ getNamedAccounts, deployments, network }) => {
  if (!network.tags.production) {
    const { deployer } = await getNamedAccounts();
    const { deploy } = deployments;
    await deploy("MinimalForwarder", {
      from: deployer,
      log: true,
    });
  }
};
module.exports.tags = ["MinimalForwarder"];
