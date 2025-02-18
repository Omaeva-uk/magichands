const { list } = require("postcss");

const service1Data = {
    name: "Diagnostic musculoskeletal ultrasound",
    para1: "A diagnostic musculoskeletal ultrasound (MSK ultrasound) is a non-invasive imaging technique used to assess muscles, tendons, ligaments, joints, and soft tissues of the body. It uses high-frequency sound waves to create real-time images of these structures, which can help diagnose various conditions such as:",
    conditions: ["Tendon injuries (e.g., tears, inflammation)", "Muscle strains", "Joint problems (e.g., bursitis, arthritis)", "Ligament tears or sprains", "Soft tissue masses (e.g., cysts or tumors)"],
    para2: "Unlike MRI or CT scans, musculoskeletal ultrasound is often preferred for its portability, ability to visualize soft tissues in real-time, and lower cost. It can also be used to guide injections or aspirations in some cases.",
    para3: "The procedure involves placing a gel on the skin to help transmit the sound waves, then moving a small handheld device (called a transducer) over the area of interest. The ultrasound machine then converts the sound waves into images that a healthcare provider can analyse.",
}

const service2Data = {
    name: "Extracorporeal Shockwave Therapy (ESWT)",
    para1: "Extracorporeal Shockwave Therapy (ESWT) is a non-invasive medical treatment that uses acoustic waves to promote healing and alleviate pain in various musculoskeletal conditions. It is commonly used in physical therapy, orthopaedics, and sports medicine for conditions like tendonitis, plantar fasciitis, calcific shoulder tendinopathy, and other soft tissue injuries.",
    subsection1: {
        heading2: "Here’s how ESWT works:",
        list: [
            {
                id: 1,
                heading3: "Shockwave Generation:",
                para: "High-energy sound waves (shockwaves) are produced by a device and directed at the affected area."
            },
            {
                id: 2,
                heading3: "Mechanism of Action:",
                para: "The shockwaves stimulate circulation, promote tissue regeneration, reduce inflammation, and increase collagen production, which accelerates healing."
            },
            {
                id: 3,
                heading3: "Treatment Process:",
                para: "A gel is applied to the treatment area to facilitate the transmission of shockwaves. The device is then positioned on the skin, and pulses are delivered to the target area. The number of sessions typically ranges from 3 to 5, with treatments spaced a week apart."
            },
        ]
    },
    subsection2: {
        heading2: "Benefits of ESWT:",
        list: [
            {
                id: 1,
                heading3: "Pain relief:",
                para: "It can reduce chronic pain associated with musculoskeletal injuries."
            },
            {
                id: 2,
                heading3: "Faster recovery:",
                para: "It accelerates the healing process for soft tissue damage."
            },
            {
                id: 3,
                heading3: "Non-invasive:",
                para: "Unlike surgery or injections, ESWT does not require any incision."
            },
            {
                id: 4,
                heading3: "No downtime:",
                para: "Most patients can return to their normal activities shortly after the procedure."
            },
        ]
    },
    subsection3: {
        heading2: "Common Conditions Treated with ESWT:",
        list: ["Plantar fasciitis", "Tendonitis (e.g., tennis elbow, Achilles tendonitis)", "Calcific rotator cuff tendinopathy", "Heel spurs", "Myofascial pain syndrome"],
    },
    para2: "ESWT is generally considered safe, though it can cause some temporary discomfort or mild bruising in the treated area. It’s not suitable for individuals with certain conditions, such as pregnancy, active infections, or certain heart problems. Always consult with a healthcare provider before undergoing this therapy to ensure it’s the right treatment for you.",

};


