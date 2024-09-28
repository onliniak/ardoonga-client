/* @refresh reload */
import { render } from 'solid-js/web';
import "@/components/scss/index.scss"
import Left from './left/left';
import { loadFromPersistentStorage } from '@/onPageLoadList';
const Application = require('./middle/' + import.meta.env.VITE_CURRENT_PAGE_MIDDLE).default

loadFromPersistentStorage()

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <Left />, document.getElementById('left'));
render(() => <Application />, document.getElementById('root'));