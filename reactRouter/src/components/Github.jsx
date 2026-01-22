import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res) => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data);
    //     })
    //     .catch((error) => console.error(error));
    // })
  return (
    <div>
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  )
}
export default Github

export const githubInfoLoader = async () =>{
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
}
