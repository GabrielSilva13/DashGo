import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegister: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegister,
  currentPage = 1,
  registerPerPage = 10,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegister / registerPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack spacing="2" direction="row">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem number={1} onPageChange={onPageChange} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign={"center"}>
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                number={page}
                onPageChange={onPageChange}
              />
            );
          })}
        <PaginationItem
          number={currentPage}
          isCurrent
          onPageChange={onPageChange}
        />
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                number={page}
                onPageChange={onPageChange}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            <PaginationItem number={lastPage} onPageChange={onPageChange} />
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign={"center"}>
                ...
              </Text>
            )}
          </>
        )}
      </Stack>
    </Stack>
  );
}
