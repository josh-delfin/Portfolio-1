import React, { useState } from "react";

/**
 *
 * Projects Column from the Work section. Only for mobile
 *
 * @param {Array} projects - All the projects person has done. It has 6 attributes: backgroundColor for background color of the bubble. Type for type of the projects. Title and subtitle of the project. Techs the technologies projects has used. Links is a json with 2 attributes github and website.
 * 
 *
 */
function ProjectsColumn() {
  const [texts] = useState({
    projects: [
      {
        backgroundColor: `#dfe6e940`,
        type: `Website`,
        title: `<strong>JJAM Event Management</strong>`,
        subtitle:
          "JJAM Event Management is an event management website. During my involvement with the Danceflavors app, I worked on the frontend development of this event management platform and contributed to the backend architecture. The website was built using HTML, CSS, and JavaScript to create a user-friendly interface for managing and organizing various events.",
        techs: "HTML, CSS, JavaScript.",
        links: {
          github: "https://joseensoiii.github.io/JJAM-EVENT-MANAGEMENT/",
          website: "",
        },
      },
      {
        backgroundColor: `#E4FAFE`,
        type: `Website`,
        title: `<strong>Metacore Systems Inc.</strong>`,
        subtitle:
    "Metacore Systems Inc. is a prominent IT solutions company, offering a comprehensive range of innovative services, including software development, web applications, mobile apps, cloud computing, and cybersecurity. With a customer-centric approach and skilled team, we ensure successful implementation and reliable solutions, making us a trusted partner in digital transformation. Experience the power of technology-driven solutions with Metacore Systems Inc., driving growth and success for businesses worldwide.",
        techs: "Reactjs Vite.js TailwindCSS ",
        links: {
          github: "",
          website: "https://www.metacoresystemsinc.com/",
        },
      },
      {
        backgroundColor: `#CCFAED`,
        type: `Website`,
        title: `<strong>OneLuxor</strong>`,
        subtitle:
    "OneLuxor is a dedicated travel website that beckons you to embark on a captivating journey through the mesmerizing destinations of the Philippines. Immerse yourself in the allure of this tropical paradise as we unveil a curated selection of the country's most alluring and unique destinations. Discover the hidden gems and rich cultural heritage that await you in this enchanting world of travel.",
        techs: "Reactjs Vite.js TailwindCSS ",
        links: {
          github: "",
          website:"https://www.oneluxor.ph/",
           
        },
      },
      {
        backgroundColor: `#D5EAFF`,
        type: `POS`,
        title: `<strong>Philip Rice Dealer</strong>`,
        subtitle:
          " system built with CodeIgniter 3, enabling effortless inventory management, precise sales tracking, and accurate measurements with integrated scales. Elevate your business and optimize efficiency with our technology-driven solution.",
        techs: "CodeIgniter 3, PHP, MySQL, JavaScript",
        links: {
          github: "",
          website: "",
        },
      },
      {
        backgroundColor: `#D5EAFF`,
        type: `POS`,
        title: `<strong>Philippine Property Homes</strong>`,
        subtitle:
        "Point of Sale (POS) system simplifies and manages all transactions entering and leaving your company, ensuring streamlined financial operations. Trust in our secure and efficient POS to optimize your business processes and drive success.",
        techs: "CodeIgniter 3, PHP, MySQL, JavaScript",
        links: {
          github: "",
          website: "",
        },
      },
    ],
  });

  /// Returns the items from the projects array.
  return (
    <>
      <div className="column">
        {texts.projects.map((item, i) => {
          return (
            <div
              className="item"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <h1
                dangerouslySetInnerHTML={{
                  __html: item.type,
                }}
              ></h1>
              <h2
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              ></h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.subtitle,
                }}
              ></p>
              <span
                dangerouslySetInnerHTML={{
                  __html: item.techs,
                }}
              ></span>
              <div className="row-of-logos">
                {item.links.github != "" ? (
                  <a href="">
                    <img src="/logos/github-mark.png" alt="" />
                  </a>
                ) : null}
                {item.links.website != "" ? (
                  <a href="">
                    <img src="/logos/website.png" alt="" />
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .column {
          display: flex;
          flex-direction: column;
          margin-top: 16px;
        }
        h1 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
          margin-bottom: 5px;
        }
        h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 25px;
        }

        p {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 15px;
          line-height: 20px;
          color: #61616a;
          margin-bottom: 25px;
        }
        .item {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 4vw;
          border-radius: 2vw;
          margin-bottom: 25px;
        }
        .item .row-of-logos {
          display: flex;
          flex-direction: row;
          margin-top: 25px;
        }
        .item .row-of-logos img {
          width: 40px;
          height: 25px;
          object-fit: contain;
        }
      `}</style>
    </>
  );
}

export default ProjectsColumn;
