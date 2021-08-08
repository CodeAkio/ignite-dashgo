import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Code Akio</Text>
        <Text color="gray.300" fontSize="small">akio@email.com</Text>
      </Box>

      <Avatar size="md" name="Code Akio" src="https://avatars.githubusercontent.com/u/15791870?v=4" />
    </Flex>
  )
}