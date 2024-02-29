import Link from "next/link";

export const dynamic = 'force-dynamic'


async function getData() {
  const now = new Date();
  return now;
}

export default async function Home() {
  const now = await getData();
  return (
      <main className="m-10">
        
        Page 2! <br/><br/> its {now.toDateString()} {now.toTimeString()}

        <br/><br/><br/>

        <Link href="/">Page 1</Link>
      
      </main>
  );
}
