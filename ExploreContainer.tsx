import './ExploreContainer.css';

import { IonButton, IonCard, IonContent, IonHeader, IonIcon, IonLabel, IonPage } from '@ionic/react';
import CustomBrowser from "./CustomBrowser";
import { arrowBack as arrowBackIcon, arrowForward as arrowForwardIcon, chatbubbleOutline, chatbubblesOutline, logoFacebook, logoGoogle, logoYoutube, menuOutline, menuSharp, musicalNote, newspaper, play} from "ionicons/icons";
import CustomToolbar from './CustomToolbar';
import { useLocation } from 'react-router';
import {InAppBrowser, InAppBrowserObject, InAppBrowserOptions, InAppBrowserOriginal} from "@ionic-native/in-app-browser"
import React, { useRef } from 'react';

import logo_bank from "../assets/logo_bank.png";
import logo_facebook from "../assets/logo_facebook.png"; 
import logo_google from "../assets/logo_google.png";
import logo_netflix from "../assets/logo_netflix.png";
import logo_news from "../assets/logo_news.png";
import logo_youtube from "../assets/logo_youtube.png";

interface ContainerProps { }

const menuItems = [
  {
    id: 1, 
    logo: logo_bank, 
    title: "Deutsche Bank", 
    alt: "Deutsche bank logo", 
    url: "https://www.db.com",
    width: 120, 
    height: 120, 

  }, 
  {
    id: 2, 
    logo: logo_facebook, 
    title: "Facebook", 
    alt: "Facebook logo", 
    url: "https://www.facebook.com",
    width: 120, 
    height: 120, 
  }, 
  {
    id: 3, 
    logo: logo_google, 
    title: "Google", 
    alt: "Google logo", 
    url: "https://www.google.com", 
    width: 120, 
    height: 120,
  }, 
  {
    id: 4, 
    logo: logo_netflix, 
    title: "Netflix", 
    alt: "Netflix logo", 
    url: "https://www.netflix.com", 
    width: 120, 
    height: 120,
  }, 
  {
    id: 5, 
    logo: logo_news, 
    title: "Sueddeutsche News", 
    alt: "Sueddeutsche logo", 
    url: "https://www.sueddeutsche.de", 
    width: 150, 
    height: 120, 
  }, 
  {
    id: 6, 
    logo: logo_youtube, 
    title: "Youtube", 
    alt: "Youtube logo", 
    url: "https://www.youtube.com", 
    width: 120, 
    height: 120,
  }
]


const ExploreContainer: React.FC<ContainerProps> = () => {

  const options: InAppBrowserOptions = {
    zoom: 'no',
    location: 'yes',
    //toolbarcolor: "linear-gradient(90deg,#1496BF 0%,#0169C2 100%)", 
    toolbarcolor: "#0169C2", 
    webviewtextsize: "lArgeSt", // SMALLEST, SMALLER, NORMAL, LARGER, LARGEST 
    toolbarheight: "extRA-larGE", // NORMAL, LARGE, EXTRA-LARGE
    navigationbuttoncolor: "white", 
    //toolbarbuttonsscaletype: "MATRIX", // CENTER, CENTER_CROP, CENTER_INSIDE, FIT_CENTER, FIT_END, FIT_START, FIT_XY, MATRIX, 
    
    closebuttoncolor: "white", 
    hideurlbar: 'yes',
   
  }
  
  const openBrowser = (url: string) => {
    const browser = InAppBrowser.create(url, '_self', options)
    browser.show();
  }

  return (
    
    <div className="container">
      {
        menuItems.map(item => (
          <div key={item.id} className="item">
            
            <img 
                src={item.logo} 
                alt={item.alt} 
                width={item.width} 
                height={item.height}
                onClick={() => openBrowser(item.url)}
              />
            
            <IonButton 
              fill="clear"
              style={{color: "black"}}
              onClick={() => openBrowser(item.url)}
            >
              {item.title}
            </IonButton>
            
          </div>
        ))
      }   
    </div>
      
  );
};

export default ExploreContainer;


