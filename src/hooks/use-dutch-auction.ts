import { useEffect } from 'react'
import { useSocket, useSocketEvent } from 'socket.io-react-hook'

export const useDutchAuction = () => {
  const { socket, connected, error } = useSocket('http://localhost:3001')
  const { lastMessage, sendMessage, status } = useSocketEvent(socket, 'message')

  useEffect(() => {
    if (connected) {
      console.log('connected')
      sendMessage({ join: 'all' })
    }
  }, [connected])

  useEffect(() => {
    console.log(['lastMessage'], lastMessage)
  }, [lastMessage])

  return { status, data: lastMessage, error }
}
