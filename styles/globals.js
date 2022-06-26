import { css, Global, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = (
    <Global
        styles={css`
        * {
            box-sizing: border-box;
        }

        html,
        body {
            padding: 0;
            margin: 0;
            background: papayawhip;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            font-size: 17px;
        }
        a {
            color: inherit;
            text-decoration: none;
        }
      `}
    />
  )