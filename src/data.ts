import { Database, BarChart3, PieChart, LineChart, Code2, Table, BrainCircuit, Search } from 'lucide-react';

export const skills = [
  {
    category: "Data Analysis",
    icon: BarChart3,
    items: [
      { name: "SQL", level: 90 },
      { name: "Python (Pandas/NumPy)", level: 85 },
      { name: "Excel (Advanced)", level: 95 },
      { name: "R Programming", level: 70 }
    ]
  },
  {
    category: "Visualization",
    icon: PieChart,
    items: [
      { name: "Power BI", level: 85 },
      { name: "Matplotlib/Seaborn", level: 80 }
    ]
  },
  {
    category: "Statistical Modeling",
    icon: BrainCircuit,
    items: [
      { name: "Regression Analysis", level: 85 },
      { name: "Hypothesis Testing", level: 80 }
    ]
  },
  {
    category: "Tools & Others",
    icon: Database,
    items: [
      { name: "Git/GitHub", level: 85 },
      { name: "Jupyter Notebooks", level: 90 },
      { name: "Google Analytics", level: 75 }
    ]
  }
];

export const categorizedProjects = {
  excel: [
    {
      title: "Luxury Car Inventory Analysis",
      description: "Comprehensive analysis of luxury car inventory, tracking sales performance, stock levels, and pricing trends.",
      image: "/images/luxurycars.png",
      github: "https://github.com/bhatiaanurag/01-Excel_Project-Luxury_Car_Inventory_Analysis.git"
    },
    {
      title: "Australian Wine Market Review",
      description: "Market review and statistical analysis of the Australian wine industry, focusing on regional production and export trends.",
      image: "/images/australianwine.png",
      github: "https://github.com/bhatiaanurag/02-Excel_Project-Australian_Wine_Market_Review_Analysis.git"
    },
    {
      title: "Voter Population Analysis",
      description: "Demographic analysis of voter populations to identify participation patterns and regional voting trends.",
      image: "/images/voterpopulation.png",
      github: "https://github.com/bhatiaanurag/03-Excel_Project-Voter_Population_Analysis_Project.git"
    },
    {
      title: "Data Analytics & Operations",
      description: "Operational data analysis focusing on process efficiency, resource allocation, and performance optimization.",
      image: "/images/dataanalysis.png",
      github: "https://github.com/bhatiaanurag/04-Excel_Project-Data_Analytics_-_Operations.git"
    },
    {
      title: "Corporate Operations & Admin",
      description: "Streamlining corporate administrative tasks and operational workflows through automated Excel reporting.",
      image: "/images/corporateoperation.png",
      github: "https://github.com/bhatiaanurag/05-Excel_Project-Corporate_Operations_-_Administrative.git"
    },
    {
      title: "Data Visualization Project",
      description: "Advanced visualization techniques in Excel to transform complex datasets into intuitive, interactive dashboards.",
      image: "/images/datavisualization.png",
      github: "https://github.com/bhatiaanurag/06-Excel_Project-Data_Visulization_Project.git"
    },
    {
      title: "Hotel Revenue & Booking",
      description: "Analysis of hotel booking data and revenue streams to optimize pricing strategies and occupancy rates.",
      image: "/images/hotelrevenu.png",
      github: "https://github.com/bhatiaanurag/07-Excel_Project-Hotel_Revenue_-_Booking_Project.git"
    },
    {
      title: "Retail Performance Overview",
      description: "Holistic overview of retail performance metrics, including sales growth, customer footfall, and inventory turnover.",
      image: "/images/retailperformance.png",
      github: "https://github.com/bhatiaanurag/08-Excel_Project-Retail_Performance_Overview.git"
    }
  ],
  sql: [
    {
      title: "Retail Database Optimization",
      description: "Optimized complex SQL queries for a retail database, reducing report generation time by 40%.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/data-analyst-aspirant/sql-retail"
    },
    {
      title: "Employee Performance Analysis",
      description: "Using window functions and CTEs to analyze employee performance metrics across multiple departments.",
      image: "https://picsum.photos/seed/sql2/800/600",
      github: "https://github.com/data-analyst-aspirant/sql-hr"
    }
  ],
  powerbi: [
    {
      title: "Ola Cabs Executive Project",
      description: "Comprehensive executive dashboard for Ola Cabs to track key performance indicators, ride trends, and revenue metrics.",
      image: "/images/olacabs.png",
      github: "https://github.com/bhatiaanurag/01-Power_Bi-Ola_Cabs_Executive_Project.git"
    },
    {
      title: "Churn Rate Analysis Project",
      description: "Detailed analysis of customer churn patterns using Power BI to identify at-risk segments and improve retention strategies.",
      image: "/images/churnrate.png",
      github: "https://github.com/bhatiaanurag/02-Power_Bi-Churn_Rate_Analysis_Project.git"
    },
    {
      title: "Blink It Project Overview",
      description: "Operational dashboard for Blinkit providing insights into delivery performance, inventory levels, and customer satisfaction.",
      image: "/images/blinkit.png",
      github: "https://github.com/bhatiaanurag/03-Power_Bi-Blinkit_Project_Overview.git"
    },
    {
      title: "Forecast vs Actual Report",
      description: "Comparison report between forecasted and actual performance metrics to drive data-backed financial planning.",
      image: "/images/forecastereport.png",
      github: "https://github.com/bhatiaanurag/04-Power_Bi-Forecaste_Actual_Report_Project.git"
    }
  ],
  eda: [
    {
      title: "Exploratory Analysis of Netflix Content",
      description: "In-depth EDA of Netflix's library using Python to identify content trends and regional preferences.",
      image: "https://picsum.photos/seed/eda1/800/600",
      github: "https://github.com/data-analyst-aspirant/eda-netflix"
    },
    {
      title: "Climate Change Impact Study",
      description: "Statistical analysis and visualization of global temperature changes over the last century using Pandas and Seaborn.",
      image: "https://picsum.photos/seed/eda2/800/600",
      github: "https://github.com/data-analyst-aspirant/eda-climate"
    }
  ]
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/anuragbhatia05/",
  github: "https://github.com/bhatiaanurag",
  naukri: "https://www.naukri.com/code-samples",
  glassdoor: "https://www.glassdoor.com",
  indeed: "https://www.indeed.com"
};

export const contactInfo = {
  email: "bhatiaanurag20@gmail.com",
  phone: "+91 91068 67974",
  location: "Surat, Gujarat, India",
  linkedin: socialLinks.linkedin,
  github: socialLinks.github,
  resume: "https://drive.google.com/file/d/1bc8hCaG-CAw0u2NFFPqWTS2ipEl6u25F/view?usp=drive_link"
};
