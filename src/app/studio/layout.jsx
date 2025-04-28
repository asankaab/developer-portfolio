export const metadata = {
  title: 'Studio',
  description: 'Sanity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
