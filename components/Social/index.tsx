import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai"
import Link from "next/link"

export default function Social() {
    return (
        <ul className="flex text-4xl">
            <li>
                <Link
                    href="https://github.com/alisonjsilva/">

                    <a className="hover:text-cyan-600" target="_blank">
                        <AiFillGithub />
                    </a>
                </Link>
            </li>
            <li>
                <Link
                    href="https://www.linkedin.com/in/alisonjsilva/">

                    <a className="hover:text-cyan-600" target="_blank">
                        <AiOutlineLinkedin />
                    </a>
                </Link>
            </li>
        </ul>


    )
}