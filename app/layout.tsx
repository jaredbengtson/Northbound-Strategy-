import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Northbound Strategy', description: 'Strategy. Alignment. Ascent.' };
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
