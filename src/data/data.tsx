export interface PersonalInfo{
    full_name: string;
    designation:string;
    work_experience:number;
    bio:string;
    profile_picture:any;
    date_of_birth:string;
    personal_email_address:string;
    official_email_address:string;
    contact_number_1:string;
    contact_number_2:string;
    present_address:string;
    permanent_address:string;
}

export interface SkillsType{
    skill_name:string;
    skill_level:string;
    years_of_experiences:number;
    category:string;
    certificate:string | null;
    skill_description:string;
    proficiency_score:number;
    icon:string;
}


export const PersonalInfoData: PersonalInfo = {
    full_name:"Tanvir Mahmud",
    designation:"Jr Software Engineer",
    work_experience:1,
    bio:"I am a dedicated Jr. Software Engineer with a degree in Computer Science & Engineering. I specialize in full-stack web application development, focusing on backend technologies such as Django and Django REST Framework, and frontend frameworks like React and Redux. My experience extends to working with Frappe and ERPNext, enabling me to develop, customize, and deploy ERP solutions tailored to specific business needs. I am skilled in building scalable, efficient systems and creating seamless user interfaces, making me a versatile developer capable of handling complex projects. With a strong commitment to staying current with emerging technologies, I continuously strive to enhance my technical skills and deliver innovative, high-quality web solutions.",
    profile_picture:"https://media.licdn.com/dms/image/v2/D5603AQHvaQAotUjdyA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708964968143?e=1734566400&v=beta&t=p3_rP9pF5iv4RTc5q_SI03OKv15K2uGxnkuYs6H-qjM",
    date_of_birth:"",
    personal_email_address:"",
    official_email_address:"",
    contact_number_1:"",
    contact_number_2:"",
    present_address:"",
    permanent_address:"",
}

export const SkillsData:SkillsType [] = [
    {
        skill_name:"HTML5",
        skill_level:"Advanced",
        years_of_experiences:1,
        category:"Programming",
        certificate:"",
        skill_description:"",
        proficiency_score:12,
        icon:""
    },{
        skill_name:"HTML5",
        skill_level:"Advanced",
        years_of_experiences:1,
        category:"Programming",
        certificate:"",
        skill_description:"",
        proficiency_score:12,
        icon:""
    },{
        skill_name:"HTML5",
        skill_level:"Advanced",
        years_of_experiences:1,
        category:"Programming",
        certificate:"",
        skill_description:"",
        proficiency_score:12,
        icon:""
    },{
        skill_name:"HTML5",
        skill_level:"Advanced",
        years_of_experiences:1,
        category:"Programming",
        certificate:"",
        skill_description:"",
        proficiency_score:12,
        icon:""
    },{
        skill_name:"HTML5",
        skill_level:"Advanced",
        years_of_experiences:1,
        category:"Programming",
        certificate:"",
        skill_description:"",
        proficiency_score:12,
        icon:""
    },
]

