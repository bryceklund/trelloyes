import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import STORE from './store';

const store = STORE;


describe('list component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(store.lists.map((list) => <List key={list.id} header={list.header} cards={list.cardIds.map(id => store.allCards[id])} />), div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer.create(STORE.lists.map((list) => <List key={list.id} header={list.header} cards={list.cardIds.map(id => store.allCards[id])} />)).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
