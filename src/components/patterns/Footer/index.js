import { theme } from '../../../theme/theme';
import { Box, Text } from '../../../theme/components';

export default function Footer() {
  return (
    <Box
      as="footer"
      styleSheet={{
        backgroundColor: theme.colors.neutral[900]
      }}
    >
      <Box
        styleSheet={{
          overflow:"hidden",
          maxWidth: theme.space.xcontainer_xl,
          marginLeft: "auto",
          marginRight:"auto",
          paddingVertical:{
            xs: theme.space.x4,
          },
          paddingHorizontal:{
            xs: theme.space.x4,
            sm: theme.space.x6,
            lg: theme.space.x8,
          },
        }}
      >
        <Text
          as="p"
          styleSheet={{
            textVariant: theme.typography.variants.body3,
            textAlign: "center",
            color: theme.colors.neutral[400],
          }}
        >
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </Text>
      </Box>
    </Box>
  )

  function Style({children}){
    return (
      <div>
        {children}
        <style jsx>{`
          div{
            font-family: sans-serif;
            color: ${fontColor};
          }
        `}
        </style>
      </div>
    )
  }
}