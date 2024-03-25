import { useLoaderData } from "react-router-dom";
import placeholderImage from "../assets/404.jpg"
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const{cover_image,title,tags,body_html}=blog
    return(
        <div className="mx-auto group p-2 border border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-50">
        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} />

        <div>
        <div className="flex flex-wrap py-6 gap-6 border-t border-dashed dark:border-gray-600">
       {
        tags.map(tag=><a key={tag} 
            rel="noopener noreferrer" 
            href="#" 
            className="hover:underline">
                #{tag}
            </a>
)
       }
              
        
            </div>
        </div>

        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>

            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>

        </div>
    </div>
    );
}

export default Content;