import { Button, Flex, Stack, } from '@chakra-ui/react'

import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={300}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="email"
          />

          <Input
            name="password"
            type="password"
            label="password"
          />

          <Button
            type="submit"
            colorScheme="pink"
            size="lg"
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
