import './globals.css'

export const metadata = {
  title: 'Escalab_tech',
  description: 'Introducción a infraestructura Cloud con Microsoft Azure para equipos de tecnología. Martes 10 de octubre 18:00 a 20:00 hrs. Cupos limitados. Regístrate',
  openGraph: {
    url: '',
    siteName: '',
    images: [
      {
        url: '/assets/introduccion_azure/cover-evento.jpg',
        width: 30,
        height: 30
      },
      {
        url: '/assets/introduccion_azure/cover-evento.jpg',
        width: 300,
        height: 300
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
