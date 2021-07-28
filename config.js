var config = {
    style: 'mapbox://styles/clairefg/ckrkyyiat83ql19ogu0p5b9ss',
    accessToken: 'pk.eyJ1IjoiY2xhaXJlZmciLCJhIjoiY2tucTVhcnpnMDJvajJycGVkcjJudW91dCJ9.OvGP1NwRfMS13DlUDbd0Ug',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Slavery & Resistance in NYC (1626-1865)',
    subtitle: 'A Walking Tour',
    byline: 'Created by Mariame Kaba',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'Fort Amsterdam',
            alignment: 'left',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-74.01447, 40.70466],
                zoom: 17.94,
                pitch: 60.00,
                bearing: 26.33
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
