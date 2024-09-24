export const metadata = {
  title: 'Studio',
  description: 'Sanity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin: 0}}>{children}</body>
    </html>
  )
}
