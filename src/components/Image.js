import React from 'react';
import lotusflower from '../assets/images/lotusflower.jpeg'
// import yogiman from '../assets/images/yogiman.jpeg'

class Image extends React.Component {  

    render() {

        let {mode, src, height, width, style, ...props} = this.props
        let modes = {
            'fill': 'cover',
            'fit': 'contain'
        }

        let size = modes[mode] || 'contain'

        let defaults = {
            height: height || 100,
            width: width || 100,
            backgroundColor: 'gray'
        }

        let important = {
            backgroundImage: `url("${src}")`,
            backgroundImage: `url("${lotusflower}")`,
            backgroundSize: size,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
        };

        return <div {...props} style={{...defaults, ...style, ...important}} />
    }
}

export default Image