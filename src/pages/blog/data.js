const link = process.env.PUBLIC_URL;
const Data = [
    {
        id: 1,
        category: [
            'Tech', 'Design', 'Virtual Staging', '3D Modelling'
        ],
        img: `${link}/vendor/images/partner.jpg`,
        title: `'Tech', 'Design', 'Virtual Staging', '3D Modelling`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe1`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 12,
        category: [
            'Design', 'Virtual Staging', '3D Modelling'
        ],
        img: `${link}/vendor/images/partner.jpg`,
        title: `'Design', 'Virtual Staging', '3D Modelling'`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe12`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 13,
        category: [
            'Design', 'Agent Outreach', '3D Modelling'
        ],
        img: `${link}/vendor/images/partner.jpg`,
        title: `'Design', 'Agent Outreach', '3D Modelling'`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe123`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 14,
        category: [
            'Design', 'Agent Outreach', 'Virtual Staging', 'Tech'
        ],
        img: `${link}/vendor/images/partner.jpg`,
        title: `'Design', 'Agent Outreach', 'Virtual Staging', 'Tech'`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe1234`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 15,
        category: [
            'Tech', 'Virtual Staging', '3D Modelling'
        ],
        img: `${link}/vendor/images/partner.jpg`,
        title: `'Tech', 'Virtual Staging', '3D Modelling'`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe12345`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 16,
        category: [
            'Tech', 'Virtual Staging', '3D Modelling'
        ],
        title: `'Tech', 'Virtual Staging', '3D Modelling'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe123456`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 17,
        category: [
            'Design', 'Tech'
        ],
        title: `'Design', 'Tech'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe1234567`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 18,
        category: [
            'Design', 'Virtual Staging', 'Tech'
        ],
        title: `'Design', 'Virtual Staging', 'Tech'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe12345678`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 19,
        category: [
            'Design', 'Agent Outreach', '3D Modelling'
        ],
        title: `'Design', 'Agent Outreach', '3D Modelling'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe123456789`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 11,
        category: [
            'Design','3D Modelling'
        ],
        img: `${link}/vendor/images/partner.jpg`,
        title: `'Design','3D Modelling'`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe2`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 21,
        category: [
            'Agent Outreach', '3D Modelling'
        ],
        title: `'Agent Outreach', '3D Modelling'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe24`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 31,
        category: [
            'Virtual Staging'
        ],
        title: `'Virtual Staging'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe246`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 41,
        category: [
            'Agent Outreach'
        ],
        title: `'Agent Outreach'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe2468`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 51,
        category: [
            '3D Modelling'
        ],
        title: `'3D Modelling'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe1`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 61,
        category: [
            'Design'
        ],
        title: `'Design'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe13`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 71,
        category: [
            'Design', 'Tech', 'Virtual Staging', '3D Modelling'
        ],
        title: `'Design', 'Tech', 'Virtual Staging', '3D Modelling'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe135`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }, {
        id: 81,
        category: [
            'Tech', 'Agent Outreach', 'Virtual Staging', '3D Modelling'
        ],
        title: `'Tech', 'Agent Outreach', 'Virtual Staging', '3D Modelling'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe1357`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `24 September 2019`
    }
];

const category = [
    {
        id: '21',
        value: `Tech`
    }, {
        id: '13',
        value: `Design`
    }, {
        id: '14',
        value: `Agent Outreach`
    }, {
        id: '15',
        value: `Virtual Staging`
    }, {
        id: '16',
        value: `3D Modelling`
    }
];

const short = {
    set1: {
        value: `All`,
        text: `All`
    },
    set2: {
        value: `Bathroom 2`,
        text: `Bathroom 2`
    },
    set3: {
        value: `Bathroom`,
        text: `Bathroom`
    },
    set4: {
        value: `Living Room`,
        text: `Living Room`
    },
    set5: {
        value: `Dinning room`,
        text: `Dinning room`
    },
    set6: {
        value: `Bedroom`,
        text: `Bedroom`
    },
    set7: {
        value: `Kitchen`,
        text: `Kitchen`
    }
};

export default Data;
export {category, short}