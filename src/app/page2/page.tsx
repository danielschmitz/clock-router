import Link from "next/link";

export const dynamic = 'force-dynamic'

export default function Home() {
  const now = new Date();
  return (
      <main className="m-10">
        
        Page 2! <br/><br/> its {now.toDateString()} {now.toTimeString()}

        <br/><br/><br/>

        <Link href="/">Page 1</Link>

      
      </main>
  );
}
