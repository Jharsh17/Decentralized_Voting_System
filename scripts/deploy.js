async function main() {
  const Voting = await ethers.getContractFactory("Voting");

  const customStartDate = "2023-09-22 02:45:00"; // YYYY-MM-DD HH:mm:ss
  const customVotingStart = Math.floor(Date.parse(customStartDate) / 1000); // Convert to seconds


  // Start deployment, returning a promise that resolves to a contract object
  const Voting_ = await Voting.deploy(["Mark", "Mike", "Henry", "Rock"], 2, customVotingStart);
  console.log("Contract address:", Voting_.address);


}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });