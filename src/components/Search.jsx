
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
export default function Search({search}) {

    const [searchName, setSearchName] = useState("")


    const searcHandler = (e) => {
        // e.preventDefault();
        setSearchName(e.target.value)
        console.log('TARGET VALUE-------', e.target.value)
        search(searchName)
    }

  return (
    <>
      <Divider>Search</Divider>
        {/* <form onSubmit={submiTHis}> */}
      <label>Search</label>
      <Input value={undefined} type="search" onChange={searcHandler} />
        {/* </form> */}
            
    </>
  );
}
