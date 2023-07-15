import { useDutchAuction } from 'hooks/use-dutch-auction'

export const Inscription = () => {
  const { status, data } = useDutchAuction()

  return (
    <>
      <div>Status: {status}</div>
      <div>Last message: {JSON.stringify(data, null, 2)}</div>
    </>
  )
}
