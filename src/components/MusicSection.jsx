import Font from "react-font";
import './Sectionstyles.css'

function MusicSection() {
    
    return (
        <>
        
    <div className="container-artSection">

        <div className='card-holder'>      
            <Font family='Offside'>
                <h1 className='artSection'>Music Section</h1>
            </Font>
            
            <div className="container-card">

                <span>String Instruments</span>
                
                <img src="/src/assets/MusicSection_img/Creative_Cabin_MusicalInstruments.jpeg" alt="paint-brushes" />    
                        
            </div>
               

        </div>  
                
    </div>
         
        </>
    );    
};

export default MusicSection;