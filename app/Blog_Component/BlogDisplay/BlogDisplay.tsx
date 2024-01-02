import React from 'react';
import AddBlogList from '../AddBlogList/addBlogList';
import { BlogDisplayType, blogType } from '@/public/blogTypes/blogTypes';

export default function BlogDisplay({ blogs, blog}: BlogDisplayType) {
  const matchingBlog: blogType | undefined = blogs.find((e: blogType) => e.id === blog.id);

  return ( 
    <div>
      <div className='text-center text-3xl'>BlogDisplay</div>
      <div>
        {matchingBlog ? (
          <div>
            <h1 className='font-bold text-2xl'>Title : </h1>
            <div className='text-lg pl-20'>{matchingBlog.title}</div>
            <h1 className='font-bold text-2xl'>Content : </h1>
            <div className='text-lg pl-20'>{matchingBlog.content}</div>
            <h1 className='font-bold text-2xl'>Description : </h1>
            <div className='text-lg pl-20 text-truncate ...'>{matchingBlog.description}</div>
          </div>
        ) : (
          <div>Blog Not found</div>
        )}
      </div>
    </div>
  );
}
