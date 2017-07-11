import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var Carousel = require('react-responsive-carousel').Carousel;
var x = require('react-responsive-carousel/lib/styles/carousel.css')

class App extends Component {
  render() {
    return (
      <div className="app" style={{fontFamily:"HelveticaNeue-Light"}}>
        
        <div className="header" style={{display:"flex", backgroundColor:"#42b9f4", justifyContent:"center"}}>

          <div className="headerWrapper" style={{width:"1000px", paddingLeft:"20px", paddingRight:"20px"}}>
            <div className="headerTitle" style={{display:"flex", justifyContent:"center"}}>
              <h1 style={{fontFamily:"Amatic SC", fontWeight:"700", margin:"30px 0px 20px 0px", color:"#fdfdfd"}}>ASAF AVIDAN ANTONIR</h1>
            </div> 

            <div className="navBar" style={{color:"#666666", display:"flex", justifyContent:"center"}}>
              <a href="#topCard" style={{textDecoration:"none", fontFamily:"Roboto", fontWeight:"300", margin:"0px 10px 15px 10px", fontSize:"18px", color:"#fdfdfd"}}>About</a>
              <a href="#projects" style={{textDecoration:"none", fontFamily:"Roboto", fontWeight:"300", margin:"0px 10px 15px 10px", fontSize:"18px", color:"#fdfdfd"}}>Projects</a>
              <a href="#experience" style={{textDecoration:"none", fontFamily:"Roboto", fontWeight:"300", margin:"0px 10px 15px 10px", fontSize:"18px", color:"#fdfdfd"}}>Experience</a>
              <a href="#footer" style={{textDecoration:"none", fontFamily:"Roboto", fontWeight:"300", margin:"0px 10px 15px 10px", fontSize:"18px", color:"#fdfdfd"}}>Contact</a>
            </div>
          </div>

        </div>

        <div className="body" style={{display:"flex", justifyContent:"center"}}>

          <div className="bodyWrapper" style={{width:"1000px", paddingLeft:"20px", paddingRight:"20px"}}>
            <div id="topCard" className="topCard" style={{ borderBottomStyle:"solid", borderBottomWidth:"1px", borderBottomColor:"#CCCCCC", paddingTop:"50px", paddingBottom:"50px"}}>
              <div className="imgSection" style={{flexBasis:"35%", display:"flex", alignItems:"center"}}>
                <img className="profilePicture" src="./AsafIllumio.jpg" style={{width:"100%", borderRadius:"50%"}}/>
              </div>
              <div className="contentSection" style={{flexBasis:"60%"}}>
                <h1 style={{fontFamily:"Amatic SC", fontWeight:"700", margin:"0px", color:"#135296", fontSize:"42px"}}>HI, MY NAME IS ASAF.</h1>
                <p style={{fontFamily:"Quicksand", fontWeight:"700",  color:"#555555", fontSize:"20px"}}>I&#39;m an engineer, entrepreneur, and ping pong enthusiast.</p>
                <p style={{color:"#666666", fontSize:"18px"}}>At a young age I moved from Israel to Silicon Valley for my father&#39;s startup, quickly inheriting the entrepreneurial bug and love for technology.</p>
                <p style={{fontWeight:"300", color:"#666666", fontSize:"18px"}}>I studied Electrical Engineering and Computer Science at UC Berkeley, where I was also involved in the hackathon community as director of the first Cal Hacks, and the Israeli community through my work in Mishelanu.</p>
                <p style={{fontWeight:"300", color:"#666666", fontSize:"18px"}}>I&#39;ve picked up experience at amazing companies like Illumio, LinkedIn, and Microsoft, and currently spend my days exploring solutions in artificial intelligence.</p>
                <div className="socialLinks" style={{display:"flex", justifyContent:"center"}}>
                  <a href="https://www.linkedin.com/in/asaf-avidan-antonir-95888558"><img src="./LinkedInSquare.png" style={{width:"40px", height:"40px", margin:"5px 15px 0px 15px", borderRadius:"4px"}}/></a>
                  <a href="https://www.facebook.com/asaf.avidanantonir"><img src="./FacebookIcon.png" style={{width:"40px", height:"40px", margin:"5px 15px 0px 15px", borderRadius:"4px"}}/></a>
                  <a href="https://github.com/AsafAA"><img src="./GitHubSquare.svg" style={{width:"40px", height:"40px", margin:"5px 15px 0px 15px", borderRadius:"4px"}}/></a>
                </div>
              </div>
            </div>

          {/*TODO: turn these into components*/}
            <div id="projects" className="projects" style={{paddingTop:"50px", paddingBottom:"40px", borderBottomStyle:"solid", borderBottomWidth:"1px", borderBottomColor:"#CCCCCC"}}>
              <h2 style={{fontFamily:"Amatic SC", fontWeight:"700", marginBottom:"35px", marginTop:"0px", fontSize:"50px", color:"#8e4380"}}>PROJECTS</h2>

              <div className="project" style={{marginTop:"10px", marginBottom:"50px"}}>
                <div className="projectContent" style={{flexBasis:"50%"}}>
                  <h3 style={{fontFamily:"Roboto", fontWeight:"300", margin:"0px", fontSize:"26px", color:"#333333"}}>STEADY SQUARE</h3>
                  <p style={{fontFamily:"Quicksand", fontWeight:"400",  color:"#555555", fontSize:"20px"}}>An app for weighing objects on your phone&#39;s screen.</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>When Apple introduced 3D Touch, I wanted to turn my iPhone into a functioning scale. When others&#39; attempts were rejected from the app store, I built a game that could be secretly used to do so.</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>After nearly a <b>million</b> video views and over 100,000 downloads in two days, I got a nice call from Apple and the app and video had to go. Here is the video quietly re-uploaded!</p>
                  <div className="pressLinks">
                    <a href="http://www.businessinsider.com/how-to-turn-your-iphone-into-a-working-scale-2015-12"><img src="./BusinessInsiderLogo.png" style={{opacity:"0.8", height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                    <a href="http://mashable.com/2015/12/12/5-cant-miss-apps-photomath-steady-square/#XnUd6XR8laq3"><img src="./MashableLogo.svg" style={{opacity:"0.8", height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                    <a href="https://thenextweb.com/apps/2015/12/11/redditor-bypasses-apple-guidelines-releases-flappy-bird-clone-for-weighing-oregano/#.tnw_qlQEbkNG"><img src="./NextWebLogo.png" style={{opacity:"0.8", height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                    <a href="https://www.theverge.com/2015/12/10/9888494/steady-square-ios-game-scale-3d-touch"><img src="./TheVergeLogo.png" style={{opacity:"0.8", height:"18px", margin:"5px 30px 5px 0px"}}/></a>                  
                    <a href="http://lifehacker.com/steady-square-lets-you-weigh-things-with-your-iphone-6s-1747164070"><img src="./LifeHackerLogo.png" style={{opacity:"0.8", height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                  </div>
                </div>
                <div className="projectVideo" style={{flexBasis:"45%", display:"flex", alignItems:"center", marginTop:"15px", marginBottom:"15px"}}>
                  <div className="iframeWrapper" style={{position:"relative", width:"100%", height:"0", paddingBottom:"56.25%"}}>
                    <iframe allowFullScreen="allowfullscreen" style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} frameBorder="0" src="https://www.youtube.com/embed/2HLE2yaLDrc?rel=0&showinfo=0&autohide=1"></iframe>
                  </div>
                </div>
              </div>

              <div className="project" style={{marginTop:"10px", marginBottom:"20px"}}>
                <div classNAme="projectContent" style={{flexBasis:"50%"}}>
                  <h3 style={{fontFamily:"Roboto", fontWeight:"300", margin:"0px", color:"#333333", fontSize:"26px"}}>DITTO KEYBOARD</h3>
                  <p style={{fontFamily:"Quicksand", fontWeight:"400", color:"#555555", fontSize:"20px"}}>A keyboard for sending commonly used text snippets.</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>Whether it’s texting, dating, business, or just regular daily communication, we tend to repeat ourselves quite often.</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>With Ditto, save your most commonly used texts, phrases, and templates, and access them easily from any app!</p>
                  <div className="pressLinks">
                    <a href="https://www.producthunt.com/posts/ditto-keyboard"><img src="./ProductHuntLogo.png" style={{opacity:"0.8", height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                    <a href="https://www.yahoo.com/tech/7-awesome-paid-iphone-apps-free-downloads-now-145235184.html"><img src="./YahooLogo.png" style={{opacity:"0.8", height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                    <a href="http://www.ilovefreesoftware.com/30/iphone/iphone-app-save-frequently-used-text-within-keyboard.html"><img src="./ILoveFreeSoftwareLogo2.png" style={{opacity:"0.8", height:"18px", margin:"5px 30px 5px 0px", borderRadius:"4px"}}/></a>
                    <a href="http://pcweenies.com/2016/09/04/review-ditto-keyboard-for-ios/"><img src="./PCWeeniesLogo.jpg" style={{opacity:"0.8", height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                  </div>
                </div>
                <div className="projectVideo" style={{flexBasis:"45%", display:"flex", alignItems:"center", marginTop:"15px", marginBottom:"15px"}}>
                  <div className="iframeWrapper" style={{position:"relative", width:"100%", height:"0", paddingBottom:"56.25%"}}>
                    <iframe allowFullScreen="allowfullscreen" style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} frameBorder="0" src="https://www.youtube.com/embed/JsV8MlF_UNI?rel=0&showinfo=0&autohide=1"></iframe>
                  </div>
                </div>
                
              </div>

            </div>

            <div id="experience" className="experience" style={{paddingTop:"50px", paddingBottom:"20px"}}>
              <h2 style={{fontFamily:"Amatic SC", fontWeight:"700", margin:"0px", fontSize:"50px", color:"#ff8c0a"}}>EXPERIENCE</h2>

              <div className="role" style={{marginTop:"20px", marginBottom:"30px"}}>

                <div className="roleContent" style={{flexBasis:"55%"}}>
                  <h3 style={{fontSize:"26px", color:"#333333", fontFamily:"Roboto", fontWeight:"300"}}>ILLUMIO</h3>
                  <p style={{fontFamily:"Quicksand", fontWeight:"400", color:"#555555", fontSize:"20px"}}>Software Engineer - distributed systems team</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>Worked on projects ranging from the core security policy computation engine, to automating our command line interface, to enforcing consistency and versioning of our APIs.</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>On the side, I ran Illumio&#39;s university hackathon efforts at Berkeley and Stanford, and organized the company&#39;s first <a style={{textDecoration:"none"}} href="https://www.illumio.com/blog/hackday-2016#gsc.tab=0">internal hackathon.</a></p>
                </div>

                 <div className="rolePhotos" style={{flexBasis:"40%", display:"flex", alignItems:"center", marginTop:"15px", marginBottom:"15px"}}>
                  <Carousel swipeScrollTolerance={0}  showThumbs={false} dynamicHeight={false} showArrows={true} emulateTouch={true} showStatus={false}>
                    <div>
                        <img src="./IllumioRole1b.jpg" />
                    </div>
                    <div>
                        <img src="./IllumioRole2.jpg" />
                    </div>
                    <div>
                        <img src="./IllumioRole3.jpg" />
                    </div>
                    <div>
                        <img src="./IllumioRole4.jpg" />
                    </div>

                  </Carousel>
                </div>
              </div>

              <div className="role" style={{marginTop:"20px", marginBottom:"30px"}}> 
                <div className="roleContent" style={{}}>
                  <h3 style={{fontSize:"26px", color:"#333333", fontFamily:"Roboto", fontWeight:"300"}}>MICROSOFT</h3>
                  <p style={{fontFamily:"Quicksand", fontWeight:"400", color:"#555555", fontSize:"20px"}}>Software Engineering Intern</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>Built a new transactional notification system for Microsoft&#39;s Commerce platform. Replaced two legacy email systems with a modern, RESTful API developed in C# on the .NET framework, using Azure web services.</p>
                </div>
              </div>

              <div className="role" style={{marginTop:"20px", marginBottom:"30px"}}> 

                <div className="roleContent" style={{}}>
                  <h3 style={{fontSize:"26px", color:"#333333", fontFamily:"Roboto", fontWeight:"300"}}>LINKEDIN</h3>
                  <p style={{fontFamily:"Quicksand", fontWeight:"400", color:"#555555", fontSize:"20px"}}>Software Engineering Intern</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>Built the Applicant Analytics feature on the job posting page. This feature gives the viewer a sense of where he or she stands with respect to other applicants via distributions of seniority, education, skillsets, etc.</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>Written in Scala on the Play framework, using Pinot database for realtime updates.</p>
                </div>
              </div>

              <div className="role" style={{marginTop:"20px", marginBottom:"30px"}}> 

                <div className="roleContent" style={{flexBasis:"55%"}}>
                  <h3 style={{fontSize:"26px", color:"#333333", fontFamily:"Roboto", fontWeight:"300"}}>OFEK</h3>
                  <p style={{fontFamily:"Quicksand", fontWeight:"400", color:"#555555", fontSize:"20px"}}>Founder & Organizer</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>IAC Ofek is a social/professional meetup group for young Israelis in Silicon Valley. Our events range from wine nights with keynote speakers to cooking workshops at the park.</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>After college, I wanted to find an Israeli community for people my age but had no luck. IAC Ofek was the solution!</p>
                </div>

                <div swipeScrollTolerance={0} className="rolePhotos" style={{flexBasis:"40%", display:"flex", alignItems:"center", marginTop:"15px", marginBottom:"15px"}}>
                  <Carousel swipeScrollTolerance={0} showThumbs={false} dynamicHeight={false} showArrows={true} emulateTouch={true} showStatus={false}>
                    <div>
                        <img src="./OfekRole3b.jpg" />
                    </div>
                    <div>
                        <img src="./OfekRole1.jpg" />
                    </div>
                    <div>
                        <img src="./OfekRole2.jpg" />
                    </div>
                    <div>
                        <img src="./OfekRole7b.jpg" />
                    </div>
                     <div>
                        <img src="./OfekRole4b.jpg" />
                    </div>
                    <div>
                        <img src="./OfekRole6.jpg" />
                    </div>
                    <div>
                        <img src="./OfekRole10.jpg" />
                    </div>
                    <div>
                        <img src="./OfekRole11.jpg" />
                    </div>
                    <div>
                        <img src="./OfekRole12.jpg" />
                    </div>
                  </Carousel>
                </div>
              </div>



              <div className="role" style={{marginTop:"20px", marginBottom:"30px"}}> 

                <div className="roleContent" style={{}}>
                  <h3 style={{fontSize:"26px", color:"#333333", fontFamily:"Roboto", fontWeight:"300"}}>CAL HACKS</h3>
                  <p style={{fontFamily:"Quicksand", fontWeight:"400", color:"#555555", fontSize:"20px"}}>Director - Sponsorship</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>Cal Hacks is UC Berkeley’s iconic hackathon. From October 3–5, 2014, nearly 1500 hackers from over 50 schools attended what became the biggest collegiate hackathon of all time.</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>Spent several months planning the event, focusing on fundraising and sponsor relations.</p>
                </div>

                
              </div>

              

              <div className="role" style={{marginTop:"20px", marginBottom:"30px"}}> 

                <div className="roleContent" style={{}}>
                  <h3 style={{fontSize:"26px", color:"#333333", fontFamily:"Roboto", fontWeight:"300"}}>MISHELANU</h3>
                  <p style={{fontFamily:"Quicksand", fontWeight:"400", color:"#555555", fontSize:"20px"}}>Founder - Cal Chapter</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>Mishelanu is a social group for Israeli college students. Throughout the year, students attend a range of events from hikes and holiday dinners to regional retreats.</p>
                  <p style={{color:"#666666", fontSize:"18px"}}>Mishelanu was born from a need for an Israeli community on campus, which previously did not exist. We started with just 6 campuses, and had to build up our content from scratch. I&#39;m proud to say Mishelanu is now one of the fastest growing Jewish student organizations at over 100 campuses across the US.</p>
                
                  <div className="pressLinks">
                    <a href="http://www.jweekly.com/2016/03/11/young-israeli-americans-bond-over-dual-dueling-identities/"><img src="./JWeeklyLogo.jpg" style={{height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                    <a href="http://www.huffingtonpost.com/adam-milstein/from-vision-to-action-fiv_b_10107220.html"><img src="./HuffingtonPostLogo.png" style={{height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                    <a href="http://www.jpost.com/Diaspora/Creating-campus-Maccabees-389683"><img src="./JerusalemPostLogo.png" style={{height:"18px", margin:"5px 30px 5px 0px"}}/></a>     
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>

        <div id="footer" className="footer" style={{backgroundColor:"#42b9f4"}}>

          <div className="footerWrapper" style={{display:"flex", justifyContent:"center", paddingLeft:"20px", paddingRight:"20px"}}>
            <p style={{fontFamily:"Amatic SC", fontWeight:"700", color:"#fdfdfd", fontSize:"26px", marginBottom:"0px"}}>contact me - mail@asaf.io</p>
          </div>

          <div className="footerWrapper" style={{display:"flex", justifyContent:"center", paddingLeft:"20px", paddingRight:"20px"}}>
            <p style={{fontFamily:"Roboto", fontWeight:"300", color:"#fdfdfd", fontSize:"12px"}}>1993 - 2017</p>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;

