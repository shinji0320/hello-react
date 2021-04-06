import React, { useState } from 'react';
import jsonplaceholder from './apis/jsonplaceholder'
import Button from './components/Button'
import Resources from './components/Resources'

const App = () => {
  const [resources, setResources] = useState([]);

  const getPosts = async () => {
    try {
      const posts = await jsonplaceholder.get('/posts');
        setResources(posts.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAlbums = async () => {
    try {
      const albums = await jsonplaceholder.get('/albums');
        setResources(albums.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Button onClick={getPosts} text='テキスト'/>
      <Button onClick={getAlbums} text='アルバム'/>
      <Resources resources={resources}/>
    </div>
  );
};

export default App;
