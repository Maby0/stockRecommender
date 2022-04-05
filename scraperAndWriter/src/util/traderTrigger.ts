import { execFile } from 'child_process'
import util from 'util';

const execF = util.promisify(execFile);

async function _traderTrigger() {
    const { stdout } = await execF('ts-node', [`../trader/src/index.ts`])
    console.log(stdout);
}

export default async function placeOrders() {
    await _traderTrigger();
}