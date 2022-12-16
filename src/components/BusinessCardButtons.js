import './BusinessCardButtons.css';

function BusinessCardButtons({linkedin}) {
    return (
        <div className="business-card__personal__data">
            <a className="business-card__email" href="mailto:somebody@somewhere.com">
                <i className="icon-email"></i>Email
            </a>
            {
                linkedin && 
                <a className="business-card__linkedin" href="http://somewhere.com/">
                    <i className="icon-linkedin"></i>LinkedIn
                </a>
            }
        </div>
    );
}

export default BusinessCardButtons;
