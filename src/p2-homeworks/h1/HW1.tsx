import React from 'react';
import Message from './Message';

const messageData = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8y3RfblbjiofXA2FONXnv1-pTiyLSzXVudF5A1kUoWq5FS7IK&usqp=CAU',
    name: 'Kravchenko Tanya',
    message: 'How are you? I\'ts my first post! How are you? I\'ts my first post!',
    time: '22:00',
};

function HW1() {
    return (
        <div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                timeMessage={messageData.time}
            />
        </div>
    );
}

export default HW1;
