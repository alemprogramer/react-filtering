const url = process.env.PUBLIC_URL;
const imgUrl = `${url}/vendor/images`;

const take = [
    {
        title: 'Vacant Photos',
        img: `${imgUrl}/vacant.png`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        importance: 2
    }, {
        title: 'Floor Plans',
        img: `${imgUrl}/vacant.png`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        importance: 2
    }, {
        title: 'Dimensions',
        img: `${imgUrl}/vacant.png`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        importance: 1
    }
]
const give = [
    {
        title: 'Digitally Staged Photos',
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        img: `${imgUrl}/vacant.png`
    }, {
        title: 'Same Size',
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        img: `${imgUrl}/vacant.png`
    }, {
        title: 'Top Notch Support',
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        img: `${imgUrl}/vacant.png`
    }
]
const faq = [
    {
        head: `What are the pricing packages for the virtual staging service?`,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
    }, {
        head: `What happens if I upload a photo that is a small size or low resolution or may not work with your service?`,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
    }, {
        head: `How long does it take to process my order and get my staged photos back?`,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
    }, {
        head: `How long can I use the virtually staged photos?`,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
    }, {
        head: `Does VSP alter the photographs by changing the wall colors, adding appliances and removing fixtures, etc?`,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
    }, {
        head: `Can I provide suggestions with respect to the staging of the photos?`,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
    }
]
const different = [
    {
        icon: `${imgUrl}/user.png`,
        title: 'Professional Home Stagers',
        text: 'We specialize in transfcascasorming photos of vacant properties into beautiful, ' +
                'virtually staged homes that sells faster and for top dollar.'
    }, {
        icon: `${imgUrl}/user.png`,
        title: 'Professasascional Home Stagers',
        text: 'We specialize in trascascansforming photos of vacant properties into beautiful, ' +
                'virtually staged homes that sells faster and for top dollar.'
    }, {
        icon: `${imgUrl}/user.png`,
        title: 'Professional Hocasme Stagers',
        text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                'lly staged homes that sells faster and for top dollar.'
    }, {
        icon: `${imgUrl}/user.png`,
        title: 'Professional Home Staascgers',
        text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                'lly staged homes that sells faster and for top dollar.'
    }, {
        icon: `${imgUrl}/user.png`,
        title: 'Professional Home Stagers',
        text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                'lly staged homescbf that sells faster and for top dollar.'
    }, {
        icon: `${imgUrl}/user.png`,
        title: 'Profesgfdsional Home Stagers',
        text: 'We specialnfgnfgize in transforming photos of vacant properties into beautiful, ' +
                'virtually staged homes that sells faster and for top dollar.'
    }
]
const howItWork = [
    {
        head: `Virtual Home Staging`,
        text: `Upload photos ( please use professional high resolution photos, not the ones you can take on your phone)`,
        image: `${imgUrl}/how.jpg`
    }, {
        head: `Interior Design and Support`,
        text: `Upload photos (not the ones you can take on your phone)`,
        image: `${imgUrl}/how_2.jpg`
    }, {
        head: `Virtual Home Staging`,
        text: `Upload photos ( please use professional high resolution photos, not the ones you can take on your phone)`,
        image: `${imgUrl}/how_3.jpg`
    }, {
        head: `Interior Design`,
        text: `Upload photos (not the ones you can take on your phone)`,
        image: `${imgUrl}/how_4.jpg`
    }
]

const previousWork = [
    {
        image: imgUrl + "/previous.jpg",
        title: 'Hill View Apartments'
    },
    {
        image: imgUrl + "/previous2.jpg",
        title: 'Residential Apartments'
    }
]

const partner = [
    {
        img: `${imgUrl}/partner.jpg`,
        title: `Reseller Program`,
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, provident!`,
        link: url
    },
    {
        img: `${imgUrl}/partner.jpg`,
        title: `Reseller Program`,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut a officiis nulla eos ea.`,
        link: url
    },
    {
        img: `${imgUrl}/partner.jpg`,
        title: `Reseller Program`,
        text: `Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Rem, nostrum, minima? Eveniet dolor corrupti beatae et quasi excepturi vitae. Voluptas perspiciatis ex soluta accusantium harum.`,
        link: url
    }
]

