import {React, useEffect, useState} from 'react';
import './index.scss';
import {getImagesFromContentful} from '../../contentfulConfig/contentfulConfig.js'

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch images from Contentful when the component mounts
        const fetchData = async () => {
          try {
            const imagesData = await getImagesFromContentful(); // Call the function to get images from Contentful
            setData(imagesData);
          } catch (error) {
            console.error('Error fetching images:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
 
            <div className="gallery">
                {data.map((item, index)=>{
                    return (
                        <div className='picture' key={index}> 
                            <img src={item.imgSrc} alt={`Image ${item.id}`} style={{width: '100%'}}/>
                        </div>
                    )
                })}
            </div>    
    )
};

export default Home;




