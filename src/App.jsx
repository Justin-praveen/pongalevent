import React, { useEffect, useState } from 'react';
import ARExample from './ARExample';
import db from './firebase/firebase';
import { collection , doc, getDoc,onSnapshot} from 'firebase/firestore';
import Img from './componets/Img';
import Img1 from './componets/Img1';
import Img2 from './componets/Img2';
import Img3 from './componets/Img3';


const App = () => {

  const [event,setevent] = useState(0);


  (async()=>{

  onSnapshot(doc(db,"data","frSsqPG0tpT0YRJOEHxd"),(doc)=>{

    console.log("dats......",doc.data());

    const changedata = doc.data()

    setevent(parseInt(changedata.image))
    console.log(event)
  })
  })()



 return (
    <div>
{event === 0 && <Img/>} 
{event === 1 && <Img1/>}  
{event === 2 && <Img2/>}  
{event === 3 && <Img3/>}  

    </div>
  );
};

export default App;
