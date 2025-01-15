import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import storageService from '../../appwrite/storage'

function Postcard({ $id, title, imageId }) {
  const [imageUrl, setImageUrl] = useState("")
  storageService.getFilePreview(imageId).then((data) => {
    setImageUrl(data)
  })
    return (
      <Link to={`/post/${$id}`}>
        <div className="w-full rounded-xl border-2 border-black bg-[#D6C5B0] p-4">
          <div className="w-full justify-center mb-4">
            <img className="rounded-xl" src={imageUrl} alt={title} />
          </div>
          <h2 className="text-xl font-bold">{title} </h2>
        </div>
      </Link>
    );
}

export default Postcard