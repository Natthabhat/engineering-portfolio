export type ResumeBlock = {type:"paragraph";text:string}|{type:"list";items:string[]};
export const resumeDetails: Record<string,{detailTitle:string;introduction:string;introductionParagraphs:string[];sectionLabel?:string;sections:{heading:string;bullets:string[];blocks:ResumeBlock[]}[]}> = {
  "wd": {
    "detailTitle": "Western Digital Internship – Maintenance Engineer (2 months)",
    "introduction": "Through the BOI Smart Manufacturing 5.0 Internship Program, I completed over 100 hours of KU Mastery courses and workshops before undertaking a machine inventory monitoring project under the guidance of a mentor in the Maintenance Department. I identified staff pain points and independently developed a web application to centralize machine inventory records previously maintained in separate Excel spreadsheets.",
    "introductionParagraphs": [
      "Through the BOI Smart Manufacturing 5.0 Internship Program, I completed over 100 hours of KU Mastery courses and workshops before undertaking a machine inventory monitoring project under the guidance of a mentor in the Maintenance Department. I identified staff pain points and independently developed a web application to centralize machine inventory records previously maintained in separate Excel spreadsheets."
    ],
    "sections": [
      {
        "heading": "Background",
        "bullets": [],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Before the project, laboratories and departments managed machine inventories using separate Microsoft Excel spreadsheets. This decentralized approach made assets difficult to locate and led to inconsistent equipment names, causing confusion when coordinating equipment across facilities."
          }
        ]
      },
      {
        "heading": "My Contribution",
        "bullets": [],
        "blocks": [
          {
            "type": "list",
            "items": [
              "Interviewed laboratory staff to identify inventory tracking problems and define system requirements.",
              "Developed the frontend and backend using Next.js and React, with a PostgreSQL database.",
              "Consolidated laboratory inventory data and supported standardized equipment naming.",
              "Implemented equipment search, status history, activity logs, Excel exports, and role-based access control.",
              "Integrated an AI assistant using Ollama with Typhoon 2.5 and Qwen 3.6 to query inventory information, and implemented automated daily email notifications.",
              "Deployed the application on WD servers, incorporated staff feedback, and handed over the source code and system to the mentor."
            ]
          }
        ]
      },
      {
        "heading": "Outcome & Impact",
        "bullets": [],
        "blocks": [
          {
            "type": "paragraph",
            "text": "The system gives staff easier access to machine data, reduces confusion, and saves time when locating equipment information. It supports analysis of individual machines and maintains a history of their status changes and associated records. Through this project, I gained hands-on experience in enterprise database architecture, AI integration, and server deployment."
          }
        ]
      }
    ]
  },
  "formula": {
    "detailTitle": "CU Formula Student Team (Rapidamete) – Electrical Team Member",
    "introduction": "I joined the Formula Student team in my first year, driven by an interest in automotive and electric vehicle engineering. I chose the Electrical Team because of my embedded systems experience and the team’s transition to an electric Formula Student car. The electrical team consisted of 8 members from first- to fourth-year students, working collaboratively to ensure system reliability and safety.",
    "introductionParagraphs": [
      "I joined the Formula Student team in my first year, driven by an interest in automotive and electric vehicle engineering. I chose the Electrical Team because of my embedded systems experience and the team’s transition to an electric Formula Student car. The electrical team consisted of 8 members from first- to fourth-year students, working collaboratively to ensure system reliability and safety."
    ],
    "sections": [
      {
        "heading": "Responsibilities",
        "bullets": [],
        "blocks": [
          {
            "type": "list",
            "items": [
              "Designed complete vehicle wiring diagrams covering sensors, control units, and power distribution",
              "Completed the race car wiring, emphasizing reliability, safety, and secure connections",
              "Prepared cost reports in compliance with Formula Student regulations",
              "Assembled and tested the high-voltage battery system",
              "Researched EV motor and powertrain systems for performance and compatibility",
              "Collaborated with other teams to research and design an EV liquid cooling system"
            ]
          }
        ]
      },
      {
        "heading": "Technical Contribution",
        "bullets": [],
        "blocks": [
          {
            "type": "list",
            "items": [
              "Applied hands-on skills including soldering, wiring harness assembly, and electrical troubleshooting",
              "Interpreted and compared component datasheets to select appropriate parts",
              "Coordinated component sourcing and ordering directly from manufacturers",
              "Built a working wireless timing gate for vehicle testing",
              "Supported rapid prototyping and testing cycles under strict competition deadlines"
            ]
          }
        ]
      },
      {
        "heading": "Outcome & Impact",
        "bullets": [],
        "blocks": [
          {
            "type": "list",
            "items": [
              "Gained real-world engineering experience through practical tool usage and collaboration with experienced staff and senior students",
              "Strengthened engineering discipline, time management, and cross-team communication skills",
              "Built strong teamwork and professional relationships within a high-pressure project environment",
              "Contributed to the team’s second-place finish at TSAE Formula Student 2025, competing against 16 universities nationwide"
            ]
          }
        ]
      }
    ]
  },
  "iot": {
    "detailTitle": "Smart Home & IoT System (Independent Project)",
    "introduction": "Designed and implemented a fully integrated smart home system, combining hardware, networking, and server-side software into a unified and scalable infrastructure. Researched and evaluated multiple IoT brands available in Thailand, comparing protocols, reliability, and ecosystem limitations to select devices that met the system requirements.",
    "introductionParagraphs": [
      "Designed and implemented a fully integrated smart home system, combining hardware, networking, and server-side software into a unified and scalable infrastructure. Researched and evaluated multiple IoT brands available in Thailand, comparing protocols, reliability, and ecosystem limitations to select devices that met the system requirements."
    ],
    "sections": [
      {
        "heading": "Hardware & IoT Implementation",
        "bullets": [],
        "blocks": [
          {
            "type": "list",
            "items": [
              "Installed and configured smart devices across all rooms, including:"
            ]
          },
          {
            "type": "paragraph",
            "text": "smart light switches, motion sensors, smart speakers, and environmental sensors"
          },
          {
            "type": "list",
            "items": [
              "Evaluated strengths and weaknesses of different manufacturers and communication protocols (Wi-Fi, Zigbee, BLE, Matter, Thread)",
              "Integrated devices from multiple brands into a single interoperable system"
            ]
          }
        ]
      },
      {
        "heading": "Software, Networking & Systems",
        "bullets": [],
        "blocks": [
          {
            "type": "list",
            "items": [
              "Learned and applied networking fundamentals, including LAN configuration and device segmentation",
              "Worked extensively with Linux operating systems for system administration",
              "Used Home Assistant to unify different IoT devices into one centralized control platform",
              "Developed foundational skills in web programming and Docker containerization"
            ]
          }
        ]
      },
      {
        "heading": "Server & Infrastructure Setup",
        "bullets": [],
        "blocks": [
          {
            "type": "paragraph",
            "text": "Built a self-hosted server using a repurposed PC and managed the following services:"
          },
          {
            "type": "list",
            "items": [
              "Media streaming: Jellyfin, with media management using Seerr, Sonarr, and Radarr.",
              "File sharing and photo management: SMB/FTP file sharing, Immich, and PhotoPrism",
              "Local AI services: Ollama and llama.cpp running models such as Qwen, DeepSeek, Gemma, and Typhoon to support 3D printing workflows and smart home automation.",
              "Website hosting: Hosted a 3D printing storefront, printer automation tools, and a portfolio website using Cloudflare Tunnel.",
              "Network infrastructure: Organized server and networking equipment in a rack with UPS backup power to improve reliability. Used Grafana to visualize monitoring data and netstat to inspect network connections and listening ports."
            ]
          }
        ]
      },
      {
        "heading": "Outcome",
        "bullets": [],
        "blocks": [
          {
            "type": "list",
            "items": [
              "Gained strong practical experience in hardware–software integration, networking, Linux systems, and IoT architecture",
              "Developed skills directly applicable to modern engineering environments",
              "Built a foundation that supports adaptation to future engineering coursework, team projects, and real-world system design"
            ]
          }
        ]
      }
    ]
  },
  "hardware": {
    "detailTitle": "Programming and Hardware Projects",
    "introduction": "I developed an interest in computers and embedded systems from an early age, driven by curiosity about their capabilities and real-world applications. I researched platforms for experimentation and prototyping, beginning with Arduino microcontrollers and later expanding to ESP32, Raspberry Pi, and x86-based systems. Designed and built multiple projects integrating a wide range of peripheral devices, while learning to select appropriate platforms based on performance limits, power constraints, and system requirements.",
    "introductionParagraphs": [
      "I developed an interest in computers and embedded systems from an early age, driven by curiosity about their capabilities and real-world applications. I researched platforms for experimentation and prototyping, beginning with Arduino microcontrollers and later expanding to ESP32, Raspberry Pi, and x86-based systems. Designed and built multiple projects integrating a wide range of peripheral devices, while learning to select appropriate platforms based on performance limits, power constraints, and system requirements.",
      "I gained hands-on programming experience in C, C++, and Python, applying these skills across academic and independent projects. This foundation enabled effective participation in engineering activities inside and outside the classroom and confirmed a long-term passion for embedded systems and applied engineering."
    ],
    "sections": [
      {
        "heading": "Randomness Generator (2021)",
        "bullets": [],
        "blocks": [
          {
            "type": "list",
            "items": [
              "Developed an interactive device using Arduino Pico, OLED display, and physical buttons",
              "Designed a graphical user interface that provided a foundation for future UI projects",
              "Implemented logic using Arduino randomization libraries to generate topic-based words"
            ]
          }
        ]
      },
      {
        "heading": "LINE Chatbot – Study Advisor (2022)",
        "bullets": [],
        "blocks": [
          {
            "type": "list",
            "items": [
              "Built a chatbot using Google Dialogflow to analyze academic performance",
              "Predicted learning outcomes and provided study recommendations",
              "Used accumulated user data to improve the chatbot through machine learning"
            ]
          }
        ]
      },
      {
        "heading": "Wireless Timing Gate System (2023)",
        "bullets": [],
        "blocks": [
          {
            "type": "list",
            "items": [
              "Designed a wireless timing system using dual ESP32 devices connected via ESP-NOW",
              "Achieved millisecond-level time synchronization using internet-based time references",
              "Developed an IR sensing system resistant to sunlight interference, suitable for outdoor use",
              "Optimized firmware to address overheating issues caused by high processing load"
            ]
          }
        ]
      },
      {
        "heading": "Zigbee Remote Controller (2024)",
        "bullets": [],
        "blocks": [
          {
            "type": "list",
            "items": [
              "Built a low-power remote controller using ESP32, multiple buttons, and a lithium battery",
              "Integrated the device with Home Assistant to control smart home devices",
              "Utilized Zigbee protocol for efficient power consumption and reliability"
            ]
          }
        ]
      },
      {
        "heading": "Remote-Controlled Construction Crane (2025)",
        "bullets": [],
        "blocks": [
          {
            "type": "list",
            "items": [
              "Designed and built a crane system from the ground up using dual ESP32 devices",
              "Controlled servo motors for both the crane and the remote unit",
              "Developed a user-friendly remote with an interactive OLED interface",
              "Designed the truss and chassis structures based on statics and structural engineering principles",
              "Integrated a lithium-ion battery system, achieving functionality comparable to commercial products"
            ]
          }
        ]
      }
    ],
    "sectionLabel": "Selected Projects"
  },
  "camps": {
    "detailTitle": "CU Engineering Camps",
    "introduction": "Participated as a Planning Team member in multiple large-scale engineering camps, including Larngear 24, FE 22, Vishnu 24, and Larngear 25. Contributed to the planning and execution of events involving 800+ participants, ensuring smooth operations and minimal disruption throughout each program.",
    "introductionParagraphs": [
      "Participated as a Planning Team member in multiple large-scale engineering camps, including Larngear 24, FE 22, Vishnu 24, and Larngear 25. Contributed to the planning and execution of events involving 800+ participants, ensuring smooth operations and minimal disruption throughout each program."
    ],
    "sections": [
      {
        "heading": "Responsibilities",
        "bullets": [],
        "blocks": [
          {
            "type": "list",
            "items": [
              "Mapped and coordinated locations for teams and activity zones",
              "Designed and executed participant flow plans between activity points",
              "Guided participants efficiently from point A to point B",
              "Supported on-site operations to ensure events followed planned schedules",
              "Collaborated with multiple teams to resolve real-time logistical challenges"
            ]
          }
        ]
      },
      {
        "heading": "Skills & Outcomes",
        "bullets": [],
        "blocks": [
          {
            "type": "list",
            "items": [
              "Strengthened communication, collaboration, and presentation skills",
              "Developed time management and people coordination abilities in high-pressure environments",
              "Gained experience working with large, diverse groups inside and outside the faculty",
              "Contributed to delivering organized, safe, and engaging experiences for all participants"
            ]
          }
        ]
      }
    ]
  }
};
