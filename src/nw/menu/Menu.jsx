/* global nw, process */
import File from './File';
import Find from './Find';
import View from './View';
import Help from './Help';
import Develop from './Develop';

const PLATFORM = window.process.platform;
let menu = new nw.Menu({type: 'menubar'});

const item = (name, submenu) => {
  return new nw.MenuItem({
    label: name,
    submenu: submenu
  });
};

const add = (name, submenu) => {
  menu.append(item(name, submenu));
};

const insert = (name, submenu, idx) => {
  menu.insert(item(name, submenu), idx);
};

if (PLATFORM === 'darwin') {
  menu.createMacBuiltin(nw.App.manifest.name);
}

if (PLATFORM === 'darwin') {
  insert('File', File, 1);
  insert('Debug', Develop, 4);
} else {
  add('File', File);
  add('Find', Find);
  add('View', View);
  add('Debug', Develop);
}

add('Help', Help);

nw.Window.get().menu = menu;

export default menu;
