import { FaCamera as icon } from 'react-icons/fa';

export default {
  // Computer name
  name: 'photo',
  // Visible Title
  title: 'Photos',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Photo name',
      type: 'string',
      description: 'Title of the photo.',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'text',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
