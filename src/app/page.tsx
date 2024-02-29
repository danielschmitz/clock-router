import Link from "next/link";

export const dynamic = 'force-dynamic'

export default function Home() {
  const now = new Date();
  return (
      <main className="m-10">
        
        Hello World! <br/><br/> its {now.toDateString()} {now.toTimeString()}

        <br/><br/><br/>

        <Link href="/page2">Page 2</Link>

      
      </main>
  );
}
