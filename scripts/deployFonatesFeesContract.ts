import { Address, toNano } from '@ton/core';
import { FonatesFeesContract } from '../wrappers/FonatesFeesContract';
import { NetworkProvider, sleep } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const fonatesFeesContract = provider.open(await FonatesFeesContract.fromInit());

    await fonatesFeesContract.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Donate',
            comment: 'Hello, world!', 
            to: Address.parse('UQDHaHTzhwyzJR2RLK1pP6ZE59e8f1EDDXp12nibTLBd5R4_')
        }
    );
}
