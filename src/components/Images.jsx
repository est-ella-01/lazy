import React from 'react'
import { useQuery } from 'react-query'
import { getData } from '../../utils'
import { LazyLoadImage } from 'react-lazy-load-image-component'


const imagesUrl='https://jsonplaceholder.typicode.com/albums/1/photos'

export const Images = () => {
    const {data, status, isLoading, isError}=useQuery(['images', imagesUrl],getData)
    if(isLoading){
        return <div>loading</div>      
        }
    if(isError){
            return <div>Error by fetching images</div>      
            }
    status=='success' && console.log(data)
  return (
    <div className='images-container'>
        {status=='success' && data.map((obj) => 
       (<div key={obj.id}>
            <h3>{obj.title.slice(0,10)}</h3>
            <LazyLoadImage className='lazy-img'
                alt={obj.title}
                src={obj.url} // use normal <img> attributes as props
                width={300}
                height={300}
                effect='blur'
                placeholderSrc='placeholder.png'
                />
        </div>))}
    </div>
  )
}

