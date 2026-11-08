import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import "@/styles/globals.css"

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <div className='bg-red-500'>
                <Outlet />
            </div>
        </React.Fragment>
    )
}
