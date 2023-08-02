import { createClient } from 'contentful';
// require('dotenv').config();

const client = createClient({
    space:'8khihhnc4rdl',
    accessToken:'4JLIhfySc6Osbm1EZqioqEkIrOvvqKgoTXUOtqhgajA'
})

export default client;

export async function getImagesFromContentful(){
  try {
      const response = await client.getEntries({
        content_type: 'madebyandrrewPortfolioWebsite', 
      });
      console.log('Contentful Response:', response.items);

      const imagesData = response.items.map((item) => ({
          id: item.fields.name,
          imgSrc: item.fields.photo.fields.file.url,
      
      }));
      return imagesData
  }
  catch (error) {
      console.error('Error fetching images from Contentful:', error);
      return [];
    }
  }