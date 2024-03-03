import Clock from "@/components/clock";
import Link from "next/link";

export default function Home() {
  
  return (
      <main className="m-10">
        
        Hello World! <br/><br/> 

        <Clock />

        <br/><br/><br/>

        <Link href="/page2">Page 2</Link>

      
      </main>
  );
}
