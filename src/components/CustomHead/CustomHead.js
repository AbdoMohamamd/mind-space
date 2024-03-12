import React from 'react'
import Head from 'next/head'

const CustomHead = ({data}) => {
  return (
   <Head><title>{data.title}</title></Head>  )
}

export default CustomHead