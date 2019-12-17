//
// usage: clevis contract ticketCount KickbackTicketting
//
module.exports = async (contract,params,args)=>{
  return await contract.methods.ticketCount().call()
  /*.then((##outputs##)=>{
    console.log(##results##)
  })*/
}