const service3Data = {
    name: "Corticosteroid injections",
    para1: "Corticosteroid injections are a common medical treatment used to reduce inflammation, alleviate pain, and treat a variety of musculoskeletal conditions, as well as other health issues. They consist of a synthetic version of cortisol, a hormone naturally produced by the adrenal glands, which has powerful anti-inflammatory effects.",
    subsection1: {
        heading2: "How Corticosteroid Injections Work:",
        list: [
            {
                id: 1,
                heading3: " Administration",
                para: "The injection is typically given directly into the affected area, such as a joint, tendon, or soft tissue. Common sites include the knee, shoulder, hip, wrist, and elbow.",
            },
            {
                id: 2,
                heading3: "Mechanism of Action",
                para: "Once injected, corticosteroids work by reducing the production of substances in the body that promote inflammation (like prostaglandins). This leads to reduced swelling, pain relief, and improved mobility.",
            },

        ]
    },
    subsection2: {
        heading2: "Conditions Treated with Corticosteroid Injections",
        list: ["Arthritis (e.g., osteoarthritis, rheumatoid arthritis)", "Tendonitis (e.g., tennis elbow, rotator cuff tendonitis)", "Bursitis (inflammation of fluid-filled sacs around joints)", "Carpal Tunnel Syndrome", "Gout or pseudogout flares", "Inflammatory conditions like lupus or inflammatory bowel disease (sometimes used systemically)"],
    },
    subsection3: {
        heading2: "Benefits of Corticosteroid Injections:",
        list: [
            {
                id: 1,
                heading3: "Effective Pain Relief",
                para: "Provides significant relief from pain and inflammation, especially for acute flare-ups.",
            },
            {
                id: 2,
                heading3: "Quick Action",
                para: " Effects can often be felt within hours to a few days after the injection.",
            },
            {
                id: 3,
                heading3: "Minimally Invasive",
                para: "The procedure is simple and quick, usually done in an outpatient setting.",
            },
            {
                id: 4,
                heading3: "Temporary Solution",
                para: " While it may not cure the underlying condition, it can help improve quality of life by reducing symptoms.",
            },
        ]
    },
    subsection4: {
        heading2: "Risks and Side Effects",
        list: [
            {
                id: 1,
                heading3: "Temporary Side Effects",
                para: "Redness, swelling, or irritation at the injection site, and a temporary flare-up of pain (often called a 'steroid flare').",
            },
            {
                id: 2,
                heading3: "Joint Damage",
                para: "Repeated corticosteroid injections into a joint (especially in the same area) can potentially weaken tendons, cartilage, or bone, and may lead to joint degeneration over time.",
            },
            {
                id: 3,
                heading3: "Systemic Effects",
                para: "Though rare with localized injections, corticosteroids can affect the body more broadly, leading to issues like weight gain, elevated blood sugar, or mood swings, especially with long-term use.",
            },
            {
                id: 4,
                heading3: "Infection",
                para: "There’s a small risk of infection at the injection site.",
            },
        ]
    },
    subsection5: {
        heading2: "Frequency of Use",
        para: "Corticosteroid injections are usually given sparingly, as repeated use can increase the risk of side effects, especially in the case of joint injections. Typically, doctors limit injections to no more than 3-4 times per year in the same area.",
    },
    subsection6: {
        heading2: "After the Injection",
        para1: "Most people can return to regular activities soon after the procedure, but some may experience temporary discomfort in the area.",
        para2: "Physical activity might be limited for a short time after the injection, depending on the location and condition being treated.",
    },
    para2: "Overall, corticosteroid injections are a well-established and effective treatment option for many inflammatory conditions, offering significant relief when other treatments have failed. However, they are often used as part of a broader management plan that may include physical therapy, lifestyle changes, or other interventions.",
}

