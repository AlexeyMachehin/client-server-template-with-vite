import AsidePanel from './asidePanel/AsidePanel';
import classes from './chat.module.css';
import ChatPanel from './chatPanel/ChatPanel';
import { useState } from 'react';

export default function Chat() {
  const [selectedItemId, setSelectedItemId] = useState(0);
  const [item, setItem] = useState(null);

  const handleSelectedItem = (item: any) => {
    setSelectedItemId(item.id);
    setItem(item);
  };

  return (
    <div className={classes.chatWrapper}>
      <AsidePanel
        handleSelectedItem={handleSelectedItem}
        selectedItemId={selectedItemId}
      />
      <ChatPanel item={item} />
    </div>
  );
}
