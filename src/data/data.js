const aboutData = {
    heading: "Why Choose Magichands Physiotherapy for Your Recovery Journey?",
    para: "At Magichands Physiotherapy, we empower people to reach their full potential through expert physiotherapy.",
    whyUs: [
        {
            id: 1,
            title: "Personalized Treatment Plans",
            para: "Every recovery journey is different, we design personalized treatment plans.",
        },
        {
            id: 2,
            title: "Patient-Centered Focus",
            para: "Your well-being is our priority. We take the time to understand your condition.",
        },
        {
            id: 3,
            title: "Cutting-Edge Facilities",
            para: "Our clinic is equipped with state-of-the-art technology to provide the highest.",
        },
        {
            id: 4,
            title: "Expertise You Can Trust",
            para: "With years of experience in physiotherapy and rehabilitation.",
        },
    ]
}

const servicesData = {
    heading: "Our Services – Expert Care for Every Step of Your Recovery",
    serviceCards: [
        {
            id: 1,
            href: "/diagnostic-musculoskeletal-ultrasound",
            img: "/assets/services/service-card-img-1.png",
            title: "Diagnostic musculoskeletal ultrasound",
            para: "A diagnostic musculoskeletal ultrasound (MSK ultrasound) is a non-invasive imaging technique",
        },
        {
            id: 2,
            href: "/extracorporeal-shockwave-therapy",
            img: "/assets/services/service-card-img-2.png",
            title: "Extracorporeal Shockwave Therapy (ESWT)",
            para: "Extracorporeal Shockwave Therapy (ESWT) is a non-invasive medical treatment that uses acoustic waves",
        },
        {
            id: 3,
            href: "/corticosteroid-injections",
            img: "/assets/services/service-card-img-3.png",
            title: "Corticosteroid injections",
            para: "Corticosteroid injections are a common medical treatment used to reduce inflammation",
        },
        {
            id: 4,
            href: "/hyaluronic-acid-injections-for-joints-soft-tissues",
            img: "/assets/services/service-card-img-4.png",
            title: "Hyaluronic Acid Injections for Joints & Soft Tissues",
            para: "Hyaluronic acid (HA) injections are commonly used to relieve joint pain and improve soft tissue",
        },
        // {
        //     id: 5,
        //     href: "/prolotherapy-musculoskeletal-treatment",
        //     img: "/assets/services/service-card-img-5.png",
        //     title: "Prolotherapy & Musculoskeletal Treatment",
        //     para: "Prolotherapy (proliferative therapy) is a regenerative injection treatment used to stimulate healing",
        // },
        // {
        //     id: 6,
        //     href: "/arthrosamid",
        //     img: "/assets/services/service-card-img-6.png",
        //     title: "Arthrosamid",
        //     para: "Arthrosamid ® is a novel treatment designed for managing knee osteoarthritis, providing an effective alternative to current therapies.",
        // },
        {
            id: 7,
            href: "/ultrasound-guided-injections",
            img: "/assets/services/service-card-img-7.png",
            title: "Ultrasound-Guided Injections for Joints and Soft Tissues",
            para: "Ultrasound-guided injections are a minimally invasive procedure used to deliver medication.",
        },
    ]
}

const ctaData = {
    heading: "Ready to Start Your Recovery Journey with Expert Physiotherapy?",
    para: "Don’t let pain hold you back. Book your session today and experience the difference expert physiotherapy care can make.",
}

const teamData = {
    name: "Dr.Sundar Vaidhyanathaswamy",
    graduations: "BPT, MCSP, Pg Dip MSK (NZ), MSc (UK), Pg SCP, (T&O)",
    profile: "Musculoskeletal physiotherapist with exceptionally good academic and clinical track record. passionate and highly effective team player, has special interest in spinal pain, foot and ankle, educated to M level, with over 24 years of clinical experience. Possess a sound clinical knowledge and skills in assessing and treating complex musculoskeletal conditions.",
    heading2: "Areas of Expertise",
    expertise: ["Musculoskeletal Physiotherapy and Spinal manual therapy", "Sports injuries", "Injection therapy"],
}

const testimonialData = {
    heading: "What Our Clients Say – Real Stories, Real Results",
    testimonialCards: [
        {
            id: 1,
            avatar: "/assets/testimonial/avatar-img-1.png",
            name: "Sarah K",
            comment: "After a back injury, I struggled with daily tasks. Magichands Physiotherapists brought me back to normal!",
        },
        {
            id: 2,
            avatar: "/assets/testimonial/avatar-img-2.png",
            name: "James",
            comment: "My shoulder pain stopped me from playing sports. Now, I’m stronger than ever, thanks to their care!",
        },
        {
            id: 3,
            avatar: "/assets/testimonial/avatar-img-3.png",
            name: "Tom",
            comment: "Magichands Physiotherapy personalized plan helped me recover from a sports injury faster than I imagined.",
        },
        {
            id: 4,
            avatar: "/assets/testimonial/avatar-img-4.png",
            name: "Emily",
            comment: "Years of chronic pain are gone. I’m finally living pain-free, thanks to their expert team!",
        },
    ]
}

const footerData = {
    para: "At Magichands Physiotherapy, we care for you by combining knowledge and compassion for your recovery.",
    link:[
        {
            id: 1,
            link: "About us",
            href: "/#about-us"
        },
        {
            id: 2,
            link: "Services",
            href: "/#services"
        },
        {
            id: 3,
            link: "Blogs",
            href: "/#blog"
        },
    ],
    address: "Room 5, Simply Gym Swindon West, Chelmsford Road, Swindon, SN5 7HX, England, United Kingdom",
    mail: "info@magichandphysiotherapylimited.co.uk",
    contact: "+44 7878158530",
}

const pricingData = [
    {
        id: 1,
        treatment: "Initial Assessment & Treatment",
        price: "£50.00",
    },
    {
        id: 2,
        treatment: "Follow up",
        price: "£40.00",
    },
    {
        id: 3,
        treatment: "Shockwave therapy",
        price: "£50.00",
        info: "(3 x sessions booked in advance £120)",
    },
    {
        id: 4,
        treatment: "corticosteroids injection",
        price: "£100.00",
    },
    {
        id: 5,
        treatment: "Ultrasound guided injection",
        price: "£250.00",
    },
    {
        id: 6,
        treatment: "Ultrasound guided Hyaluronate injection (Ostenil)",
        price: "£250.00",
    },
    {
        id: 7,
        treatment: "Ultrasound guided Hyaluronate injection (Durolane)",
        price: "£250.00",
    },
    {
        id: 8,
        img: "/assets/services-main-1.jpg",
    }
]

export {aboutData, servicesData, ctaData, testimonialData, footerData, pricingData, teamData}
