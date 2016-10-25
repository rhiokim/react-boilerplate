/* global nw */
const menu = new nw.Menu();

menu.append(new nw.MenuItem({
  label: 'Show Debug Window',
  click: () => {
    nw.Window.get().showDevTools();
  },
  key: 'i',
  modifiers: 'cmd+alt'
}));

export default menu;
