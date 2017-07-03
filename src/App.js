import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app" style={{display:"flex", justifyContent:"center", fontFamily:"HelveticaNeue-Light", paddingLeft:"20px", paddingRight:"20px"}}>
        <div className="wrapper" style={{width:"900px", alignItems:"center"}}>

          <div className="header" style={{display:"flex", justifyContent:"center"}}>
            <h1 style={{fontSize:"50px", margin:"30px 0px 20px 0px", color:"#333333"}}>ASAF AVIDAN ANTONIR</h1>
          </div>

          <div className="navBar" style={{color:"#666666", display:"flex", justifyContent:"center", borderBottomStyle:"solid", borderBottomWidth:"1px", borderBottomColor:"#CCCCCC"}}>
            <a style={{margin:"0px 10px 15px 10px"}}>About</a>
            <a style={{margin:"0px 10px 15px 10px"}}>Projects</a>
            <a style={{margin:"0px 10px 15px 10px"}}>Experience</a>
            <a style={{margin:"0px 10px 15px 10px"}}>Contact</a>
          </div>

          <div className="topCard" style={{ borderBottomStyle:"solid", borderBottomWidth:"1px", borderBottomColor:"#CCCCCC"}}>
            <div className="imgSection" style={{flexBasis:"35%", display:"flex", alignItems:"center"}}>
              <img src="./AsafIllumio.jpg" style={{width:"100%", borderRadius:"50%"}}/>
            </div>
            <div className="contentSection" style={{flexBasis:"60%", paddingTop:"50px", paddingBottom:"50px"}}>
              <h1 style={{margin:"0px", color:"#333333"}}>HI, MY NAME IS ASAF.</h1>
              <p style={{fontFamily:"Helvetica-Bold", color:"#555555"}}>I&#39;m an engineer, entrepreneur, and ping pong enthusiast.</p>
              <p style={{color:"#666666"}}>At a young age I moved from Israel to Silicon Valley for my father&#39;s startup, quickly inheriting the entrepreneurial bug and love for technology. I studied Electrical Engineering and Computer Science at UC Berkeley, with a focus in graduating ASAP. On campus, I was heavily involved in the hackathon community as director of the first Cal Hacks, and the Israeli community through my work in Mishelanu. I&#39;ve sinced picked up experience at amazing companies like Illumio, LinkedIn, and Microsoft, and currently spend my days exploring solutions in artificial intelligence.</p>
              <div className="socialLinks" style={{display:"flex", justifyContent:"center"}}>
                <a href="https://www.linkedin.com/in/asaf-avidan-antonir-95888558"><img src="./LinkedInSquare.png" style={{width:"40px", height:"40px", margin:"5px 15px 5px 15px", borderRadius:"4px"}}/></a>
                <a href="https://www.facebook.com/asaf.avidanantonir"><img src="./FacebookIcon.png" style={{width:"40px", height:"40px", margin:"5px 15px 5px 15px", borderRadius:"4px"}}/></a>
                <a href="https://github.com/AsafAA"><img src="./GitHubSquare.svg" style={{width:"40px", height:"40px", margin:"5px 15px 5px 15px", borderRadius:"4px"}}/></a>
              </div>
            </div>
          </div>

        {/*TODO: turn these into components*/}
          <div className="projects" style={{paddingTop:"50px", paddingBottom:"50px", borderBottomStyle:"solid", borderBottomWidth:"1px", borderBottomColor:"#CCCCCC"}}>
            <h2 style={{margin:"0px", fontSize:"30px", color:"#333333"}}>PROJECTS</h2>

            <div className="project" style={{marginTop:"10px", marginBottom:"20px"}}>
              <div className="projectContent" style={{flexBasis:"50%"}}>
                <h3 style={{fontSize:"20px", color:"#333333"}}>STEADY SQUARE</h3>
                <p style={{fontFamily:"Helvetica-Bold", color:"#555555"}}>An app for weighing objects on your phone&#39;s screen.</p>
                <p>When apple introduced 3d touch, I wanted to turn my iPhone into a functioning scale. When others&#39; attempts were rejected from the app store, I built a Flappy Bird like game that could be secretly used to do it.</p>
                <p>After nearly a million video views and over 100,000 downloads in two days, I got a nice call from apple and the app and video had to go. Here is the video quietly re-uploaded!</p>
                <div className="pressLinks">
                  <a href="http://www.businessinsider.com/how-to-turn-your-iphone-into-a-working-scale-2015-12"><img src="./BusinessInsiderLogo.png" style={{height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                  <a href="http://mashable.com/2015/12/12/5-cant-miss-apps-photomath-steady-square/#XnUd6XR8laq3"><img src="./MashableLogo.svg" style={{height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                  <a href="https://thenextweb.com/apps/2015/12/11/redditor-bypasses-apple-guidelines-releases-flappy-bird-clone-for-weighing-oregano/#.tnw_qlQEbkNG"><img src="./NextWebLogo.png" style={{height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                  <a href="https://www.theverge.com/2015/12/10/9888494/steady-square-ios-game-scale-3d-touch"><img src="./TheVergeLogo.png" style={{height:"18px", margin:"5px 30px 5px 0px"}}/></a>                  
                  <a href="http://lifehacker.com/steady-square-lets-you-weigh-things-with-your-iphone-6s-1747164070"><img src="./LifeHackerLogo.png" style={{height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                </div>
              </div>
              <div className="projectVideo" style={{flexBasis:"45%", display:"flex", alignItems:"center", marginTop:"15px", marginBottom:"15px"}}>
                <div className="iframeWrapper" style={{position:"relative", width:"100%", height:"0", paddingBottom:"56.25%"}}>
                  <iframe allowFullScreen="allowfullscreen" style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} frameBorder="0" src="https://www.youtube.com/embed/ixQuS6iPtK0?rel=0&showinfo=0&autohide=1"></iframe>
                </div>
              </div>
            </div>

            <div className="project" style={{marginTop:"10px", marginBottom:"20px"}}>
              <div classNAme="projectContent" style={{flexBasis:"50%"}}>
                <h3 style={{fontSize:"20px", color:"#333333"}}>DITTO KEYBOARD</h3>
                <p style={{fontFamily:"Helvetica-Bold", color:"#555555"}}>A keyboard for sending commonly used text snippets.</p>
                <p>Whether it’s texting, dating, business, or just regular daily communication, we tend to repeat ourselves quite often.</p>
                <p>With Ditto, save your most commonly used texts, phrases, and templates, and access them easily from any app!</p>
                <div className="pressLinks">
                  <a href="https://www.producthunt.com/posts/ditto-keyboard"><img src="./ProductHuntLogo.png" style={{height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                  <a href="https://www.yahoo.com/tech/7-awesome-paid-iphone-apps-free-downloads-now-145235184.html"><img src="./YahooLogo.png" style={{height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                  <a href="http://www.ilovefreesoftware.com/30/iphone/iphone-app-save-frequently-used-text-within-keyboard.html"><img src="./ILoveFreeSoftwareLogo2.png" style={{height:"18px", margin:"5px 30px 5px 0px", borderRadius:"4px"}}/></a>
                  <a href="http://pcweenies.com/2016/09/04/review-ditto-keyboard-for-ios/"><img src="./PCWeeniesLogo.jpg" style={{height:"18px", margin:"5px 30px 5px 0px"}}/></a>
                </div>
              </div>
              <div className="projectVideo" style={{flexBasis:"45%", display:"flex", alignItems:"center", marginTop:"15px", marginBottom:"15px"}}>
                <div className="iframeWrapper" style={{position:"relative", width:"100%", height:"0", paddingBottom:"56.25%"}}>
                  <iframe allowFullScreen="allowfullscreen" style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} frameBorder="0" src="https://www.youtube.com/embed/JsV8MlF_UNI?rel=0&showinfo=0&autohide=1"></iframe>
                </div>
              </div>
              
            </div>

          </div>

          <div className="experience" style={{height:"500px", borderBottomStyle:"solid", borderBottomWidth:"1px", borderBottomColor:"#CCCCCC"}}>
            
            <div className="role" style={{marginTop:"20px", marginBottom:"30px"}}>
              <div className="rolePhotos" style={{flexBasis:"45%", display:"flex", alignItems:"center"}}>
                <div className="iframeWrapper" style={{position:"relative", width:"100%", height:"0", paddingBottom:"56.25%"}}>
                  
                </div>
              </div>

              <div className="roleContent" style={{flexBasis:"50%"}}>
                <h3 style={{fontSize:"20px", color:"#333333"}}>Illumio</h3>
                <p style={{fontFamily:"Helvetica-Bold", color:"#555555"}}>Software engineer - distributed systems team</p>
                <p>When apple introduced 3d touch, I wanted to turn my iPhone into a functioning scale. When others&#39; attempts were rejected from the app store, I built a Flappy Bird like game that could be secretly used to do it.</p>
                <p>After nearly a million video views and over 100,000 downloads in two days, I got a nice call from apple and the app and video had to go. Here is the video quietly re-uploaded!</p>
              </div>
              
            </div>
          </div>

          <div className="contact" style={{height:"200px"}}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

