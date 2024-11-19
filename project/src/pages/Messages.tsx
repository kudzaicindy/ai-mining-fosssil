import React from 'react';
import { Search, Phone, VideoIcon } from 'lucide-react';
import type { Message } from '../types';

const Messages = () => {
  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      lastMessage: "I'll be there in 10 minutes",
      time: '2m ago',
      unread: 2,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      online: true
    },
    {
      id: 2,
      name: 'Michael Brown',
      lastMessage: 'Thank you for the quick service',
      time: '1h ago',
      unread: 0,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      online: false
    },
    {
      id: 3,
      name: 'Emma Wilson',
      lastMessage: 'Could you send me the invoice?',
      time: '3h ago',
      unread: 1,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      online: true
    }
  ];

  const messages: Message[] = [
    {
      id: '1',
      sender: 'Sarah Johnson',
      content: 'Hi, I need help with my plumbing issue.',
      timestamp: '10:30 AM',
      read: true
    },
    {
      id: '2',
      sender: 'me',
      content: 'Of course! Can you describe the problem?',
      timestamp: '10:32 AM',
      read: true
    },
    {
      id: '3',
      sender: 'Sarah Johnson',
      content: 'The kitchen sink is leaking under the cabinet.',
      timestamp: '10:33 AM',
      read: true
    },
    {
      id: '4',
      sender: 'me',
      content: "I'll be there in 10 minutes to check it out.",
      timestamp: '10:35 AM',
      read: true
    }
  ];

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r border-gray-200 bg-white">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        
        <div className="overflow-y-auto h-[calc(100vh-73px)]">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
            >
              <div className="relative">
                <img
                  src={conversation.image}
                  alt={conversation.name}
                  className="w-12 h-12 rounded-full"
                />
                {conversation.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium truncate">{conversation.name}</h3>
                  <span className="text-xs text-gray-500">{conversation.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
              </div>
              {conversation.unread > 0 && (
                <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">{conversation.unread}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-gray-50">
        <div className="p-4 bg-white border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={conversations[0].image}
              alt={conversations[0].name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-medium">{conversations[0].name}</h2>
              <p className="text-sm text-gray-500">Active now</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
              <VideoIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === 'me'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-900'
                }`}
              >
                <p>{message.content}</p>
                <span className={`text-xs ${
                  message.sender === 'me' ? 'text-indigo-200' : 'text-gray-500'
                } block mt-1`}>
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;