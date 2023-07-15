import { Inscription } from './dutch-auction'
import { IoProvider } from 'socket.io-react-hook'

function App() {
  return (
    <IoProvider>
      <div className="relative overflow-hidden bg-white">
        <Inscription />
      </div>
    </IoProvider>
  )
}

export default App
