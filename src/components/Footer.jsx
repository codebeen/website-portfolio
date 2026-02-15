import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/70">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr_1fr]">
                    <div className="space-y-4">
                        <Link
                            to="/"
                            className="inline-block text-xl font-bold text-white hover:text-neutral-300 transition-colors"
                        >
                            Darben Lamonte
                        </Link>
                        <p class="text-sm text-neutral-400 max-w-md">
                            Transforming ideas into powerful digital solutions.
                            Software Engineer specializing in AI-driven systems,
                            backend development, and scalable software
                            architecture.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Navigation
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                                    to="/projects"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                                    to="/experience"
                                >
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                                    to="/certifications"
                                >
                                    Certifications
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                                    to="/contact"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Connect
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://github.com/codebeen"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="group relative"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/50 transition-all duration-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-github h-5 w-5 text-neutral-400 group-hover:text-white transition-colors"
                                        aria-hidden="true"
                                    >
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>
                                </div>
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    GitHub
                                </span>
                            </a>
                            <a
                                href="https://linkedin.com/in/darben/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="group relative"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/50 transition-all duration-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-linkedin h-5 w-5 text-neutral-400 group-hover:text-white transition-colors"
                                        aria-hidden="true"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect
                                            width="4"
                                            height="12"
                                            x="2"
                                            y="9"
                                        ></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </div>
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    LinkedIn
                                </span>
                            </a>
                            <a
                                href="mailto:darbenlamonte@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Send Email"
                                className="group relative"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/50 transition-all duration-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-mail h-5 w-5 text-neutral-400 group-hover:text-white transition-colors"
                                        aria-hidden="true"
                                    >
                                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                        <rect
                                            x="2"
                                            y="4"
                                            width="20"
                                            height="16"
                                            rx="2"
                                        ></rect>
                                    </svg>
                                </div>
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    Email
                                </span>
                            </a>
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View Resume"
                                className="group relative"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/50 transition-all duration-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-file-text h-5 w-5 text-neutral-400 group-hover:text-white transition-colors"
                                        aria-hidden="true"
                                    >
                                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        <path d="M10 9H8"></path>
                                        <path d="M16 13H8"></path>
                                        <path d="M16 17H8"></path>
                                    </svg>
                                </div>
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    Resume
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-neutral-800/50">
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <p className="text-sm text-neutral-400">
                            © 2026 Darben Lamonte. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
