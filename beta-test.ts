/**
 * Blocks for testing the MakeCode Beta Environment
 */
//% weight=100 color=#00A654 icon="\uf11b" block="Beta Test"
//% groups='["Group A", "Group B", "Group C"]'
namespace Kitronik_Beta_Test {
	/**
	*Test enum
	*/
	export enum EnumOne {
	    A,
	    B,
	    C,
	    D,
	    E,
	    F
	}

    /**
     * Test Block 1
     * @param test1
     */
    //% group=Group A
    //% blockId="kitronik_test_block_1" block="Number Test Block for %test1" icon="\uf080"
    //% weight=92 blockGap=8
    export function testBlockOne(test1: number): void {
        basic.showNumber(test1)
    }

    /**
     * Test Block 2
     * @param test2
     */
    //% group=Group B
    //% blockId="kitronik_test_block_2" block="String Test Block for %test2" icon="\uf080"
    //% weight=91 blockGap=8
    export function testBlockTwo(test2: string): void {
        basic.showString(test2)
    }

    /**
     * Test Block 3
     * @param test3
     */
    //% group=Group C
    //% blockId="kitronik_test_block_3" block="Enum Test Block for %test3"
    //% weight=95 blockGap=8
    export function testBlockThree(test3: EnumOne): void {
        basic.showString(test2)
    }
} 