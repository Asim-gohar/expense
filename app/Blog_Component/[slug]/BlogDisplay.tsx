import React from 'react';
import { BlogDisplayType, blogSlugTypes, blogType } from '@/public/blogTypes/blogTypes';

const BlogDisplay = ({ blogs, blog }: BlogDisplayType) => {
  // The commented code below seems to be an attempt to filter blogs based on some criteria.
  // Uncomment and modify it based on your actual requirements.
  // const matchingBlog: blogType[] = blogs.filter((e: blogType) => e.slug === params.slug);

  return (
    <div>
      <div className='text-center text-3xl'>BlogDisplay</div>
      <div>
        {blogs.length > 0 ? (
          blogs.map((item, index) => (
            <div key={index}>
              <h1 className='font-bold text-2xl'>Title :</h1>
              <div className='text-lg pl-20'>{item.title}</div>
              <h1 className='font-bold text-2xl'>Content :</h1>
              <div className='text-lg pl-20 text-truncate ...'>{item.content}</div>
              <h1 className='font-bold text-2xl'>Description :</h1>
              <div className='text-lg pl-20 text-truncate ...'>{item.description}</div>
            </div>
          ))
        ) : (
          <div>No blogs found</div>                                
        )}
      </div>
    </div>
  );
};
                                                                       
export default BlogDisplay;
