import React from 'react';

const Resources = ({ resources }) => {
  return (
    <>
      {resources.map((resources) => (
        <p key={resources.id}>{resources.title}</p>
      ))}
    </>
  );
};

export default Resources;