// Contact Us Page Data
const contact = [
    {
        image: `${imgUrl}/number.png`,
        text: `+91 - 9999999999`
    },
    {
        image: `${imgUrl}/email.png`,
        text: `yourbrand@email.com`
    },
    {
        image: `${imgUrl}/email.png`,
        text: `yourbrand@email.com`
    }
]

/* Services Start */

const img = imgUrl + '/service.png';
const services = [
    {
        image: img,
        title: 'Virtual Home Staging',
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, provident!`,
        link: '/service'
    },
    {
        image: img,
        title: 'Virtual Interior Design',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut a officiis nulla eos ea.`,
        link: '/service'
    },
    {
        image: img,
        title: 'Virtual Staging',
        text: `Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Rem, nostrum, minima? Eveniet dolor corrupti beatae et quasi excepturi vitae. Voluptas perspiciatis e x soluta accusantium harum.`,
        link: '/service'
    },
    {
        image: img,
        title: 'Virtual Home Staging',
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, provident!`,
        link: '/service'
    },
    {
        image: img,
        title: 'Virtual Interior Design',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut a officiis nulla eos ea.`,
        link: '/service'
    },
    {
        image: img,
        title: 'Virtual Staging',
        text: `Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Rem, nostrum, minima? Eveniet dolor corrupti beatae et quasi excepturi vitae. Voluptas perspiciatis e x soluta accusantium harum.`,
        link: '/service'
    },
    {
        image: img,
        title: 'Virtual Home Staging',
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, provident!`,
        link: '/service'
    },
    {
        image: img,
        title: 'Virtual Interior Design',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut a officiis nulla eos ea.`,
        link: '/service'
    },
    {
        image: img,
        title: 'Virtual Staging',
        text: `Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Rem, nostrum, minima? Eveniet dolor corrupti beatae et quasi excepturi vitae. Voluptas perspiciatis e x soluta accusantium harum.`,
        link: '/service'
    }
]

/* Services End */

/* Agency Data */

const agency=[
    {
        img: `${imgUrl}/logo.png`
    },
    {
        img: `${imgUrl}/logo2.png`
    },
    {
        img: `${imgUrl}/logo3.png`
    },
    {
        img: `${imgUrl}/logo4.png`
    },
    {
        img: `${imgUrl}/logo5.png`
    },
    {
        img: `${imgUrl}/logo6.png`
    }
]

/* Agency Data End*/

/*  Blog Pages Data */

