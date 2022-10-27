import welcome from './components/welcome';
import ChatMessage from './components/ChatMessage';

export const routes = [
    {
        path: '/',
        component: welcome
    },
    {
        path: '/room/:roomId',
        component: ChatMessage
    },
];
