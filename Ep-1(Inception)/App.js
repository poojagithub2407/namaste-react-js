const heading = React.createElement('h1', {}, 'hello word');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);


const parent = React.createElement('div', { id: 'parent' },
     React.createElement('div', { id: 'child' },
          React.createElement('h1', {}, 'Hello from namaste react js')));

root.render(parent);

const sibling = React.createElement('div', { id: 'parent' },
     React.createElement('div', { id: 'child' }, [
          React.createElement('h1', { id: 'sibling1' }, 'sibling is first'),
          React.createElement('h1', { id: 'sibling2' }, 'sibling is second')

     ]))
root.render(sibling)