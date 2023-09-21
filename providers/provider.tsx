'use client'

import { store } from '@/redux/store'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { createContext } from 'react'
import { Provider } from 'react-redux'

export const ThemeContext = createContext({})

export default function AppProvider({ children, session }: { children: React.ReactNode, session: Session }) {
    console.log('Session', session);
    return <ThemeContext.Provider value="dark">
        <Provider store={store}>
            <SessionProvider session={session}>
                {children}
            </SessionProvider>
        </Provider>
    </ThemeContext.Provider>
}