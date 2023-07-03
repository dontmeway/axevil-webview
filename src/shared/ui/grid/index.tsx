import { BuilderElement } from '@builder.io/react'

export const gridDefaultBlocks: BuilderElement[] = [
  {
    '@type': '@builder.io/sdk:Element',
    responsiveStyles: {
      large: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        flexShrink: '0',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '20px',
        width: '100%',
      },
    },
    component: {
      name: 'Infoblock',
      options: {
        heading: 'Heading',
        description: 'Description',
      },
    },
  },
]
