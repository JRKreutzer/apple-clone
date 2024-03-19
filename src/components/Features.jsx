import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { animateWithGsap } from "../utils/animation"
import { explore1Img, explore2Img, exploreVideo } from "../utils"
import { useRef } from "react"

const Features = () => {

    const videoRef = useRef()

    useGSAP(() => {
        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom'
            },
            onComplete: () => {
                videoRef.current.play()
            }
        })

        animateWithGsap('#features_title', {y: 0, opacity: 1})
        animateWithGsap('.g_grow', {
            scale: 1,
            opacity: 1,
            ease: 'power1'
        }, {
            scrub: 5.5
        }
        )
        animateWithGsap('.g_text', {
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1
        })
    }, [])

    return (
        <section className="w-full common-padding bg-zinc relative overflow-hidden">
            <div className="screen-max-width">
                <div className="mb-12 w-full">
                    <h1 id="features_title" className="section-heading">
                        Conheça a história completa.
                    </h1>
                </div>
                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <div className="mt-32 mb-24 pl-24">
                        <h2 className="text-5xl lg:text-7xl font-semibold">
                            iPhone.
                        </h2>
                        <h2 className="text-5xl lg:text-7xl font-semibold">
                            Forjado em titânio.
                        </h2>
                    </div>
                    <div className="flex-center flex-col sm:px-10">
                        <div className="relative h-[50vh] w-full flex items-center">
                            <video 
                                playsInline
                                id="exploreVideo"
                                className="w-full h-full object-cover object-center"
                                preload="none"
                                muted autoPlay
                                ref={videoRef}
                            >
                                <source src={exploreVideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className="flex flex-col w-full relative">
                            <div className="feature-video-container">
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img src={explore1Img} alt="Titânio" className="feature-video g_grow" />
                                </div>
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img src={explore2Img} alt="Titânio 2" className="feature-video g_grow" />
                                </div>
                            </div>
                            <div className="feature-text-container">
                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">iPhone 15 Pro é {' '}
                                        <span className="text-white">
                                            o primeiro iPhone a apresentar um design de titânio de nível aeroespacial, 
                                        </span>
                                        , usando a mesma liga que as naves espaciais usam para missões a Marte.
                                    </p>
                                </div>
                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">O titânio tem uma das melhores relações resistência/peso de qualquer metal, tornando-os nossos {' '}
                                        <span className="text-white">
                                            modelos Pro mais leves de todos os tempos.
                                        </span>
                                        {' '}Você notará a diferença no momento em que escolher um.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features