function getAnimalImages(animal) {
    switch(animal) {
case 't-rex': 
return [
    { name: 'blueTrexRoar', src: './assets/trex_a_1_by_cleopatrawolf_dfujqzu-350t.png' },
    { name: 'blueTrexClosed', src: 'assets/trex_a_2_by_cleopatrawolf_dfujqzr-350t.png' },
    { name: 'greenTrexRoar', src: 'assets/trex_b_1_by_cleopatrawolf_dfujqzp-350t.png' },
    { name: 'greenTrexClosed', src: 'assets/trex_b_2_by_cleopatrawolf_dfujqzl-350t.png' },
    { name: 'purpTrexRoar', src: 'assets/trex_c_1_by_cleopatrawolf_dfujqzg-350t.png' },
    { name: 'purpTrexClosed', src: 'assets/trex_c_2_by_cleopatrawolf_dfujqzf-350t.png' },
    { name: 'redTrexRoar', src: 'assets/trex_d_1_by_cleopatrawolf_dfujqzb-350t.png' },
    { name: 'redTrexClosed', src: 'assets/trex_d_2_by_cleopatrawolf_dfujqz8-350t.png' },
];

case 'toucan': 
return [
    { name: 'blueToucanRoar', src: './assets/toucan_a_1_by_cleopatrawolf_dfujr0f-350t.png' },
    { name: 'blueToucanClosed', src: './assets/toucan_a_2_by_cleopatrawolf_dfujr0c-350t.png' },
    { name: 'purpToucanRoar', src: './assets/toucan_b_1_by_cleopatrawolf_dfujr08-350t.png' },
    { name: 'purpToucanClosed', src: './assets/toucan_b_2_by_cleopatrawolf_dfujr04-350t.png' },
    { name: 'yellowToucanRoar', src: './assets/toucan_c_1_by_cleopatrawolf_dfujr00-350t.png' },
    { name: 'yellowToucanClosed', src: './assets/toucan_c_2_by_cleopatrawolf_dfujqzx-350t.png' },
];

case 'stegos': 
return [
        { name:'greenStegoClosed', src: './assets/stego_a_1_by_cleopatrawolf_dfujr15-350t.png'} ,
        { name: 'greenStegoRoar', src: './assets/stego_a_2_by_cleopatrawolf_dfujr13-350t.png' },
        { name: 'purpStegoClosed', src: './assets/stego_b_1_by_cleopatrawolf_dfujr0z-350t.png' },
        { name: 'purpStegoRoar', src: './assets/stego_b_2_by_cleopatrawolf_dfujr0v-350t.png' },
        { name: 'pinkStegoClosed', src: './assets/stego_c_1_by_cleopatrawolf_dfujr0s-350t.png' }, 
        { name: 'pinkStegoRoar', src: './assets/stego_c_2_by_cleopatrawolf_dfujr0p-350t.png' },
        { name: 'brownStegoClosed', src: './assets/stego_d_1_by_cleopatrawolf_dfujr0m-350t.png' },
        { name: 'brownStegoRoar', src: './assets/stego_d_2_by_cleopatrawolf_dfujr0i-350t.png' },
];

case 'goats': 
return [
        { name: 'blueGoatRoar', src: './assets/goat_a_1_by_cleopatrawolf_dfujr1n-350t.png'},
        { name: 'blueGoatClosed', src: './assets/goat_a_2_by_cleopatrawolf_dfujr1j-350t.png' },
        { name: 'greenGoatRoar', src: './assets/goat_b_1_by_cleopatrawolf_dfujr1h-350t.png' },
        { name: 'greenGoatClosed', src: './assets/goat_b_2_by_cleopatrawolf_dfujr1e-350t.png' },
        { name: 'pinkGoatRoar', src: './assets/goat_c_1_by_cleopatrawolf_dfujr1b-350t.png' },
        { name: 'pinkGoatClosed', src: './assets/goat_c_2_by_cleopatrawolf_dfujr18-350t.png' },
]

default: 
return {
    blueTrexRoar: './assets/trex_a_1_by_cleopatrawolf_dfujqzu-350t.png',
}
}}

export default getAnimalImages 
    // /Users/dorito_roman/Desktop/finalproject/friez/src/assets/stego_d_1_by_cleopatrawolf_dfujr0m-350t.png
    // src/assets/stego_d_1_by_cleopatrawolf_dfujr0m-350t.png
