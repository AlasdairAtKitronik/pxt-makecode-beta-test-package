/**
 * Blocks for testing the MakeCode Beta Environment
 */
//% weight=100 color=#00A654 icon="\uf025" block="Beta Test"
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
    *:GAME Controller Button Pins
    */
    export enum ControllerButtonPins {
        //% block="Joypad Up (P8)"
        Up = <number>DAL.MICROBIT_ID_IO_P8,
        //% block="Joypad Down (P14)"
        Down = DAL.MICROBIT_ID_IO_P14,
        //% block="Joypad Left (P12)"
        Left = DAL.MICROBIT_ID_IO_P12,
        //% block="Joypad Right (P13)"
        Right = DAL.MICROBIT_ID_IO_P13,
        //% block="Fire 1 (P15)"
        Fire1 = DAL.MICROBIT_ID_IO_P15,
        //% block="Fire 2 (P16)"
        Fire2 = DAL.MICROBIT_ID_IO_P16
    }

    /**
    *:GAME Controller Button Events
    */
    export enum ControllerButtonEvents {
        //% block="down"
        Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
        //% block="up"
        Up = DAL.MICROBIT_BUTTON_EVT_UP,
        //% block="click"
        Click = DAL.MICROBIT_BUTTON_EVT_CLICK
    }

    /**
     *
     */
    //% shim=Kitronik_Beta_Test::init
    function init(): void {
        return;
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
     * @param test3 example of an enum
     */
    //% group=GroupC
    //% blockId="kitronik_test_block_3" block="Enum Test Block for %test3"
    //% weight=97 blockGap=8
    export function testBlockThree(test3: EnumOne): void {
        switch (test3) {
            case 0:
                basic.showString("A")
                break;
            case 1:
                basic.showString("B")
                break;
            case 2:
                basic.showString("C")
                break;
            case 3:
                basic.showString("D")
                break;
            case 4:
                basic.showString("E")
                break;
            case 5:
                basic.showString("F")
                break;
               
        }
    }

    /**
     * Do something when one of the Buttons is pressed
     * @param button press to be checked
     * @param event happening on the button, eg: click
     */
    //% group=GroupB
    //% blockId="kitronik_controller_button_press_on_event" block="on button %button|press %event"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% weight=98 blockGap=8
    export function onButtonPress(button: ControllerButtonPins, event: ControllerButtonEvents, handler: Action) {
        init();
        control.onEvent(<number>button, <number>event, handler);
    }
} 