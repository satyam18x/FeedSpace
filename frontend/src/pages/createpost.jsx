import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const navigate = useNavigate();

    const handlesubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        
        try {
            await axios.post("http://localhost:3000/create-post", formData);
            navigate("/feed");
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Failed to create post. Please try again.");
        }
    }
  
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-sm p-8 flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold text-gray-800">Create New Post</h1>
                <p className="text-sm text-gray-500">Share a moment with your followers</p>
            </div>

            <form onSubmit={handlesubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider ml-1">Title / Username</label>
                    <input 
                        className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-100 outline-none transition-all" 
                        type="text" 
                        name="title" 
                        placeholder="Enter your name or post title" 
                        required 
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider ml-1">Select Image</label>
                    <input 
                        className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer border border-gray-200 rounded-lg p-2 transition-all focus:border-blue-400 outline-none" 
                        type="file" 
                        name="image" 
                        accept="image/*" 
                        required 
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider ml-1">Caption</label>
                    <textarea 
                        className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-100 outline-none transition-all resize-none h-24" 
                        name="caption" 
                        placeholder="Write a caption..." 
                        required 
                    />
                </div>

                <button 
                    className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 shadow-md shadow-blue-100 mt-2" 
                    type="submit"
                >
                    Post
                </button>
            </form>
            
            <button 
                onClick={() => navigate("/feed")} 
                className="text-sm text-gray-500 hover:text-gray-800 transition-colors font-medium text-center"
            >
                Cancel
            </button>
        </div>
    </section>
  )
}
export default CreatePost