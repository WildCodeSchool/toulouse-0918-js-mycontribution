import React from 'react';
import List from './List';

const ListFavoris = ({ projects }
) => (
    <div className="ListFavoris">
    {
      projects.map((project,index) =>
        <List
          key={index}
          {...project}
        />
      )      
    }
    </div>
  )

export default ListFavoris;