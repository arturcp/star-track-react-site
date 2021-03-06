import React from 'react';
import DialogBox from '../../DialogBox/DialogBox';

const dialog = (props) => {
  const { character, npcs, dialog: currentDialog, dialogFinished } = props;

  const getSpeaker = (npcId) => {
    if (currentDialog.character_type === 'PC') {
      return character;
    }

    return npcs.find((npc) => npc.id === npcId);
  };

  const speaker = getSpeaker(dialog.npc_id);
  const avatarDirection = dialog.character_type === 'PC' ? 'left' : 'right';

  return (
    <DialogBox
      avatar={speaker.image_url}
      name={speaker.name}
      text={dialog.paragraphs}
      labelColor={speaker.main_color}
      speed={40}
      eraseSpeed={0}
      typingDelay={1300}
      dialogFinished={dialogFinished}
      avatarDirection={avatarDirection}
    />
  );
};

export default dialog;
