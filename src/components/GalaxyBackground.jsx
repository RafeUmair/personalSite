import { useEffect, useState } from "react";

export const GalaxyBackground = () => {
    const [Stars, setStars] = useState([])
    const [comets, setComets] = useState([])

    useEffect(() => {
        generateStars();
        generateComets();

        const handleResize = () => {
            generateStars();
            generateComets();
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, []);

    const generateStars = () => {
        const numStars =Math.floor(window.innerWidth / 2);

        const newStars = [];
        for (let i = 0; i < numStars; i++) {
            const size = Math.random() * 2 + 1; 
            const positionX = Math.random() * 100; 
            const positionY = Math.random() * 100; 
            const delay = Math.random() * 5; 
            newStars.push({ size, positionX, positionY, delay });
        }
        setStars(newStars);
    }

        const generateComets = () => {
            const numComets = 4;
            const newComets = [];

            for (let i = 0; i < numComets; i++) {
                const size = Math.random() * 3 + 1;
                const startX = Math.random() * 100;
                const startY = Math.random() * 100;
                const delay = Math.random() * 15;
                const duration = Math.random() * 3 + 3; 
                newComets.push({ size, startX, startY, delay, duration });
            }
            setComets(newComets);
        }
    
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0"> 
        {Stars.map((star, index) => (
            <div key={index} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.positionX + "%",
                top: star.positionY + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }} />
        ))}

        {comets.map((comet, index) => (
            <div key={index} className="comet animate-comet" 
            style={{
                width: comet.size * 50 + "px",
                height: comet.size * 2 + "px",
                left: comet.startX + "%",
                top: comet.startY + "%",
                animationDelay: comet.delay,
                animationDuration: comet.duration + "s",
            }} />
        ))}


     </div>
}
