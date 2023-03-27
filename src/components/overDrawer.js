import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export default function OverDrawer({ children, isOpen, setIsOpen }) {
  return (
    <>
      <main
        className={
          " fixed overflow-hidden z-40 bg-black bg-opacity-70 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
      >
        <section
          className={
            "right-0 md:w-3/12 w-3/4 absolute bg-white opacity-100 px-8 py-12 h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform overflow-y-auto" +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <article className="">
            <div className="flex items-center justify-end">
              <div>
                <AiOutlineClose
                  onClick={() => setIsOpen(false)}
                  className="text-black text-3xl float-right cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center justify-end px-48">
              <ul className="text-left space-y-2 w-48 pt-8 pb-24">
                <li className="w-72 px-3 py-2 flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Model S
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Model 3
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Model x
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Model Y
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Solar Roof
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Power Panels
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Powerwall
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Existing Inventory
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Used Inventory
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Trade-In
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Demo Drive
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Insurance
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Commercial Energy
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Utilities
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Chargin
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Find Us
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Support
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Investor Relations
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Shop
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/"
                  >
                    Account
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        </section>
        <section
          className=" w-1/2 h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    </>
  );
}
