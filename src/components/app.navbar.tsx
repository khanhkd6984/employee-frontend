"use client";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AppNavbar() {
  const session = useSession();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        {/* <img
          src="/favicon.ico"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {/* <Link href="/" className="nav-link">
          Home
        </Link> */}
        <Link href="/employee" className="nav-link">
          Employee
        </Link>
        {session.data ? (
          <button onClick={() => signOut()}>
            {session?.data?.user_info?.name} (Sign out)
          </button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
