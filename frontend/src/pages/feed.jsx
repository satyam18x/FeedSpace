import { useState,useEffect } from "react"
import axios from "axios";


const Feed = () => {
    const [posts,setPosts] =useState([
        {
        _id:"1",
        title:"John Doe",
        image:"https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=800&q=60",
        caption:"Exploring the beauty of nature!",
    },
    
])

useEffect(()=>{
    axios.get("http://localhost:3000/posts").then((res)=>{
        setPosts(res.data.posts);
    })
},[])

 
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 tracking-tight">Feed</h1>
        
        <div className="w-full max-w-[470px] flex flex-col gap-6">
          {
            posts.map((post)=>(
                <div key={post._id} className="bg-white border border-gray-300 rounded-lg overflow-hidden flex flex-col">
                    {/* Post Header */}
                    <div className="p-3 flex items-center gap-3 border-b border-gray-100">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-[1px]">
                                <div className="w-full h-full rounded-full bg-gray-200" />
                            </div>
                        </div>
                        <span className="font-semibold text-sm text-gray-900">{post.title || "anonymous"}</span>
                    </div>

                    {/* Post Image */}
                    <div className="w-full aspect-square bg-gray-100">
                        <img 
                            src={post.image} 
                            alt={post.caption} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                        />
                    </div>

                    {/* Post Actions (Visual Only) */}
                    <div className="p-3 flex flex-col gap-2">
                        <div className="flex items-center gap-4 text-gray-700">
                            <button className="hover:text-red-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </button>
                            <button className="hover:text-blue-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785 0.75.75 0 00.597 1.196 9.11 9.11 0 003.543-1.025 0.75 0 01.613-.04c1.432.394 2.943.613 4.51.613z" />
                                </svg>
                            </button>
                            <button className="hover:text-green-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </button>
                        </div>
                        
                        {/* Caption Area */}
                        <div>
                            <span className="font-semibold text-sm text-gray-900 mr-2">{post.title || "anonymous"}</span>
                            <span className="text-sm text-gray-800">{post.caption}</span>
                        </div>
                    </div>
                </div>
            ))
          }
        </div>
    </section>
  )
}

export default Feed