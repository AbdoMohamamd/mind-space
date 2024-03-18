import React from 'react'
import Head from 'next/head'

const CustomHead = ({data}) => {
  return (
   <Head><title>{data.title}</title>
   <meta name='description' content={data.seo_description}/>
   <link rel='icon'href={data.seo_image}/>
   </Head>  )
}

export default CustomHead