const service4Data = {
    name: "Hyaluronic Acid Injections for Joints & Soft Tissues",
    para1: "Hyaluronic acid (HA) injections are commonly used to relieve joint pain and improve soft tissue healing by providing lubrication, cushioning, and hydration.",
    subsection1: {
        heading2: "Joint Injections (Viscosupplementation)",
        para: "Used to treat osteoarthritis (OA), especially in the knee, hip, and shoulder. "
    },
    subsection2: {
        heading2: "How It Works",
        list: ["HA mimics the natural synovial fluid in joints, improving lubrication and reducing friction.", "Acts as a shock absorber to cushion the joint.", "Reduces inflammation and may slow down cartilage degeneration.",],
    },
    subsection3: {
        heading2: "Common HA Injection Brands",
        list: [
            {
                id: 1,
                heading3: "Synvisc-One",
                para: "Single-dose injection, lasts up to 6 months.", 
            },
            {
                id: 2,
                heading3: "Hyalgan",
                para: "3-5 injections over several weeks.", 
            },
            {
                id: 3,
                heading3: "Euflexxa, Orthovisc, Supartz FX",
                para: "Multiple injection series.", 
            },
        ],
    },
    subsection4: {
        heading2: "Effectiveness & Duration",
        list: ["Pain relief can start within a few days to a few weeks.", "Results last from 6 months to over a year in some cases.", "Works best for mild to moderate osteoarthritis (less effective in severe cases)." ],
    },
    subsection5: {
        heading2: "Side Effects & Risks",
        list: ["Mild swelling, stiffness, or pain at the injection site.", "Rare allergic reactions.", "Possible joint infection (very rare).",],
    },
    subsection6: {
        heading2: "Soft Tissue Injections (Tendons, Ligaments, and Muscles)",
        para: "Used to treat tendonitis, ligament injuries, and muscle strains. "
    },
    subsection7: {
        heading2: "How It Works",
        list: ["HA improves hydration, elasticity, and healing in soft tissues.", "May be used for Achilles tendonitis, rotator cuff injuries, and plantar fasciitis.", "Often combined with platelet-rich plasma (PRP) therapy for better healing."],
    },
    subsection8: {
        heading2: "Effectiveness & Duration",
        list: ["Pain relief within weeks; full benefits in 1-3 months.", "May require multiple injections depending on severity.",],
    },
    subsection9: {
        heading2: "Side Effects & Risks",
        list: ["Temporary swelling or discomfort.", "Risk of infection (low).", "May not work well in severely damaged tendons.",],
    },
    subsection10: {
        heading2: "Who Can Benefit?",
        list: ["People with mild to moderate osteoarthritis.", "Athletes or active individuals with tendon and ligament injuries.", "Those seeking non-surgical pain relief before considering surgery.",],
    },
}

const service5Data = {
    name: "Prolotherapy & Musculoskeletal Treatment",
    para: "Prolotherapy (proliferative therapy) is a regenerative injection treatment used to stimulate healing in musculoskeletal injuries. It involves injecting an irritant solution (usually dextrose) into ligaments, tendons, or joints to trigger the body's natural repair processes.",
    subsection1: {
        heading2: "How Prolotherapy Works",
        list: ["Injection of an irritant solution (usually dextrose + lidocaine) into the injured area.", "This creates localized inflammation, increasing blood flow and stimulating tissue repair.", "The body produces new collagen fibers, strengthening and stabilizing weakened ligaments/tendons.", "Over multiple sessions, the tissue becomes stronger and more resilient, reducing pain and improving function.", ]
    },
    subsection2: {
        heading2: "Conditions Treated with Prolotherapy",
        list: [
            {
                id: 1,
                heading3: "Joint Pain & Instability",
                para: "Osteoarthritis (knees, hips, shoulders, hands)",
            },
            {
                id: 2,
                heading3: "Tendon & Ligament Injuries",
                para: "Sprains, chronic tendonitis, partial tears",
            },
            {
                id: 3,
                heading3: "Lower Back & Neck Pain",
                para: "Sacroiliac joint dysfunction, facet joint pain",
            },
            {
                id: 4,
                heading3: "Sports Injuries",
                para: "Tennis elbow, rotator cuff injuries, Achilles tendonitis",
            },
            {
                id: 5,
                heading3: "Plantar Fasciitis",
                para: "Heel pain and inflammation",
            },
            {
                id: 6,
                heading3: "TMJ Dysfunction",
                para: "Jaw pain and instability",
            },
        ],
    },
    subsection3: {
        heading2: "What to Expect During & After Treatment",
        list: [
            {
                id: 1,
                heading3: "Procedure",
                list1: ["The doctor injects the solution directly into the affected area.", "You may feel mild discomfort or pressure.",],
            },
            {
                id: 2,
                heading3: "Aftercare & Recovery",
                list1: ["Mild swelling, soreness (signs of healing response).", "Avoid anti-inflammatory meds (like ibuprofen) since they counteract healing.", "Stay active but avoid heavy strain for a few days.",],
            },
            {
                id: 3,
                heading3: "Results",
                list1: ["Pain relief can take weeks to months as tissue regenerates.", "Best results after multiple sessions.",],
            },
        ],
    },
    subsection4: {
        heading2: "Who Is a Good Candidate?",
        list: ["Chronic joint pain or instability that hasn’t responded to other treatments.", "Athletes or active individuals looking for a non-surgical option.", "People with ligament laxity or tendon weakness.", "Those avoiding surgery or long-term steroid use."]
    }
}

