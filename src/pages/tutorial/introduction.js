import React from 'react';
import DialogBox from '../../components/DialogBox/DialogBox';

const introduction = (props) => {
  let { character } = props
  return (
    <>
      <h2 className="first-heading topic-heading">
        {character.name}
      </h2>
      <div className="avatar">
        <img src={character.image_url} alt={character.name} />
      </div>
      <DialogBox
        text={character.history}
        speed="40"
        eraseSpeed="0"
        typingDelay="1300"
        dialogFinished={props.dialogFinished}
      />
    </>
  )
}

export default introduction;
