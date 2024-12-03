import { TopNav } from '@/components/TopNav'
import './globals.css'
import AppProvider from '@/providers/provider'
import CheckoutBar from '@/components/CheckoutBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head />
      <body>
        <AppProvider>
          <div className='w-full flex justify-center'>
          <TopNav />
          </div>
          {children}
        </AppProvider>
      </body>

    </html>
  )
}