const blog = [
    {
        id: 1,
        tags: [
            'Tech', 'Design', 'Virtual Staging', '3D Modelling'
        ],
        date: `2018-07-06T09:55:38.254Z`,
        title: `'Tech', 'Design', 'Virtual Staging', '3D Modelling`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe1`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-01`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    },
    {
        id: 12,
        tags: [
            'Design', 'Virtual Staging', '3D Modelling'
        ],
        date: `2018-08-06T09:55:38.254Z`,
        title: `'Design', 'Virtual Staging', '3D Modelling'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe12`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-02`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 13,
        tags: [
            'Design', 'Agent Outreach', '3D Modelling'
        ],
        date: `2018-09-06T09:55:38.254Z`,
        title: `'Design', 'Agent Outreach', '3D Modelling'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe123`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-03`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 14,
        tags: [
            'Design', 'Agent Outreach', 'Virtual Staging', 'Tech'
        ],
        date: `2018-10-06T09:55:38.254Z`,
        title: `'Design', 'Agent Outreach', 'Virtual Staging', 'Tech'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe1234`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-04`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 15,
        tags: [
            'Tech', 'Virtual Staging', '3D Modelling'
        ],
        date: `2018-07-16T09:55:38.254Z`,
        title: `'Tech', 'Virtual Staging', '3D Modelling'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe12345`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-05`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 16,
        tags: [
            'Tech', 'Virtual Staging', '3D Modelling'
        ],
        date: `2018-08-16T09:55:38.254Z`,
        title: `'Tech', 'Virtual Staging', '3D Modelling'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe123456`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-06`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 17,
        tags: [
            'Design', 'Tech'
        ],
        date: `2018-07-26T09:55:38.254Z`,
        title: `'Design', 'Tech'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe1234567`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-07`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 18,
        tags: [
            'Design', 'Virtual Staging', 'Tech'
        ],
        date: `2018-08-06T09:55:38.254Z`,
        title: `'Design', 'Virtual Staging', 'Tech'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe12345678`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-08`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 19,
        tags: [
            'Design', 'Agent Outreach', '3D Modelling'
        ],
        date: `2018-08-26T09:55:38.254Z`,
        title: `'Design', 'Agent Outreach', '3D Modelling'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe123456789`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-09`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 11,
        tags: [
            'Design', '3D Modelling'
        ],
        date: `2018-07-05T09:55:38.254Z`,
        title: `'Design','3D Modelling'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe2`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-10`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 21,
        tags: [
            'Agent Outreach', '3D Modelling'
        ],
        date: `2018-08-05T09:55:38.254Z`,
        title: `'Agent Outreach', '3D Modelling'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe24`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-11`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 31,
        tags: [
            'Virtual Staging'
        ],
        date: `2018-06-06T09:55:38.254Z`,
        title: `'Virtual Staging'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe246`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-12`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 41,
        tags: [
            'Agent Outreach'
        ],
        date: `2018-06-16T09:55:38.254Z`,
        title: `'Agent Outreach'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe2468`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-13`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 51,
        tags: [
            '3D Modelling'
        ],
        date: `2018-09-16T09:55:38.254Z`,
        title: `'3D Modelling'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe1`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-14`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 61,
        tags: [
            'Design'
        ],
        date: `2018-01-06T09:55:38.254Z`,
        title: `'Design'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe13`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-15`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 71,
        tags: [
            'Design', 'Tech', 'Virtual Staging', '3D Modelling'
        ],
        date: `2018-01-08T09:55:38.254Z`,
        title: `'Design', 'Tech', 'Virtual Staging', '3D Modelling'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe135`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-16`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }, {
        id: 81,
        tags: [
            'Tech', 'Agent Outreach', 'Virtual Staging', '3D Modelling'
        ],
        date: `2017-07-09T09:55:38.254Z`,
        title: `'Tech', 'Agent Outreach', 'Virtual Staging', '3D Modelling'`,
        img: `${imgUrl}/partner.jpg`,
        avatar: `${imgUrl}/blogger.png`,
        writer: `Jhon Doe1357`,
        slogan: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `link-18`,
        blogs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in perferendis est nulla molestiae at cupiditate omnis voluptatem tempora quaerat? Quos, rem? Rerum unde officiis delectus harum excepturi minima sed?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit animi consequuntur nisi! Animi explicabo vero esse nostrum ea dolorem illo velit accusamus sint, eligendi dolore? Delectus laborum sapiente voluptatem! Quam repellendus dolorum delectus voluptatibus amet culpa dignissimos. Vel ea eius corporis ut, in beatae excepturi assumenda blanditiis dicta officiis!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempore culpa similique asperiores animi aut, cupiditate dolorem incidunt delectus hic. Possimus minima accusantium quo ducimus, quod error quidem temporibus aut beatae ex odit eaque libero? Dolores, necessitatibus perferendis. At itaque impedit expedita odio blanditiis fuga alias quibusdam deserunt iusto. Sapiente quidem impedit alias dicta molestiae vitae iste reprehenderit, consequatur, architecto quisquam eveniet quos? Quibusdam rerum quasi impedit quo porro, animi, itaque nemo ullam expedita asperiores, nesciunt fugit optio. Aspernatur tempore vitae nostrum porro in molestiae aliquam vero accusamus sint, saepe rerum dolore. Animi, in iure? Et, fugit sapiente molestias aliquam porro fuga doloribus delectus culpa ratione accusantium impedit, veniam quisquam animi sequi dolores optio nemo perspiciatis saepe eius? At, ad sunt modi nesciunt veniam veritatis ea similique nemo perferendis et aliquid ex doloribus. Eligendi laborum, a ipsum temporibus impedit ea obcaecati. Ad dignissimos reiciendis delectus illo laboriosam nam? Numquam, accusamus.`
    }
];

