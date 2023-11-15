import{ useState } from 'react';

const feladatTempPage = (feladat: any) => {
    
    return (
        <div>
        <h1>{feladat.num}</h1>
        <p>{feladat.desc}</p>
        <p>alma</p>
        </div>
    );
}

export default feladatTempPage;