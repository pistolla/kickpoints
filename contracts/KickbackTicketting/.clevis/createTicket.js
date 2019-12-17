//
// usage: clevis contract createTicket KickbackTicketting ##accountindex## _name _location _startDate _description _price _url
//

module.exports = (contract,params,args)=>{
  const DEBUG = false
  if(DEBUG) console.log("**== Running createTicket("+args[4]+","+args[5]+","+args[6]+","+args[7]+","+args[8]+","+args[9]+") as account ["+params.accounts[args[3]]+"]")
  return contract.methods.createTicket(args[4],args[5],args[6],args[7],args[8],args[9]).send({
    from: params.accounts[args[3]],
    gas: params.gas,
    gasPrice:params.gasPrice
  })
}
