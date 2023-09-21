import { TopNav } from '@/components/TopNav'
import './globals.css'
import AppProvider from '@/providers/provider'

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head />
      <body>
        <AppProvider session={session}>
            <TopNav />
            {children}
        </AppProvider>
      </body>

    </html>
  )
}
