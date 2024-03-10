import React from "react";
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Text } from "@chakra-ui/react";

function UserCard(props) {
  return (
    <div>
      <Card>
        <CardHeader>
          <Heading size="md">{props.name}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Email
              </Heading>
              <Text pt="2" fontSize="sm">
                {props.email}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Address
              </Heading>
              <Text pt="2" fontSize="sm">
                {props.streetAddress}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Company
              </Heading>
              <Text pt="2" fontSize="sm">
                {props.companyName}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default UserCard;
