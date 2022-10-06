import { Link } from './index';
import { expect } from 'chai';
import Router from '../../utils/Router';
import sinon from 'sinon';

describe('Link', () => {
  it('should render', () => {
    new Link({ to: '/' });
  });

  it('element should return span', () => {
    const link = new Link({ to: '/' });
    const element = link.element;

    expect(element).to.be.instanceof(window.HTMLSpanElement)
  });

  it('should go to passed route on click', () => {
    const link = new Link({ to: '/' });
    const spy = sinon.spy(Router, 'go');
    const element = link.element as HTMLSpanElement;

    element.click();

    expect(spy.calledOnce).to.eq(true);
  });
});
