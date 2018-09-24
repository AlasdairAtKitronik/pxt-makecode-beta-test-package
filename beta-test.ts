/**
 * Blocks for testing the MakeCode Beta Environment
 */
//% weight=100 color=#00A654 icon="\uf492" block="Beta Test"
//% groups='["GroupA", "GroupB", "GroupC"]'
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
     * @param test1 example of a number, eg: 100
     */
    //% group=GroupA
    //% blockId="kitronik_test_block_1" block="Number Test Block for %test1"
    //% weight=100 blockGap=8
    export function testBlockOne(test1: number): void {
        basic.showNumber(test1)
    }

    /**
     * Test Block 2
     * @param test2 example of a string, eg: Hello
     */
    //% group=GroupB
    //% blockId="kitronik_test_block_2" block="String Test Block for %test2"
    //% weight=99 blockGap=8
    export function testBlockTwo(test2: string): void {
        basic.showString(test2)
    }

    /**
     * Test Block 3
     * @param test3 example of an enum selection, eg: C
     */
    //% group=GroupC
    //% blockId="kitronik_test_block_3" block="Enum Test Block for %test3"
    //% weight=98 blockGap=8
    export function testBlockThree(test3: EnumOne): void {
        basic.showString(test3)
    }
} 