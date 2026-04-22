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
      image: "/images/excel/luxurycars.jpg",
      github: "https://github.com/bhatiaanurag/01-Excel_Project-Luxury_Car_Inventory_Analysis.git",
      skillsUsed: ["Advanced Excel", "Pivot Tables", "VLOOKUP/XLOOKUP", "Data Cleaning", "Dashboard Design"]
    },
    {
      id: "australian-wine-market",
      title: "Australian Wine Market Review",
      description: "Market review and statistical analysis of the Australian wine industry, focusing on regional production and export trends.",
      longDescription: "A deep dive into the Australian wine industry's export performance. I analyzed regional production data, identified emerging markets, and visualized year-on-year growth trends. The project highlights the relationship between regional climates and production yields.",
      image: "/images/excel/australianwine.jpg",
      github: "https://github.com/bhatiaanurag/02-Excel_Project-Australian_Wine_Market_Review_Analysis.git",
      skillsUsed: ["Statistical Analysis", "Data Visualization", "Trend Forecasting", "Excel Charts"]
    },
    {
      id: "voter-population-analysis",
      title: "Voter Population Analysis",
      description: "Demographic analysis of voter populations to identify participation patterns and regional voting trends.",
      longDescription: "This project focused on analyzing voter registration and turnout data across different demographics. I utilized Excel to segment the population by age, location, and previous voting history to uncover significant patterns in civic engagement.",
      image: "/images/excel/voterpopulation.jpg",
      github: "https://github.com/bhatiaanurag/03-Excel_Project-Voter_Population_Analysis_Project.git",
      skillsUsed: ["Demographic Segmentation", "Data Aggregation", "Pivot Charts", "Conditional Formatting"]
    },
    {
      id: "data-analytics-operations",
      title: "Data Analytics & Operations",
      description: "Operational data analysis focusing on process efficiency, resource allocation, and performance optimization.",
      longDescription: "An operational efficiency study aimed at streamlining internal processes. By analyzing workflow data, I identified bottlenecks and proposed resource allocation changes that improved throughput and reduced operational delays.",
      image: "/images/excel/dataanalysis.jpg",
      github: "https://github.com/bhatiaanurag/04-Excel_Project-Data_Analytics_-_Operations.git",
      skillsUsed: ["Process Optimization", "Operational Analytics", "Resource Planning", "Excel Dashboards"]
    },
    {
      id: "corporate-operations-admin",
      title: "Corporate Operations & Admin",
      description: "Streamlining corporate administrative tasks and operational workflows through automated Excel reporting.",
      longDescription: "Developed automated reporting tools to handle administrative tracking and corporate operations. This reduced manual data entry work by 30% and improved accurately in monthly operational reports.",
      image: "/images/excel/corporateoperation.jpg",
      github: "https://github.com/bhatiaanurag/05-Excel_Project-Corporate_Operations_-_Administrative.git",
      skillsUsed: ["Process Automation", "Admin Reporting", "Data Entry Optimization", "Excel Formulas"]
    },
    {
      id: "data-visualization-project",
      title: "Data Visualization Project",
      description: "Advanced visualization techniques in Excel to transform complex datasets into intuitive, interactive dashboards.",
      longDescription: "Explored the boundaries of Excel's visualization capabilities. Created high-impact, interactive dashboards that allow stakeholders to slice and dice multi-dimensional data across various business metrics.",
      image: "/images/excel/datavisualization.jpg",
      github: "https://github.com/bhatiaanurag/06-Excel_Project-Data_Visulization_Project.git",
      skillsUsed: ["Advanced Visualization", "Slicers", "Interactive Dashboards", "Dynamic Charts"]
    },
    {
      id: "hotel-revenue-booking",
      title: "Hotel Revenue & Booking",
      description: "Analysis of hotel booking data and revenue streams to optimize pricing strategies and occupancy rates.",
      longDescription: "Analyzed booking patterns and revenue management for a hotel chain. By identifying peak cancellation periods and high-demand windows, I helped propose dynamic pricing strategies to maximize RevPAR (Revenue Per Available Room).",
      image: "/images/excel/hotelrevenu.jpg",
      github: "https://github.com/bhatiaanurag/07-Excel_Project-Hotel_Revenue_-_Booking_Project.git",
      skillsUsed: ["Revenue Management", "Forecasting", "Booking Analysis", "Pricing Optimization"]
    },
    {
      id: "retail-performance-overview",
      title: "Retail Performance Overview",
      description: "Holistic overview of retail performance metrics, including sales growth, customer footfall, and inventory turnover.",
      longDescription: "A comprehensive performance tracking project for a retail environment. Analyzed footfall against sales conversion rates and tracked inventory turnover to identify dead stock and high-velocity items.",
      image: "/images/excel/retailperformance.jpg",
      github: "https://github.com/bhatiaanurag/08-Excel_Project-Retail_Performance_Overview.git",
      skillsUsed: ["KPI Tracking", "Retail Analytics", "Sales Performance", "Inventory Turnover"]
    }
  ],
  sql: [
    {
      id: "awesome-chocolate-sql",
      title: "Awesome Chocolate Project",
      description: "Comprehensive SQL analysis for a chocolate business, tracking product performance and regional sales.",
      longDescription: "Calculated total sales, analyzed regional variations in product popularity, and optimized supply chain queries for a chocolate distribution business using advanced SQL joins and aggregations.",
      image: "/images/sql/awesomechocolate.png",
      github: "https://github.com/bhatiaanurag/SQL_Project-Awesome_Chocolate_Project.git",
      skillsUsed: ["PostgreSQL", "Data Aggregation", "Subqueries", "Joins"]
    },
    {
      id: "faasos-sql-analysis",
      title: "Faasos SQL Project",
      description: "In-depth analysis of delivery operations and customer ordering behavior for Faasos.",
      longDescription: "Analyzed order volume trends, delivery times, and customer preferences for Faasos. Developed complex SQL scripts to identify peak operation hours and optimize delivery logistics.",
      image: "/images/sql/faasossqlproject.png",
      github: "https://github.com/bhatiaanurag/SQL_Project-Faasos_SQL_Project.git",
      skillsUsed: ["SQL Queries", "Operational Analytics", "Customer Behavior", "CTEs"]
    },
    {
      id: "music-store-sql",
      title: "Music Store Project",
      description: "Database management and analysis for a digital music store, focusing on inventory and sales.",
      longDescription: "Managed digital music inventory and sales records. Used SQL to identify top-selling artists, track customer purchase history, and generate monthly revenue reports for store owners.",
      image: "/images/sql/musicstoreproject.png",
      github: "https://github.com/bhatiaanurag/SQL_Project-Music_Store_Project.git",
      skillsUsed: ["Database Management", "Sales Analysis", "Advanced SQL", "Reporting"]
    },
    {
      id: "ola-sql-project",
      title: "Ola SQL Project",
      description: "Large-scale analysis of ride-sharing data for Ola Cabs using SQL.",
      longDescription: "Analyzed millions of ride records to track driver performance, ride cancellation reasons, and regional demand patterns. Built optimized queries for executive-level performance monitoring.",
      image: "/images/sql/olasqlproject.png",
      github: "https://github.com/bhatiaanurag/SQL_Project-Ola_SQL_Project.git",
      skillsUsed: ["Big Data Analysis", "Ride-Sharing Analytics", "Query Optimization", "Business Intelligence"]
    },
    {
      id: "walmart-sql-project",
      title: "Walmart SQL Project",
      description: "Retail sales analysis and inventory optimization for Walmart stores using SQL.",
      longDescription: "Processed extensive retail datasets to identify sales trends across different product categories. Used SQL to optimize inventory stock levels based on seasonal demand forecasting.",
      image: "/images/sql/walmartsqlproject.png",
      github: "https://github.com/bhatiaanurag/SQL_Project-Walmart_SQL_Project.git",
      skillsUsed: ["Retail Analytics", "Sales Forecasting", "Inventory Optimization", "Complex Joins"]
    },
    {
      id: "zomato-sql-analysis",
      title: "Zomato SQL Project",
      description: "Operational and customer analysis for Zomato's food delivery platform using SQL.",
      longDescription: "Explored customer retention patterns and vendor performance on the Zomato platform. Developed SQL models to track order growth and identify high-value customer segments for marketing campaigns.",
      image: "/images/sql/zomatosqlproject.png",
      github: "https://github.com/bhatiaanurag/SQL_Projcet-Zomato_SQL_Project.git",
      skillsUsed: ["Customer Segmentation", "Marketing Analytics", "Performance Tracking", "SQL Modeling"]
    }
  ],
  powerbi: [
    {
      id: "ola-cabs-executive",
      title: "Ola Cabs Executive Project",
      description: "Comprehensive executive dashboard for Ola Cabs to track key performance indicators, ride trends, and revenue metrics.",
      longDescription: "Developed a high-level executive dashboard in Power BI. Integrated multiple data sources to provide a unified view of ride volume, cancellation rates, driver earnings, and customer sentiment for Ola Cabs.",
      image: "/images/powerbi/olacabs.jpg",
      github: "https://github.com/bhatiaanurag/01-Power_Bi-Ola_Cabs_Executive_Project.git",
      skillsUsed: ["Power BI", "DAX", "Data Modeling", "Executive Reporting", "KPI Design"]
    },
    {
      id: "churn-rate-analysis",
      title: "Churn Rate Analysis Project",
      description: "Detailed analysis of customer churn patterns using Power BI to identify at-risk segments and improve retention strategies.",
      longDescription: "End-to-end churn analysis project. Built predictive visualizations to show customer dropout rates over time and identified the primary drivers behind churn, allowing for targeted retention campaigns.",
      image: "/images/powerbi/churnrate.jpg",
      github: "https://github.com/bhatiaanurag/02-Power_Bi-Churn_Rate_Analysis_Project.git",
      skillsUsed: ["Churn Modeling", "Predictive Analytics", "Power BI Dashboards", "Customer Segmentation"]
    },
    {
      id: "blinkit-project-overview",
      title: "Blink It Project Overview",
      description: "Operational dashboard for Blinkit providing insights into delivery performance, inventory levels, and customer satisfaction.",
      longDescription: "Operational overview of quick-commerce metrics. Tracked delivery times, stock availability, and hub performance to optimize the 'last-mile' delivery experience for Blinkit users.",
      image: "/images/powerbi/blinkit.jpg",
      github: "https://github.com/bhatiaanurag/03-Power_Bi-Blinkit_Project_Overview.git",
      skillsUsed: ["Logistics Analytics", "Operational Monitoring", "Power Query", "Data Integration"]
    },
    {
      id: "forecast-actual-report",
      title: "Forecast vs Actual Report",
      description: "Comparison report between forecasted and actual performance metrics to drive data-backed financial planning.",
      longDescription: "Financial tracking dashboard comparing budget forecasts against actual spend and revenue. Provided variance analysis visualization that helped management identify budget overruns and revenue shortfalls early.",
      image: "/images/powerbi/forecastereport.jpg",
      github: "https://github.com/bhatiaanurag/04-Power_Bi-Forecaste_Actual_Report_Project.git",
      skillsUsed: ["Financial Forecasting", "Variance Analysis", "Data Comparison", "Budget Tracking"]
    }
  ],
  eda: [
    {
      id: "udemy-course-analysis",
      title: "Udemy Course Analysis",
      description: "Extensive exploratory data analysis of Udemy courses to identify pricing trends and student enrollment patterns.",
      longDescription: "This project explores the Udemy dataset to understand what makes a course successful. I analyzed the distribution of subjects, identified the relationship between price and enrollment, and visualized the impact of course levels on student ratings using Python's visualization libraries.",
      image: "/images/eda/udemycourseanalysis.jpg",
      github: "https://github.com/bhatiaanurag/EDA_Project-Udemy_Courses_Analysis.git",
      skillsUsed: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Cleaning"]
    },
    {
      id: "google-play-store-eda",
      title: "Google Play Store Analysis",
      description: "Data-driven insights into the Google Play Store app ecosystem, focusing on category performance and user ratings.",
      longDescription: "A comprehensive EDA of millions of app records. I investigated which app categories dominate the market, how reviews correlate with app sizing, and the overall sentiment of user feedback across different genres.",
      image: "/images/eda/googleplaystoreanalysis.jpg",
      github: "https://github.com/bhatiaanurag/EDA_Project-Google_Play_Store.git",
      skillsUsed: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Statistical Analysis"]
    },
    {
      id: "loan-landing-club",
      title: "Loan Landing Club Analysis",
      description: "Statistical analysis of loan data to identify risk factors and borrower demographic shifts.",
      longDescription: "Analyzed historical loan data from Landing Club. This project identifies key indicators of loan defaults, explores the relationship between interest rates and credit scores, and visualizes the geographic distribution of loan applications.",
      image: "/images/eda/loanlandinganalysis.jpg",
      github: "https://github.com/bhatiaanurag/EDA_Project-Loan_Landing_Club.git",
      skillsUsed: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Risk Assessment", "Financial Analytics"]
    },
    {
      id: "netflix-eda-detailed",
      title: "Netflix EDA Project",
      description: "In-depth exploration of Netflix content library trends, focusing on year-over-year growth and genre popularity.",
      longDescription: "Updated and expanded EDA of the Netflix library. This version focuses on content availability by region, the growth of international productions, and deep dives into specific genre trends using advanced Python plotting techniques.",
      image: "/images/eda/netflixanalysis.jpg",
      github: "https://github.com/bhatiaanurag/EDA_Project-Netflix_EDA_Project.git",
      skillsUsed: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Time Series", "Content Trends"]
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
  linkedin: "https://www.linkedin.com/in/anuragbhatia05/",
  github: "https://github.com/bhatiaanurag",
  resume: "https://drive.google.com/file/d/1hHlt67w6BmkCurkqMGNp6yqddd8XxAAX/view?usp=sharing"
};
