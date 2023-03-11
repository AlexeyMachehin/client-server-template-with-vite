import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import { IconButton } from '@mui/material';
import { IMessage } from '../../../../../../service/types/forumPage/IMessage';
import classes from './messageReaction.module.css';
import EmojiPicker, { Categories, EmojiClickData } from 'emoji-picker-react';
import { AddReactionOutlined } from '@mui/icons-material';
import { useAppDispatch } from '@/utils/hooks';
import { addMessageReaction } from '@/store/forum/thunk';

interface IMessageReactionProps {
  message: IMessage;
}

export default function MessageDashboard({ message }: IMessageReactionProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const dispatch = useAppDispatch();

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setAnchorEl(null);
    dispatch(
      addMessageReaction({ reaction: emojiData.unified, messageId: message.id })
    );
  };

  return (
    <div>
      <IconButton
        className={classes.button}
        aria-controls={isOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleClick}>
        <AddReactionOutlined className={classes.buttonIcon} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={() => {
          setAnchorEl(null);
        }}>
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          autoFocusSearch={false}
          categories={[
            {
              name: 'Smiles & Emotions',
              category: Categories.SMILEYS_PEOPLE,
            },
          ]}
        />
      </Menu>
    </div>
  );
}
