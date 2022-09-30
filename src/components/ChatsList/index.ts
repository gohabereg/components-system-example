import Block from '../../utils/Block';
import template from './chatsList.hbs';
import { Chat } from '../Chat';
import styles from './styles.module.pcss';
import { withStore } from '../../utils/Store';
import { ChatInfo } from '../../api/ChatsAPI';
import ChatsController from '../../controllers/ChatsController';
import MessagesController from '../../controllers/MessagesController';
import { Link } from '../Link';

const chats = [
  {
    id: 1,
    title: 'Chat 1',
    unread_count: 2,
  },
  {
    id: 1,
    title: 'Chat 2',
    unread_count: 0,
  },
  {
    id: 1,
    title: 'Chat 3',
    unread_count: 0,
  }
]

interface ChatsListProps {
  chats: ChatInfo[];
  isLoaded: boolean;
}

class ChatsListBase extends Block<ChatsListProps> {
  constructor(props: ChatsListProps) {
    super({...props});
  }

  protected init() {
    this.children.chats = this.createChats(this.props);
    this.children.profileLink = new Link({ to: '/profile', label: 'Профиль'});
  }

  protected componentDidUpdate(oldProps: ChatsListProps, newProps: ChatsListProps): boolean {
    this.children.chats = this.createChats(newProps);

    return true;
  }

  private createChats(props: ChatsListProps) {
    return props.chats.map(data => {
      return new Chat({
        ...data,
        events: {
          click: () => {
            ChatsController.selectChat(data.id);
          }
        }
      });
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, {...this.props, styles});
  }
}

const withChats = withStore((state) => ({chats: [...(state.chats || [])]}));

export const ChatsList = withChats(ChatsListBase);
