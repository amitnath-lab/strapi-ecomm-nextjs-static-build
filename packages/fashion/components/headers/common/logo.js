import React, { Fragment } from 'react';
import Link from 'next/link';

const LogoImage = ({ logo }) => {
    const mystyle = {
        width: "50%"
    };

    return (
        <Fragment>
            <Link href={'/'} >
                <a>
                    <img src={logo} 
                    alt="" 
                    className="img-fluid"
                    style={mystyle}
                    />
                </a>
            </Link>
        </Fragment>
    )
}

export default LogoImage;