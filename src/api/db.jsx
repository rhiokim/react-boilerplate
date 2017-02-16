/* global nw */

/*
 * nw.require is native require function provide from nwjs
 */
const PouchDB = nw.require('pouchdb')
const dataPath = nw.App.getDataPath()
const name = 'db'

export default new PouchDB(`${dataPath}/${name}`, { adapter: 'leveldb' });