const tags = [
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

const sort = [
    {
        value: `All`,
        slogan: `All`
    },
    {
        value: `Bathroom 2`,
        slogan: `Bathroom 2`
    },
    {
        value: `Bathroom`,
        slogan: `Bathroom`
    },
    {
        value: `Living Room`,
        slogan: `Living Room`
    },
    {
        value: `Dinning room`,
        slogan: `Dinning room`
    },
    {
        value: `Bedroom`,
        slogan: `Bedroom`
    },
    {
        value: `Kitchen`,
        slogan: `Kitchen`
    }
];

/* Blog Page Data End */

/* Refferal Page */

const referral = [
    {
        image: `${imgUrl}/number.png`,
        text: `Let others know about VSS and share your unique referral code with them.`
    },
    {
        image: `${imgUrl}/number.png`,
        text: `When someone you refer signs up they'll receive a $40 discount on their first order.`
    },
    {
        image: `${imgUrl}/number.png`,
        text: `Once confirmed we'll send you a $40 account credit that can be used on any of our services.`
    }
]

/* Refferal Page End */

/* Portfolio Page */

const select = [
    {
        value: `All`,
        text: `All`
    },
    {
        value: `Kitchen`,
        text: `Kitchen`
    },
    {
        value: `Bedroom`,
        text: `Bedroom`
    },
    {
        value: `Dinning room`,
        text: `Dinning room`
    },
    {
        value: `Living Room`,
        text: `Living Room`
    },
    {
        value: `Bathroom`,
        text: `Bathroom`
    },
    {
        value: `Kitchen`,
        text: `Kitchen`
    },
    {
        value: `Kitchen`,
        text: `Kitchen`
    },
    {
        value: `Bedroom`,
        text: `Bedroom`
    },
    {
        value: `Bedroom`,
        text: `Bedroom`
    },
    {
        value: `Bedroom`,
        text: `Bedroom`
    }
]

const item = [
    {
        image: `${url}/vendor/images/portfolio.jpg`,
        text: `Hill View Apartments`,
        url,
    },
    {
        image: `${url}/vendor/images/portfolio9.jpg`,
        text: `Hill View Apartments`,
        url,
    },
    {
        image: `${url}/vendor/images/portfolio2.jpg`,
        text: `Hill View Apartments`,
        url,
    },
    {
        image: `${url}/vendor/images/portfolio3.jpg`,
        text: `Hill View Apartments`,
        url,
    },
    {
        image: `${url}/vendor/images/portfolio4.jpg`,
        text: `Hill View Apartments`,
        url,
    },
    {
        image: `${url}/vendor/images/portfolio5.jpg`,
        text: `Hill View Apartments`,
        url,
    },
    {
        image: `${url}/vendor/images/portfolio7.jpg`,
        text: `Hill View Apartments`,
        url,
    },
    {
        image: `${url}/vendor/images/portfolio8.jpg`,
        text: `Hill View Apartments`,
        url,
    },
    {
        image: `${url}/vendor/images/portfolio9.jpg`,
        text: `Hill View Apartments`,
        url,
    },
]

/* Portfolio Page End */

export default imgUrl
export { url, take, give, faq, different, howItWork, blog, tags, sort, contact, services, agency, previousWork, partner, referral, item, select }
