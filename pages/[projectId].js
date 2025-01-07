import React from 'react'
import Link from 'next/link'
// import { useEffect } from 'react'
import Header from './components/Projectheader'
// import { useRouter } from 'next/router'
import projectsData from '../assets/burhan-ws-data_v0.2.json'

import Head from 'next/head'
import Image from "next/image";

export async function getStaticPaths() {

  const data = Object.values(projectsData);
  const paths = data.map((project) => ({
    params: { projectId: project._id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projectsData[params.projectId];
  return {
    props: {
      project,
    },
  };
}




const ProjectDetail = ({ project }) => {

  //testing
  const aspectRatio = 16 / 9; // replace with the actual aspect ratio of your image
  const height = 600; // replace with your desired height


  return (
    <div id='project-detail-main'>
      <Head>
        <title>Syed Burhan | Web Dev - Work - {projectsData[project._id].title}</title>
      </Head>
      <Header/>

      <div className="project-detail-container">


        <div className="content-container">
          <div className="main-section">
            <div className="heading-outer-container">
              <div className="heading-container">
                <Link href="/work">
                  <div className="main-heading">
                    &lt; All Projects
                  </div>
                </Link>

                <div className="sub-heading">
                  {projectsData[project._id].title}

                </div>
              </div>


            </div>
            <div className="break-container">
            </div>


            <div className='details-wrap'>
              {projectsData[project._id].details.map((section, index) => {
                if (section.type === "text") {
                  return <p key={index}>{section.content}</p>;
                } else if (section.type === "image") {
                  return (

                    <div
                      key={index}
                      className='main-image-container'
                    >
                      {/* {!isLoaded && <div className="skeleton">
                        <div className="skeleton-image"><img src="./Homepage.png" alt="" /></div>
                      </div>
                      } */}

                      <Image
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23ddd'/%3E%3C/svg%3E"
                        width={500 * aspectRatio} // set width based on aspect ratio
                        height={height} // set fixed height
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src={
                          section.type === "image"
                            ? section.url
                            : "https://picsum.photos/200/300"
                        }
                        alt="image"
                      // onLoad={() => setIsLoaded(true)}
                      // style={isLoaded ? { width: "100%", height: "auto" } : {}}
                      />


                      {/* <img

                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        src={
                          section.type === "image"
                            ? section.url
                            : "https://picsum.photos/200/300"
                        }
                        alt="image"
                      /> */}

                      {section.title !== null ? <p >{section.title}</p> : <></>}
                    </div>
                  );
                } else {
                  return null; // optional: handle other types of sections
                }
              })}
            </div>



          </div>
          <div className="main-break">

          </div>
          <div className="side-section">
            <div className="side-section-container">

              <div className="side-section-text-link">
                <div className="side-section-heading">
                  <p>
                    ABOUT

                  </p>
                </div>
                <div className="text-main">
                  <p>
                    {projectsData[project._id].about}
                  </p>
                </div>

                {(projectsData[project._id].url !== null) ?
                  <div className="link">
                    <a className="link-text" target="_blank" href={projectsData[project._id].url}>{projectsData[project._id].title}</a>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.125 7.99375L6.74375 1.375H2.625V0.125H8.875V6.375H7.625V2.25625L1.00625 8.875L0.125 7.99375Z" fill="#23FA4B" />
                    </svg>
                  </div>
                  : <></>
                }
              </div>
            </div>
            {/* <div className="side-section-container">
              <div className="side-section-heading">
                <p>
                  SECTOR
                </p>

              </div>
              <div className="side-section-text">

                {projectsData[project._id].sector.map((element, index) => { return <p key={index}>{element}</p> })}


              </div>
            </div> */}
            {/* <div className="side-section-container">
              <div className="side-section-heading">
                <p>
                  SCOPE

                </p>
              </div>
              <div className="side-section-text">
                {projectsData[project._id].scope.map((element, index) => { return <p key={index}>{element}</p> })}

              </div>
            </div> */}
            <div className="side-section-container">
              <div className="side-section-heading">
                <p> LOCATION</p>
              </div>
              <div className="side-section-text">
                <p>{projectsData[project._id].location}</p>
              </div>
            </div>
            {/*     <div className="side-section-break">

            </div>


            <div className="side-section-container">

              <div className="side-section-heading">
                <p>NEXT PROJECT</p>
              </div>

              <div className="side-section-text">
                <p>Clipping paltform</p>
              </div>

            </div> */}

          </div>

        </div>
     

      </div>
    </div>
  )
}
export default ProjectDetail
