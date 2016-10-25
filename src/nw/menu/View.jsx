/* global nw */
import Mode from './View.mode';

const menu = new nw.Menu();

menu.append(new nw.MenuItem({ label: 'Mode', submenu: Mode }));
menu.append(new nw.MenuItem({ type: 'separator' }));
menu.append(new nw.MenuItem({ label: 'Open' }));

export default menu;
