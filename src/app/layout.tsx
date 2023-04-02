export const metadata = {
  title: 'Country App',
  description: 'app of countries',
}

interface layoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: layoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Where in the World?</h1>
          <button>dark</button>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
