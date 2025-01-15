import React, { useCallback, useEffect, useState } from 'react'
import { Button, RTE, Input, Select } from "../index"
import { useSelector } from 'react-redux'
import { useForm} from "react-hook-form"
import storageService from "../../appwrite/storage"
import databaseService from "../../appwrite/database"
import { useNavigate } from 'react-router-dom'


function PostForm({ post }) {
  const [imageUrl, setImageUrl] = useState("");
  if (post) {
    storageService.getFilePreview(post.imageId).then((data) => {
      setImageUrl(data);
    })
  }
  const { register, handleSubmit, watch, control, setValue, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || 'Active',
    }
  })
  const navigate = useNavigate()
  const userData = useSelector(state => state.userData)
  console.log(userData)

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? await storageService.uploadFile(data.image[0]) : null
      if (file) {
        await storageService.deleteFile(post.imageID)
      }
      const dbPost = await databaseService.updateBlog({
        slug: post.$id,
        ...data,
        imageID: (file) ? file.$id : post.imageId
      })
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
      }
    } else {
      const file = data.image[0] ? await storageService.uploadFile(data.image[0]) : null
      
      if (file) {
        data.imageId = file.$id
        console.log(file.$id)
        const dbPost = await databaseService.createBlog({ ...data, userId: userData.$id })
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        } else {
          storageService.deleteFile(file.$id)
        }
      }
    }
  }

  const slugTransfrom = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\s\d]+/g, "-")
        .replace(/\s+/g, "-")
    } 
    return ""
   },[])

  useEffect(() => {
    const subscription = watch((value, { name })=>{
      if (name === "title") {
        setValue("slug" , slugTransfrom(value.title),{ shouldValidate : true})
      }
    })
    
    return () => {
      subscription.unsubscribe()
    }
  },[watch,setValue,slugTransfrom])
  
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransfrom(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img src={imageUrl} alt={post.title} className="rounded-lg" />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-[#97774e]" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm