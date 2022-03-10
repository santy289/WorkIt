import image from '../assets/logo.png'
import './HomeBrand.css'

function HomeBrand(){
    return(
        <section className='brand'>
            <img src={image} className="logo" alt="logo" />
        </section>
    )
}

export default HomeBrand;
