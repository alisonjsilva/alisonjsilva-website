import { AiOutlineLinkedin, AiFillGithub, AiFillTwitterCircle } from "react-icons/ai"
import Link from "next/link"

export default function Social() {
    return (
        <ul className="flex gap-2 text-5xl text-gray-700 dark:text-white lg:text-4xl">
            <li>
                <Link title="GitHub"
                    href="https://github.com/alisonjsilva/">

                    <a className="hover:transition-all hover:duration-500 hover:ease-in-out hover:text-cyan-600" target="_blank">
                        <AiFillGithub title="GitHub" />
                    </a>
                </Link>
            </li>
            <li>
                <Link title="Linkedin"
                    href="https://www.linkedin.com/in/alisonjsilva/">

                    <a className="hover:transition-all hover:duration-500 hover:ease-in-out hover:text-cyan-600" target="_blank">
                        <AiOutlineLinkedin title="Linkedin" />
                    </a>
                </Link>
            </li>
            <li>
                <Link title="Twitter"
                    href="https://twitter.com/alisonjsilva/">

                    <a className="hover:transition-all hover:duration-500 hover:ease-in-out hover:text-cyan-600" target="_blank">
                        <AiFillTwitterCircle title="Twitter" />
                    </a>
                </Link>
            </li>
        </ul>


    )
}