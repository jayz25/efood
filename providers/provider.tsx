'use client'

import { store } from '@/redux/store'
import { createContext } from 'react'
import { Provider } from 'react-redux'

export const ThemeContext = createContext({})

export default function AppProvider({ children }: { children: React.ReactNode }) {
    return <ThemeContext.Provider value="dark">
        <Provider store={store}>
            {children}
        </Provider>
    </ThemeContext.Provider>
}