export default function Footer() {
    return (
        <>
            <footer className="py-8 px-4 bg-gray-900 text-white mt-12 flex flex-col justify-between mb-0 translate-y-0">
                <div className="flex flex-col mt-6 md:mt-0">
                    <a href="https://twitter.com/@dev_zeroday0619" className="block px-3 py-2 text-white bg-gray-700 rounded mb-2 hover:bg-gray-800 transition duration-300">Twitter: @dev_zeroday0619</a>
                    <a href="https://social.silicon.moe/@zeroday0619" className="block px-3 py-2 text-white bg-gray-700 rounded mb-2 hover:bg-gray-800 transition duration-300">Mastodon: @zeroday0619@silicon.moe</a>
                    <a href="mailto:zeroday0619_dev@outlook.com" className="block px-3 py-2 text-white bg-gray-700 rounded hover:bg-gray-800 transition duration-300">Email: zeroday0619_dev@outlook.com</a>
                    <a href="https://github.com/zeroday0619" className="block px-3 py-2 text-white bg-gray-700 rounded mb-2 hover:bg-gray-800 transition duration-300">GitHub: @zeroday0619</a>
                </div>
                <div className="mb-0">
                    <p className="text-1xl font-bold mt-7">ⓒ 2025. zeroday0619 All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}