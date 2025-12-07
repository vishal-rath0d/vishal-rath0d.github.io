// ===================================
// Personal Website Content Data
// Centralized content management
// ===================================

export const personalInfo = {
    name: "Vishal Rathod",
    role: "DevOps Engineer",
    email: "vishaljanusingrathod@gmail.com",
    tagline: "DevOps Engineer building cloud-native infrastructure at scale. Passionate about Kubernetes, automation, and making deployments boring.",
    
    social: {
        linkedin: "https://linkedin.com/in/vishalrath0d",
        github: "https://github.com/vishal-rath0d",
        resume: "https://drive.google.com/file/d/1OeEnMCsl-AJ495mmvPa3623A9X1RoKur/view?usp=drive_link"
    }
};

export const about = {
    paragraphs: [
        "I'm a DevOps Engineer with 3 years of experience at <strong>SMS-Magic (Conversive)</strong>, where I've transitioned from backend development to owning platform infrastructure and CI/CD operations.",
        "My work focuses on building scalable cloud infrastructure, automating deployment pipelines, and optimizing system reliability. I've successfully reduced deployment times by 50%, cut infrastructure costs by 25%, and improved incident response by 40%.",
        "I'm passionate about cloud-native technologies and continuously expanding my expertise in Kubernetes, GitOps, and DevSecOps practices."
    ],
    
    metrics: [
        { number: "20+", label: "CI/CD Pipelines", detail: "-50% deployment time" },
        { number: "20+", label: "Services Containerized", detail: "Docker & AWS ECS" },
        { number: "25%", label: "Cost Reduction", detail: "Strategic optimization" },
        { number: "40%", label: "Faster Response", detail: "MTTD/MTTR improvement" }
    ]
};

export const experience = [
    {
        title: "DevOps Engineer",
        company: "SMS-Magic (Conversive)",
        location: "Remote, India",
        type: "Full-time",
        dates: "Nov 2022 - Present",
        achievements: [
            "Built 20+ automated CI/CD pipelines using Jenkins and GitLab CI",
            "Containerized 20+ services with Docker and deployed on AWS ECS (Fargate + EC2)",
            "Reduced infrastructure costs by 25% through EC2/ECS optimization and Graviton migration",
            "Improved incident response time by 40% with centralized logging and monitoring",
            "Automated infrastructure provisioning using CloudFormation and Terraform",
            "Led Fargate to ECS migrations and implemented blue/green deployment strategies"
        ]
    },
    {
        title: "Software Developer",
        company: "SMS-Magic (Conversive)",
        location: "Remote, India",
        type: "Full-time",
        dates: "Aug 2021 - Nov 2022",
        achievements: [
            "Reduced API response time by 47% through database query optimization",
            "Improved web widget load time by 51% with asynchronous processing",
            "Built fault-tolerant data pipelines with retry logic and idempotency",
            "Implemented real-time messaging using AWS WebSocket APIs and Lambda",
            "Developed RESTful APIs using Node.js, Express, and MongoDB"
        ]
    }
];

export const projects = [
    {
        name: "Infrastructure as Code",
        description: "Terraform modules and CloudFormation templates for AWS infrastructure provisioning and management. Includes VPC setup, ECS clusters, RDS, and S3 configurations.",
        tech: ["Terraform", "AWS", "IaC", "CloudFormation"],
        link: "https://github.com/vishal-rath0d",
        linkText: "View on GitHub →"
    },
    {
        name: "CI/CD Pipeline Templates",
        description: "Reusable Jenkins and GitLab CI pipeline configurations for container builds, testing, and deployments. Includes blue/green deployment strategies.",
        tech: ["Jenkins", "GitLab CI", "Docker", "AWS ECS"],
        link: "https://github.com/vishal-rath0d",
        linkText: "View on GitHub →"
    },
    {
        name: "Monitoring Stack",
        description: "Prometheus and Grafana deployment configurations with custom dashboards for infrastructure monitoring, alerting, and observability.",
        tech: ["Prometheus", "Grafana", "Observability", "Alerting"],
        link: "https://github.com/vishal-rath0d",
        linkText: "View on GitHub →"
    },
    {
        name: "Automation Scripts",
        description: "Python and Bash scripts for infrastructure automation, deployment workflows, log analysis, and operational tasks across AWS environments.",
        tech: ["Python", "Bash", "Automation", "AWS"],
        link: "https://github.com/vishal-rath0d",
        linkText: "View on GitHub →"
    }
];

export const skills = {
    categories: [
        {
            name: "Cloud & Infrastructure",
            items: "AWS (ECS, EC2, S3, VPC, Lambda, CloudFormation, RDS, API Gateway), Terraform, Multi-cloud"
        },
        {
            name: "CI/CD & Automation",
            items: "Jenkins, GitLab CI, Pipeline-as-Code, Blue/Green Deployments, GitHub Actions"
        },
        {
            name: "Containers & Orchestration",
            items: "Docker, Kubernetes, AWS ECS (Fargate + EC2), EKS, ArgoCD"
        },
        {
            name: "Observability",
            items: "CloudWatch, Prometheus, Grafana, BetterStack, Loggly"
        },
        {
            name: "Programming & Scripting",
            items: "Python, Bash, PowerShell, Groovy, Go"
        },
        {
            name: "Data & Middleware",
            items: "MySQL, MongoDB, Redis, Elasticsearch, RabbitMQ"
        }
    ]
};

export const education = [
    {
        degree: "PG-DAC (Advanced Computing)",
        institution: "Sunbeam Institute, Pune",
        year: "2022",
        gpa: "7.3/10"
    },
    {
        degree: "B.Tech in Biotechnology",
        institution: "K.K. Wagh College, Nashik",
        year: "2021",
        gpa: "8.3/10"
    }
];

export const contact = {
    intro: "Feel free to reach out for collaborations, opportunities, or just to chat about DevOps and cloud infrastructure."
};
