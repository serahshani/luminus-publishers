import {defineField, defineType} from 'sanity'

export const requestCallback = defineType({
  name: 'requestCallback',
  title: 'Request Callback',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'phoneNumber',
    },
  },
});

