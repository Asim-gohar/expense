'use client'
import React, { useState } from 'react';
import BlogModal from '../BlogModal/BlogModal';
import { blogType } from '@/public/blogTypes/blogTypes';
import blog from '@/app/blog/page';
import { penseType } from '@/app/Component/pageTypes/pageTypes';
import BlogDisplay from '../[slug]/BlogDisplay';
                                  
export default function AddBlogList() {
 const [blogs, setBlogs] = useState<blogType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedBlog, setSelectedBlog] = useState<blogType>();

  const [blog, setBlog] = useState<blogType>({
    id: '',
    title: '',
    content: '',
    description: ''
  });

  const onAddBlogs = (blog: blogType) => {
    setBlogs([...blogs, blog]);
    setIsOpen(true);
  };

  const onDeleteBlog = (blog: blogType): void => {
    const filteredBlogs: blogType[] = blogs.filter((e: blogType) => e.id !== blog.id)
    setBlogs(filteredBlogs)
  }
  const onCloseBlogs = () => {
    setIsOpen(false);
  };
  const onUpdateBlog = (blog: blogType) => {
    const updatedBlogs: blogType[] = blogs.map((e: blogType) => e.id === blog.id ? blog : e)
    setBlogs(updatedBlogs)
    setIsOpen(true)
    setBlog({
      id: '',
      title: '',
      content: '',
      description: ''
    })
  }
  const onDispalyBlog = (blog: blogType) => {
    setSelectedBlog(blog)
  }
  const onEditBlog = (blog: blogType) => {
    setBlog(blog)
    setIsOpen(true)

  }
  

  return (
    <main>
      <div className='px-8 py-4 bg-0093B8'>
        <h1 className='text-2xl font-bold text-center text-white'>Welcome To Our Blogs Sites</h1>
        <div className='flex justify-end mt-2'>
          <button
            className='border-2 text-lg rounded-2xl bg-green-400 py-1 px-2 hover:bg-gray-400'
            onClick={() => setIsOpen(true)}
          >
            Create blogs
          </button>
        </div>
      </div>
      <BlogModal onAddBlogs={onAddBlogs} onCloseBlogs={onCloseBlogs} isOpen={isOpen} onUpdateBlog={onUpdateBlog} blog={blog} />
      <div className='flex px-8 py-4 grid grid-cols-3 gap-4'>

        {blogs.length > 0 ? (
          blogs.map((item, index) => (
            <div className='p-4 border-4 bg-DB8E34 rounded-2xl' key={index} onClick={() => setSelectedBlog(item)}>
              <div><img src="/images/addingblog.jpg" alt="image" /></div>
              <div className='text-center py-2 px-4 border-b font-bold text-lg truncate'>{item.title}</div>
              <div className='py-2 px-4 border-b truncate ...'>{item.content}</div>
              <div className='py-2 px-4 border-b text-ellipsis overflow-hidden '>{item.description}</div>
              <div className='flex justify-between'>
                <div className='text-right pt-2'>
                  <button
                    className='border-2 text-lg rounded-2xl bg-red-700 py-1 px-2 hover:bg-yellow-700'
                    onClick={() => onDeleteBlog(item)}
                  >
                    Delete blog
                  </button>
                </div>
                <div className='text-left pt-2'>
                  <button
                    className='border-2 text-lg rounded-2xl bg-green-700 py-1 px-2 hover:bg-yellow-700'
                    onClick={() => onEditBlog(item)}
                  >
                    Edit blog
                  </button>   
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='text-center text-2xl'>Blogs not found!</div>
        )}

      </div>
      {selectedBlog && <BlogDisplay blog={blog} blogs={blogs} />}
    </main>
  )
}

