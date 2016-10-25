/* global nw */
const menu = new nw.Menu();

menu.append(new nw.MenuItem({ label: 'Editor : Viewer' }));
menu.append(new nw.MenuItem({ label: 'Viewer : Editor' }));

export default menu;
