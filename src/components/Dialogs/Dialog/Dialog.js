import React from 'react';
import DialogBox from '../../DialogBox/DialogBox';

const dialog = (props) => {
  const { character, npcs, dialog, dialogFinished } = props

  const getSpeaker = (npc_id) => {
    if (dialog.character_type === 'PC') {
      return character;
    } else {
      return npcs.find(npc => npc.id === npc_id);
    }
  }

  const speaker = getSpeaker(dialog.npc_id);

  return (
    <DialogBox
      avatar={speaker.image_url}
      text={dialog.paragraphs}
      speed="40"
      eraseSpeed="0"
      typingDelay="1300"
      dialogFinished={dialogFinished}
    />
  )
}

export default dialog;
