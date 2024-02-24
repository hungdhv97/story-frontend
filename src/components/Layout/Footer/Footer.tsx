import { Facebook, Github } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer>
            <div className="mt-10 bg-slate-300 dark:bg-slate-700">
                <div className="container flex flex-row items-center">
                    <div className="flex size-full basis-1/3 items-center justify-center">
                        <Link
                            href="/"
                            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        >
                            <img
                                src="/images/logo.jpg"
                                className="h-24 rounded-full shadow-lg shadow-cyan-500/50"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid size-full basis-2/3 grid-cols-3 gap-4 py-6">
                        <div>
                            <div className="mb-4 text-center text-2xl font-bold uppercase">
                                Contributors
                            </div>
                            <ul>
                                <li className="mb-4">
                                    Hung.Thai{' '}
                                    <span className="font-bold">(Coder)</span>
                                </li>
                                <li className="mb-4">
                                    Hung.Luong{' '}
                                    <span className="font-bold">
                                        (Designer)
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="mb-4 text-2xl font-bold uppercase">
                                CONTACT
                            </div>
                            <ul>
                                <li className="mb-4 flex items-center justify-center md:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-3 h-5 w-5"
                                    >
                                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                    </svg>
                                    Cau Giay, Ha Noi
                                </li>
                                <li className="mb-4 flex items-center justify-center md:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-3 h-5 w-5"
                                    >
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                    <Link
                                        href="mailto:hungdhv97@gmail.com"
                                        className="hover:underline"
                                    >
                                        hungdhv97@gmail.com
                                    </Link>
                                </li>
                                <li className="mb-4 flex items-center justify-center md:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-3 h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    0948 961 619
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="mb-4 text-2xl font-bold uppercase">
                                Social Networks
                            </div>
                            <div className="flex w-full justify-between px-12">
                                <Link
                                    href="https://github.com/hungdhv97"
                                    passHref
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="size-10 opacity-70 transition duration-300 ease-in-out hover:scale-125 hover:opacity-100" />
                                </Link>
                                <Link
                                    href="https://www.facebook.com/doanhung.thai.1/"
                                    passHref
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Facebook className="size-10 opacity-70 transition duration-300 ease-in-out hover:scale-125 hover:opacity-100" />
                                </Link>
                                <Link
                                    href="https://t.me/hungdhv97/"
                                    passHref
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="size-10 opacity-70 transition duration-300 ease-in-out hover:scale-125 hover:opacity-100"
                                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjQxNDIxOyI+PHBhdGggaWQ9InRlbGVncmFtLTEiIGQ9Ik0xOC4zODQsMjIuNzc5YzAuMzIyLDAuMjI4IDAuNzM3LDAuMjg1IDEuMTA3LDAuMTQ1YzAuMzcsLTAuMTQxIDAuNjQyLC0wLjQ1NyAwLjcyNCwtMC44NGMwLjg2OSwtNC4wODQgMi45NzcsLTE0LjQyMSAzLjc2OCwtMTguMTM2YzAuMDYsLTAuMjggLTAuMDQsLTAuNTcxIC0wLjI2LC0wLjc1OGMtMC4yMiwtMC4xODcgLTAuNTI1LC0wLjI0MSAtMC43OTcsLTAuMTRjLTQuMTkzLDEuNTUyIC0xNy4xMDYsNi4zOTcgLTIyLjM4NCw4LjM1Yy0wLjMzNSwwLjEyNCAtMC41NTMsMC40NDYgLTAuNTQyLDAuNzk5YzAuMDEyLDAuMzU0IDAuMjUsMC42NjEgMC41OTMsMC43NjRjMi4zNjcsMC43MDggNS40NzQsMS42OTMgNS40NzQsMS42OTNjMCwwIDEuNDUyLDQuMzg1IDIuMjA5LDYuNjE1YzAuMDk1LDAuMjggMC4zMTQsMC41IDAuNjAzLDAuNTc2YzAuMjg4LDAuMDc1IDAuNTk2LC0wLjAwNCAwLjgxMSwtMC4yMDdjMS4yMTYsLTEuMTQ4IDMuMDk2LC0yLjkyMyAzLjA5NiwtMi45MjNjMCwwIDMuNTcyLDIuNjE5IDUuNTk4LDQuMDYyWm0tMTEuMDEsLTguNjc3bDEuNjc5LDUuNTM4bDAuMzczLC0zLjUwN2MwLDAgNi40ODcsLTUuODUxIDEwLjE4NSwtOS4xODZjMC4xMDgsLTAuMDk4IDAuMTIzLC0wLjI2MiAwLjAzMywtMC4zNzdjLTAuMDg5LC0wLjExNSAtMC4yNTMsLTAuMTQyIC0wLjM3NiwtMC4wNjRjLTQuMjg2LDIuNzM3IC0xMS44OTQsNy41OTYgLTExLjg5NCw3LjU5NloiLz48L3N2Zz4="
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="w-full bg-slate-200 py-4 text-center text-2xl dark:bg-slate-600">
                © 2024 Copyright:{' '}
                <span className="font-bold">HH Contributors</span>
            </p>
        </footer>
    );
}
