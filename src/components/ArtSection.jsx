import { useState } from 'react';
import './Sectionstyles.css'
import Font from 'react-font';


function ArtSection() {
   
    
    return (
        <>
            
    <div className="container-artSection">

        <div className='card-holder'>      
            <Font family='Offside'>
                <h1 className='artSection'>ART SECTION</h1>
            </Font>
            
            <div className="container-card">

                <span>Paint-Brushes</span>
                
                <img src="/src/assets/ArtSection_img/Creative_Cabin_PaintBrushes.jpeg" alt="paint-brushes" />    

            </div>
                    <br />  
                    
            <div className="container-card">

                <span>Canvases</span>
                
                <img  src="/src/assets/ArtSection_img/Creative_Cabin_Canvases.jpeg" alt="Canvases" />    

            </div>
                    
                    <br />

            <div className="container-card">

                <span>Assorted Paint</span>
                
                <img  src="src/assets/ArtSection_img/Creative_Cabin_AssortedPaint.jpeg" alt="Assorted-paint" />    

            </div>
                    <br />
                    
        </div>  
                
    </div>
            
               
        </>
    );    
};

export default ArtSection;