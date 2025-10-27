import { cn } from '@/lib/utils'
import React from 'react'

export default function GlassWraper({ className, children }: React.PropsWithChildren<{ className?: string }>) {

    return (
        <div className={cn("bg-white/40 backdrop-blur-xl p-4 rounded-2xl outline-[2px] outline-white/40", className)}>{children}</div>
    )
}
