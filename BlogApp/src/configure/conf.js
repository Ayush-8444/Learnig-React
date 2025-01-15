const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  projectId: String(import.meta.env.VITE_PROJECT_ID),
  databaseId: String(import.meta.env.VITE_DATABASE_ID),
  BucketId: String(import.meta.env.VITE_BUCKET_ID),
  collectionId: String(import.meta.env.VITE_COLLECTION_ID),
  tinymceApiKey: String(import.meta.env.VITE_TINYMCE_API_KEY),
};

export default conf