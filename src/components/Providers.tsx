import { SessionProvider } from 'next-auth/react'
import React from 'react'

type Props = {
  chlidren: React.ReactNode
}

const Providers = ({chlidren}: Props) => {
  return (
    <SessionProvider>{chlidren}</SessionProvider>
  )
}

export default Providers