import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/employee");
  // return (
  //   <>
  //     <div>Home</div>
  //   </>
  // );
}
