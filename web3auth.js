import { Web3Auth } from "@web3auth/modal";
import { useEffect } from "react";

export default function Home() {



// Initialize within useEffect()
const web3auth = new Web3Auth({
  clientId: "BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ", // Get your Client ID from the Web3Auth Dashboard
  web3AuthNetwork: "sapphire_mainnet", // Web3Auth Network
  chainConfig: {
    chainNamespace: "solana",
    chainId: "0x2",
    rpcTarget: "https://api.devnet.solana.com",
    displayName: "Solana Mainnet",
    blockExplorer: "https://explorer.solana.com/",
    ticker: "SOL",
    tickerName: "Solana",
  },
});



async function login(){
  await web3auth.initModal();
  await web3auth.connect();
  console.log(await web3auth.getUserInfo()) // web3auth instance

}

//Sample button to trigger login attempt

  

  return (
     
      <main>
          <div>
          <h3>Web3 Authentication</h3>
          <button onClick={() => login()} value="Login"> Connect Wallet</button>
        </div>
      </main>
  )
}
