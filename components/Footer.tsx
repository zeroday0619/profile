import SVG from "./Logos";

export default function Footer() {
    return (
        <>
        <footer className="footer bg-neutral text-neutral-content p-10">
            <aside>
                <p>
                    Python Software Engineer
                <br />
                    Interested in computer science and accelerated computing
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                <a href="https://github.com/zeroday0619">
                    <SVG logo={'github'} width={"24"} height={"24"} />
                </a>
                <a href="https://twitter.com/@dev_zeroday0619">
                    <SVG logo={'twitter'} width={"24"} height={"24"} />
                </a>
                <a href="https://social.silicon.moe/@zeroday0619">
                    <SVG logo={'mastodon'} width={"24"} height={"24"} />
                </a>
                <a href="https://www.linkedin.com/in/euiseo-cha">
                    <SVG logo={'linkedin'} width={"24"} height={"24"} />
                </a>
                <a href="mailto:euiseo.cha@gmail.com">
                    <SVG logo={'mail'} width={"24"} height={"24"} />
                </a>
                </div>
            </nav>
        </footer>
        <footer className="footer footer-center text-base-content p-4 bg-gray-700">
            <aside>
                <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by zeroday0619</p>
            </aside>
        </footer>
        </>
    );
}