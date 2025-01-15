import React,{useState, useEffect} from 'react'
import { Container, PostForm } from '../components';
import databaseService from '../appwrite/database';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function EditPost() {
    const navigate = useNavigate()
    const { slug } = useParams()
    const [post, setPost] = useState()

    useEffect(() => {
        if (slug) {
            databaseService.getBlog(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        }
        else {
            navigate("/")
        }
    },[slug, navigate])


  return !post? null : (<div className="py-8">
                    <Container>
                        <PostForm post={post}/>
                    </Container>
                </div>) ;
}

export default EditPost