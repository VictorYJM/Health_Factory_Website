import aldo from "../../../assets/creators/aldo.png";
import lucas from "../../../assets/creators/lucas.png";
import victor from "../../../assets/creators/victor.png";
import type { Creator } from "../../../types/Creator";

const calculateAge = (birthDate: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    if(currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) { age--; }
    return age;
};

export const creatorsData: Creator[] = [
    {
        name: "Aldo Junio Souza Brandão",
        age: calculateAge(new Date("2006-07-23")),
        image: aldo,
        linkedinLink: "https://www.linkedin.com/in/aldo-brand%C3%A3o-a4185a37a/",
        whatsappLink: "https://wa.me/5519986127117",
        githubLink: "https://github.com/AldoJDev"
    },
    {
        name: "Lucas Pace Zerbinatti",
        age: calculateAge(new Date("2007-09-24")),
        image: lucas,
        linkedinLink: "https://www.linkedin.com/in/lucaszerbinatti/",
        whatsappLink: "https://wa.me/5519987688181",
        githubLink: "https://github.com/cc23145"
    },
    {
        name: "Victor Yuji Mimura",
        age: calculateAge(new Date("2008-04-12")),
        image: victor,
        linkedinLink: "https://www.linkedin.com/in/victor-yuji-mimura-44a654384/",
        whatsappLink: "https://wa.me/5519995209278",
        githubLink: "https://github.com/VictorYJM"
    }
];