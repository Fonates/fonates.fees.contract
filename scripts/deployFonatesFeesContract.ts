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
            value: toNano('0.05'),
            text: 'Hello, world!', //ton.fonates|TheBrainDit|Donate to Fonates
            to: Address.parse('kQD2Dp05JEkWgJMo0C9GmoySFF5Vk3RAD-2U7ymkB_kUS9Js')
        }
    );

    await provider.waitForDeploy(fonatesFeesContract.address);

    // run methods on `fonatesFeesContract`

    // await sleep(2000);
    // await fonatesFeesContract.send(
    //     provider.sender(),
    //     {
    //         value: toNano('0.05'),
    //     },
    //     {
    //         $$type: 'Donate',
    //         value: toNano('0.05'),
    //         text: 'Donate to Fonates',
    //         to: Address.parse('kQD2Dp05JEkWgJMo0C9GmoySFF5Vk3RAD-2U7ymkB_kUS9Js')
    //     }
    // )
}
