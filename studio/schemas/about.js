import { MdMood as icon } from 'react-icons/md';

export default {
  // Computer name
  name: 'about',
  // Visible Title
  title: 'About',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the author',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'content',
      validation: (Rule) => Rule.required(),
    },
  ],
};
