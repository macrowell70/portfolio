export const navLinks = [
    {
        id: 'home',
        title: 'Home'
    },
    {
        id: 'projects',
        title: 'Projects'
    },
    {
        id: 'about',
        title: 'About'
    },
    {
        id: 'contact',
        title: 'Contact'
    }
]

export const intro = [
    {
        id: 1,
        text: 'Hi!'
    },
    {
        id: 2,
        text: "I'm Mitch"
    },
    {
        id: 3,
        text: 'Web devoloper and software engineer.'
    },
    {
        id: 4,
        text: 'I made this website to showcase my skills and experience.'
    },
    {
        id: 5,
        text: 'Please enjoy!'
    }
]

export const navCardInfo = [
    {
        id: 'projects',
        number: 1,
        title: 'My Projects',
    },
    {
        id: 'about',
        number: 2,
        title: 'About Me',
    },
    {
        id: 'contact',
        number: 3,
        title: 'Contact Me',
    }
]

export const formFields = [
    {
        name: 'fname',
        placeholder: 'First name',
        type: 'text',
        required: true
    },
    {
        name: 'lname',
        placeholder: 'Last name',
        type: 'text',
        required: true
    },
    {
        name: 'email',
        placeholder: 'Email',
        type: 'email',
        required: true
    },
    {
        name: 'business',
        placeholder: 'Business or Organization',
        type: 'text',
        required: false
    },
]

export const initialFormValues = {
    fname: '',
    lname: '',
    email: '',
    business: '',
    message: ''
}

export const projects = [
    {
        id: 1,
        title: "Mortgage Calculator",
        thumbnail: "https://i.ibb.co/x8NpTpc/29c43a62-65e7-4a3b-b9ca-b41206dd8691.png",
        description: "An application designed to calculate a recommended mortgage principal and monthly payment based on a users financial profile. This site was developed with react. I have included it on this page to showcase some of my technical skills and abilities, as well as my knowledge and experience with the banking industry",
        link: "https://mortgage-calculator-omega.vercel.app/"
      },
      {
        id: 2,
        title: "Fluid Innovations",
        thumbnail: "https://i.ibb.co/g3JVD6f/804eda8e-f958-43b4-8990-a2d2e8fa8c0d.png",
        description: "This is a mock site for a local small manufacturing business. I have included it on this page to showcase my front end development and design skills. This site was design on Figma and developed using react and SaSS. The site is fully responsive to alternate devices. Go ahead, check it out on your cell phone!",
        link: "https://fluid-innovations-site.vercel.app/"
      },
      {
        id: 3,
        title: "Custom API",
        thumbnail: "https://i.ibb.co/WPNYk8X/API.png",
        description: "This is a custom built API, that will soon be used to retrieve data to the projects section of this portfolio, making updating this section simple. This was developed using Express.js with knex to build a sqlite database. The API is functioning, however I am working on integrating MongoDB, so I can host it on Heroku. I have included it on this page to showcase my backend engineering skills. I expect to have the final version up and running very soon. The link below will take you to the GitHub repository to view the source code.",
        link: "https://github.com/macrowell70/portfolio-be"
      }
]

export const paragraphs = [
    {
        id: 1,
        text: "My name is Mitch. I am a web developer and software engineer dedicated to writing efficient, readable, and scalable code while creating new and exciting software."
    }, 
    {
        id: 2,
        text: "Since March of 2022, I have been on a journey to improve my life with a career in web and software development. To begin my journey I began a full stack development course with Bloom Institute of Technology. That course awarded me a wide breadth of knowledge in languages such as JavaScript, HTML, CSS, and Python, as well as frameworks like React, Node, Redux, SaSS, Less, Express and others. I have received training in developing front end and back end components, as well as first hand experience with Symantic HTML, advanced design principals, agile project management, SDLC, RESTful APIs, deployment, GitHub, authentication and authorization."
    },
    {
        id: 3,
        text: "Now I am embarking on the next part of the process to find my next exciting career in tech while continuing my education. I am interested in both front end and back end development. I have a background in banking, as well as a degree in economics, and I would love to find a position in the financial services industry. My unique perspective as an end user of much of the software in banking gives me the ability to design products with the best interest of those users in mind."
    },
    {
        id: 4,
        text: "I hope to soon find an employer that will help me in my growth as a developer while providing them with top knotch software."
    }
]