import { useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";

import s from "./decks.module.scss";

import {
  Button,
  Header,
  Ranger,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TabProps,
  TextField,
  Typography,
} from "@/components";
import { Loader } from "@/components/ui/loader/loader";
import { Pagination } from "@/components/ui/pagination";
import { CreateDeck } from "@/pages/decks/createDeck/createDeck";
import { SortedHeaderDecks } from "@/pages/decks/decks-header-table/decks-header";
import { useGetMeQuery } from "@/services";
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
} from "@/services/decks";
import { deckSlice } from "@/services/decks/deck-slice";
import { useAppDispatch, useAppSelector } from "@/services/store";
import { DeleteIcon } from "@/styles/assets/icons/delete-icon";
import { LearnIcon } from "@/styles/assets/icons/learn-icon";
import { PenIcon } from "@/styles/assets/icons/pen-icon";
export type Sort = {
  key: string;
  direction: "asc" | "desc";
} | null;
export type Column = {
  key: string;
  title: string;
  sortable: boolean;
};
const tabs: TabProps[] = [
  { title: "my", value: "my", disabled: false },
  { title: "all", value: "all", disabled: false },
];

export const options = ["7", "10", "20", "30", "40", "50", "100"];

const columns: Column[] = [
  {
    key: "name",
    title: "Name",
    sortable: true,
  },
  {
    key: "cardsCount",
    title: "Cards",
    sortable: true,
  },
  {
    key: "updated",
    title: "Last Updated",
    sortable: true,
  },
  {
    key: "createdBy",
    title: "Created by",
    sortable: true,
  },
  {
    key: "play",
    title: "",
    sortable: false,
  },
];

export const Decks = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const itemsPerPage = useAppSelector((state) => state.deckSlice.itemsPerPage);
  const currentPage = useAppSelector((state) => state.deckSlice.currentPage);
  const ranger = useAppSelector((state) => state.deckSlice.ranger);
  const sliderValues = useAppSelector((state) => state.deckSlice.sliderValues);
  const searchByName = useAppSelector((state) => state.deckSlice.searchByName);
  const sort = useAppSelector((state) => state.deckSlice.sort);
  const activeTab = useAppSelector((state) => state.deckSlice.activeTab);
  const [deleteDeck, { isLoading: isDeleteLoading }] = useDeleteDeckMutation();
  const debounceValue = useDebounce(searchByName, 1000);
  const debounceOfRangerValue = useDebounce(sliderValues, 500);
  const [value1, value2] = debounceOfRangerValue[0];
  const handleReset = () => {
    setSliderValues([0, 100]);
  };
  const setSort = (sort: Sort) => {
    dispatch(deckSlice.actions.setSort(sort));
  };
  const setValueCommit = (value: number[]) => {
    dispatch(deckSlice.actions.setValueCommit(value));
  };
  const setSliderValues = (values: number[]) =>
    dispatch(deckSlice.actions.setSliderValues(values));
  const setSearch = (search: string) =>
    dispatch(deckSlice.actions.setSearchByName(search));

  const setActiveTab = (tabValue: string) =>
    dispatch(deckSlice.actions.setActiveTab(tabValue));
  const sortedString = useMemo(() => {
    if (!sort) return null;

    return `${sort.key}-${sort.direction}`;
  }, [sort]);
  const { isLoading: isMeLoading, data: myData } = useGetMeQuery();

  const authorId = activeTab === "my" ? myData.id : undefined;

  const { isLoading, currentData: data } = useGetDecksQuery({
    itemsPerPage: Number(itemsPerPage),
    currentPage,
    name: debounceValue[0],
    orderBy: sortedString,
    authorId,
    minCardsCount: value1,
    maxCardsCount: value2,
  });

  const [createDeck, { isLoading: isCreateDeckLoading }] =
    useCreateDeckMutation();
  const setUserId = (id: string) => {
    dispatch(deckSlice.actions.setUserId(id));
  };
  const handleUserDeckClick = (userId: string) => {
    navigate(`/cards/${userId}`);
  };
  const setItemsPerPage = (itemsPerPage: string) =>
    dispatch(deckSlice.actions.setItemsPerPage(itemsPerPage));
  const setCurrentPage = (currentPage: number) =>
    dispatch(deckSlice.actions.setCurrentPage(currentPage));
  const handlePerPageChange = (newValue: string) => {
    setItemsPerPage(newValue);
  };
  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };
  const handleLearnCards = (id: string) => {
    navigate(`/learn/${id}`);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <Header userName={"ivan"}></Header>

      <div className={s.decksContainer}>
        <div className={s.titleAndButton}>
          <Typography variant={"large"}>Pack list</Typography>
          <CreateDeck />
        </div>
        <div className={s.settingsContainer}>
          <TextField
            type={"search"}
            placeholder={"   Search"}
            onChange={(e) => setSearch(e.currentTarget.value)}
            value={searchByName}
          />

          <Tab value={activeTab} tabs={tabs} onValueChange={setActiveTab}></Tab>

          <div>
            <Ranger
              values={sliderValues}
              onChange={setSliderValues}
              onValueCommit={setValueCommit}
            ></Ranger>
          </div>

          <Button variant={"secondary"} onClick={handleReset}>
            Clear filter
          </Button>
        </div>

        <Table>
          <SortedHeaderDecks columns={columns} sort={sort} onSort={setSort} />
          <TableBody>
            {data?.items.map((deck) => {
              return (
                <TableRow key={deck.id}>
                  <TableCell onClick={() => handleUserDeckClick(deck.id)}>
                    <img src={deck.cover} style={{ height: "60px" }} />
                    {deck.name}
                  </TableCell>
                  <TableCell>{deck.cardsCount}</TableCell>
                  <TableCell>
                    {new Date(deck.updated).toLocaleString("en-GB")}
                  </TableCell>
                  <TableCell>{deck.author.name}</TableCell>
                  <TableCell>
                    {activeTab === "my" ? (
                      <span className={s.buttonsContainer}>
                        <Button
                          variant={"link2"}
                          onClick={() => handleLearnCards(deck.id)}
                        >
                          <LearnIcon />
                        </Button>
                        <Button
                          variant={"link2"}
                          onClick={() => {
                            <CreateDeck />;
                          }}
                        >
                          <PenIcon />
                        </Button>
                        <Button
                          variant={"link2"}
                          disabled={isDeleteLoading}
                          onClick={() => {
                            deleteDeck({ id: deck.id });
                          }}
                        >
                          <DeleteIcon />
                        </Button>
                      </span>
                    ) : (
                      <Button variant={"link2"}>
                        <LearnIcon />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <Pagination
          count={100}
          page={currentPage}
          onChange={handleChangePage}
          siblings={3}
          perPage={itemsPerPage}
          perPageOptions={options}
          onPerPageChange={handlePerPageChange}
        ></Pagination>
      </div>
    </>
  );
};
