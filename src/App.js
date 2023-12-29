import AnimatedRoutes from "./Components/AnimatedRoutes";
import { ShopContextProvider } from './context/ShopContextProvider';

const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <AnimatedRoutes />
      </ShopContextProvider>
    </div>
  )
}

export default App;