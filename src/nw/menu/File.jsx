/* global nw */
const menu = new nw.Menu();

menu.append(new nw.MenuItem({ label: 'New' }));
menu.append(new nw.MenuItem({ label: 'Open', click: () => {
} }));
menu.append(new nw.MenuItem({ label: 'Close' }));

export default menu;
