import esmock from 'esmock';
import { expect } from 'chai';
import sinon from 'sinon';
import type BlockType from './Block.ts'

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake(),
}

describe('Block', async () => {
  const { default: Block } = await esmock('./Block', {
    './EventBus': {
      EventBus: class {
        emit = eventBusMock.emit;
        on = eventBusMock.on;
      }
    }
  }) as { default: typeof BlockType };

  class ComponentMock extends Block {

  }

  it('should fire init event on initialization',  () => {
    new ComponentMock({});

    expect(eventBusMock.emit.calledWith('init')).to.eq(true);
  });

  it('should fire CDU event on props update', () => {
    const components = new ComponentMock({});

    components.setProps({ test: 'test' });

    expect(eventBusMock.emit.calledWith('flow:component-did-update')).to.eq(true);
  });
});
