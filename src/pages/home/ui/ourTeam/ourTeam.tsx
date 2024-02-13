import React from 'react';
import './ourTeam.css'
interface ImageObject {
    title: string;
    src: string;
}
const images: ImageObject[] = [
    {
        title:'',
        src: '/images/crewman1.jpg'
    },
    {
        title:'',
        src: '/images/crewman4.jpg'
    },
    {
        title:'',
        src: '/images/crewman2.jpg'
    },
    {
        title:'',
        src: '/images/crewman5.jpg'
    },
    {
        title:'',
        src: '/images/crewman3.jpg'
    },

    {
        title:'',
        src: '/images/crewman6.jpg'
    }
]


function splitArrayIntoChunks<T>(array: T[], chunkSize: number): T[][] {
    let chunks: T[][] = [];
    for (let i =  0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}
const chunkSize =  2;
const imageChunks = splitArrayIntoChunks(images, chunkSize);

function ourTeam() {
    return (
      <div className={'our-team'} style={{backgroundImage: `url('/images/background-2.svg')`}}>
          <div className={'container'}>
              <div className={'row w-100'}>
                  <h2 className={'our-team__title h2'}>
                      Our team
                  </h2>
              </div>

              <div className={'row w-100'}>
              {imageChunks.map((chunk, index)=>{
                  return(
                      <div className={!(index % 2) ? 'our-team__col px-0' : 'our-team__col our-team__gap'}>
                          {chunk.map((image)=>{
                              return(
                                  <div className={'our-team__chunk'}>
                                      <img className={'w-100'} src={image.src} alt={image.title}/>
                                  </div>
                              )
                          })}
                      </div>
                      )
              })}
              </div>
          </div>
      </div>
    );
}

export default ourTeam;
