import { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import HeadGlobal from '../components/heads/Global'
import GlobalStyle from '../styles/global'

const TemplateRestaurant: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <HeadGlobal/>
      <Component {...pageProps}/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default TemplateRestaurant