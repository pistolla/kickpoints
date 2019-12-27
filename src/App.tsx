import React, { useState, Fragment } from 'react';
import logo from './logo.svg';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect, withRouter } from 'react-router-dom';
import { ThemeProvider, useTheme, makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { style } from '@material-ui/system';
import { AppBar, Toolbar, IconButton, Typography, Grid, CssBaseline, Switch as UISwitch, FormControlLabel } from '@material-ui/core';
import { Dapparatus, Gas, ContractLoader, Transactions, Events, Scaler, Blockie, Address, Button } from "dapparatus"
import Web3 from 'web3';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { useThemed } from './hooks/useThemed';
import { Gitcoin } from './components/profile/Gitcoin';
import { Ticket } from './components/events/Ticket';
import { Account } from './components/account/Account';

const METATX = {
  endpoint: "http://127.0.0.1:8545/",
  contract: "0x2E14d5D882F4b66e6Ff091c3aD24F6e2CE5Dd7C8"
}

const useStyles = makeStyles((theme) => ({
  app: {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none'
  },
  logo: {
    height: 65,
    width: 70
  },
  appbar: {
    paddingTop: theme.spacing(0)
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    flexDirection: "column"
  },
  navbar: {
    width: "100%",
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyItems: "flex-start",
    alignItems: "center"
  },
  infobar: {
    flexGrow: 1,
    width: "100%",
    display: 'flex',
    justifyContent: 'space-between'
  },
  apptitle: {
    flexGrow: 1
  },
  main: {
    position: 'absolute',
    backgroundColor: "#FFFFFF",
    marginTop: "75px",
    width: "100%",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    minHeight: '100vh'
  },
  container: {
    maxWidth: 550,
    width: 550,
    alignSelf: "flex-start",
    zIndex: 1299
  },
  containerItem: {
    maxWidth: "100%"
  },
  infobarright: {
    display: "flex",
    flexDirection: "column",
    color: "#FFFFFF",
    alignSelf: 'flex-end'
  },
  infobarleft: {
    display: "flex",
    flexDirection: "column",
    color: "#FFFFFF",
    alignSelf: 'flex-end'
  },
  menuBtn: {
    alignSelf: "flex-end",
    color: "#FFFFFF"
  }
}));

const App: React.FC = (props: any) => {
  const classes = useStyles();
  // const history = props.history;

  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState({});
  const [isweb3, setIsweb3] = useState(false);
  const [contracts, setContracts] = useState(null);
  const [tx, setTx] = useState(null);
  const [gwei, setGwei] = useState(0);
  const [block, setBlock] = useState(null);
  const [avgBlockTime, setAvgBlockTime] = useState(null);
  const [etherscan, setEtherscan] = useState(null);
  const [count, setCount] = useState(null);
  const [metaContract, setMetaContract] = useState(null);
  const [metaAccount, setMetaAccount] = useState(null);
  const [loggedin, setLoggedin] = useState(false);
  const [balance, setBalance] = useState(null);
  const [theme, toggleTheme] = useThemed();
  const [toggle, setToggle] = useState(false);
  const [themeConfig, setThemeConfig] = useState(createMuiTheme(theme))
  // const history = useHistory();
  let connectedDisplay = []
  let contractsDisplay = []

  if (isweb3) {
    connectedDisplay.push(
      <Gas
        key="Gas"
        onUpdate={(gasPrice: number) => {
          console.log("Gas price update:", gasPrice)
          setGwei(gasPrice)
        }}
      />
    )

    connectedDisplay.push(
      <ContractLoader
        key="ContractLoader"
        config={{ DEBUG: true }}
        web3={web3}
        // require={(path: string) => { 
        //   return require(`${__dirname}/${path}`) 
        // }}
        onReady={(contracts: any, customLoader: any) => {
          console.log("contracts loaded", contracts)
          setContracts(contracts);
          console.log("====!! Loading dyamic contract " + METATX.contract)
          let metaContract = customLoader("BouncerProxy", METATX.contract)//new this.state.web3.eth.Contract(require("./contracts/BouncerProxy.abi.js"),this.state.address)
          console.log("====!! metaContract:", metaContract)
          setMetaContract(metaContract)
        }}
      />
    )
    connectedDisplay.push(
      <Transactions
        key="Transactions"
        config={{ DEBUG: false }}
        metaAccount={metaAccount}
        metaContract={metaContract}
        metatx={METATX}
        account={account}
        gwei={gwei}
        web3={web3}
        block={block}
        avgBlockTime={avgBlockTime}
        etherscan={etherscan}
        onReady={(state: any) => {
          console.log("Transactions component is ready:", state)
          setWeb3(state.web3);
          setAccount(state.account);
          setContracts(state.contracts);
          setTx(state.tx);
          setGwei(state.gwei);
          setBlock(state.block);
          setAvgBlockTime(state.avgBlockTime);
          setEtherscan(state.etherscan);
        }}
        onReceipt={(transaction: any, receipt: any) => {
          // this is one way to get the deployed contract address, but instead I'll switch
          //  to a more straight forward callback system above
          console.log("Transaction Receipt", transaction, receipt)
        }}
      />
    )

    if (contracts != null) {
      contractsDisplay.push(
        <div key="UI" style={{ padding: 30 }}>
          <div style={{ fontSize: 40 }}>
            {count}
          </div>
          <Button size="medium" onClick={() => {
            console.log("addAmount RESULT");
          }}>
          </Button>
        </div>
      )
    }
  }
  
  
  return (
    <MuiThemeProvider theme={themeConfig}>
      <CssBaseline />
      <div className={classes.app}>
        <AppBar position="relative" elevation={0} className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.navbar}>
              <IconButton>
                <img src={logo} className={classes.logo} alt="logo" />
              </IconButton>
              <Typography variant="h6" className={classes.apptitle}>
                Global Communities
              </Typography>
              <FormControlLabel 
              className={classes.menuBtn}
              label="Change Theme"
              control={<UISwitch onClick={()=>{ 
                let typename = toggle === true ? "dark": "light"
                theme.palette.type = typename
                console.log(theme)
                toggleTheme()
                setToggle(!toggle)
                setThemeConfig(createMuiTheme(theme));
              }} />} />
              {/* <Button size="small" className={classes.menuBtn} onClick={handleLogin()}>{(loggedin === true) ? 'Logout' : 'Login'}</Button> */}
            </div>
            <div className={classes.infobar}>
              <div className={classes.infobarright}>
                <Typography variant="h6" color="inherit">Connected</Typography>
                {connectedDisplay}
              </div>
              <div className={classes.infobarleft}>
                <Typography variant="h6" color="inherit">Contracts</Typography>
                {contractsDisplay}
              </div>

            </div>
          </Toolbar>
        </AppBar>
        <Router>
          <div className={classes.main}>
            <Grid className={classes.container} container justify="center" direction="column">
              <Grid item className={classes.containerItem}>
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route exact path="/" component={Home}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/ticket" component={Ticket}/>
                  <Route path="/profile" component={Gitcoin} />
                  <Route path="/account" component={Account} />
                </Switch>
              </Grid>
            </Grid>
          </div>
        </Router>
      </div >
      <footer>
        <Dapparatus
          config={{
            DEBUG: false,
            requiredNetwork: ['Unknown', 'Rinkeby'],
          }}
          metatx={METATX}
          fallbackWeb3Provider={new Web3.providers.HttpProvider('http://127.0.0.1:8545')}
          onUpdate={(state: any) => {
            console.log("metamask state update:", state)
            if (state.web3Provider) {
              let w3 = new Web3(state.web3Provider);
              setWeb3(w3);
              setIsweb3(true)
              setAccount(state.account);
              setAvgBlockTime(state.avgBlockTime);
              setBalance(state.balance);
              setBlock(state.block);
              setEtherscan(state.etherscan);
              setMetaAccount(state.metaAccount);
            }
          }}
        />

      </footer>
      </MuiThemeProvider>
  );
}

export default App;
