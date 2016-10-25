/* global nw */
const menu = new nw.Menu();

menu.append(new nw.MenuItem({ label: 'Find...' }));
menu.append(new nw.MenuItem({ label: 'Find Next' }));
menu.append(new nw.MenuItem({ label: 'Find Previous' }));

export default menu;
