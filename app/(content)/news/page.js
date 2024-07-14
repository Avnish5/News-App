
import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

export default async function NewsPage() {
  
  
      const response=await fetch('http://localhost:8080/news');
      const news=await response.json();
     

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news}/>;
    </>
  );
}

/*
export default function NewsPage() {
  
  const[isLoaing,setIsLoading]=useState(false)
  const[error,setError]=useState();
  const[news,setNews]=useState();

  useEffect(()=>{
    async function fetchNews()
    {
      setIsLoading(true);
      const response=await fetch('http://localhost:8080/news');

      if(!response.ok)
      {
          setError('failed to fetch news.');
          setIsLoading(false);
      }
      
      const news=await response.json();
      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  },[])

  if(isLoaing)
  {
    return <p>Loading...</p>
  }

  if(error)
  {
    return <p>{error}</p>
  }

  let newsContent;

  if(news)
  {
    newsContent=<NewsList news={news}/>;
  }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}

*/