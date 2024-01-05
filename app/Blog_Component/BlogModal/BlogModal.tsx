import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import AddBlogList from '../AddBlogList/addBlogList'
import { blogModalType, blogType } from '@/public/blogTypes/blogTypes'

export default function BlogModal({ onAddBlogs, isOpen, onCloseBlogs, onUpdateBlog, blog }: blogModalType) {
  const [title, SetTitle] = useState<string>("")
  const [content, SetContent] = useState<string>("")
  const [id, SetId] = useState<string>("")
  const [description, SetDescription] = useState<string>("")

  const handelAddBlogs = () => {
    const newBlog = {
      id: `${Date.now().toString()}`,
      title,
      content,
      description
    }
    onAddBlogs(newBlog)
    onCloseBlogs()
    SetTitle('')
    SetContent('')
    SetId('')
    SetDescription('')

  }

  const handleUpdateBlog = () => {
    const updateBlog: blogType = {
      id: blog.id, 
      title: title || blog.title,
      content: content || blog.content,
      description : description || blog.description
    }
    onUpdateBlog(updateBlog),
      onCloseBlogs(),
     SetTitle('') ,
     SetContent('')
  }

  return (
    <main>
      <div className={`Modal ${isOpen ? 'block' : 'hidden'}`}>
        <div className=' border-2 border-b w-60 h-60 justify-center modal-overlay absolute h-full w-full bg-gray-800 bg-opacity-80'>
          <div className='modal-container bg-white w-96 mx-auto mt-20 p-6 rounded shadow-lg '>
            <div className='flex justify-between text-3xl'>
              <div >Add Blog</div>
              <button onClick={onCloseBlogs} className='text-right'>
                <RxCross2 className=" text-red-500 hover:text-green-700 text-right" />
              </button>
            </div>
            <div className='flex flex-col justify-center items-center pt-4'>
              <label className="text-lg"  htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                value={title}
                onChange={(e) => SetTitle(e.target.value)}
                className="w-full border p-2 mb-2 "
              />
              <label className="text-lg" htmlFor='content'>Content</label>
              <textarea
                
                id='content'
                value={content}
                onChange={(e) => SetContent(e.target.value)}
                className="w-full border p-2 mb-2 text-ellipsis overflow-hidden"
              />
               <label className="text-lg" htmlFor='description'>Description</label>
              <textarea
                
                id='description'
                value={description}
                onChange={(e) => SetDescription(e.target.value)}
                className="w-full border p-2 mb-2 "
              />
              <div>
                {blog.id !== '' ?
                  <div className='text-right '>
                    <button onClick={handleUpdateBlog} className='bg-blue-700 rounded-2xl py-2 px-2 hover:bg-gray-400'>Update Blog</button>
                  </div>
                  :
                  <div className='pt-2 ml-auto'>
                    <button onClick={handelAddBlogs} className='bg-blue-500 rounded-2xl py-2 px-2 hover:bg-gray-400'>Add Blog</button>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

