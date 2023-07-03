import { Builder, Columns } from '@builder.io/react'
import dynamic from 'next/dynamic'

import { gridDefaultBlocks } from './grid'

Builder.registerComponent(
  dynamic(() => import('./heading').then((m) => ({ default: m.Heading }))),
  {
    name: 'Heading',
    inputs: [
      {
        name: 'content',
        type: 'text',
        defaultValue: 'Heading',
      },
      {
        name: 'size',
        type: 'text',
        enum: ['sm', 'md', 'lg'],
        defaultValue: 'sm',
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./body-text').then((m) => ({ default: m.BodyText }))),
  {
    name: 'BodyText',
    inputs: [
      {
        name: 'content',
        type: 'richText',
      },
      {
        name: 'variant',
        type: 'text',
        enum: ['default', 'black', 'yellow', 'yellow-dark'],
        defaultValue: 'default',
      },
      {
        name: 'icon',
        type: 'file',
        allowedFileTypes: ['svg'],
      },
      {
        name: 'direction',
        type: 'text',
        enum: ['horizontal', 'vertical'],
        defaultValue: 'horizontal',
      },
      {
        name: 'iconHeight',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'iconWidth',
        type: 'number',
        defaultValue: 20,
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./infographic').then((m) => ({ default: m.InfoGraphic }))),
  {
    name: 'Infoblock',
    inputs: [
      {
        name: 'heading',
        type: 'text',
        defaultValue: 'Heading',
      },
      {
        name: 'description',
        type: 'longText',
        defaultValue: 'Description',
      },
      {
        name: 'badge',
        type: 'text',
      },
      {
        name: 'variant',
        type: 'text',
        enum: ['default', 'filled', 'summary'],
        defaultValue: 'default',
      },
      {
        name: 'direction',
        type: 'text',
        enum: ['horizontal', 'vertical'],
        defaultValue: 'vertical',
      },
      {
        name: 'headingSize',
        type: 'text',
        enum: ['sm', 'md', 'lg', 'xl'],
        defaultValue: 'sm',
      },
      {
        name: 'isReverse',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'icon',
        type: 'file',
        allowedFileTypes: ['svg'],
      },
      {
        name: 'iconHeight',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'iconWidth',
        type: 'number',
        defaultValue: 20,
      },
    ],
  }
)

Builder.registerComponent(Columns, {
  name: 'Grid',
  inputs: [
    {
      name: 'columns',
      type: 'array',
      broadcast: true,
      subFields: [
        {
          name: 'blocks',
          type: 'array',
          hideFromUI: true,
        },
        {
          name: 'width',
          type: 'number',
          hideFromUI: true,
          helperText: 'Width %, e.g. set to 50 to fill half of the space',
        },
        {
          name: 'link',
          type: 'url',
          helperText: 'Optionally set a URL that clicking this column will link to',
        },
      ],
      defaultValue: [{ blocks: gridDefaultBlocks }, { blocks: gridDefaultBlocks }],
      onChange: (options: any) => {
        function clearWidths() {
          options.columns.forEach((col: any) => {
            col.delete('width')
          })
        }

        const columns = options.get('columns')

        if (Array.isArray(columns)) {
          const containsColumnWithWidth = !!columns.find((col) => col.get('width'))

          if (containsColumnWithWidth) {
            const containsColumnWithoutWidth = !!columns.find((col) => !col.get('width'))
            if (containsColumnWithoutWidth) {
              clearWidths()
            } else {
              const sumWidths = columns.reduce((memo, col) => {
                return memo + col.get('width')
              }, 0)
              const widthsDontAddUp = sumWidths !== 100
              if (widthsDontAddUp) {
                clearWidths()
              }
            }
          }
        }
      },
    },
    {
      name: 'space',
      type: 'number',
      defaultValue: 8,
      helperText: 'Size of gap between columns',
      advanced: true,
    },
    {
      name: 'stackColumnsAt',
      type: 'string',
      defaultValue: 'never',
      helperText: 'Convert horizontal columns to vertical at what device size',
      enum: ['tablet', 'mobile', 'never'],
      advanced: true,
    },
    {
      name: 'reverseColumnsWhenStacked',
      type: 'boolean',
      defaultValue: false,
      helperText: 'When stacking columns for mobile devices, reverse the ordering',
      advanced: true,
    },
  ],
})

Builder.registerComponent(
  dynamic(() => import('./banner').then((m) => ({ default: m.Banner }))),
  {
    name: 'Banner',
    inputs: [
      {
        name: 'backgroundImage',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png'],
        defaultValue: null,
      },
      {
        name: 'content',
        type: 'string',
        defaultValue: 'Banner',
      },
      {
        name: 'link',
        type: 'link',
      },
      {
        name: 'backgroundType',
        type: 'text',
        enum: ['default', 'accent'],
        defaultValue: 'default',
      },
      {
        name: 'icon',
        type: 'file',
        allowedFileTypes: ['svg'],
      },
      {
        name: 'iconHeight',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'iconWidth',
        type: 'number',
        defaultValue: 20,
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./bottom-sheet').then((m) => ({ default: m.BottomSheet }))),
  {
    defaultStyles: {
      margin: '0px',
    },
    name: 'BottomSheet',
    inputs: [
      {
        name: 'id',
        type: 'string',
        required: true,
      },
    ],
    defaultChildren: [
      {
        '@type': '@builder.io/sdk:Element',
        component: { name: 'Text', options: { text: 'Bottom sheet default content!' } },
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./box').then((m) => ({ default: m.Box }))),
  {
    defaultStyles: {
      margin: '0px',
    },
    name: 'BoxView',
    defaultChildren: [
      {
        '@type': '@builder.io/sdk:Element',
        component: { name: 'Text', options: { text: 'Box content' } },
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./summary').then((m) => ({ default: m.Summary }))),
  {
    name: 'Summary',
    defaultStyles: {
      margin: '0px',
    },
    defaultChildren: [
      {
        '@type': '@builder.io/sdk:Element',
        component: { name: 'Text', options: { text: 'Summary default content!' } },
      },
    ],
    inputs: [
      {
        name: 'logo',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png'],
      },
      {
        name: 'link',
        type: 'link',
      },
      {
        name: 'linkIcon',
        type: 'file',
        allowedFileTypes: ['svg'],
      },
      {
        name: 'backgroundImage',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png'],
      },
      {
        name: 'gradient',
        type: 'string',
      },
      {
        name: 'linIconHeight',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'linIconWidth',
        type: 'number',
        defaultValue: 20,
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./dropdown').then((m) => ({ default: m.DropDown }))),
  {
    name: 'DropDown',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Title',
      },
      {
        name: 'initialOpen',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'emoji',
        type: 'string',
        defaultValue: '👋',
      },
    ],
    defaultChildren: [
      {
        '@type': '@builder.io/sdk:Element',
        component: { name: 'Text', options: { text: 'DropDown default content!' } },
      },
    ],
  }
)
