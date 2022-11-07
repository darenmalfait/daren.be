import { Collection } from 'tinacms'

const globalColllection: Collection = {
  label: 'Global',
  name: 'global',
  path: 'content/global',
  format: 'json',
  ui: {
    global: true,
  },
  fields: [
    {
      type: 'object',
      label: 'Navigation',
      name: 'navigation',
      fields: [
        {
          type: 'object',
          label: 'Main navigation',
          name: 'main',
          list: true,
          ui: {
            itemProps: item => {
              return { label: item.label }
            },
            defaultItem: {
              href: 'home',
              label: 'Home',
            },
          },
          fields: [
            {
              type: 'string',
              label: 'Link',
              name: 'href',
              required: true,
            },
            {
              type: 'string',
              label: 'Label',
              name: 'label',
              required: true,
            },
            {
              type: 'boolean',
              label: 'is Button?',
              name: 'isButton',
            },
          ],
        },
        {
          type: 'object',
          label: 'Actions',
          name: 'actions',
          list: true,
          ui: {
            itemProps: item => {
              return { label: item.label }
            },
            defaultItem: {
              href: 'action',
              label: 'action',
            },
          },
          fields: [
            {
              type: 'string',
              label: 'Link',
              name: 'href',
              required: true,
            },
            {
              type: 'string',
              label: 'Label',
              name: 'label',
              required: true,
            },
            {
              type: 'boolean',
              label: 'is Button?',
              name: 'isButton',
            },
          ],
        },
      ],
    },
    {
      type: 'object',
      label: 'Social Links',
      name: 'social',
      fields: [
        {
          type: 'string',
          label: 'Facebook',
          name: 'facebook',
        },
        {
          type: 'string',
          label: 'Twitter',
          name: 'twitter',
        },
        {
          type: 'string',
          label: 'Instagram',
          name: 'instagram',
        },
        {
          type: 'string',
          label: 'Github',
          name: 'github',
        },
      ],
    },
    {
      type: 'object',
      label: 'Paths',
      name: 'paths',
      fields: [
        {
          type: 'string',
          label: 'Wiki',
          name: 'wiki',
        },
        {
          type: 'string',
          label: 'Blog',
          name: 'blog',
        },
        {
          type: 'string',
          label: 'Contact',
          name: 'contact',
        },
      ],
    },
  ],
}

export { globalColllection }
