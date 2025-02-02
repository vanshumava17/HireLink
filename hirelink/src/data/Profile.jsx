import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

export const fields = [
  {
    label: "Job Title",
    placeholder: "Enter Job Title",
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support",
    ],
    value: "Web Developer",
    leftSection: IoBriefcaseOutline,
  },
  {
    label: "Company",
    placeholder: "Enter Company Name",
    options: [
      "Google",
      "Microsoft",
      "Meta",
      "Netflix",
      "Adobe",
      "Facebook",
      "Amazon",
      "Apple",
      "Spotify",
    ],
    value: "Google",
    leftSection: IoBriefcaseOutline,
  },
  {
    label: 'Location',
    placeholder: 'Enter Your Location',
    options: ['Delhi', 'Mumbai', 'Pune', 'Indore', 'Bhopal', 'Noida'],
    value: '',
    leftSection: MdOutlineLocationOn
  }
];
