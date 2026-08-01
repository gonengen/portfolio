import Navbar from './Navbar'
import Footer from './Footer'

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen w-full bg-surface">
      <Navbar />
      <div className="page-shell mx-auto flex w-full max-w-[1440px] flex-col gap-[var(--spacing-section)] px-[var(--spacing-page-x)] py-[var(--spacing-page-y)] max-lg:px-6 max-lg:py-6">
        <main className="flex flex-1 flex-col gap-[var(--spacing-section)]">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
