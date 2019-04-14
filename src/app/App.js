import { h, Router } from '../../dependencies.js';

import Controller from './Controller.js';
import Container from './components/Container.js';
import New from './components/New.js';

export default function App() {

  const ctrl = new Controller({});

  // attach keyboard shortcuts here. Might have to
  // instantiate buttons outside router to call
  // functions?  No, just, call them from ctrl
  // document.body.addEventListener('keypress', (e) => {
  //   e.preventDefault();
  //   ctrl.passMessage(e);
  //   return false;
  // });

  return h(Router, {},
    h(Container, {path: '/', class: 'layout'}, [
      h(new New(ctrl))
    ]),
    h(Container, {path: '/login', class: 'layout'}, [
      h(new Sample(ctrl))
    ]),
    h(Container, {path: '/main', class: 'layout'}, [
    ])
  );

};

