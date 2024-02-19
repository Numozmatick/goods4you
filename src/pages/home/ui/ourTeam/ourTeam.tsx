import React from 'react';
import './ourTeam.css'
interface ImageObject {
    title: string;
    src: string;
    description:string
}
const images: ImageObject[] = [
    {
        title:'Maxim',
        description:'Administrator',
        src: '/images/crewman1.jpg',
    },
    {
        title:'Kudr9viy',
        src: '/images/crewman4.jpg',
        description:'Administrator',
    },
    {
        title:'Kudr9vaya',
        src: '/images/crewman2.jpg',
        description:'Administrator',
    },
    {
        title:'Shapka',
        src: '/images/crewman5.jpg',
        description:'Administrator',
    },
    {
        title:'Krichit',
        src: '/images/crewman3.jpg',
        description:'Administrator',
    },

    {
        title:'V domike',
        src: '/images/crewman6.jpg',
        description:'Administrator',
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
                          {chunk.map((item)=>{
                              return(
                                  <div className={'our-team__chunk'}>
                                      <div className={'our-team__animation'}>
                                          <h3 className={'our-team__name h3'}>{item.title}</h3>
                                          <span className={'our-team__description'}>{item.description}</span>
                                      </div>
                                      <img className={'w-100'} src={item.src} alt={item.title}/>
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
