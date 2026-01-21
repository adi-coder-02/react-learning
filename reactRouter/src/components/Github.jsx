import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([]);
    useEffect(() =>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            setData(data);
        })
        .catch((error) => console.error(error));
    })
  return (
    <div>
      Github followers : {data.followers}
    </div>
  )
}
export default Github
