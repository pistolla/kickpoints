//
// usage: node contract TaskCreated KickbackTicketting
//
module.exports = (contract,params,args)=>{
  return contract.getPastEvents('TaskCreated', {
      fromBlock: params.blockNumber,
      toBlock: 'latest'
  })
}
