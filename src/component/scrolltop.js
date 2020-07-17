import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './scrolltop.css';

export class ScrollTop extends React.Component {
   state = {
       is_visible: false
   }
    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });

    }

    toggleVisibility() {
      if (window.pageYOffset > 300) {
        this.setState({
          is_visible: true
        });
      } else {
        this.setState({
          is_visible: false
        });
      }
    }

    scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }
    
    render () {


        return(
            this.state.is_visible && (<div className="scrolltop">
                <p className="scroll-top" onClick={this.scrollTop}><FontAwesomeIcon icon={['fas', 'arrow-circle-up'] }  size="3x" /></p>
            </div>)
        )
    }
    
}
