import { Client, Databases, Query } from "appwrite";
import conf from "../configure/conf";


export class DatabaseService {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.databases = new Databases(this.client);
  } 

  async createBlog({ title, slug, content, imageId, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        { title, content, imageId, status, userId }
      );
    } catch (error) {
        console.log("Database :: createBlog :: ", error);
        return false
    }
  }

  async updateBlog({ title, slug, content, imageId, status }) {
    try {
      return await this.databases.updateDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        { title, content, imageId, status }
      );
    } catch (error) {
        console.log("Database :: updateBlog :: ", error);
        return false;        
    }
  }

  async deleteBlog(slug) {
    try {
      await this.databases.deleteDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Database :: deleteBlog :: ", error);
      return false;
    }
  }

  async getBlog(slug) {
    try {
      return await this.databases.getDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
    } catch (error) {
        console.log("Database :: getBlog :: ", error);
        return false;
    }
  }

  async listBlog(queries = [ Query.equal("status","active")]) {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
          conf.collectionId,
        queries
      );
    } catch (error) {
      console.log("Database :: listBlog :: ", error);
      return false;
    }
  }
}

const databaseService = new DatabaseService()

export default databaseService

