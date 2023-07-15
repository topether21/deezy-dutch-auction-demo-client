import { useEffect } from 'react'
import { useSocket, useSocketEvent } from 'socket.io-react-hook'

export const useDutchAuction = () => {
  const { socket, connected, error } = useSocket('http://localhost:3001')
  const { lastMessage, sendMessage, status } = useSocketEvent(socket, 'message')

  console.log({ socket, error, lastMessage, connected, status })

  useEffect(() => {
    if (connected) {
      console.log('connected')
      sendMessage({ message: 'all' })
    }
  }, [connected])

  return { status, data: lastMessage }
}
