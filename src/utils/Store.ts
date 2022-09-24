import { set } from './helpers';
import { EventBus } from './EventBus';
import Block from './Block';
import { User } from '../api/AuthAPI';

export enum StoreEvents {
  Updated = 'updated'
}

interface State {
  user: User;
}

export class Store extends EventBus {
  private state: any = {};

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);

    this.emit(StoreEvents.Updated, this.getState());
  }

  public getState() {
    return this.state;
  }
}

const store = new Store();

// @ts-ignore
window.store = store;

export function withStore<SP>(mapStateToProps: (state: State) => SP) {
  return function wrap<P>(Component: typeof Block<SP & P>){

    return class WithStore extends Component {

      constructor(props: P) {
        let previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState });

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          previousState = stateProps;

          this.setProps({ ...stateProps });
        });

      }

    }

  }
}

export default store;
