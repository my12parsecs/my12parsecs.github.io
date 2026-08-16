// import Image from "next/image";
import Head from "./Head";
import Link from "next/link";


export default function Home() {
   return (
      <div className="flex items-center justify-items-center min-h-screen m-auto">
         <Head title={"Hikaru"} description={"Github Website of Hikaru"} siteName={""} pageName={"Hikaru"} image={"https://drscdn.500px.org/photo/1081066081/q%3D80_m%3D1500/v2?sig=a252e8aef70ce8d2611ef23590db4e6122f566505ba6fe27bac6587411b4c7e3"} type={"website"} url={""}></Head>

         <main className="flex flex-col row-start-2 items-center justify-center m-auto pb-10">
            <h1 className="text-3xl font-mono">Hikaru Imai</h1>
            {/* <div className="mt-2 font-mono w-[90%] max-w-[400px] m-auto text-left flex flex-col">
          <span className="mr-1">What I'm working on: </span>
          <a href="https://bokenmap.com" target="_blank" className="underline text-green-500 text-center">Bokenmap</a>
        </div> */}

            {/* <div>
            <img src="https://bokenmap.com/api/og-map/hikaru" alt="" />
            <h3>BokenMap</h3>
        </div> */}

            <div className="mt-2 font-mono flex flex-col text-left">
               {/* <span className="mr-1 mb-1">What I'm working on:</span> */}
               {/* <OGPCard url="https://bokenmap.com" /> */}
            </div>

            <div>{/* <ProjectCard img="https://github.com/my12parsecs/github-profile/blob/main/public/images/bokenmap.png?raw=true" title="BokenMap" description="A website that shows the location of the Boken area in Laos" url="https://bokenmap.com" /> */}</div>

            {/* <div className="max-w-[400px] mt-2 font-mono w-[90%] m-auto text-left">
          <span className="mr-1">Things you can play with: </span>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="https://loosecal.com" target="_blank" className="underline text-green-500">LooseCalendar</Link>
            <Link href="https://town-hunt.vercel.app" target="_blank" className="underline text-green-500">TownHunt</Link>
            <Link href="https://videoafter.vercel.app" target="_blank" className="underline text-green-500">Find Next Youtube Video</Link>
          </div>
        </div> */}
            <div className="max-w-[400px] mt-2 font-mono w-[90%] m-auto text-left">
               <span className="mr-1">Things I Made: </span>
               <div className="flex flex-wrap justify-left gap-2 mt-2">
                  <Link href="https://bokenmap.com" target="_blank" className="underline text-green-500">
                     BokenMap - Record places you've visited
                  </Link>
               </div>
               <div className="mt-2 font-mono">
                  <Link href="https://travel-photos.pages.dev" target="_blank" className="underline text-yellow-500">
                     Photo Album
                  </Link>
               </div>
            </div>
            <img src="https://drscdn.500px.org/photo/1081066081/q%3D80_m%3D1500/v2?sig=a252e8aef70ce8d2611ef23590db4e6122f566505ba6fe27bac6587411b4c7e3" alt="" className="mt-5 w-[85%] max-w-5xl" />
         </main>
         {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer> */}
      </div>
   );
}
