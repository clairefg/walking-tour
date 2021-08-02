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
            image: '/Users/clairegoldberg/Desktop/storytelling-main/src/images/fortamsterdam2.jpg',
            description: 'Fort Amsterdam was originally built on the southern tip of Manhattan, at the juncture of the Hudson and East rivers. This is the place where Peter Miniut supposedly purchased Manhattan for $24. The Fort served as the main administrative center for Dutch rule of New Netherlands, and then for English rule. It was torn down following the American Revolution in 1790. <br> <br> The Alexander Hamilton U.S. Custom House was erected on the site in the early 1900s, as a center for the collection of duties from the Port of New York. The building covers three city blocks and contains 450,000 square feet. It was condemned in the 1970s and even scheduled for demolition, but was restored in the 1980s. The building currently houses the National Archives and a bankruptcy court. The National Museum of the American Indian was opened in the Custom House in 1994. <br> <br> The Customs House was lavishly decorated when it was constructed in the early 20th century. Architect Gilbert Cass designed the building and worked with sculptors to create and install appropriate statuary. Since the structure was dedicated to trade, Cass wanted the decorations to also focus on the themes of internationalism and global power. <br> <br> In short, Cass wanted to create a giant tribute to US money and US imperialism at a time of aggressive United States expansion. The United States had fought a war to seize Cuba and the Philippines from Spain in 1898. It had fought another brutal war to put down a rebellion in the Philippines immediately thereafter which lasted until 1913. During this period the US also invaded Panama, Honduras, Nicaragua, Mexico, Haiti, and the Dominican Republic to force these countries to give preferential treatment to US trade and US companies. The imagery used on the building was not a celebration of equality and diversity, but of America’s ability to impose its will on a global scale. <br> <br> The top of the building features twelve figures representing great naval and commercial nations of the past. Sculpted heads symbolize the races of the world. There are also images of Mercury, who was the Roman god of trade.',
            
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
        },
        {
            id: '2',
            alignment: 'full',
            hidden: false,
            title: 'The Four Continents',
            image: './path/to/image/source.png',
            description: 'Perhaps the most striking feature is <i>The Four Continents</i>, a series of four enormous sculptures on the building’s entrance pedestals. These were designed by Daniel Chester French, who would go on to design the Lincoln Memorial in 1920. <br> <br> Many drawings and prints and other small-scale works had been dedicated to "the four continents" since the existence of the Americas became widely known in Europe at the end of the 15th Century. It was unusual to treat the theme in large scale sculpture though. <br> <br> French’s statues on the theme each show a female figure surrounded by other individuals and objects meant to represent the four continents: Asia, America, Europe, and Africa.',
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
        },
        {
            id: '3',
            alignment: 'full',
            hidden: false,
            title: 'Asia',
            image: './path/to/image/source.png',
            description: 'When viewed from left to right, the first sculpture is <b>Asia</b>. It is presented as the place where the world’s major religions began. That is, from Cass’s American imperialist perspective, Asia is important for what it did in the <i>past</i>, rather than for its present. The implication is that Europe and the Americas have rightfully succeeded Asia as the leaders of the world. <br> <br> The central figure of this group is a calm woman, seated with eyes closed, her hands resting on her knees. To the woman’s right is a tiger, gazing up at the central figure. This tableau symbolizes religion taming the wildest beast. <br> <br> On the woman’s lap there sits a small Buddha, which Cass said was an “idol, symbol of false worship”. Over the right shoulder rises what Cass called “the rising luminous cross of Christianity, symbol of hope, which found its birth place on the continent of Asia.” Note that the early twentieth century was a period of intense missionary activity, when many white Americans were eager to travel abroad to convert non-Christians. In linking Christianity with American trade, Cass is draping commercial interests in spiritual moralism. <br> <br> The woman is seated on a throne supported by skulls, which represents those killed through forced labor. To the woman’s left there are a group of huddled figures, one of whom is bound. The figures according to Cass represent “the hordes of India, and the hopelessness of the life of so many of the inhabitants." <br> <br> Of course, the United States was itself built on the forced labor of slavery itself, and was home to many poor people. Descendants of enslaved Black people were still being brutalized and exploited throughout the Jim Crow south,  and conditions among immigrant communities in New York itself were incredibly crowded and difficult. However, emphasizing the poverty and injustice of foreign nations, and dehumanizing them as “hordes” created justifications for American missionary, military, and economic intervention abroad.',

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
        },
        {
            id: '4',
            alignment: 'full',
            hidden: false,
            title: 'America',
            image: './path/to/image/source.png',
            description: 'The sculpture of <b>America</b> is to the right of Asia. It is the only one of the four sculptures showing a figure taking action. The United States liked to represent itself as dynamic and active, ready to take its place at the head of the world. In line with this propaganda, America is represented as a young, alert woman, sitting at the edge of her chair as if ready to spring forward. <br> <br> The woman holds a torch in one hand, and a bushel of corn is on her lap. Her right foot, extended forward, leaning on the head of an image of the Aztec deity Quetzalcoatl. Visible in the background over her right shoulder is a Native American man wearing a warriors headdress. The figure both celebrates the subjugation and conquest of native peoples and appropriates native imagery to validate and ennoble the United States. <br> <br> Beside the central female figure kneels a man, mostly nude, who holds tools in his hand. The man represents labor, rolling the wheel of progress. The man is white, erasing the labor of Black people in building the country, and establishing the iconic noble laborer as a white worker. But labor here is also subservient, to be protected and commanded by other, more important, wealthier leaders of the country.',
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
        },
        {
            id: '5',
            alignment: 'full',
            hidden: false,
            title: 'Europe',
            image: './path/to/image/source.png',
            description: 'The next sculpture to the right is <b>Europe</b>. This sculpture celebrates Europe’s classical history dating back to the Greeks, and its more modern history of imperial conquest and violence. The central figure in this sculpture sits majestically on a throne decorated with a relief that references the Greek Parthenon. Her cloak also evokes Greek dress and Greek statuary.  Her left arm rests on a large book, which sits on a globe of the earth, and her right hand rests on a ship with a lion’s head—both tributes to European global discovery and conquest. <br> <br> Europe is presented as more relevant and more noble than Asia. There are no skulls here to remind viewers of the multiple European genocides of indigenous people. There are no figures representing poverty, though of course there were many poor in Europe. But Europe is also presented as sedentary rather than dynamic. Americans liked the idea that they were the young go-getters of the future who would replace Europe at the center of history.',
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
        },
        {
            id: '6',
            alignment: 'full',
            hidden: false,
            title: 'Africa',
            image: './path/to/image/source.png',
            description: '<b>Africa</b> is the fourth sculpture of the group, located to the far right of the main entrance of the building. All of the statues express US racism and imperialism, but Africa is easily “the most problematic of the statues,” according to a 2020 <a href="https://www.archives.gov/news/articles/four-continents-statues">interview</a> with Harold Holzer, Director of the Roosevelt House Public Policy Institute at Hunter College. <br> <br> The central figure is nude and shown sleeping on a chair of rocks. This is in line with racist and ahistorical stereotypes of Africa as a sleeping, undeveloped continent—even though archaeologists and historians know that there were numerous flourishing civilizations in Africa during the Middle Ages and earlier. Behind the sleeping woman is a figure hidden in a long cloak. This is supposed to represent Afria’s mysteriousness. But of course Africa is not mysterious to Africans. It is Cass who is ignorant, not Africa which is unknowable.<br> <br> One elbow of the figure rests on the head of a lion. The other rests on a sphinx, which symbolizes Egypt, and suggests, because it is crumbling, that the continent’s heyday has passed.  The statue is otherwise much less adorned and complicated than the others. Americans thought Africa had no history worth representing, and no glory worth memorializing. Showing Africa as lazy and undeveloped helped white Americans justify segregation, disenfranchisement, and violence against Black people—all of which were worsening at the time that Cass created this statue.',
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
        },
        {
            id: '7',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '8',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '9',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '10',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '11',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '12',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '13',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '14',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '15',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '16',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '17',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '18',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '19',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '20',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '21',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '22',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '23',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '24',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '24',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '25',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '26',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '27',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '28',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '29',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '30',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '31',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '32',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '33',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '34',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
        {
            id: '35',
            alignment: 'full',
            hidden: false,
            title: 'Fort Amsterdam',
            image: './path/to/image/source.png',
            description: '',
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
        },
    ]
};
