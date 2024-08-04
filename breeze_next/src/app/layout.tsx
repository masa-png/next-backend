import './global.css'

export const metadata = {
    title: 'Laravel',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="ja">
            <body className="antialiased">{children}</body>
        </html>
    )
}

export default RootLayout
