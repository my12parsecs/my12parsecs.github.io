import Link from "next/link";

export default function Places() {
   return (
      <div className="w-3/4 h-dvh m-auto flex flex-col items-center justify-center">
         {/* <h2 className="text-lg font-bold">Want to go</h2>
        <ul>
            <li>Luang Prabang, Laos</li>
        </ul> */}

         {/* <iframe src="http://localhost:3000/hikaru/map/embed" height={250} width={500} /> */}
         <div className="flex flex-col items-center justify-center">
            <iframe src="https://bokenmap.com/hikaru/map/embed" height={250} width={500} />
            <Link href="https://bokenmap.com/hikaru" target="_blank" className="underline text-green-500">
               View on Bokenmap
            </Link>
         </div>
      </div>
   );
}
