/* global nw */
const menu = new nw.Menu();

menu.append(new nw.MenuItem({ label: 'Shortcut' }));
menu.append(new nw.MenuItem({ label: 'Website' }));

export default menu;
