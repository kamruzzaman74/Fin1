// src/components/BlogData.js
const blogData = [
  {
    id: 1,
    title: 'Understanding Tax Regulations',
    content: 'In this detailed post, we explore the latest tax regulations and their impact on businesses. Stay informed and compliant with our expert insights.',
  },
  {
    id: 2,
    title: 'Financial Planning for Businesses',
    content: 'Our team of expert Chartered Accountants will guide you through the intricacies of financial planning, helping your business thrive in today’s competitive environment.',
  },
  {
    id: 3,
    title: 'Auditing and Assurance Services',
    content: 'Learn about our top-tier auditing and assurance services, ensuring transparency and accuracy in financial reporting. Trust us with your financial integrity.',
  },
  // Add more professional blog posts
];

export const getBlogPosts = () => {
  return Promise.resolve(blogData);
};
