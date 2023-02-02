type Neutral =
    | 'white'
    | 's100'
    | 's150'
    | 's200'
    | 's250'
    | 's300'
    | 's400'
    | 's500'
    | 's600'
    | 's700'
    | 's800'
    | 's900'
    | 'blue'
    | 'black';
export const neutral: Record<Neutral, string> = {
    white: '#ffffff',
    s100: '#efeff6',
    s150: '#dfdfe6',
    s200: '#c7c7ce',
    s250: '#bbbbc2',
    s300: '#AA9FA0',
    s400: '#7c7c82',
    s500: '#515154',
    s600: '#38383a',
    s700: '#2d2c2e',
    s800: '#212123',
    s900: '#161617',
    blue: '#37474F',
    black: '#000000',
};

type Primary = 'brand' | 's200' | 's600' | 's500';
export const primary: Record<Primary, string> = {
    brand: '#1C7C54',
    s200: '#6BA96A',
    s500: '#447543',
    s600: '#223A22',
};

type Acent = 'brand' | 's600';
export const acent: Record<Acent, string> = {
    brand: '#FFF2F2',
    s600: '#FFDFDF',
};

type Danger =
    | 's100'
    | 's200'
    | 's300'
    | 's400'
    | 's600'
    | 's800'
    | 's900'
    | 's1000';
export const danger: Record<Danger, string> = {
    s100: '#ffe6e6',
    s200: '#ffb3b3',
    s300: '#ff8080',
    s400: '#ff4d4d',
    s600: '#ff0000',
    s800: '#e60000',
    s900: '#cc0000',
    s1000: '#b30000',
};

type Success =
    | 's100'
    | 's200'
    | 's300'
    | 's400'
    | 's600'
    | 's800'
    | 's900'
    | 's1000';
export const success: Record<Success, string> = {
    s100: '#e6f9e6',
    s200: '#b3f1b3',
    s300: '#80e980',
    s400: '#4ddf4d',
    s600: '#33cc33',
    s800: '#1fa31f',
    s900: '#198619',
    s1000: '#146814',
};

type Backgroud = 'primary';
export const background: Record<Backgroud, string> = {
    primary: '#fff',
};

type Warning =
    | 's100'
    | 's200'
    | 's300'
    | 's400'
    | 's600'
    | 's800'
    | 's900'
    | 's1000';
export const warning: Record<Warning, string> = {
    s100: '#fff9d7',
    s200: '#f9d700',
    s300: '#f4c400',
    s400: '#cf9700',
    s600: '#a16e00',
    s800: '#7a4e00',
    s900: '#5f3a00',
    s1000: '#4a2c00',
};

const applyOpacity = (hexColor: string, opacity: number): string => {
    const red = parseInt(hexColor.slice(1, 3), 16);
    const green = parseInt(hexColor.slice(3, 5), 16);
    const blue = parseInt(hexColor.slice(5, 7), 16);

    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

type Transparent = 'clear' | 'lightGray' | 'darkGray' | 'primaryBrand';
export const transparent: Record<Transparent, string> = {
    clear: 'rgba(255, 255, 255, 0)',
    lightGray: applyOpacity(neutral.s300, 0.4),
    darkGray: applyOpacity(neutral.s800, 0.8),
    primaryBrand: applyOpacity(primary.brand, 0.3),
};

export const shadeColor = (hexColor: string, percent: number): string => {
    const redGamut: number = parseInt(hexColor.slice(1, 3), 16);
    const greenGamut: number = parseInt(hexColor.slice(3, 5), 16);
    const blueGamut: number = parseInt(hexColor.slice(5, 7), 16);

    const rgb: Array<number> = [redGamut, greenGamut, blueGamut];

    const toShadedGamut = (gamut: number): number => {
        return Math.floor(Math.min(gamut * (1 + percent / 100), 255));
    };

    const toHex = (gamut: number): string => {
        return gamut.toString(16).length === 1
            ? `0${gamut.toString(16)}`
            : gamut.toString(16);
    };

    const shadedRGB: Array<number> = rgb.map(toShadedGamut);
    const shadedHex: Array<string> = shadedRGB.map(toHex);

    const hexString: string = shadedHex.join('');

    return `#${hexString}`;
};
