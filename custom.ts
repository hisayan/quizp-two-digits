/**
 * 2digits
 */
//% weight=100 color=#0fbc11 icon="\uf292" block="TowDigits" block.loc.ja="2桁の数字"
namespace towDigits {
    function showN (n: number, digit: number) {
        let base_x = 3
        if (digit == 10) {
            base_x = 0
        }
        for (let x = 0; x <= 1; x++) {
            for (let y = 0; y <= 4; y++) {
                if (num[n][y][x] == 1) {
                    led.plot(x + base_x, y)
                }
            }
        }
    }

    const num: number[][][] = [[[1, 1], [1, 1], [1, 1], [1, 1], [1, 1]], [[0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], [[1, 1], [0, 1], [1, 1], [1, 0], [1, 1]], [[1, 1], [0, 1], [1, 1], [0, 1], [1, 1]], [[1, 0], [1, 0], [1, 1], [0, 1], [0, 1]], [[1, 1], [1, 0], [1, 1], [0, 1], [1, 1]], [[1, 1], [1, 0], [1, 1], [1, 1], [1, 1]], [[1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], [[1, 1], [1, 1], [0, 0], [1, 1], [1, 1]], [[1, 1], [1, 1], [1, 1], [0, 1], [1, 1]]]

    /** 
     * Display 2 Digits
     * @param n number, eg: 0
     * @param full boolean, eg: true
     */
    //% block="show number %n|always show 2 digits %full"
    //% block.loc.ja="数を表示 %n|いつも2桁にする %full"
    //% blockExternalInputs=1
    export function showNumber(n: number, full: boolean = false): void {
        
        const nn = Math.abs(n)
        const a = Math.floor(nn / 10) % 10
        const b = nn % 10
        basic.clearScreen()
        if (n < 0) {
            led.plot(2, 2)
        }
        if (a != 0 || full) {
            showN(a,  10)
        }

        showN(b,  1)
    }
}
