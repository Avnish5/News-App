'use client'
import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter } from "next/navigation";

export default function InterceptedFullImage({params})
{
   const newsItemSlug=params.id;
   const newsItem =DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

   const router=useRouter();

  if (!newsItem) {
    notFound();
  }
   return(
       <>
       <div className="modal-backdrop" onClick={router.back}/>
       <dialog className="modal" open>
       <h2>Intercepted image</h2>
       <div className="fullscreen-image">
         <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
       </div>
       </dialog>
       </>
   )
}