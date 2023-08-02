import { createClient } from 'contentful';
// require('dotenv').config();

const client = createClient({
    space:'8khihhnc4rdl',
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

export default client;

export async function getImagesFromContentful(){
  try {
      const response = await client.getEntries({
        content_type: 'madebyandrrew portfolio wesbite', 
      });
      console.log('Contentful Response:', response.items);

      const imagesData = response.items.map((item) => ({
          id: item.fields.name,
          imgSrc: item.fields.picture.fields.file.url,
      
      }));
      return imagesData
  }
  catch (error) {
      console.error('Error fetching images from Contentful:', error);
      return [];
    }
  }