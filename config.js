var config = {
    style: 'mapbox://styles/clairefg/ckrkyyiat83ql19ogu0p5b9ss',
    accessToken: 'pk.eyJ1IjoiY2xhaXJlZmciLCJhIjoiY2tucTVhcnpnMDJvajJycGVkcjJudW91dCJ9.OvGP1NwRfMS13DlUDbd0Ug',
    showMarkers: true,
    markerColor: '#5d1212',
    theme: 'light',
    use3dTerrain: false,
    title: 'Slavery & Resistance in NYC (1626-1865)',
    byline: 'Created by Mariame Kaba',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'Tour Overview',
            alignment: 'left',
            hidden: false,
            title: 'Tour Overview',
            image: './path/to/image/source.png',
            description: '',
            location: {
                center: [-74.01254, 40.70836],
                zoom: 14.20,
                pitch: 11.50,
                bearing: 15.20  
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'path',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'path',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Fort Amsterdam',
            alignment: 'right',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: 'Fort Amsterdam was originally built on the southern tip of Manhattan, at the juncture of the Hudson and East rivers. This is the place where Peter Miniut supposedly purchased Manhattan for $24. The Fort served as the main administrative center for Dutch rule of New Netherlands, and then for English rule. It was torn down following the American Revolution in 1790. <br> <br> The Alexander Hamilton U.S. Custom House was erected on the site in the early 1900s, as a center for the collection of duties from the Port of New York. The building covers three city blocks and contains 450,000 square feet. It was condemned in the 1970s and even scheduled for demolition, but was restored in the 1980s. The building currently houses the National Archives and a bankruptcy court. The National Museum of the American Indian was opened in the Custom House in 1994. The Customs House was lavishly decorated when it was constructed in the early 20th century. Architect Gilbert Cass designed the building and worked with sculptors to create and install appropriate statuary. Since the structure was dedicated to trade, Cass wanted the decorations to also focus on the themes of internationalism and global power.  In short, Cass wanted to create a giant tribute to US money and US imperialism at a time of aggressive United States expansion. The United States had fought a war to seize Cuba and the Philippines from Spain in 1898. It had fought another brutal war to put down a rebellion in the Philippines immediately thereafter which lasted until 1913. During this period the US also invaded Panama, Honduras, Nicaragua, Mexico, Haiti, and the Dominican Republic to force these countries to give preferential treatment to US trade and US companies. The imagery used on the building was not a celebration of equality and diversity, but of America’s ability to impose its will on a global scale.',
            
            location: {
                center: [-74.01366, 40.70452],
                zoom: 19.05,
                pitch: 60.00,
                bearing: -163.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
