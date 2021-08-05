import "./testimonials.scss"

export default function Testimonials() {

    const data = [
       {
        id: 1,
        name: "A. Ikaika Gleisberg",
        title: "Assistant Professor of Sociology & Sexuality Studies",
        img:
            "https://media-exp1.licdn.com/dms/image/C5603AQHy3dWHJPYjXw/profile-displayphoto-shrink_200_200/0/1516270823069?e=1633564800&v=beta&t=TglCHAWQ0AxQhClDv69DoBhHP2ftcfvzw7rptIUYUy8",
        icon: "assets/linkedin.png",
        desc:
            "Serena is organized, focused, and methodical with her tasks. She is also an effective communicator, creative problem-solver, and a team player.",
        },
        {
        id: 2,
        name: "Jaclyn Mullen",
        title: "Growth Marketing Manager",
        img:
            "https://media-exp1.licdn.com/dms/image/C5603AQFBQFe7NuqgWg/profile-displayphoto-shrink_200_200/0/1601298549122?e=1633564800&v=beta&t=oUThPxgEt7ehYL_X_BrVuBHPOHEoELaaoPktQLh9ekQ",
        icon: "assets/linkedin.png",
        desc:
            "Serena is laser-focused on user experience. She brings an open mind, customer-centric curiosity and an empathetic approach to any brand and organization. Armed with Analytics knowledge, she isn't afraid to speak up and pair great ideas with measurable data. ",
        featured: true,
        },
        {
        id: 3,
        name: "Laurel Lane",
        title: "Marketing Faculty at MSU Denver",
        img:
            "https://media-exp1.licdn.com/dms/image/C4E03AQF0lmCWgvyWjQ/profile-displayphoto-shrink_200_200/0/1627434860388?e=1633564800&v=beta&t=uB6JZnRnOSNrEiEv8Rp7rH1JuaYqiTlvyxxxVTrUN3g",
        icon: "assets/linkedin.png",
        desc:
            "Serena is a well-rounded student and looks forward to becoming a marketing professional. The Digital Marketing Science course has given her the foundational knowledge and hands-on skills that she can put to work right now! Any company would be lucky to hire Serena!",
        },
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d)=> (
                
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img  className="user" src={d.img} alt="" />
                        <img  className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
        );
}
