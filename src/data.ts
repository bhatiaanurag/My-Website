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

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  github: string;
  skillsUsed: string[];
}

export const categorizedProjects: Record<string, Project[]> = {
  excel: [
    {
      id: "luxury-car-inventory",
      title: "Luxury Car Inventory Analysis",
      description: "Comprehensive analysis of luxury car inventory, tracking sales performance, stock levels, and pricing trends.",
      longDescription: "This project involved creating a robust inventory management system in Excel. I analyzed sales data to identify top-performing models, tracked stock aging to minimize holding costs, and built interactive dashboards for real-time visualization of inventory status and revenue impact.",
      image: "/images/luxurycars.jpg",
      github: "https://github.com/bhatiaanurag/01-Excel_Project-Luxury_Car_Inventory_Analysis.git",
      skillsUsed: ["Advanced Excel", "Pivot Tables", "VLOOKUP/XLOOKUP", "Data Cleaning", "Dashboard Design"]
    },
    {
      id: "australian-wine-market",
      title: "Australian Wine Market Review",
      description: "Market review and statistical analysis of the Australian wine industry, focusing on regional production and export trends.",
      longDescription: "A deep dive into the Australian wine industry's export performance. I analyzed regional production data, identified emerging markets, and visualized year-on-year growth trends. The project highlights the relationship between regional climates and production yields.",
      image: "/images/australianwine.jpg",
      github: "https://github.com/bhatiaanurag/02-Excel_Project-Australian_Wine_Market_Review_Analysis.git",
      skillsUsed: ["Statistical Analysis", "Data Visualization", "Trend Forecasting", "Excel Charts"]
    },
    {
      id: "voter-population-analysis",
      title: "Voter Population Analysis",
      description: "Demographic analysis of voter populations to identify participation patterns and regional voting trends.",
      longDescription: "This project focused on analyzing voter registration and turnout data across different demographics. I utilized Excel to segment the population by age, location, and previous voting history to uncover significant patterns in civic engagement.",
      image: "/images/voterpopulation.jpg",
      github: "https://github.com/bhatiaanurag/03-Excel_Project-Voter_Population_Analysis_Project.git",
      skillsUsed: ["Demographic Segmentation", "Data Aggregation", "Pivot Charts", "Conditional Formatting"]
    },
    {
      id: "data-analytics-operations",
      title: "Data Analytics & Operations",
      description: "Operational data analysis focusing on process efficiency, resource allocation, and performance optimization.",
      longDescription: "An operational efficiency study aimed at streamlining internal processes. By analyzing workflow data, I identified bottlenecks and proposed resource allocation changes that improved throughput and reduced operational delays.",
      image: "/images/dataanalysis.jpg",
      github: "https://github.com/bhatiaanurag/04-Excel_Project-Data_Analytics_-_Operations.git",
      skillsUsed: ["Process Optimization", "Operational Analytics", "Resource Planning", "Excel Dashboards"]
    },
    {
      id: "corporate-operations-admin",
      title: "Corporate Operations & Admin",
      description: "Streamlining corporate administrative tasks and operational workflows through automated Excel reporting.",
      longDescription: "Developed automated reporting tools to handle administrative tracking and corporate operations. This reduced manual data entry work by 30% and improved accurately in monthly operational reports.",
      image: "/images/corporateoperation.jpg",
      github: "https://github.com/bhatiaanurag/05-Excel_Project-Corporate_Operations_-_Administrative.git",
      skillsUsed: ["Process Automation", "Admin Reporting", "Data Entry Optimization", "Excel Formulas"]
    },
    {
      id: "data-visualization-project",
      title: "Data Visualization Project",
      description: "Advanced visualization techniques in Excel to transform complex datasets into intuitive, interactive dashboards.",
      longDescription: "Explored the boundaries of Excel's visualization capabilities. Created high-impact, interactive dashboards that allow stakeholders to slice and dice multi-dimensional data across various business metrics.",
      image: "/images/datavisualization.jpg",
      github: "https://github.com/bhatiaanurag/06-Excel_Project-Data_Visulization_Project.git",
      skillsUsed: ["Advanced Visualization", "Slicers", "Interactive Dashboards", "Dynamic Charts"]
    },
    {
      id: "hotel-revenue-booking",
      title: "Hotel Revenue & Booking",
      description: "Analysis of hotel booking data and revenue streams to optimize pricing strategies and occupancy rates.",
      longDescription: "Analyzed booking patterns and revenue management for a hotel chain. By identifying peak cancellation periods and high-demand windows, I helped propose dynamic pricing strategies to maximize RevPAR (Revenue Per Available Room).",
      image: "/images/hotelrevenu.jpg",
      github: "https://github.com/bhatiaanurag/07-Excel_Project-Hotel_Revenue_-_Booking_Project.git",
      skillsUsed: ["Revenue Management", "Forecasting", "Booking Analysis", "Pricing Optimization"]
    },
    {
      id: "retail-performance-overview",
      title: "Retail Performance Overview",
      description: "Holistic overview of retail performance metrics, including sales growth, customer footfall, and inventory turnover.",
      longDescription: "A comprehensive performance tracking project for a retail environment. Analyzed footfall against sales conversion rates and tracked inventory turnover to identify dead stock and high-velocity items.",
      image: "/images/retailperformance.jpg",
      github: "https://github.com/bhatiaanurag/08-Excel_Project-Retail_Performance_Overview.git",
      skillsUsed: ["KPI Tracking", "Retail Analytics", "Sales Performance", "Inventory Turnover"]
    }
  ],
  sql: [
    {
      id: "retail-database-optimization",
      title: "Retail Database Optimization",
      description: "Optimized complex SQL queries for a retail database, reducing report generation time by 40%.",
      longDescription: "Focused on database performance tuning. Identified slow-performing queries in a large-scale retail database and applied optimization techniques like indexing, CTE refactoring, and query plan analysis to significantly reduce latency.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/data-analyst-aspirant/sql-retail",
      skillsUsed: ["SQL Optimization", "Query Tuning", "Indexing", "CTEs", "Performance Profiling"]
    },
    {
      id: "employee-performance-sql",
      title: "Employee Performance Analysis",
      description: "Using window functions and CTEs to analyze employee performance metrics across multiple departments.",
      longDescription: "Performed a detailed HR analytics study using complex SQL queries. Utilized window functions like RANK() and NTILE() to compare employee performance against departmental averages and identified top percentile performers.",
      image: "https://picsum.photos/seed/sql2/800/600",
      github: "https://github.com/data-analyst-aspirant/sql-hr",
      skillsUsed: ["Window Functions", "Complex Joins", "Common Table Expressions", "HR Analytics"]
    }
  ],
  powerbi: [
    {
      id: "ola-cabs-executive",
      title: "Ola Cabs Executive Project",
      description: "Comprehensive executive dashboard for Ola Cabs to track key performance indicators, ride trends, and revenue metrics.",
      longDescription: "Developed a high-level executive dashboard in Power BI. Integrated multiple data sources to provide a unified view of ride volume, cancellation rates, driver earnings, and customer sentiment for Ola Cabs.",
      image: "/images/olacabs.jpg",
      github: "https://github.com/bhatiaanurag/01-Power_Bi-Ola_Cabs_Executive_Project.git",
      skillsUsed: ["Power BI", "DAX", "Data Modeling", "Executive Reporting", "KPI Design"]
    },
    {
      id: "churn-rate-analysis",
      title: "Churn Rate Analysis Project",
      description: "Detailed analysis of customer churn patterns using Power BI to identify at-risk segments and improve retention strategies.",
      longDescription: "End-to-end churn analysis project. Built predictive visualizations to show customer dropout rates over time and identified the primary drivers behind churn, allowing for targeted retention campaigns.",
      image: "/images/churnrate.jpg",
      github: "https://github.com/bhatiaanurag/02-Power_Bi-Churn_Rate_Analysis_Project.git",
      skillsUsed: ["Churn Modeling", "Predictive Analytics", "Power BI Dashboards", "Customer Segmentation"]
    },
    {
      id: "blinkit-project-overview",
      title: "Blink It Project Overview",
      description: "Operational dashboard for Blinkit providing insights into delivery performance, inventory levels, and customer satisfaction.",
      longDescription: "Operational overview of quick-commerce metrics. Tracked delivery times, stock availability, and hub performance to optimize the 'last-mile' delivery experience for Blinkit users.",
      image: "/images/blinkit.jpg",
      github: "https://github.com/bhatiaanurag/03-Power_Bi-Blinkit_Project_Overview.git",
      skillsUsed: ["Logistics Analytics", "Operational Monitoring", "Power Query", "Data Integration"]
    },
    {
      id: "forecast-actual-report",
      title: "Forecast vs Actual Report",
      description: "Comparison report between forecasted and actual performance metrics to drive data-backed financial planning.",
      longDescription: "Financial tracking dashboard comparing budget forecasts against actual spend and revenue. Provided variance analysis visualization that helped management identify budget overruns and revenue shortfalls early.",
      image: "/images/forecastereport.jpg",
      github: "https://github.com/bhatiaanurag/04-Power_Bi-Forecaste_Actual_Report_Project.git",
      skillsUsed: ["Financial Forecasting", "Variance Analysis", "Data Comparison", "Budget Tracking"]
    }
  ],
  eda: [
    {
      id: "netflix-content-eda",
      title: "Exploratory Analysis of Netflix Content",
      description: "In-depth EDA of Netflix's library using Python to identify content trends and regional preferences.",
      longDescription: "Comprehensive data exploration of the Netflix dataset. Analyzed content growth, favorite genres by country, and the shift from movies to TV shows using Python libraries like Pandas, Matplotlib, and Seaborn.",
      image: "https://picsum.photos/seed/eda1/800/600",
      github: "https://github.com/data-analyst-aspirant/eda-netflix",
      skillsUsed: ["Python", "Pandas", "Matplotlib", "EDA", "Content Analytics"]
    },
    {
      id: "climate-change-eda",
      title: "Climate Change Impact Study",
      description: "Statistical analysis and visualization of global temperature changes over the last century using Pandas and Seaborn.",
      longDescription: "Scientific data analysis project focused on climate metrics. Analyzed historical temperature anomalies and visualized the accelerating warming trend observed over the past few decades.",
      image: "https://picsum.photos/seed/eda2/800/600",
      github: "https://github.com/data-analyst-aspirant/eda-climate",
      skillsUsed: ["Scientific Computing", "Seaborn", "Time Series Analysis", "Statistical Visualization"]
    }
  ]
};

export const allProjects = Object.values(categorizedProjects).flat();

export function getProjectById(id: string): Project | undefined {
  return allProjects.find(p => p.id === id);
}


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
