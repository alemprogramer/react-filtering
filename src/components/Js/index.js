const url = process.env.PUBLIC_URL;
const imgUrl = `${url}/vendor/images`;

const array = [
    { // take
        setA: {
            title: 'Vacant Photos',
            img: `${imgUrl}/vacant.png`,
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            importance: 2
        },
        setB: {
            title: 'Floor Plans',
            img: `${imgUrl}/vacant.png`,
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            importance: 2
        },
        setC: {
            title: 'Dimensions',
            img: `${imgUrl}/vacant.png`,
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            importance: 1
        }
    }, { //give
        setA: {
            title: 'Digitally Staged Photos',
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            img: `${imgUrl}/vacant.png`
        },
        setB: {
            title: 'Same Size',
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            img: `${imgUrl}/vacant.png`
        },
        setC: {
            title: 'Top Notch Support',
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            img: `${imgUrl}/vacant.png`
        }
    }, { //faq
        setA: {
            head: `What are the pricing packages for the virtual staging service?`,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
        },
        setB: {
            head: `What happens if I upload a photo that is a small size or low resolution or may not work with your service?`,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
        },
        setC: {
            head: `How long does it take to process my order and get my staged photos back?`,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
        },
        setD: {
            head: `How long can I use the virtually staged photos?`,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
        },
        setE: {
            head: `Does VSP alter the photographs by changing the wall colors, adding appliances and removing fixtures, etc?`,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
        },
        setF: {
            head: `Can I provide suggestions with respect to the staging of the photos?`,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
        }
    }, { //differ
        a: {
            icon: `${imgUrl}/user.png`,
            title: 'Professional Home Stagers',
            text: 'We specialize in transfcascasorming photos of vacant properties into beautiful, ' +
                    'virtually staged homes that sells faster and for top dollar.'
        },
        b: {
            icon: `${imgUrl}/user.png`,
            title: 'Professasascional Home Stagers',
            text: 'We specialize in trascascansforming photos of vacant properties into beautiful, ' +
                    'virtually staged homes that sells faster and for top dollar.'
        },
        c: {
            icon: `${imgUrl}/user.png`,
            title: 'Professional Hocasme Stagers',
            text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                    'lly staged homes that sells faster and for top dollar.'
        },
        d: {
            icon: `${imgUrl}/user.png`,
            title: 'Professional Home Staascgers',
            text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                    'lly staged homes that sells faster and for top dollar.'
        },
        e: {
            icon: `${imgUrl}/user.png`,
            title: 'Professional Home Stagers',
            text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                    'lly staged homescbf that sells faster and for top dollar.'
        },
        f: {
            icon: `${imgUrl}/user.png`,
            title: 'Profesgfdsional Home Stagers',
            text: 'We specialnfgnfgize in transforming photos of vacant properties into beautiful, ' +
                    'virtually staged homes that sells faster and for top dollar.'
        }
    }, { //howIt
        setA: {
            head: `Virtual Home Staging`,
            text: `Upload photos ( please use professional high resolution photos, not the ones you can take on your phone)`,
            image: `${imgUrl}/how.jpg`
        },
        setB: {
            head: `Interior Design and Support`,
            text: `Upload photos (not the ones you can take on your phone)`,
            image: `${imgUrl}/how_2.jpg`
        },
        setC: {
            head: `Virtual Home Staging`,
            text: `Upload photos ( please use professional high resolution photos, not the ones you can take on your phone)`,
            image: `${imgUrl}/how_3.jpg`
        },
        setD: {
            head: `Interior Design`,
            text: `Upload photos (not the ones you can take on your phone)`,
            image: `${imgUrl}/how_4.jpg`
        }
    },
];export default array
