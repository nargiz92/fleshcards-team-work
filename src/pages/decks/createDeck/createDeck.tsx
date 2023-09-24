import { useState } from "react";

import { Button, Modal, TextField, UniversalCheckbox } from "@/components";
import { FileInput } from "@/components/ui/file-input";
import s from "@/pages/decks/decks.module.scss";
import { useCreateDeckMutation } from "@/services/decks";
import { deckSlice } from "@/services/decks/deck-slice";
import { useAppDispatch, useAppSelector } from "@/services/store";

export const CreateDeck = () => {
  const dispatch = useAppDispatch();
  const isPrivates = useAppSelector((state) => state.deckSlice.isPrivates);
  const decksName = useAppSelector((state) => state.deckSlice.decksName);

  const [isOpen, setIsOpen] = useState(false);
  // const [cardName, setCardName] = useState("");
  const setPhoto = (cover: string[]) =>
    dispatch(deckSlice.actions.setPhoto(cover));
  const setDecksName = (name: string) => {
    dispatch(deckSlice.actions.setDecksName(name));
  };
  const [createDeck, { isLoading: isCreateDeckLoading, isError }] =
    useCreateDeckMutation();
  const isCover = useAppSelector((state) => state.deckSlice.isCover);
  const setPrivates = (isPrivates: boolean) =>
    dispatch(deckSlice.actions.setPrivate(isPrivates));
  const handleCreateDeckClick = () => {
    createDeck({ name: decksName, isPrivate: isPrivates, cover: isCover })
      .unwrap()
      .catch((err) => {
        console.log(err);
        alert(err?.data?.errorMessages[0].message);
      });
    setDecksName("");
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Create Deck</Button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Add New Pack"
        showCloseButton={true}
        className={s.modalContainer}
      >
        <div className={s.fileInputContainer}>
          <FileInput
            savePhoto={setPhoto}
            photo={isCover}
            isFullWidth={true}
          ></FileInput>
        </div>
        <div className={s.textFieldContainer}>
          <TextField
            onChange={(e) => setDecksName(e.currentTarget.value)}
            value={decksName}
            label={"Name Pack"}
            disabled={isError}
          />
        </div>
        <div>
          <UniversalCheckbox
            checked={isPrivates}
            onValueChange={setPrivates}
            label={"Private pack"}
          ></UniversalCheckbox>
        </div>

        <div className={s.buttonContainer}>
          <Button onClick={() => setIsOpen(false)} variant={"secondary"}>
            Cansel
          </Button>
          <Button onClick={handleCreateDeckClick}>Add New Pack</Button>
        </div>
      </Modal>
    </>
  );
};
