import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { FonatesFeesContract } from '../wrappers/FonatesFeesContract';
import '@ton/test-utils';

describe('FonatesFeesContract', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let fonatesFeesContract: SandboxContract<FonatesFeesContract>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        fonatesFeesContract = blockchain.openContract(await FonatesFeesContract.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await fonatesFeesContract.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: fonatesFeesContract.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and fonatesFeesContract are ready to use
    });
});
