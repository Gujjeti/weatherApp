import '@/styles/globals.css'
import Header from '@/components/Header'
import { WeatherDataContext } from '@/WeatherDataContext'
export default function App({ Component, pageProps }) {
  return <>
      <WeatherDataContext>
          <Header/>
      <Component {...pageProps} />
      </WeatherDataContext>
  </>
}
