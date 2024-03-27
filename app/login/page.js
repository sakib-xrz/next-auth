"use client";

import { useSession, signIn } from "next-auth/react";

export default function Login() {
  const session = useSession();
  console.log(session);
  return (
    <div className="h-screen justify-center items-center">
      <button
        onClick={() => signIn("google")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login With Google
      </button>
      <button
        onClick={() => signIn("linkedin")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login With LinkedIn
      </button>
    </div>
  );
}
