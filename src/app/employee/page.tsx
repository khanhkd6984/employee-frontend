import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

export default async function Employee({}) {
  const session = await getServerSession(options);
  console.log();
  const response = await fetch(`${process.env.BACKEND_URL}/users`, {
    method: "GET",
    headers: { Authorization: `Bearer ${session?.accessToken}` },
  });
  const movies = await response.json();
  console.log(movies);
  return <>Employee</>;
}
