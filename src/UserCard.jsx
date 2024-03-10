import React from "react";
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function UserCard(props) {
  const nav = useNavigate();
  return (
    <Card
      style={{
        cursor: "pointer",
      }}
      onClick={() => {
        nav(`user-info/${props.userId}`);
      }}
    >
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
  );
}

export default UserCard;
