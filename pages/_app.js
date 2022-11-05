import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import Header from '../components/Header'
import Footer from '../components/Footer'

/**
 * The chain ID 4 represents the Rinkeby network
 * The `injected` connector is a web3 connection method used by Metamask
 */
const supportedChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
