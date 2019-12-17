//
// usage: clevis contract myTickets KickbackTicketting
//
module.exports = async (contract,params,args)=>{
  return await contract.methods.myTickets(args[3]).call()
  /*.then((##outputs##)=>{
    console.log(##results##)
  })*/
}
