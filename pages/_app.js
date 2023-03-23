import Nav from '@/Components/Nav'
import { StateContext } from '@/lib/context'
import '@/styles/globals.css'
import { Provider, createClient } from 'urql'

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API })

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Provider value={client}>
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </StateContext>
  )
}
