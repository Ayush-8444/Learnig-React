import { Client, ID, Storage  } from "appwrite";
import conf from "../configure/conf";

export class StorageService {
  client = new Client();
  storage;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.storage = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(conf.BucketId, ID.unique(), file);
    } catch (error) {
      console.log("storage :: uploadFile :: ", error);
      return false;
    }
  }
  
  async getFilePreview(fileId) {
    try {
      return this.storage.getFilePreview(conf.BucketId, fileId);
    } catch (error) {
      console.log("storage :: getFilePreview :: ", error);
      return false;
    }
  }
  
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.BucketId, fileId);
      return true
    } catch (error) {
      console.log("storage :: deleteFile :: ", error);
      return false;
    }
  }
}

const storageService = new StorageService()

export default storageService