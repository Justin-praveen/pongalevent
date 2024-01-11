import React, { useEffect, useState } from 'react';
import ARExample from './ARExample';
import db from './firebase/firebase';
import { collection , doc, getDoc,onSnapshot} from 'firebase/firestore';


const App = () => {

  const [event,setevent] = useState(0);


  (async()=>{

  onSnapshot(doc(db,"data","frSsqPG0tpT0YRJOEHxd"),(doc)=>{

    console.log("dats......",doc.data());

    const changedata = doc.data()

    setevent(changedata.image)
    console.log(event)
  })
  })()



 return (
    <div>
      <h1>PONGAL EVENT</h1>
  <h1>{event}</h1>
    </div>
  );
};

export default App;
