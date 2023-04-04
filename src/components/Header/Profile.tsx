import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center" ml="auto">
      {showProfileData && (
        <Box>
          <Text>Gabriel Gonçalves</Text>
          <Text color="gray.300" fontSize={"small"}>
            gabriel-onimusha@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        src="https://media-exp1.licdn.com/dms/image/D4D35AQFrDqI8p6zMtQ/profile-framedphoto-shrink_100_100/0/1650397339123?e=2147483647&v=beta&t=H8Wrw2OTlbipeGDVQc2zkX8eG5YL092TYasotRObpwk"
        size={"md"}
        name="Gabriel Gonçalves"
        ml={"2"}
      />
    </Flex>
  );
}
