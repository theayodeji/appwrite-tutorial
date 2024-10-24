import { Client, Databases } from 'appwrite'

export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6719a02500165358ad6a')

export const databases = new Databases(client)