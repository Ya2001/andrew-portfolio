import { createClient } from 'contentful';

const client = createClient({
    space:'9x0bp6tbds1o',
    accessToken:'v62_B3YzTrQ5YI2WGmyXblWCnFojKIJfTgMA6oLduk8'
})

export default client;

export async function getImagesFromContentful(){
  try {
      const response = await client.getEntries({
        content_type: 'portfolio', 
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