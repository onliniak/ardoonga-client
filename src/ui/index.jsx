/* @refresh reload */
import { render } from 'solid-js/web';
import Left from './left/left';
import { loadFromPersistentStorage } from '@/onPageLoadList';

loadFromPersistentStorage()

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <Left />, document.getElementById('left'));