import './globals.css'

export const metadata = {
  title: 'Escalab_tech',
  description: 'Potencia a tu equipo con certificaciones de Microsoft',
  openGraph: {
    url: '',
    siteName: '',
    images: [
      {
        url: '/assets/introduccion_azure/Cover-web-event.png',
        width: 30,
        height: 30
      },
      {
        url: '/assets/introduccion_azure/Cover-web-event.png',
        width: 400,
        height: 400,
        alt: 'My custom alt'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>

      <body>

        {children}

      </body>
    </html>
  )
}
