import BusinessCardImage from "./BusinessCardImage";
import BusinessCardName from "./BusinessCardName";
import BusinessCardTitle from "./BusinessCardTitle";
import BusinessCardWebsite from "./BusinessCardWebsite";
import BusinessCardButtons from "./BusinessCardButtons";
import BusinessCardAbout from "./BusinessCardAbout";
import BusinessCardFooter from "./BusinessCardFooter";
import './BusinessCard.css';

function BusinessCard({background, linkedin}) {
    return (
        <div className="business-card-wrapper">
            <div className={`business-card ${background}`}>
                <BusinessCardImage />
                <div className="business-card-inner-wrapper">
                    <BusinessCardName />
                    <BusinessCardTitle />
                    <BusinessCardWebsite />
                    <BusinessCardButtons linkedin={linkedin}/>
                    <BusinessCardAbout />
                </div>
                
                <BusinessCardFooter />
            </div>
        </div>
    );
}

export default BusinessCard;