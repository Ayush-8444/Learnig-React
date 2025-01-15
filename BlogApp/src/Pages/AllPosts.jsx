import React,{useEffect, useState} from 'react'
import { Postcard,Container } from '../components'
import databaseService from '../appwrite/database'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      databaseService.listBlog().then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    }, []);

  return (
      <div className='w-full py-8'>
          <Container>
            <div className='flex flex-wrap '>
                  {posts?.map((post,index) => (
                      <div key={index} className='p=2 w-1/4'>
                          <Postcard  {...post} />
                    </div>))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts