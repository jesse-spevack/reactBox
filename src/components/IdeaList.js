import React from 'react';
import Idea from './Idea'

const IdeaList = ({ideas, destroy, updateTitle, updateBody}) => {
  console.log(ideas)
  return(
    <div className='IdeaList row'>
      { ideas.map( idea => <Idea { ...idea }
                            key={ idea.id }
                            destroy={destroy}
                            updateTitle={updateTitle}
                            updateBody={updateBody} /> ) }
    </div>
  )
}

export default IdeaList;