const service6Data = {
    name: "Arthrosamid",
    para1: "Arthrosamid ® is a novel treatment designed for managing knee osteoarthritis, providing an effective alternative to current therapies. It is a non-biodegradable hydrogel made of 2.5% cross-linked polyacrylamide and 97.5% water. When injected into the knee, Arthrosamid® acts as a cushion for the joint, thereby alleviating pain and improving joint function. This treatment is distinct from viscosupplement injections such as Hyaluronic",
    para2: "Acid (HA), Platelet Rich Plasma (PRP), and regenerative stem cell therapy, as it becomes an integrated part of the soft synovial tissue in the joint capsule and may offer longer-lasting effects. In clinical trials, patients have reported sustained improvements.",
    subsection1: {
        heading2: "Arthrosamid: A Non-Surgical Treatment for Knee Osteoarthritis",
        para: "Arthrosamid is an injectable hydrogel used to treat knee osteoarthritis (OA). It is a long-lasting, non-biodegradable hydrogel that integrates into the synovial lining of the joint, improving lubrication and reducing pain. Unlike traditional hyaluronic acid (HA) injections, Arthrosamid provides longer-term relief with a single injection.",
    },
    subsection2: {
        heading2: "How Arthrosamid Works",
        list: ["Injected into the knee joint, where it integrates with the synovial membrane.", "Enhances joint lubrication, reducing friction and pain.", "Provides cushioning, improving mobility and function.", "Long-lasting effect – the hydrogel remains in the joint without breaking down.", ]
    },
    subsection3: {
        heading2: "Who Can Benefit?",
        list: ["People with mild to moderate knee osteoarthritis (Kellgren-Lawrence Grade 2–3).", "Those seeking longer-lasting pain relief than HA or steroid injections.", "Active individuals looking to delay knee replacement surgery.", "Patients who do not respond well to traditional treatments (NSAIDs, physiotherapy, HA injections)."],
    },
    subsection4: {
        heading2: "Side Effects & Risks",
        list: ["Mild swelling, stiffness, or pain at the injection site (temporary).", "Rare allergic reactions (though the hydrogel is well tolerated).", "Not suitable for severe OA (grade 4, bone-on-bone cases).",],
    },
    subsection5: {
        heading2: "What to Expect During & After Treatment",
        list: [
            {
                id:1,
                heading3: "Procedure",
                para: "A single injection into the knee, performed under sterile conditions.",
            },
            {
                id:2,
                heading3: "Recovery",
                para: "Minimal downtime – most people resume activities within a few days.",
            },
            {
                id:3,
                heading3: "Results",
                para: "Some feel improvement within weeks, with full effects over 3–6 months.",

            },
        ],
    },
}



export {service1Data, service2Data, service3Data, service4Data, service5Data, service6Data};