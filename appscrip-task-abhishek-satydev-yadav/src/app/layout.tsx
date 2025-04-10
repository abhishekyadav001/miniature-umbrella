import '@/styles/globals.css';

export const metadata = {
  title: 'Mettā Muse',
  description: 'Discover our products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, minHeight: '100vh' }}>{children}</body>
    </html>
  )
}