{/* <IonButton className="icon-group">
        <IonIcon icon={menuOutline} className="icon"></IonIcon>
        <IonIcon icon={musicalNote} className="icon"></IonIcon>
        <IonIcon icon={play} className="icon"></IonIcon>
      </IonButton> */}

      // const query = useQuery(); 
      // const name = query.get("name")
      
      // const browserFrameRef = useRef<any>(null)
    
      // if(name === "internet1"){
      //   //console.log(browserFrameRef.current)
      //   //const browser = InAppBrowser.create(websiteUrl, "_self", options)
      //   //console.log(Object.keys(browser))
      //   //browserFrameRef.current = 
    
      // }

      {/* <strong>Ready to create an app?</strong> */}
      
      {/* <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> */}
      
      {/* <CustomBrowser /> */}
      
      {/* <p>The query string is {name} </p> */}
      {/* {name==="facebook" && (<div><Frame src="" /><p>Facebook Login</p></div>)}
      {name==="google" && (<Frame src={googleUrl} />)}
      {name==="youtube" && (<div><Frame src={youtubeUrl}/><span>Youtube search bar</span><input /><p>Default Youtube playlist</p></div>)}
      {name==="newspaper" && <Frame src={newsUrl} /> }
      {name==="internet1" && <InAppBrowserDiv />} */}


      // function useQuery() {
      //   return new URLSearchParams(useLocation().search);
      // }


      // const Frame = (props: any) => {
  

      //   const BackButton = () => {
      //     return (
      //         <IonButton className="back-button" fill="clear" color="light" onClick={() => window.history.back()}>
      //             <IonIcon icon={arrowBackIcon} className="back-icon"></IonIcon>
      //             <div className="txt">Back</div>
      //         </IonButton>
      //     )
      //   }
      
      //   const ForwardButton = () => {
      //     return (
      //         <IonButton className="back-button" fill="clear" color="light" onClick={() => window.history.forward()}>
      //             <IonIcon icon={arrowForwardIcon} className="back-icon"></IonIcon>
      //             <div className="txt">Forward</div>
      //         </IonButton>
      //     )
      //   }
      
      
      //   return (
      //       <div>
      //           <div style={{display:"flex", flexDirection: "row", justifyContent: "center"}}>
      //             <BackButton />
      //             <ForwardButton />
      //             {/* <button onClick={() => window.history.back()}>Back</button>
      //             <button onClick={() => window.history.forward()}>Forward</button> */}
      
      //           </div>
                
      //           <iframe src={props.src} width={"100%"} height={"700px"} style={{ scale: "2" }}/>
      //       </div>
      //   )
      // }
      
      // const InAppBrowserDiv: React.FC = () => {
      //   const browserRef = useRef<any>()
      //   const websiteUrl: string = "https://www.google.com/"
      
      //   const options: InAppBrowserOptions = {
      //     zoom: 'no',
      //     location: 'yes',
      //     toolbar: 'no',
      //     toolbarcolor: "#CD7F32", 
      //     navigationbuttoncolor: "white", 
      //     closebuttoncolor: "white", 
      //     hidden: 'yes',
      //     hideurlbar: 'yes',
      //     fullscreen: "no", 
      //     enableViewportScale: 'yes', 
         
      
      //   }
      
      //   const openBrowser = (url: string) => {
      //     const browser = InAppBrowser.create(url, '_self', options)
      //     browser.insertCSS( {code: "body{color: red; fontSize: 5em; scale: 2;}" })
      //     browser?.on('loadstop').subscribe(event => {
      //     browser.insertCSS({ code: "body{color: red; padding: 10mm;" });
      //     console.log('loadstop DONE!')
      //     browserRef.current.innerHTML = ;
      //     return browser;
      //     browser.show();
          
      //   }
      //   const Browser = InAppBrowser.create(websiteUrl, '_self', options)
      //   browser?.on('loadstop').subscribe(event => {
      //       browser.insertCSS({ code: "body{color: red; padding: 10mm;" });
      //       console.log('loadstop DONE!')
      //   })
      //   const browser = InAppBrowser.create(url, '_self', options)
      //   return (
      //     <div>
      //       <div style={{display:"flex", flexDirection: "row", justifyContent: "center"}}>
      //         <BackButton />
      //         <ForwardButton />
      //       </div>
            
           
      //       <IonButton onClick={() => openBrowser(newsUrl)}>open</IonButton>
            
      //       <div ref={browserRef}></div>
      //     </div>
      //   )
        
        
        
      // }

      // const BackButton = () => {
      //   return (
      //       <IonButton className="back-button" fill="clear" color="light" onClick={() => window.history.back()}>
      //           <IonIcon icon={arrowBackIcon} className="back-icon"></IonIcon>
      //           <div className="txt">Back</div>
      //       </IonButton>
      //   )
      // }
      
      // const ForwardButton = () => {
      //   return (
      //       <IonButton className="back-button" fill="clear" color="light" onClick={() => window.history.forward()}>
      //           <IonIcon icon={arrowForwardIcon} className="back-icon"></IonIcon>
      //           <div className="txt">Forward</div>
      //       </IonButton>
      //   )
      // }

      // const googleUrl = "https://www.google.com/search?igu=1"
      // //const url = "https://www.facebook.com/login"
      // const youtubeUrl="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
      // const newsUrl = "https://www.sueddeutsche.de/"
      // const url = "";
            
      