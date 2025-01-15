import React,{useEffect, useState} from 'react'
import databaseService from '../appwrite/database'
import { Container, Postcard } from '../components'
import { useSelector } from 'react-redux'


function Home() {
  const [posts, setPosts] = useState([])
  const status = useSelector( state => state.status)
    
    useEffect(() => {
        databaseService.listBlog().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    },[])

    if (posts.length === 0 && !status ) {
        return (
          <div className="w-full py-8 mt-4 text-center">
            <Container>
              <div className="flex flex-wrap">
                <div className="p-2 w-full">
                  <h1 className="text-2xl font-bold hover:text-gray-500">
                    Login to read posts
                  </h1>
                </div>
              </div>
            </Container>
          </div>
        );
    }else if (posts.length === 0 && status) {
      return (
        <div className="w-full py-8 mt-4 text-center">
          <Container>
            <div className="flex flex-wrap">
              <div className="p-2 w-full">
                <h1 className="text-2xl font-bold hover:text-gray-500">
                  There is no post till now!!! Be the first one to Post
                </h1>
              </div>
            </div>
          </Container>
        </div>
      );
    }
    
  return (
    <div className='w-full py-8'>
              <Container>
                <div className='flex flex-wrap'>
                      {posts?.map((post,index) => (
                          <div className='p=2 w-1/4' key={index}>
                              <Postcard  {...post} />
                        </div>))}
                </div>
            </Container>
        </div>
  )
}

export default Home