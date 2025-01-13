import ActiveLink from "./ActiveLink"

export default function Header() {
    return (
        <header>
            <nav className="navigation">
                <ActiveLink activeClassName="active" href={'/'}>
                    <h1>zeroday0619</h1>
                </ActiveLink>
                <ActiveLink activeClassName="active" href={'/outsourcing'}>
                    <p>외주</p>
                </ActiveLink>
            </nav>
        </header>
    )
}