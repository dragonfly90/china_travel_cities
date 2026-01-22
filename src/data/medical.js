
export const hospitals = [
    {
        city: "Beijing",
        name: "Peking Union Medical College Hospital (International Dept)",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
        desc: "Ranked #1 in China. The International Medical Services (IMS) offers premium, English-speaking care.",
        location: "Dongcheng District, Beijing",
        specialty: "Comprehensive Diagnostics, Complex Cases"
    },
    {
        city: "Shanghai",
        name: "Huashan Hospital (International Division)",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
        desc: "World-renowned for Neurology and Dermatology. Their VIP checkup center is state-of-the-art.",
        location: "Jing'an District, Shanghai",
        specialty: "Neurology, Sports Medicine, Skin"
    },
    {
        city: "Chengdu",
        name: "West China Hospital (International Wing)",
        image: "https://images.unsplash.com/photo-1516549655169-df83a092dd14?auto=format&fit=crop&w=800&q=80",
        desc: "Consistently ranked top 3 in China. Massive facility with cutting-edge research and equipment.",
        location: "Wuhou District, Chengdu",
        specialty: "General Surgery, Oncology, Research"
    },
    {
        city: "Guangzhou",
        name: "Zhongshan First Hospital (VIP Center)",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd8189718c?auto=format&fit=crop&w=800&q=80",
        desc: "Leading medical center in Southern China, known for efficiency and advanced screening tech.",
        location: "Yuexiu District, Guangzhou",
        specialty: "Internal Medicine, Nephrology"
    }
];

export const packages = [
    {
        name: "Basic Health Screen",
        price: "$80 - $120",
        time: "2-3 Hours",
        includes: [
            "Complete Blood Count (CBC)",
            "Liver & Kidney Function",
            "Urinalysis",
            "Chest X-Ray",
            "ECG (Heart Check)",
            "General Physician Consult"
        ]
    },
    {
        name: "Comprehensive 'Executive' Check",
        price: "$200 - $350",
        time: "3-4 Hours",
        includes: [
            "Everything in Basic",
            "Tumor Markers (Cancer Screening)",
            "Abdominal Ultrasound",
            "Thyroid Function & Ultrasound",
            "CT Scan (Chest/Lung)",
            "H. Pylori Breath Test",
            "Detailed English Report"
        ]
    },
    {
        name: "VIP / MRI Deep Dive",
        price: "$500+",
        time: "Half Day",
        includes: [
            "Everything in Comprehensive",
            "MRI (Brain/Spine)",
            "Gastroscopy (Painless)",
            "Colonoscopy options",
            "Genetic Screening",
            "Private VIP Lounge & Breakfast"
        ]
    }
];

export const guideSteps = [
    {
        title: "1. Booking",
        desc: "Most International Departments accept WeChat or phone appointments. 'Health Checkup' centers often accept walk-ins if you arrive by 7:30 AM."
    },
    {
        title: "2. Preparation",
        desc: "Do not eat or drink (fasting) after 10 PM the night before. Wear loose clothing. Bring your passport."
    },
    {
        title: "3. The Process",
        desc: "It is an assembly line of efficiency. You move from room to room (Blood -> Ultrasound -> X-Ray). Results are often digital same-day."
    }
];
