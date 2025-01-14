import ActiveLink from "./ActiveLink"
import ThemeController from "./ThemeController"

export default function Header() {
    return (
        <header>
            <nav className="navbar bg-gray-700">
                <div className="navbar-start">
                    <ActiveLink activeClassName="active" className="btn btn-ghost text-xl" href={'/'}>
                        <h1 className="text-white">zeroday0619</h1>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" className="btn btn-ghost text-xl" href={'/outsourcing'}>
                        <p className="text-white">외주</p>
                    </ActiveLink>
                </div>
                <div className="navbar-end">
                    <ThemeController />
                </div>
            </nav>
        </header>
    )
}