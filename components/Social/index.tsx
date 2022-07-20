import { AiOutlineLinkedin, AiFillGithub, AiFillTwitterCircle } from "react-icons/ai"
import Link from "next/link"

export default function Social() {
    return (
        <ul className="flex gap-2 text-5xl text-gray-700 dark:text-white lg:text-4xl">
            <li>
                <Link
                    href="https://github.com/alisonjsilva/">

                    <a className="hover:transition-all hover:ease-in-out hover:text-cyan-600" target="_blank">
                        <AiFillGithub />
                    </a>
                </Link>
            </li>
            <li>
                <Link
                    href="https://www.linkedin.com/in/alisonjsilva/">

                    <a className="hover:transition-all hover:ease-in-out hover:text-cyan-600" target="_blank">
                        <AiOutlineLinkedin />
                    </a>
                </Link>
            </li>
            <li>
                <Link
                    href="https://twitter.com/alisonjsilva/">

                    <a className="hover:transition-all hover:ease-in-out hover:text-cyan-600" target="_blank">
                        <AiFillTwitterCircle />
                    </a>
                </Link>
            </li>
        </ul>


    )
}