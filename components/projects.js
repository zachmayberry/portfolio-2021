import Project from './project'

export default function Projects() {
    return (
        <div className="md:flex md:space-x-6 md:mt-16">
            <div>
                <Project 
                    name="HealthTunes" 
                    summary="Based on a patient's condition, HealthTunes offers specific music and sound therapies referencing evidence-based clinical research. Music is prescribed as medicine, and a precise therapy plan schedules dosage and treatment length. Binaural beats and music tracks restore and balance an individual’s physiology, including brain wave, heart rate, and respiratory entrainment." 
                    color="#5533FF" 
                    image="/healthtunes-components.jpg"
                    imageWidth={533}
                    imageHeight={634}
                />

                <Project 
                    name="Heap for Mac" 
                    summary="Heap aims to help you to merge together the variety of project management systems out there and to have one place to manage tasks assigned to you. Currently in the works to support Basecamp, Trello, Github Projects, and Asana." 
                    color="#F5224D" 
                    image="/heap-components.jpg"
                    imageWidth={554}
                    imageHeight={646}
                />
            </div>

            <div className="md:mt-24">
                <Project 
                    name="StartUp Health" 
                    summary="StartUp Health invests in Health Transformers, uniting them into a global army and broadcasting their progress. Why? To improve the health and wellbeing of everyone in the world. They connect Health Transformers into an organized, global community, leveraging network effects, trusted peer support, and collective intelligence." 
                    color="#00C26B" 
                    image="/startup-health-components.jpg"
                    imageWidth={715/1.15}
                    imageHeight={634/1.15}
                />

                <Project 
                    name="Fresco News" 
                    summary="Fresco was a next-generation news network that gave you the power to voice your perspective through open submissions, paid assignments, and a fully-featured social platform. You could see exactly what was happening around the world through galleries that show every angle of an event—directly from people on the scene, #nofilter, as raw as it gets."
                    color="#FFC601" 
                    image="/fresco-components.jpg"
                    imageWidth={436.5*1.25}
                    imageHeight={401.75*1.25}
                />
            </div>
        </div>
    )
}