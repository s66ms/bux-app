// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    ignores: ['public/*']
  },
  {
    rules: {
      // 'no-console': 'warn',

      '@stylistic/operator-linebreak': 'off',
      '@stylistic/spaced-comment': 'warn',
      '@stylistic/array-bracket-newline': [
        'error',
        {
          multiline: true,
          minItems: 2
        }
      ],
      '@stylistic/array-element-newline': [
        'error',
        {
          multiline: true,
          minItems: 2
        }
      ],
      '@stylistic/object-curly-spacing': [
        'error',
        'always'
      ],
      '@stylistic/object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 1
          },
          ObjectPattern: {
            multiline: true,
            minProperties: 2
          },
          ImportDeclaration: {
            multiline: true,
            minProperties: 2
          },
          ExportDeclaration: {
            multiline: true,
            minProperties: 2
          }
        }
      ],
      '@stylistic/object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: false
        }
      ],

      'vue/max-len': [
        'error',
        {
          code: 120,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreHTMLAttributeValues: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true
        }
      ],
      'vue/no-multiple-template-root': 'off',
      'vue/require-default-prop': 'error',
      'vue/no-v-html': 'off',
      'vue/array-element-newline': [
        'error',
        {
          multiline: true,
          minItems: 2
        }
      ],
      'vue/array-bracket-newline': [
        'error',
        {
          multiline: true,
          minItems: 2
        }
      ],
      'vue/object-curly-spacing': [
        'error',
        'always'
      ],
      'vue/object-curly-newline': [
        'error',
        {
          minProperties: 2
        }
      ],
      'vue/object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: false
        }
      ],
      'vue/no-required-prop-with-default': 'off'
    }
  }
])
