// import { FaCamera as icon } from 'react-icons/fa';

export default {
  // Computer name
  name: 'project',
  // Visible Title
  title: 'Projects',
  type: 'document',
  //   icon,
  fields: [
    {
      name: 'name',
      title: 'Project name',
      type: 'string',
      description: 'Title of the project.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photos',
      title: 'Project photos',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'photo' }] }],
    },
  ],
};
